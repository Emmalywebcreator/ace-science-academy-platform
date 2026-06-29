import { subjects } from "@/constants/subjects";
import { CheckCircle } from "lucide-react";

export default function Subjects() {
  return (
    <section
      id="subjects"
      className="bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Subjects Offered
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Master the core science subjects with an exam-focused approach.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {subjects.map((subject) => {
            const Icon = subject.icon;

            return (
              <div
                key={subject.title}
                className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    size={40}
                    className="text-blue-700"
                  />

                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                    {subject.badge}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-blue-900">
                  {subject.title}
                </h3>

                <ul className="mt-6 space-y-3">
                  {subject.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle
                        size={18}
                        className="text-green-600"
                      />

                      {topic}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center justify-between border-t pt-6">
                  <span className="text-slate-600">
                    Per Subject
                  </span>

                  <span className="text-2xl font-bold text-blue-900">
                    {subject.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}