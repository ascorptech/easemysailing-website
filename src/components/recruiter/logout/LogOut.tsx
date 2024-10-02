// "use client";
// import React, { useState } from "react";
// const [showLogoutPopup, setShowLogoutPopup] = useState(false);
// const handleLogoutClick = (
//   e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
// ) => {
//   e.preventDefault();
//   setShowLogoutPopup(true);
// };

// const handleCancelLogout = () => {
//   setShowLogoutPopup(false);
// };

// const handleConfirmLogout = () => {
//   // Add the logic to log the user out
//   console.log("User logged out");
//   setShowLogoutPopup(false);
// };
// export default function () {
//   return (
//     <div>
//       {showLogoutPopup && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-4 rounded shadow-lg">
//             <p className="text-center mb-4">Are you sure you want to logout?</p>
//             <div className="flex justify-center space-x-4">
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                 onClick={handleConfirmLogout}
//               >
//                 Yes, Logout
//               </button>
//               <button
//                 className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
//                 onClick={handleCancelLogout}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
