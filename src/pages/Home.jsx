import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ArrowRight, Search, Calendar, Info, Users, Trophy, Heart, Activity, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import clubsData from '../data/clubs.json';
import standingsData from '../data/standings.json';

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in pb-20">

      {/* 1. HERO SECTION */}
      <section className="relative bg-brand-dark text-white min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-brand-navy opacity-90 z-0 flex items-center justify-center">
            <div className="text-[15rem] font-black text-white/5 select-none text-center">C&S</div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-[-5vh]">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-brand-magenta/20 text-brand-magenta font-bold text-sm tracking-wider mb-6 uppercase">
              {t('hero.badge')}
            </span>
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
          >
            {t('hero.title_line1')} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-brand-magenta">
              {t('hero.title_line2')}
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/clubs"><Button size="lg" className="w-full sm:w-auto shadow-brand text-lg">{t('hero.btn_join')} <ArrowRight className="ml-2 w-5 h-5"/></Button></Link>
            <Link to="/events"><Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-brand-dark text-lg">{t('hero.btn_training')}</Button></Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[50px] sm:h-[100px] w-[calc(100%+1.3px)] text-white fill-current">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.83,121.72,201.2,112.55,248.9,106.33,285.64,80.7,321.39,56.44Z"></path>
            </svg>
        </div>
      </section>

      {/* 2. QUICK ENTRY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-20 relative z-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/clubs">
            <Card hoverable className="p-8 flex flex-col items-center text-center group cursor-pointer border-t-4 border-t-brand-magenta h-full">
              <div className="w-16 h-16 bg-fuchsia-50 text-brand-magenta rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Search size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand-dark">{t('quick_entry.find_club')}</h3>
              <p className="text-gray-500">{t('quick_entry.find_club_desc')}</p>
            </Card>
          </Link>
          <Link to="/events">
            <Card hoverable className="p-8 flex flex-col items-center text-center group cursor-pointer border-t-4 border-t-brand-dark h-full">
              <div className="w-16 h-16 bg-sky-50 text-brand-dark rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Calendar size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand-dark">{t('quick_entry.schedule')}</h3>
              <p className="text-gray-500">{t('quick_entry.schedule_desc')}</p>
            </Card>
          </Link>
          <Link to="/rules">
            <Card hoverable className="p-8 flex flex-col items-center text-center group cursor-pointer border-t-4 border-t-brand-sky h-full">
              <div className="w-16 h-16 bg-fuchsia-50 text-brand-sky rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Info size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand-dark">{t('quick_entry.what_is_it')}</h3>
              <p className="text-gray-500">{t('quick_entry.what_is_it_desc')}</p>
            </Card>
          </Link>
        </div>
      </section>

      {/* 3. THE GAME */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">{t('the_game.title_target')}<span className="text-brand-magenta">{t('the_game.title_accent')}</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('the_game.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="p-6 text-center">
              <Activity className="w-12 h-12 text-brand-magenta mx-auto mb-4" />
              <h4 className="font-bold text-lg text-brand-dark mb-2">{t('the_game.catch_title')}</h4>
              <p className="text-sm text-gray-600">{t('the_game.catch_desc')}</p>
            </Card>
            <Card className="p-6 text-center">
              <CheckCircle2 className="w-12 h-12 text-brand-magenta mx-auto mb-4" />
              <h4 className="font-bold text-lg text-brand-dark mb-2">{t('the_game.touch_title')}</h4>
              <p className="text-sm text-gray-600">{t('the_game.touch_desc')}</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-brand-magenta mx-auto mb-4" />
              <h4 className="font-bold text-lg text-brand-dark mb-2">{t('the_game.dynamic_title')}</h4>
              <p className="text-sm text-gray-600">{t('the_game.dynamic_desc')}</p>
            </Card>
            <Card className="p-6 text-center">
              <Heart className="w-12 h-12 text-brand-magenta mx-auto mb-4" />
              <h4 className="font-bold text-lg text-brand-dark mb-2">{t('the_game.access_title')}</h4>
              <p className="text-sm text-gray-600">{t('the_game.access_desc')}</p>
            </Card>
            <Card className="p-6 text-center">
              <Trophy className="w-12 h-12 text-brand-magenta mx-auto mb-4" />
              <h4 className="font-bold text-lg text-brand-dark mb-2">{t('the_game.social_title')}</h4>
              <p className="text-sm text-gray-600">{t('the_game.social_desc')}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. CLUBS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">{t('clubs_section.title_target')}<span className="text-brand-magenta">{t('clubs_section.title_accent')}</span></h2>
            <p className="text-xl text-gray-600">{t('clubs_section.subtitle')}</p>
          </div>
          <Link to="/clubs" className="hidden md:inline-flex text-brand-magenta font-bold hover:underline items-center text-lg mt-4">
            {t('clubs_section.view_all')} <ArrowRight className="w-5 h-5 ml-1"/>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Nicosia */}
          <Card hoverable className="col-span-1 md:col-span-3 flex flex-col md:flex-row overflow-hidden group min-h-[220px]">
            <div className="md:w-2/5 min-h-[200px] md:min-h-full bg-sky-100 flex items-center justify-center text-brand-dark text-6xl font-black bg-[url('https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
              N
            </div>
            <div className="p-8 flex flex-col justify-center bg-white flex-1">
              <h3 className="text-3xl font-bold text-brand-dark mb-1">{clubsData[0].name}</h3>
              <p className="text-brand-magenta font-bold mb-4">{clubsData[0].city}</p>
              <div className="text-sm text-gray-600 space-y-2 mb-6">
                <p><strong>{t('clubs_section.coach')}</strong> {clubsData[0].coach}</p>
                <p><strong>{t('clubs_section.schedule')}</strong> {clubsData[0].schedule}</p>
              </div>
              <div className="mt-auto">
                <a href={`https://wa.me/${clubsData[0].whatsapp.replace('+','')}?text=Hello`} target="_blank" rel="noreferrer">
                  <Button size="sm" className="w-full">{t('clubs_section.join_whatsapp')}</Button>
                </a>
              </div>
            </div>
          </Card>

          {/* Limassol */}
          <Card hoverable className="col-span-1 md:col-span-3 flex flex-col md:flex-row overflow-hidden group min-h-[220px]">
             <div className="md:w-2/5 min-h-[200px] md:min-h-full bg-pink-100 flex items-center justify-center text-brand-magenta text-6xl font-black bg-[url('https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2007&auto=format&fit=crop')] bg-cover bg-center">
              L
            </div>
            <div className="p-8 flex flex-col justify-center bg-white flex-1">
              <h3 className="text-3xl font-bold text-brand-dark mb-1">{clubsData[1].name}</h3>
              <p className="text-brand-magenta font-bold mb-4">{clubsData[1].city}</p>
              <div className="text-sm text-gray-600 space-y-2 mb-6">
                <p><strong>{t('clubs_section.coach')}</strong> {clubsData[1].coach}</p>
                <p><strong>{t('clubs_section.schedule')}</strong> {clubsData[1].schedule}</p>
              </div>
              <div className="mt-auto">
                <a href={`https://wa.me/${clubsData[1].whatsapp.replace('+','')}?text=Hello`} target="_blank" rel="noreferrer">
                  <Button size="sm" variant="secondary" className="w-full">{t('clubs_section.join_whatsapp')}</Button>
                </a>
              </div>
            </div>
          </Card>

          {/* Larnaca, Paphos, Famagusta */}
          {clubsData.slice(2).map((club, i) => (
             <Card key={club.id} hoverable className="col-span-1 md:col-span-2 overflow-hidden flex flex-col">
              <div className="h-40 bg-gray-100 flex items-center justify-center text-brand-dark text-6xl font-black opacity-40">
                {club.city[0]}
              </div>
              <div className="p-6 flex flex-col flex-1 bg-white">
                <h3 className="text-xl font-bold text-brand-dark mb-1">{club.name}</h3>
                <p className="text-brand-magenta font-semibold mb-3 text-sm">{club.city}</p>
                <div className="text-sm text-gray-600 space-y-1 mb-4 flex-grow">
                  <p><strong>{t('clubs_section.coach')}</strong> <br/>{club.coach}</p>
                </div>
                <div className="mt-auto">
                  <Link to="/clubs"><Button variant="outline" size="sm" className="w-full border-gray-300">{t('clubs_section.learn_more')}</Button></Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/clubs" className="text-brand-magenta font-bold text-lg inline-flex items-center">
            {t('clubs_section.view_all')} <ArrowRight className="w-5 h-5 ml-1"/>
          </Link>
        </div>
      </section>

      {/* 5. STANDINGS */}
      <section className="bg-brand-dark text-white py-24 px-4 m-4 md:m-8 rounded-section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
             <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">{t('standings.season')} <span className="text-brand-magenta">{t('standings.season_year')}</span></h2>
             <p className="text-xl text-gray-400">{t('standings.subtitle')}</p>
          </div>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm shadow-2xl p-0 overflow-hidden text-white border-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-sm uppercase tracking-wider text-gray-300">
                    <th className="p-6 font-semibold text-center w-16">{t('standings.col_rank')}</th>
                    <th className="p-6 font-semibold">{t('standings.col_club')}</th>
                    <th className="p-6 font-semibold text-center hidden sm:table-cell">{t('standings.col_games')}</th>
                    <th className="p-6 font-semibold text-center text-brand-sky">{t('standings.col_points')}</th>
                  </tr>
                </thead>
                <tbody>
                  {standingsData.slice(0, 3).map((row, idx) => (
                    <tr key={row.rank} className="border-b border-white/5 hover:bg-white/10 transition-colors">
                      <td className="p-6 text-center font-bold text-2xl">
                        {idx === 0 ? <span className="text-yellow-400">🥇</span> :
                         idx === 1 ? <span className="text-gray-300">🥈</span> :
                         <span className="text-amber-600">🥉</span>}
                      </td>
                      <td className="p-6 font-bold text-xl">{row.team}</td>
                      <td className="p-6 text-center text-gray-400 hidden sm:table-cell text-lg">{row.played}</td>
                      <td className="p-6 text-center font-black text-2xl text-brand-magenta">{row.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 text-center bg-white/5 border-t border-white/10 mt-auto">
              <Link to="/standings" className="text-brand-sky font-bold hover:text-white transition-colors text-lg">{t('standings.view_full')}</Link>
            </div>
          </Card>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-24 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 tracking-tight">{t('bottom_cta.title')}</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">{t('bottom_cta.subtitle')}</p>
        <Link to="/clubs">
          <Button size="lg" className="shadow-brand text-xl px-12 py-5 rounded-btn-lg">
             {t('bottom_cta.btn')}
          </Button>
        </Link>
      </section>
    </div>
  );
}
