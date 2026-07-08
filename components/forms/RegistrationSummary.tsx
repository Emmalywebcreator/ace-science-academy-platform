import { calculatePrice } from "@/lib/calculatePrice";

type RegistrationSummaryProps = {
  selectedSubjects: string[];
};



export default function RegistrationSummary({
  selectedSubjects,
}: RegistrationSummaryProps) {
  const registration = calculatePrice(selectedSubjects);
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
              {registration.subjects.map((subject) => (
                <li key={subject.id}>✔ {subject.title}</li>
              ))}
            </ul>
          )}
          <div className="mt-6 border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₦{registration.subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between    text-green-600">
              <span>Discount</span>
              <span>-₦{registration.discount.toLocaleString()}</span>
            </div>

            <div className="flex justify-between border-t pt-3 text-lg font-bold text-blue-900">
              <span>Total</span>
              <span>₦{registration.total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { calculatePrice } from "@/lib/calculatePrice";

// type RegistrationSummaryProps = {
//   selectedSubjects: string[];
// };



// export default function RegistrationSummary({
//   selectedSubjects,
// }: RegistrationSummaryProps) {
//   const registration = calculatePrice(selectedSubjects);
//   return (
//     <div className="rounded-2xl border bg-white p-6 shadow-sm">
//       <h2 className="mb-6 text-2xl font-bold text-blue-900">
//         Registration Summary
//       </h2>

//       <div className="space-y-4">
//         <div>
//           <p className="text-sm text-gray-500">Selected Subjects</p>

//           {selectedSubjects.length === 0 ? (
//             <p className="text-gray-400">
//               No subject selected.
//             </p>
//           ) : (
//             <ul className="mt-2 space-y-2">
//               {selectedSubjects.map((subject) => (
//                 <li key={subject}>✔ {subject}</li>
//               ))}
//             </ul>
//           )}
//         </div>
//         <div className="border-t pt-4">
//           <div className="flex justify-between">
//             <p className="text-lg font-bold">Subtotal</p>
//             <p className="text-lg font-bold">${registration.subtotal.toFixed(2)}</p>
//           </div>
//           {registration.discount > 0 && (
//             <div className="flex justify-between text-green-500">
//               <p>Discount</p>
//               <p>-${registration.discount.toFixed(2)}</p>
//             </div>
//           )}
//           <div className="flex justify-between text-xl font-bold">
//             <p>Total</p>
//             <p>${registration.total.toFixed(2)}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }