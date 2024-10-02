export default function Terms() {
    return (
      <div className=" mx-8 w-[85%] mt-5 ml-20">
        <div>
            <div className="text-lg my-3">
                <h2 className="font-semibold">Note: <span className="font-normal">Top-Up plans can be purchased independently or in combination with existing subscription plans.</span> </h2>
            </div>
            <h1 className="text-lg font-semibold">Terms and Conditions:</h1>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>All plans are subject to a one-time annual payment.</li>
          <li>CV downloads are cumulative throughout the subscription period.</li>
          <li>
            Extended portal access top-up is applicable after exhausting the initial subscription period.
          </li>
          <li>Top-up plans can be purchased at any time during the subscription period.</li>
          <li>Unused CV downloads do not roll over to the next subscription period.</li>
          <li>Prices are subject to change with prior notice.</li>
        </ul>
        </div>
      </div>
    );
  }
  