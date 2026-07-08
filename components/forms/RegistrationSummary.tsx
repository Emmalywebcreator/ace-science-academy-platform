type RegistrationSummaryProps = {
  selectedSubjects: string[];
};

export default function RegistrationSummary({
  selectedSubjects,
}: RegistrationSummaryProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-blue-900">
        Registration Summary
      </h2>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Selected Subjects</p>

          {selectedSubjects.length === 0 ? (
            <p className="text-gray-400">
              No subject selected.
            </p>
          ) : (
            <ul className="mt-2 space-y-2">
              {selectedSubjects.map((subject) => (
                <li key={subject}>✔ {subject}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}