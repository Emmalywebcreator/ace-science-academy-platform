import {
  Calculator,
  Atom,
  FlaskConical,
  Star,
} from "lucide-react";

export const SUBJECT_PRICE = 5000;
export const BUNDLE_PRICE = 12000;
export const EARLY_BIRD_PRICE = 10000;

export const subjects = [
  {
    id: "mathematics",
    title: "Mathematics",
    price: SUBJECT_PRICE,
    icon: Calculator,
  },
  {
    id: "physics",
    title: "Physics",
    price: SUBJECT_PRICE,
    icon: Atom,
  },
  {
    id: "chemistry",
    title: "Chemistry",
    price: SUBJECT_PRICE,
    icon: FlaskConical,
  },
  {
    id: "bundle",
    title: "Science Bundle",
    price: BUNDLE_PRICE,
    save: 3000,
    icon: Star,
    recommended: true,
  },
];