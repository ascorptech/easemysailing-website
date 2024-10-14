"use client";
import { useState } from "react";

export default function page() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  return (
    <div className="min-h-screen  p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Cart Items Section (Right) */}
        <div className="bg-white ">
          <h1 className="text-2xl font-bold mb-2">My Cart</h1>

          {/* Cart Items */}
          <div className="mb-4">
            {/* item 1 */}
            <div>
              <h2 className="font-bold text-xl mb-2">Item 1</h2>
              <div className="border shadow-xl rounded-xl p-3">
                <div className="flex flex-col  mb-2 ">
                  <p className="font-bold text-xl">Portal Subscription</p>
                  <div className="flex items-center mt-3">
                    <button className="bg-[#00A264] text-white px-6 py-2 rounded-md">
                      View Details
                    </button>
                    <p className="text-lg  font-bold ml-5">
                      {" "}
                      Fee:{" "}
                      <span className="text-base font-normal ml-3 text-gray-700">
                        $1500
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="mt-3">
              <h2 className="font-bold text-xl mb-2">Item 2</h2>
              <div className="border shadow-xl rounded-xl p-3">
                <div className="flex flex-col  mb-2 ">
                  <p className="font-bold text-xl">Portal Subscription</p>
                  <div className="flex items-center mt-3">
                    <button className="bg-[#00A264] text-white px-6 py-2 rounded-md">
                      View Details
                    </button>
                    <p className="text-lg  font-bold ml-5">
                      {" "}
                      Fee:{" "}
                      <span className="text-base font-normal ml-3 text-gray-700">
                        $2500
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total and Tax */}
          <div className="bg-[#D1EFE4] p-4 w-[30rem] rounded-lg ">
            <h2 className="font-bold text-xl text-center mb-3">
              Total Items (2)
            </h2>
            <div className="flex justify-between font-bold items-center mb-2">
              <p>Subtotal</p>
              <p className="text-center">:</p>
              <p className="font-normal">$6500</p>
            </div>
            <div className="flex font-bold justify-between mb-2">
              <p>Tax</p>
              <p className="pl-7 text-center">:</p>
              <p className="font-normal">$500</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Grand Total</p>
              <p className="pr-8">:</p>
              <p className="text-[#00A264]">$7000</p>
            </div>
          </div>
        </div>

        {/* Payment Details Section (Left) */}
        <div className="bg-[#D1EFE4] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mt-8 mb-4">Payment Details</h2>
          <div className="flex mb-4">
            <button
              className={`px-4 py-2 mr-2 ${
                paymentMethod === "credit-card"
                  ? "bg-[#00A264] text-white"
                  : "bg-white border border-[#00A264]"
              }`}
              onClick={() => setPaymentMethod("credit-card")}
            >
              Credit Card
            </button>

            <button
              className={`px-4 py-2 mr-2 ${
                paymentMethod === "debit-card"
                  ? "bg-[#00A264] text-white"
                  : "bg-white border border-[#00A264]"
              }`}
              onClick={() => setPaymentMethod("debit-card")}
            >
              Debit Card
            </button>

            <button
              className={`px-4 py-2 mr-2 ${
                paymentMethod === "net-banking"
                  ? "bg-[#00A264] text-white"
                  : "bg-white border border-[#00A264]"
              }`}
              onClick={() => setPaymentMethod("net-banking")}
            >
              Net Banking
            </button>

            <button
              className={`px-4 py-2 mr-2 ${
                paymentMethod === "upi"
                  ? "bg-[#00A264] text-white"
                  : "bg-white border border-[#00A264]"
              }`}
              onClick={() => setPaymentMethod("upi")}
            >
              UPI
            </button>
          </div>

          {/*Credit-card Payment Form */}
          {paymentMethod === "credit-card" && (
            <div>
              <div className="mb-4">
                <label className="block font-medium">Name on Card</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-[#00A264] rounded-md"
                  placeholder="Enter card name"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium">Card Number</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-[#00A264] rounded-md"
                  placeholder="xxxx xxxx xxxx 1234"
                />
              </div>
              <div className="flex space-x-4 mb-4">
                <div>
                  <label className="block font-medium">
                    Expiry Date (MM/YY)
                  </label>
                  <input
                    type="text"
                    className="px-3 py-2 border border-[#00A264] rounded-md"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block font-medium">CVV</label>
                  <input
                    type="text"
                    className="px-3 py-2 border border-[#00A264] rounded-md"
                    placeholder="Enter CVV"
                  />
                </div>
              </div>
              <div>
                <button className="bg-[#00A264] text-white px-6 py-2 rounded-md w-full">
                  Continue to Pay $7000
                </button>
              </div>
            </div>
          )}

          {/*Debit-card Payment Form */}
          {paymentMethod === "debit-card" && (
            <div>
              <div className="mb-4">
                <label className="block font-medium">Name on Card</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-[#00A264] rounded-md"
                  placeholder="Enter card name"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium">Card Number</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-[#00A264] rounded-md"
                  placeholder="xxxx xxxx xxxx 1234"
                />
              </div>
              <div className="flex space-x-4 mb-4">
                <div>
                  <label className="block font-medium">
                    Expiry Date (MM/YY)
                  </label>
                  <input
                    type="text"
                    className="px-3 py-2 border border-[#00A264] rounded-md"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block font-medium">CVV</label>
                  <input
                    type="text"
                    className="px-3 py-2 border border-[#00A264] rounded-md"
                    placeholder="Enter CVV"
                  />
                </div>
              </div>
              <div>
                <button className="bg-[#00A264] text-white px-6 py-2 rounded-md w-full">
                  Continue to Pay $7000
                </button>
              </div>
            </div>
          )}

          {paymentMethod === "net-banking" && (
            <div className="mb-4">
              <label className="block font-medium">Select Your Bank</label>
              <select
                className="w-full px-3 py-2 border border-[#00A264] rounded-md"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your bank
                </option>
                <option value="bank1">Bank 1</option>
                <option value="bank2">Bank 2</option>
                <option value="bank3">Bank 3</option>
                {/* Add more banks as necessary */}
              </select>
              <div className="mt-4">
                <label className="block font-medium">
                  Enter Account Number
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-[#00A264] rounded-md"
                  placeholder="Enter your account number"
                />
              </div>
              <div className="mt-4">
                <label className="block font-medium">Enter IFSC Code</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-[#00A264] rounded-md"
                  placeholder="Enter IFSC code"
                />
              </div>
              <div className="mt-4">
                <button className="bg-[#00A264] text-white px-6 py-2 rounded-md w-full">
                  Continue to Pay $7000
                </button>
              </div>
            </div>
          )}

          {paymentMethod === "upi" && (
            <div>
              <div className="mb-4">
                <label className="block font-medium">Enter UPI ID</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-[#00A264] rounded-md"
                  placeholder="example@upi"
                />
              </div>
              <div>
                <button className="bg-[#00A264] text-white px-6 py-2 rounded-md w-full">
                  Continue to Pay $7000
                </button>
                <p className="text-center mt-2">Or</p>
                <p className=" text-center text-[#00A264]">Scan UPI Barcode</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
