import Logo from "./Logo";
import { siteConfig } from "@/constants/site";
import Button from "@/components/ui/Button";


export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <div className="hidden gap-8 md:flex">
          {siteConfig.navigation.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="group relative font-medium text-slate-700 transition-all duration-300 hover:text-blue-700"
            >
              {item.label}
               <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-700 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <Button href="#register">
          Register Now
        </Button>
      </div>
    </nav>
  );
}