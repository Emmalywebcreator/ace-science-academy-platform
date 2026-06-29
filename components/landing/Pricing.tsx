import { siteConfig } from "@/constants/site";
import { CheckCircle } from "lucide-react";

const plans = Object.values(siteConfig.pricing);

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Choose Your Plan
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Affordable pricing with maximum value.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-2xl border p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.popular
                  ? "border-blue-700 bg-blue-700 text-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.popular && (
                <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-slate-900">
                  MOST POPULAR
                </span>
              )}

              <h3 className="mt-6 text-2xl font-bold">
                {plan.title}
              </h3>

              <p className="mt-2 opacity-90">
                {plan.description}
              </p>

              <p className="mt-8 text-5xl font-extrabold">
                {plan.price}
              </p>

              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} />
                  Live Online Classes
                </li>

                <li className="flex items-center gap-2">
                  <CheckCircle size={18} />
                  Weekly Assessments
                </li>

                <li className="flex items-center gap-2">
                  <CheckCircle size={18} />
                  Recorded Lessons
                </li>
              </ul>

              <button
                className={`mt-10 w-full rounded-lg py-3 font-semibold transition ${
                  plan.popular
                    ? "bg-yellow-400 text-slate-900 hover:bg-yellow-300"
                    : "bg-blue-700 text-white hover:bg-blue-800"
                }`}
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}