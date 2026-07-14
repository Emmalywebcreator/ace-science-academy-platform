import {
  subjects,
  SUBJECT_IDS,
  SUBJECT_PRICE,
  BUNDLE_PRICE,
} from "./pricing";

export function calculatePrice(selectedSubjects: string[]) {
  if (selectedSubjects.includes(SUBJECT_IDS.BUNDLE)) {
    return {
      subjects: subjects.filter(
        (subject) => subject.id === SUBJECT_IDS.BUNDLE
      ),
      subtotal: SUBJECT_PRICE * 3,
      discount: SUBJECT_PRICE * 3 - BUNDLE_PRICE,
      total: BUNDLE_PRICE,
    };
  }

  const selected = subjects.filter((subject) =>
    selectedSubjects.includes(subject.id)
  );

  const subtotal = selected.length * SUBJECT_PRICE;

  return {
    subjects: selected,
    subtotal,
    discount: 0,
    total: subtotal,
  };
}