import React from 'react';
import { Card } from '../components/ui/Card';
import { useTranslation } from 'react-i18next';
import standingsData from '../data/standings.json';

export function Standings() {
  const { t } = useTranslation();
  return (
    <div className="animate-fade-in py-12 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">{t('standings.season')} <span className="text-brand-magenta">{t('standings.season_year')}</span></h1>
      <p className="text-xl text-gray-600 mb-12">{t('standings.subtitle')}</p>

      <Card className="overflow-hidden border border-gray-100 shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-sm uppercase tracking-wider text-gray-500">
                <th className="p-6 font-semibold text-center w-16">{t('standings.col_rank')}</th>
                <th className="p-6 font-semibold">{t('standings.col_club')}</th>
                <th className="p-6 font-semibold text-center">{t('standings.col_games')}</th>
                <th className="p-6 font-semibold text-center hidden md:table-cell">{t('standings.col_won')}</th>
                <th className="p-6 font-semibold text-center hidden md:table-cell">{t('standings.col_lost')}</th>
                <th className="p-6 font-bold text-center text-brand-dark">{t('standings.col_points')}</th>
              </tr>
            </thead>
            <tbody>
              {standingsData.map((row) => (
                <tr key={row.rank} className="border-b border-gray-50 hover:bg-gray-50 transition-colors bg-white">
                  <td className="p-6 text-center font-bold text-2xl text-gray-400">
                    {row.rank === 1 ? '🥇' : row.rank === 2 ? '🥈' : row.rank === 3 ? '🥉' : row.rank}
                  </td>
                  <td className="p-6 font-bold text-xl text-brand-dark">{row.team}</td>
                  <td className="p-6 text-center text-gray-600 text-lg">{row.played}</td>
                  <td className="p-6 text-center text-green-600 hidden md:table-cell text-lg">{row.won}</td>
                  <td className="p-6 text-center text-red-500 hidden md:table-cell text-lg">{row.lost}</td>
                  <td className="p-6 text-center font-black text-2xl text-brand-magenta">{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
