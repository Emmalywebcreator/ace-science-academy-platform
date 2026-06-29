export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row">
        {/* Left Content */}
        <div className="flex-1">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Registration: July 7 – July 18, 2026
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-blue-900">
            Holiday Science Intensive Programme 2026
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Prepare early for WAEC, NECO and JAMB through structured online
            classes in Mathematics, Physics and Chemistry.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#register"
              className="rounded-lg bg-blue-700 px-6 py-4 font-semibold text-white hover:bg-blue-800"
            >
              Register Now
            </a>

            <a
              href="#pricing"
              className="rounded-lg border border-blue-700 px-6 py-4 font-semibold text-blue-700 hover:bg-blue-50"
            >
              View Fees
            </a>
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
          <h2 className="mb-6 text-2xl font-bold text-blue-900">
            Programme Highlights
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li>✅ 8 Weeks Intensive Coaching</li>
            <li>✅ Live Interactive Classes</li>
            <li>✅ Weekly Tests & Assignments</li>
            <li>✅ WAEC & NECO Past Questions</li>
            <li>✅ JAMB Preparation</li>
            <li>✅ Recorded Lessons</li>
            <li>✅ Performance Tracking</li>
          </ul>

          <div className="mt-8 rounded-lg bg-yellow-50 p-4">
            <p className="font-semibold text-yellow-700">
              Classes Begin:
            </p>

            <p className="text-lg font-bold text-blue-900">
              July 20, 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}