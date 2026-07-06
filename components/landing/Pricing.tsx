import { siteConfig } from "@/constants/site";
import { CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const plans = Object.values(siteConfig.pricing);

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading 
          title="Choose Your Plan"
          subtitle="Affordable and flexible options for every student."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative flex h-full flex-col rounded-2xl border p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ${
                plan.popular
                  ? "border-blue-700 bg-blue-700 text-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-slate-900 shadow-md tracking-wide">
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
              <div className="mt-auto pt-8">
                <Button
                  href="/register"
                  className={`w-full rounded-lg py-3 font-semibold transition ${
                    plan.popular
                      ? "bg-yellow-400 text-slate-900 hover:bg-yellow-300"
                      : "bg-blue-700 text-white hover:bg-blue-800"
                  }`}
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}