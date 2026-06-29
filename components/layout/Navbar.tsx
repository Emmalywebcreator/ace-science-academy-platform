import Logo from "./Logo";
import { siteConfig } from "@/constants/site";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <div className="hidden gap-8 md:flex">
          {siteConfig.navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#register"
          className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
        >
          Register Now
        </a>
      </div>
    </nav>
  );
}