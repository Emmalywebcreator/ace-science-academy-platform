import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-12">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Left Content */}
        <div className="flex-1">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Registration: July 7 – July 18, 2026
          </span>

          {/* <h1 className="mt-6 text-5xl font-extrabold leading-tight text-blue-900"> */}
          <h1 className="mt-6 text-6xl font-bold leading-[1.1] text-blue-900">
            Holiday Science Intensive Programme 2026
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Prepare early for WAEC, NECO and JAMB through structured online
            classes in Mathematics, Physics and Chemistry.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/register">
              Register Now
          </Button>

          <Button
            href="#pricing"
            variant="secondary">
            View Fees
          </Button>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Live Online Classes</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>WAEC • NECO • JAMB Focus</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Limited Class Size</span>
              </div>
            </div>
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