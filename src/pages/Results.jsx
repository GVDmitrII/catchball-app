import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { useTranslation } from 'react-i18next';
import matchResults from '../data/matchResults.json';
import { getLocalizedName } from '../utils/teamName';

function TeamCard({ team }) {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [openVideo, setOpenVideo] = useState(null);
  const displayName = getLocalizedName(team, i18n.language);

  return (
    <Card className="border border-gray-100 shadow-sm">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-12 h-12 shrink-0 rounded-full bg-brand-magenta text-white flex items-center justify-center font-bold text-lg">
            {team.team.split(' ').map((w) => w[0]).slice(0, 2).join('')}
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-brand-dark truncate">{displayName}</h3>
            {displayName !== team.team && (
              <p className="text-sm text-gray-500 truncate">{team.team}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-6 shrink-0">
          <div className="text-center">
            <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold">{t('results.match_points')}</div>
            <div className="text-xl font-black text-brand-magenta">{team.matchPoints}</div>
          </div>
          <div className="text-center hidden sm:block">
            <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold">{t('results.total_points')}</div>
            <div className="text-xl font-black text-brand-dark">{team.totalPoints}</div>
          </div>
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="text-gray-400" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="overflow-x-auto border-t border-gray-100">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500">
                    <th className="p-4 font-semibold">{t('results.date')}</th>
                    <th className="p-4 font-semibold text-center">{t('results.sets_won')}</th>
                    <th className="p-4 font-semibold text-center">{t('results.set')} 1</th>
                    <th className="p-4 font-semibold text-center">{t('results.set')} 2</th>
                    <th className="p-4 font-semibold text-center">{t('results.set')} 3</th>
                    <th className="p-4 font-semibold text-center">{t('results.win')}</th>
                    <th className="p-4 font-semibold text-center">{t('results.set_points')}</th>
                    <th className="p-4 font-semibold text-center">{t('results.total_points')}</th>
                  </tr>
                </thead>
                <tbody>
                  {team.matches.map((m, i) => (
                    <React.Fragment key={i}>
                      <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors bg-white">
                        <td className="p-4 text-brand-dark font-medium">
                          {m.date}
                          {m.note === 'F.P' && (
                            <span className="ml-2 inline-block text-[10px] font-bold uppercase tracking-wide bg-brand-gold/20 text-brand-gold px-2 py-0.5 rounded-full align-middle">
                              {t('results.forfeit')}
                            </span>
                          )}
                          {m.videoUrl && (
                            <button
                              onClick={(e) => { e.stopPropagation(); setOpenVideo(openVideo === i ? null : i); }}
                              className="ml-2 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-brand-magenta hover:underline align-middle"
                            >
                              <Play size={11} fill="currentColor" /> {t('results.watch_video')}
                            </button>
                          )}
                        </td>
                        <td className="p-4 text-center font-semibold">{m.setsWon}</td>
                        <td className="p-4 text-center text-gray-600">{m.set1}</td>
                        <td className="p-4 text-center text-gray-600">{m.set2}</td>
                        <td className="p-4 text-center text-gray-600">{m.set3}</td>
                        <td className="p-4 text-center">
                          {m.win ? (
                            <span className="text-green-600 font-bold">✓</span>
                          ) : (
                            <span className="text-red-400 font-bold">✕</span>
                          )}
                        </td>
                        <td className="p-4 text-center font-semibold">{m.setPoints}</td>
                        <td className="p-4 text-center font-black text-brand-magenta">{m.totalPoints}</td>
                      </tr>
                      {m.videoUrl && openVideo === i && (
                        <tr className="bg-gray-50">
                          <td colSpan={8} className="p-4">
                            <div className="aspect-video w-full max-w-xl mx-auto rounded-lg overflow-hidden shadow-md">
                              <iframe
                                src={m.videoUrl}
                                title={t('results.watch_video')}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}

export function Results() {
  const { t } = useTranslation();
  const [round, setRound] = useState('roundA');

  const rounds = [
    { key: 'roundA', label: t('results.round1') },
    { key: 'roundB', label: t('results.round2') },
  ];

  return (
    <div className="animate-fade-in py-12 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">{t('results.title')}</h1>

      <div className="flex gap-2 mb-10 bg-gray-100 rounded-xl p-1 w-fit">
        {rounds.map((r) => (
          <button
            key={r.key}
            onClick={() => setRound(r.key)}
            className={`px-6 py-3 rounded-lg font-bold text-sm transition-colors ${
              round === r.key
                ? 'bg-brand-magenta text-white shadow-md'
                : 'text-brand-dark hover:bg-gray-200'
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {matchResults[round].map((team) => (
          <TeamCard key={team.team} team={team} />
        ))}
      </div>
    </div>
  );
}
