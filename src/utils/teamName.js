export function getLocalizedName(entry, lang, prefix = 'team') {
  const key = lang === 'ru' ? `${prefix}Ru` : lang === 'el' ? `${prefix}Gr` : prefix;
  return entry[key] || entry[prefix];
}
