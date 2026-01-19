
import React, { useState, useEffect } from 'react';
import { TEXTBOOKS, NIE_GUIDES, CURRICULUM } from './constants';
import { generateLessonPlan } from './geminiService';
import { LessonPlan, Lesson, SubUnit } from './types';

const App: React.FC = () => {
  const [grade, setGrade] = useState<string>("6");
  const [term, setTerm] = useState<number>(1);
  const [selectedLesson, setSelectedLesson] = useState<string>("");
  const [selectedSubUnit, setSelectedSubUnit] = useState<string>("");
  const [selectedPeriod, setSelectedPeriod] = useState<number>(1);
  
  const [availableLessons, setAvailableLessons] = useState<Lesson[]>([]);
  const [availableSubUnits, setAvailableSubUnits] = useState<SubUnit[]>([]);
  const [periodCount, setPeriodCount] = useState<number>(1);
  
  const [loading, setLoading] = useState<boolean>(false);
  const [lessonPlan, setLessonPlan] = useState<LessonPlan | null>(null);

  useEffect(() => {
    const cur = CURRICULUM.find(c => c.grade === grade);
    if (cur) {
      const termLessons = cur.lessons.filter(l => l.term === term);
      setAvailableLessons(termLessons);
      setSelectedLesson("");
      setSelectedSubUnit("");
      setAvailableSubUnits([]);
      setPeriodCount(1);
    }
  }, [grade, term]);

  useEffect(() => {
    const lesson = availableLessons.find(l => l.name === selectedLesson);
    if (lesson) {
      setAvailableSubUnits(lesson.subUnits);
      setPeriodCount(lesson.periods);
      setSelectedSubUnit("");
      setSelectedPeriod(1);
    }
  }, [selectedLesson, availableLessons]);

  const handleGenerate = async () => {
    if (!selectedLesson || !selectedSubUnit) {
      alert("தயவுசெய்து விபரங்களைத் தேர்ந்தெடுக்கவும்.");
      return;
    }
    setLoading(true);
    setLessonPlan(null);
    try {
      const plan = await generateLessonPlan(
        grade, 
        selectedLesson, 
        selectedSubUnit, 
        selectedPeriod, 
        periodCount
      );
      setLessonPlan({ 
        ...plan, 
        term: term === 1 ? 'முதலாந் தவணை' : term === 2 ? 'இரண்டாந் தவணை' : 'மூன்றாந் தவணை' 
      });
    } catch (error) {
      console.error("Error generating plan:", error);
      alert("பாடத் திட்டத்தை உருவாக்குவதில் சிக்கல் ஏற்பட்டது. மீண்டும் முயற்சிக்கவும்.");
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const totalPeriodsSummary = availableLessons.reduce((acc, curr) => acc + curr.periods, 0);

  return (
    <div className="min-h-screen p-4 md:p-8 bg-[#f8fafc] print:bg-white print:p-0">
      <header className="max-w-4xl mx-auto mb-8 text-center no-print">
        <h1 className="text-3xl md:text-4xl font-black text-indigo-900 mb-2">SL Math Lesson AI</h1>
        <div className="flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-indigo-200"></span>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">40 நிமிட பாடவேளைத் திட்டம்</p>
          <span className="h-px w-8 bg-indigo-200"></span>
        </div>
      </header>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 no-print">
        <div className="bg-white border-b-4 border-indigo-600 rounded-2xl p-6 shadow-sm flex justify-between items-center transition-transform hover:scale-[1.01]">
          <div>
            <p className="text-slate-400 text-xs font-black uppercase mb-1">அலகுகள்</p>
            <h2 className="text-3xl font-black text-indigo-900">{availableLessons.length}</h2>
          </div>
          <div className="bg-indigo-50 p-3 rounded-2xl text-indigo-600">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
          </div>
        </div>
        <div className="bg-white border-b-4 border-emerald-600 rounded-2xl p-6 shadow-sm flex justify-between items-center transition-transform hover:scale-[1.01]">
          <div>
            <p className="text-slate-400 text-xs font-black uppercase mb-1">மொத்த பாடவேளைகள்</p>
            <h2 className="text-3xl font-black text-emerald-900">{totalPeriodsSummary}</h2>
          </div>
          <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-600">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
        </div>
      </div>

      <section className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm p-8 mb-8 no-print border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-tighter ml-1">தரம்</label>
            <select value={grade} onChange={(e) => setGrade(e.target.value)} className="w-full p-4 rounded-2xl border-2 border-slate-100 focus:border-indigo-500 outline-none transition bg-slate-50 font-bold text-slate-700 shadow-sm">
              {CURRICULUM.map(c => <option key={c.grade} value={c.grade}>தரம் {c.grade}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-tighter ml-1">தவணை</label>
            <select value={term} onChange={(e) => setTerm(parseInt(e.target.value))} className="w-full p-4 rounded-2xl border-2 border-slate-100 focus:border-indigo-500 outline-none transition bg-slate-50 font-bold text-slate-700 shadow-sm">
              <option value={1}>முதலாந் தவணை</option>
              <option value={2}>இரண்டாந் தவணை</option>
              <option value={3}>மூன்றாந் தவணை</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-tighter ml-1">பாடம்</label>
            <select value={selectedLesson} onChange={(e) => setSelectedLesson(e.target.value)} className="w-full p-4 rounded-2xl border-2 border-slate-100 focus:border-indigo-500 outline-none transition disabled:bg-slate-100 font-bold text-slate-700 shadow-sm" disabled={!availableLessons.length}>
              <option value="">-- தெரிவு --</option>
              {availableLessons.map(l => <option key={l.id} value={l.name}>{l.name} ({l.periods})</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-tighter ml-1">உப அலகு</label>
            <select value={selectedSubUnit} onChange={(e) => setSelectedSubUnit(e.target.value)} className="w-full p-4 rounded-2xl border-2 border-slate-100 focus:border-indigo-500 outline-none transition disabled:bg-slate-100 font-bold text-slate-700 shadow-sm" disabled={!availableSubUnits.length}>
              <option value="">-- தெரிவு --</option>
              {availableSubUnits.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-tighter ml-1">பாடவேளை</label>
            <select value={selectedPeriod} onChange={(e) => setSelectedPeriod(parseInt(e.target.value))} className="w-full p-4 rounded-2xl border-2 border-slate-100 focus:border-indigo-500 outline-none transition disabled:bg-slate-100 font-bold text-slate-700 shadow-sm" disabled={periodCount <= 1}>
              {Array.from({ length: periodCount }, (_, i) => (
                <option key={i + 1} value={i + 1}>பாடவேளை {i + 1} / {periodCount}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-100 pt-8">
          <div className="flex flex-wrap gap-4">
             <a href={NIE_GUIDES.find(n => n.grade === grade)?.url} target="_blank" rel="noreferrer" className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-xs font-black hover:bg-indigo-100 transition">
                NIE வழிகாட்டி
             </a>
             {TEXTBOOKS.find(t => t.grade === grade)?.parts.map((p, idx) => (
               <a key={idx} href={p.url} target="_blank" rel="noreferrer" className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-black hover:bg-slate-200 transition">
                 {p.title}
               </a>
             ))}
          </div>
          <button 
            onClick={handleGenerate}
            disabled={loading || !selectedSubUnit}
            className={`w-full md:w-auto px-12 py-4 rounded-2xl font-black text-white shadow-xl transition-all ${loading || !selectedSubUnit ? 'bg-slate-300' : 'bg-indigo-600 hover:bg-indigo-700 active:scale-95'}`}
          >
            {loading ? 'தயார் செய்யப்படுகிறது...' : 'பாடத் திட்டம் உருவாக்கு'}
          </button>
        </div>
      </section>

      {loading && (
        <div className="max-w-xl mx-auto text-center py-20 no-print">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent mb-4"></div>
          <p className="text-slate-500 font-bold">AI பாடத்திட்டத்தை உருவாக்கிக் கொண்டிருக்கிறது...</p>
        </div>
      )}

      {lessonPlan && (
        <div className="max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none print:border-none print:m-0 print:w-full a4-container animate-in fade-in zoom-in-95 duration-500 overflow-hidden rounded-3xl print:rounded-none">
          <div className="p-8 md:p-12 print:p-6">
            <div className="flex justify-between items-start mb-8 pb-6 border-b-4 border-slate-900">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-2">கணித பாடத் திட்டம்</h2>
                <div className="flex gap-6 text-[11px] text-slate-500 font-black uppercase tracking-widest">
                  <span>தரம்: {lessonPlan.grade}</span>
                  <span>தவணை: {lessonPlan.term}</span>
                  <span className="text-indigo-600 font-black">பாடவேளை: {selectedPeriod} / {periodCount}</span>
                </div>
              </div>
              <button 
                onClick={handlePrint} 
                className="no-print bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-indigo-700 transition-all flex flex-col items-center gap-1 font-black text-sm shadow-xl active:scale-95 group"
              >
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 00-2 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  <span>அச்சுப்படுத்து / PDF சேமி</span>
                </div>
                <span className="opacity-60 font-medium text-[10px] tracking-tight">(Print / Save as PDF)</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 print:gap-4 print:mb-6">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">அலகு (Unit)</p>
                <p className="text-lg font-black text-slate-900 leading-tight">{lessonPlan.topic}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">உப அலகு (Sub-unit)</p>
                <p className="text-lg font-black text-indigo-700 leading-tight">{lessonPlan.subUnit}</p>
              </div>
            </div>

            <div className="mb-10 print:mb-6">
              <h3 className="text-sm font-black text-slate-900 mb-4 uppercase tracking-widest border-l-4 border-slate-900 pl-4">கற்றல் பேறுகள் (Objectives)</h3>
              <ul className="space-y-2 ml-4">
                {lessonPlan.objectives.map((obj, i) => (
                  <li key={i} className="text-slate-800 font-bold flex gap-3 text-sm leading-snug">
                    <span className="text-indigo-500 mt-1 shrink-0">●</span> {obj}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10 print:space-y-8">
              {[
                { title: "1. அறிமுகம் (Introduction)", data: lessonPlan.introduction, color: "bg-amber-500" },
                { title: "2. முன்னளிப்பு (Presentation)", data: lessonPlan.presentation, color: "bg-blue-500", extra: lessonPlan.presentation.textbookRef },
                { title: "3. பயிற்சி (Practice)", data: lessonPlan.practice, color: "bg-emerald-500", exercises: lessonPlan.practice.exercises },
                { title: "4. வெளியீடு (Production)", data: lessonPlan.production, color: "bg-purple-500" },
                { title: "5. முடிவுரை (Conclusion)", data: lessonPlan.conclusion, color: "bg-slate-500" }
              ].map((step, i) => (
                <section key={i} className="relative break-inside-avoid">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest flex items-center gap-3">
                      <span className={`w-2 h-5 ${step.color} rounded-full shrink-0`}></span>
                      {step.title}
                    </h4>
                    <span className="text-[10px] font-black bg-slate-100 text-slate-500 px-3 py-1 rounded-lg print:border print:border-slate-200">{step.data.duration}</span>
                  </div>
                  <div className="pl-5 border-l-2 border-slate-100 ml-1">
                    <p className="text-slate-700 text-sm leading-relaxed font-medium mb-3 whitespace-pre-wrap">{step.data.content}</p>
                    {step.extra && (
                      <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100 text-indigo-700 text-[11px] font-black mb-2 print:bg-white print:border-slate-200">
                        பாடநூல் குறிப்பு: {step.extra}
                      </div>
                    )}
                    {step.exercises && step.exercises.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3 print:grid-cols-1">
                        {step.exercises.map((ex, j) => (
                          <div key={j} className="bg-emerald-50 p-2.5 rounded-lg border border-emerald-100 text-emerald-800 text-[11px] font-bold flex items-start gap-2 print:bg-white print:border-slate-200">
                             <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 shrink-0"></span> 
                             <span>{ex}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              ))}
            </div>

            <footer className="mt-16 pt-8 border-t-2 border-slate-100 text-center print:mt-10">
              <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.5em] print:text-slate-400">PAVEEN Mathematics Resource Center</p>
            </footer>
          </div>
        </div>
      )}

      {!lessonPlan && !loading && (
        <div className="max-w-xl mx-auto text-center py-24 no-print">
           <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
              <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h2 className="text-xl font-black text-slate-900 mb-4">புதிய பாடத் திட்டத்தைத் தொடங்கவும்</h2>
              <p className="text-slate-400 text-sm font-bold leading-relaxed">தரம் மற்றும் அலகைத் தேர்ந்தெடுத்த பின், "பாடத் திட்டம் உருவாக்கு" பொத்தானை அழுத்தவும்.</p>
           </div>
        </div>
      )}
    </div>
  );
};

export default App;
