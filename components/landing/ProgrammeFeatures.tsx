import { programmeFeatures } from "@/constants/programmeFeatures";

export default function ProgrammeFeatures() {
  return (
    <section
      id="programme"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Why Join This Programme?
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Everything students need to prepare confidently for WAEC, NECO and
            JAMB.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programmeFeatures.map((feature) => (
            <div
              key={feature}
              className="rounded-xl border bg-blue-50 p-6 transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-4 text-3xl">✅</div>

              <h3 className="font-semibold text-blue-900">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}