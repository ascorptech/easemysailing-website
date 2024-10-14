"use client";
import { useParams } from "next/navigation";

export default function TalentPage() {
  const params = useParams();
  const { talentId } = params;

  // Fetch talent data here based on the talentId, or mock some data for now
  // const talentDetails = {
  // talentId,
  // name: "John Doe",
  // nationality: "Canada",
  // rank: "Captain",
  // rankexp: "30 Month",
  // salaryexp: 4000,
  // contract: "4 Months",
  // availability: "10 Jul 2024"
  // };

  return (
    <div>
      <h1 className="p-3 text-2xl">Talent Details for {talentId}</h1>
      {/* <p><strong>Name:</strong> {talentDetails.name}</p>
      <p><strong>Nationality:</strong> {talentDetails.nationality}</p>
      <p><strong>Rank:</strong> {talentDetails.rank}</p>
      <p><strong>Rank Experience:</strong> {talentDetails.rankexp}</p>
      <p><strong>Salary Expectation:</strong> ${talentDetails.salaryexp}</p>
      <p><strong>Contract Duration:</strong> {talentDetails.contract}</p>
      <p><strong>Availability:</strong> {talentDetails.availability}</p> */}

      <div className="p-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Sailing Experience Summary */}
          <div className=" rounded-lg shadow">
            <h2 className="bg-[#00A264] p-3 text-white  text-lg font-bold  ">
              Sailing Experience Summary
            </h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left bg-[#D1EFE4] p-3">Ship Type</th>
                  <th className="text-left bg-[#D1EFE4] p-3">
                    Total Experience
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bulker", "4M 5D"],
                  ["Tanker", "1M 15D"],
                  ["Container", "6M 5D"],
                  ["DP1", "5M 5D"],
                  ["Ship 1", "1M 1D"],
                  ["Ship 2", "4M"],
                  ["Ship 3", "7M"],
                  ["Ship 4", "6M 5D"],
                  ["Ship 5", "4M 5D"],
                  ["Ship 6", "5M 5D"],
                ].map(([shipType, experience], index) => (
                  <tr key={index}>
                    <td className=" py-2 px-3">{shipType}</td>
                    <td className=" py-2 px-3">{experience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Operational & Equipment Exp. */}
          <div className=" rounded-lg shadow">
            <h2 className="text-lg font-bold   bg-[#00A264] p-3 text-white ">
              Operational & Equipment Exp.
            </h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left bg-[#D1EFE4] p-3">Equipment</th>
                  <th className="text-left bg-[#D1EFE4] p-3">Experience</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Framo/ Marflex", "✅"],
                  ["Cranes", "❌"],
                  ["Chemical Cargoes", "❌"],
                  ["Four Stroke ME", "✅"],
                  ["Two Stroke ME", "✅"],
                  ["Dual Fuel", "❌"],
                  ["US Visa", "❌"],
                  ["Europe Visa", "✅"],
                  ["Flag State Document", "✅"],
                  ["OPS4", "✅"],
                ].map(([equipment, experience], index) => (
                  <tr key={index}>
                    <td className=" py-2 px-3">{equipment}</td>
                    <td className=" py-2 px-3">{experience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sea Service Summary */}
          <div className=" rounded-lg shadow">
            <h2 className="bg-[#00A264] p-3 text-white text-lg font-bold  ">
              Sea Service Summary
            </h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left bg-[#D1EFE4] p-3">Ship Type</th>
                  <th className="text-left bg-[#D1EFE4] p-3">Deadweight</th>
                  <th className="text-left bg-[#D1EFE4] p-3">Engine KW.</th>
                  <th className="text-left bg-[#D1EFE4] p-3">Duration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bulker", "180,000", "500", "4M 5D"],
                  ["Tanker", "270,000", "1000", "1M 15D"],
                  ["Container", "52,000", "500", "6M 5D"],
                  ["DP1", "2589 TEU", "500", "5M 5D"],
                  ["Ship 1", "3200 TEU", "1000", "1M 1D"],
                  ["Ship 2", "3200", "1000", "4M"],
                  ["Ship 3", "98,000", "2500", "7M"],
                  ["Ship 4", "180,000", "1000", "6M 5D"],
                  ["Ship 5", "52,000", "500", "4M 5D"],
                  ["Ship 6", "3200 TEU", "1000", "5M 5D"],
                ].map(([shipType, deadweight, engineKw, duration], index) => (
                  <tr key={index}>
                    <td className=" py-2 px-3 ">{shipType}</td>
                    <td className=" py-2 px-3">{deadweight}</td>
                    <td className=" py-2 px-3">{engineKw}</td>
                    <td className=" py-2 px-3">{duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
