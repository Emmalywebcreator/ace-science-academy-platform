"use client";

import { subjects, SUBJECT_IDS } from "@/lib/pricing";
import {
  Calculator,
  Atom,
  FlaskConical,
  Star,
  CheckCircle,
} from "lucide-react";

type SubjectSelectionProps = {
  selectedSubjects: string[];
  setSelectedSubjects: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function SubjectSelection({
  selectedSubjects,
  setSelectedSubjects,
}: SubjectSelectionProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {subjects.map((subject) => {
        const Icon = subject.icon;

        return (
          <div
            key={subject.id}
            onClick={() => {
                if (subject.id === SUBJECT_IDS.BUNDLE) {
                  if (selectedSubjects.includes(SUBJECT_IDS.BUNDLE)) {
                    setSelectedSubjects([]);
                  } else {
                    setSelectedSubjects([SUBJECT_IDS.BUNDLE]);
                  }
                  return;
                }

            setSelectedSubjects((prev) => {
              const withoutBundle = prev.filter(
                (item) => item !== SUBJECT_IDS.BUNDLE
              );

              if (withoutBundle.includes(subject.id)) {
                return withoutBundle.filter(
                  (item) => item !== subject.id
                );
              }
              return [...withoutBundle, subject.id];
            })
          }}
            className={`relative cursor-pointer rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
            selectedSubjects.includes(subject.id)
              ? "border-green-600 bg-green-50"
              : subject.recommended
              ? "border-blue-700 bg-blue-50"
              : "border-slate-200 bg-white"
          }`}
          >
            {subject.recommended && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold">
                RECOMMENDED
              </span>
            )}

            {selectedSubjects.includes(subject.id) && (
            <CheckCircle className="absolute right-4 top-4 h-6 w-6 text-green-600" />
          )}

            <div className="mb-4 flex items-center gap-3">
              <Icon className="h-8 w-8 text-blue-700" />

              <h3 className="text-xl font-bold text-slate-900">
                {subject.title}
              </h3>
            </div>

            <p className="mt-2 text-2xl font-bold text-blue-700">
                ₦{subject.price.toLocaleString()}            </p>

            {subject.save && (
              <p className="mt-2 text-sm font-semibold text-green-600">
                Save ₦{subject.save.toLocaleString()}             
             </p>
            )}
          </div>
        );
      })}
    </div>
  );
}