import {
  Calculator,
  Atom,
  FlaskConical,
  Star,
} from "lucide-react";

export const SUBJECT_PRICE = 5000;
export const BUNDLE_PRICE = 12000;
export const EARLY_BIRD_PRICE = 10000;

export const SUBJECT_IDS = {
  MATHEMATICS: "mathematics",
  PHYSICS: "physics",
  CHEMISTRY: "chemistry",
  BUNDLE: "bundle",
} as const;
export const subjects = [
  {
    id: SUBJECT_IDS.MATHEMATICS,
    title: "Mathematics",
    price: SUBJECT_PRICE,
    icon: Calculator,
  },
  {
    id: SUBJECT_IDS.PHYSICS,
    title: "Physics",
    price: SUBJECT_PRICE,
    icon: Atom,
  },
  {
    id: SUBJECT_IDS.CHEMISTRY,
    title: "Chemistry",
    price: SUBJECT_PRICE,
    icon: FlaskConical,
  },
  {
    id: SUBJECT_IDS.BUNDLE,
    title: "Science Bundle",
    price: BUNDLE_PRICE,
    save: 3000,
    icon: Star,
    recommended: true,
  },
];