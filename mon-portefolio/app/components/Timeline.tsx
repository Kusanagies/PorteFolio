import { timeline } from "@/app/data";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Timeline() {
  return (
    <section id="parcours" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Mon Parcours</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {timeline.map((item, index) => (
            <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Icone au milieu */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-hover:bg-blue-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                {item.type === 'education' ? <GraduationCap size={20} className="text-blue-600"/> : <Briefcase size={20} className="text-emerald-600"/>}
              </div>
              
              {/* Carte contenu */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">{item.role}</div>
                  <time className="font-caveat font-medium text-blue-600 text-sm">{item.period}</time>
                </div>
                <div className="text-slate-500 text-sm font-semibold mb-2">{item.company}</div>
                <ul className="text-slate-600 text-sm list-disc pl-4 space-y-1">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}