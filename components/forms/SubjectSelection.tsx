"use client";

import { useState } from "react";
import { subjects, SUBJECT_IDS } from "@/lib/pricing";
import {
  Calculator,
  Atom,
  FlaskConical,
  Star,
  CheckCircle,
} from "lucide-react";

export default function SubjectSelection() {
    const [selected, setSelected] = useState<string[]>([]);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {subjects.map((subject) => {
        const Icon = subject.icon;

        return (
          <div
            key={subject.id}
            onClick={() => {
                if (subject.id === SUBJECT_IDS.BUNDLE) {
                  if (selected.includes(SUBJECT_IDS.BUNDLE)) {
                    setSelected([]);
                  } else {
                    setSelected([SUBJECT_IDS.BUNDLE]);
                  }
                  return;
                }

            setSelected((prev) => {
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
            selected.includes(subject.id)
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

            {selected.includes(subject.id) && (
            <CheckCircle className="absolute right-4 top-4 h-6 w-6 text-green-600" />
          )}

            <Icon className="mb-4 h-10 w-10 text-blue-700" />

            <h3 className="text-xl font-bold text-slate-900">
              {subject.title}
            </h3>

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