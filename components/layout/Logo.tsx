import { siteConfig } from "@/constants/site";

export default function Logo() {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-bold text-blue-900">
        {siteConfig.name}
      </span>

      <span className="text-sm text-yellow-600">
        {siteConfig.tagline}
      </span>
    </div>
  );
}