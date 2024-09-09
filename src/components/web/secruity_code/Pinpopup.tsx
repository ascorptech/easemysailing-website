// // components/PinPopup.tsx

// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// const PinPopup = ({ closeModal }: { closeModal: () => void }) => {
//   const [pin, setPin] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const correctPin = "4321"; // The correct 4-digit PIN

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (pin === correctPin) {
//       closeModal(); // Close popup
//       router.push(`/`); // Redirect to the dashboard with the PIN
//     } else {
//       // setError("Invalid PIN. Please try again.");
//       setError("Invalid PIN. Please Try Again ");
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded shadow-md w-96 relative">
//         <h2 className="text-2xl text-[#00A264] font-bold mb-4">Enter Pin 🔑</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="password"
//             maxLength={4}
//             value={pin}
//             onChange={(e) => setPin(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded mb-4"
//             placeholder="Enter PIN"
//           />
//           <button
//             type="submit"
//             className="w-full bg-[#00A264] text-white p-2 rounded"
//           >
//             Submit
//           </button>
//         </form>
//         <button
//           onClick={closeModal}
//           className="absolute top-2 right-2 cursor-default text-white "
//         >
//           {/* &times; */}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PinPopup;
