

export default function NbSummary() {
    return (
      <div className="p-8">
        <div className="grid grid-cols-3 gap-8">
          
          {/* Sailing Experience Summary */}
          <div className="bg-green-200 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Sailing Experience Summary</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Ship Type</th>
                  <th className="text-left">Total Experience</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Bulker', '4M 5D'],
                  ['Tanker', '1M 15D'],
                  ['Container', '6M 5D'],
                  ['DP1', '5M 5D'],
                  ['Ship 1', '1M 1D'],
                  ['Ship 2', '4M'],
                  ['Ship 3', '7M'],
                  ['Ship 4', '6M 5D'],
                  ['Ship 5', '4M 5D'],
                  ['Ship 6', '5M 5D'],
                ].map(([shipType, experience], index) => (
                  <tr key={index}>
                    <td className="py-2">{shipType}</td>
                    <td className="py-2">{experience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          {/* Operational & Equipment Exp. */}
          <div className="bg-green-200 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Operational & Equipment Exp.</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Equipment</th>
                  <th className="text-left">Experience</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Framo/ Marflex', '✅'],
                  ['Cranes', '❌'],
                  ['Chemical Cargoes', '❌'],
                  ['Four Stroke ME', '✅'],
                  ['Two Stroke ME', '✅'],
                  ['Dual Fuel', '❌'],
                  ['US Visa', '❌'],
                  ['Europe Visa', '✅'],
                  ['Flag State Document', '✅'],
                  ['OPS4', '✅'],
                ].map(([equipment, experience], index) => (
                  <tr key={index}>
                    <td className="py-2">{equipment}</td>
                    <td className="py-2">{experience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          {/* Sea Service Summary */}
          <div className="bg-green-200 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Sea Service Summary</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Ship Type</th>
                  <th className="text-left">Deadweight</th>
                  <th className="text-left">Engine KW.</th>
                  <th className="text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Bulker', '180,000', '500', '4M 5D'],
                  ['Tanker', '270,000', '1000', '1M 15D'],
                  ['Container', '52,000', '500', '6M 5D'],
                  ['DP1', '2589 TEU', '500', '5M 5D'],
                  ['Ship 1', '3200 TEU', '1000', '1M 1D'],
                  ['Ship 2', '3200', '1000', '4M'],
                  ['Ship 3', '98,000', '2500', '7M'],
                  ['Ship 4', '180,000', '1000', '6M 5D'],
                  ['Ship 5', '52,000', '500', '4M 5D'],
                  ['Ship 6', '3200 TEU', '1000', '5M 5D'],
                ].map(([shipType, deadweight, engineKw, duration], index) => (
                  <tr key={index}>
                    <td className="py-2">{shipType}</td>
                    <td className="py-2">{deadweight}</td>
                    <td className="py-2">{engineKw}</td>
                    <td className="py-2">{duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }



  