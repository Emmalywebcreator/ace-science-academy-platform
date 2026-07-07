import { Calculator, Atom, FlaskConical, Star } from "lucide-react";

const subjects = [
  {
    title: "Mathematics",
    price: "₦5,000",
    icon: Calculator,
  },
  {
    title: "Physics",
    price: "₦5,000",
    icon: Atom,
  },
  {
    title: "Chemistry",
    price: "₦5,000",
    icon: FlaskConical,
  },
  {
    title: "Science Bundle",
    price: "₦12,000",
    save: "Save ₦3,000",
    icon: Star,
    recommended: true,
  },
];

export default function SubjectSelection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {subjects.map((subject) => {
        const Icon = subject.icon;

        return (
          <div
            key={subject.title}
            className={`relative cursor-pointer rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
              subject.recommended
                ? "border-blue-700 bg-blue-50"
                : "border-slate-200 bg-white"
            }`}
          >
            {subject.recommended && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold">
                RECOMMENDED
              </span>
            )}

            <Icon className="mb-4 h-10 w-10 text-blue-700" />

            <h3 className="text-xl font-bold text-slate-900">
              {subject.title}
            </h3>

            <p className="mt-2 text-2xl font-bold text-blue-700">
              {subject.price}
            </p>

            {subject.save && (
              <p className="mt-2 text-sm font-semibold text-green-600">
                {subject.save}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}