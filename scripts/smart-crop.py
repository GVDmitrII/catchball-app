#!/usr/bin/env python3
"""Face-aware smart crop for news/team photos.

Detects faces with OpenCV's bundled Haar cascade, builds a padded bounding
box around them (extra room above for hair/hats, extra room below for
shoulders), and crops to a target aspect ratio centered on that region
instead of the image center. Falls back to a plain center-crop when no
faces are found.

Usage:
    python smart-crop.py <input> <output> --ratio 4:5
    python smart-crop.py <input> <output> --ratio 16:9 --quality 90
"""
import argparse
import json
import sys
from pathlib import Path

import cv2

CASCADE_PATH = cv2.data.haarcascades + "haarcascade_frontalface_default.xml"


def parse_ratio(ratio_str):
    w, h = ratio_str.split(":")
    return float(w) / float(h)


def detect_faces(gray):
    cascade = cv2.CascadeClassifier(CASCADE_PATH)
    if cascade.empty():
        raise RuntimeError(f"Could not load Haar cascade from {CASCADE_PATH}")
    faces = cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(40, 40))
    return [tuple(int(v) for v in f) for f in faces]


def padded_face_region(faces, img_w, img_h, pad_top=0.7, pad_bottom=1.5, pad_side=0.3):
    """Bounding box covering all faces, expanded for hair/hats and shoulders."""
    xs1 = [x for (x, y, w, h) in faces]
    ys1 = [y for (x, y, w, h) in faces]
    xs2 = [x + w for (x, y, w, h) in faces]
    ys2 = [y + h for (x, y, w, h) in faces]

    fx1, fy1, fx2, fy2 = min(xs1), min(ys1), max(xs2), max(ys2)
    face_w = fx2 - fx1
    face_h = fy2 - fy1

    rx1 = max(0, fx1 - face_w * pad_side)
    rx2 = min(img_w, fx2 + face_w * pad_side)
    ry1 = max(0, fy1 - face_h * pad_top)
    ry2 = min(img_h, fy2 + face_h * pad_bottom)
    return rx1, ry1, rx2, ry2


def max_fit_crop_size(img_w, img_h, target_ratio):
    """Largest box of target_ratio (w/h) that fits inside the image bounds."""
    candidate_h = img_w / target_ratio
    if candidate_h <= img_h:
        return img_w, candidate_h
    candidate_w = img_h * target_ratio
    return candidate_w, img_h


def smart_crop(input_path, output_path, target_ratio, quality=95,
                pad_top=0.7, pad_bottom=1.5, pad_side=0.3):
    img = cv2.imread(str(input_path))
    if img is None:
        raise ValueError(f"Could not read image: {input_path}")

    img_h, img_w = img.shape[:2]
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = detect_faces(gray)

    if faces:
        rx1, ry1, rx2, ry2 = padded_face_region(faces, img_w, img_h, pad_top, pad_bottom, pad_side)
        center_x = (rx1 + rx2) / 2
        center_y = (ry1 + ry2) / 2
        method = f"{len(faces)} face(s) detected"
    else:
        center_x, center_y = img_w / 2, img_h / 2
        method = "no faces detected — center-crop fallback"

    crop_w, crop_h = max_fit_crop_size(img_w, img_h, target_ratio)

    x1 = center_x - crop_w / 2
    y1 = center_y - crop_h / 2
    x1 = min(max(0, x1), img_w - crop_w)
    y1 = min(max(0, y1), img_h - crop_h)
    x2, y2 = x1 + crop_w, y1 + crop_h

    x1i, y1i, x2i, y2i = int(round(x1)), int(round(y1)), int(round(x2)), int(round(y2))
    cropped = img[y1i:y2i, x1i:x2i]

    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    cv2.imwrite(str(output_path), cropped, [cv2.IMWRITE_JPEG_QUALITY, quality])

    return {
        "input": str(input_path),
        "output": str(output_path),
        "source_size": [img_w, img_h],
        "output_size": [x2i - x1i, y2i - y1i],
        "faces_detected": len(faces),
        "face_boxes": faces,
        "crop_box": [x1i, y1i, x2i, y2i],
        "method": method,
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input", help="Path to source image")
    parser.add_argument("output", help="Path to write cropped image")
    parser.add_argument("--ratio", default="4:5", help="Target aspect ratio, e.g. 4:5 or 16:9")
    parser.add_argument("--quality", type=int, default=95, help="JPEG quality (0-100)")
    parser.add_argument("--pad-top", type=float, default=0.7, help="Padding above faces, x face height")
    parser.add_argument("--pad-bottom", type=float, default=1.5, help="Padding below faces, x face height")
    parser.add_argument("--pad-side", type=float, default=0.3, help="Padding left/right of faces, x face width")
    parser.add_argument("--json", action="store_true", help="Print result as JSON")
    args = parser.parse_args()

    target_ratio = parse_ratio(args.ratio)
    result = smart_crop(
        args.input, args.output, target_ratio, args.quality,
        args.pad_top, args.pad_bottom, args.pad_side,
    )

    if args.json:
        print(json.dumps(result))
    else:
        print(f"{result['method']} in {Path(args.input).name}")
        print(f"  source: {result['source_size'][0]}x{result['source_size'][1]}")
        print(f"  crop box: {result['crop_box']}")
        print(f"  output: {result['output']} ({result['output_size'][0]}x{result['output_size'][1]})")


if __name__ == "__main__":
    sys.exit(main())
