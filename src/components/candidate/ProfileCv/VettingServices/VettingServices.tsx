"use client";
import { AddProfileData } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type VettingServicesComplete = {
  percentage: number;
  color: string;
};

type Props = {
  vettingServicesComplete: VettingServicesComplete; // mjrComplete is an object with percentage and color
  setVettingServicesComplete: React.Dispatch<React.SetStateAction<VettingServicesComplete>>;
  userDetail: any;
};


const VettingServices = ({vettingServicesComplete, setVettingServicesComplete, userDetail}:Props) => {
  // State for form fields

  const [inProgress, setInProgress] = useState(false);
  const [done, setDone] = useState(false);
  const [notApplicable, setNotApplicable] = useState(false);
  const [inProgress1, setInProgress1] = useState(false);
  const [done1, setDone1] = useState(false);
  const [notApplicable1, setNotApplicable1] = useState(false);
  const [inProgress2, setInProgress2] = useState(false);
  const [done2, setDone2] = useState(false);
  const [notApplicable2, setNotApplicable2] = useState(false);
  const [inProgress3, setInProgress3] = useState(false);
  const [done3, setDone3] = useState(false);
  const [notApplicable3, setNotApplicable3] = useState(false);
  const [inProgress4, setInProgress4] = useState(false);
  const [done4, setDone4] = useState(false);
  const [notApplicable4, setNotApplicable4] = useState(false);
  const [inProgress5, setInProgress5] = useState(false);
  const [done5, setDone5] = useState(false);
  const [notApplicable5, setNotApplicable5] = useState(false);
  const [inProgress6, setInProgress6] = useState(false);
  const [done6, setDone6] = useState(false);
  const [notApplicable6, setNotApplicable6] = useState(false)
  
  const [inProgress7, setInProgress7] = useState(false);

  const [done7, setDone7] = useState(false);
  const [notApplicable7, setNotApplicable7] = useState(false);
  const [inProgress8, setInProgress8] = useState(false);
  const [optional, setOptional] = useState(false);
  const [optional1, setOptional1] = useState(false);
  const [optional2, setOptional2] = useState(false);
  const [optional3, setOptional3] = useState(false);
  const [optional4, setOptional4] = useState(false);


  const [done8, setDone8] = useState(false);
  const [notApplicable8, setNotApplicable8] = useState(false);
  const [inProgress9, setInProgress9] = useState(false);

  const [done9, setDone9] = useState(false);
  const [notApplicable9, setNotApplicable9] = useState(false);
  const [inProgress10, setInProgress10] = useState(false);

  const [done10, setDone10] = useState(false);
  const [notApplicable10, setNotApplicable10] = useState(false);





  const totalFields = 38;
  const filledFields = [
    inProgress,
    done,
    notApplicable,
    inProgress1,
    done1,
    notApplicable1,
    inProgress2,
    done2,
    notApplicable2,
    inProgress3,
    done3,
    notApplicable3,
    inProgress4,
    done4,
    notApplicable4,
    inProgress5,
    done5,
    notApplicable5,
    inProgress6,
    done6,
    notApplicable6,
    inProgress7,
    done7,
    notApplicable7,
    inProgress8,
    done8,
    notApplicable8,
    inProgress9,
    done9,
    notApplicable9,
    inProgress10,
    done10,
    notApplicable10,
    optional,
    optional1,
    optional2,
    optional3,
    optional4
  
  ].filter(Boolean).length;

  // const totalFields = available === "Yes" ? 6 : 5;

  const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setVettingServicesComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF0000", // Update the color field
      }));
      color = "red";
    } else if (percentage <= 70) {
      setVettingServicesComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF9900", // Update the color field
      }));
      color = "#FF9900";
    } else {
      setVettingServicesComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#00A264", // Update the color field
      }));
      color = "green";
    }
  }, [percentage, color]);

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault(); // Prevent default form submission
  };

 

  return (
    <div className="container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        {/* <div className="  "> */}
        <div className="my-5 ">
          <h1 className="mb-2 text-center ">Assessment of Completeness and Validity of Certificates legally required by Rank</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={inProgress}
                onChange={() => setInProgress(!inProgress)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={done}
                onChange={() =>
                  setDone(!done)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={notApplicable}
                onChange={() => setNotApplicable(!notApplicable)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Not Applicable
              </label>
            </div>

        
          </div>
         

         
        </div>
        <div className="my-5 ">
          <h1 className="mb-2 text-center ">Verification of COC and GMDSS (if applicable)</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={inProgress1}
                onChange={() => setInProgress1(!inProgress1)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={done1}
                onChange={() =>
                  setDone1(!done1)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={notApplicable1}
                onChange={() => setNotApplicable1(!notApplicable1)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Not Applicable
              </label>
            </div>

            
           
          </div>
        

        
        </div>


        <div className="my-5 ">
          <h1 className="mb-2  ">Verification of medical certificates and/or medical centers</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={inProgress2}
                onChange={() => setInProgress2(!inProgress2)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={done2}
                onChange={() =>
                  setDone2(!done2)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={notApplicable2}
                onChange={() => setNotApplicable2(!notApplicable2)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Not Applicable
              </label>
            </div>

           
          </div>
        
        </div>

        <div className="my-5 ">
          <h1 className="mb-2  ">Identity check via video call</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={inProgress3}
                onChange={() => setInProgress3(!inProgress3)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={done3}
                onChange={() =>
                  setDone3(!done3)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={notApplicable3}
                onChange={() => setNotApplicable3(!notApplicable3)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Not Applicable
              </label>
            </div>
          </div>

        </div>

        <div className="my-5 ">
          <h1 className="mb-2 ">English level assessment via video call</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={inProgress4}
                onChange={() => setInProgress4(!inProgress4)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={done4}
                onChange={() =>
                  setDone4(!done4)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Done
              </label>
            </div>

            <div>
              
              <input
                type="checkbox"
                checked={notApplicable4}
                onChange={() => setNotApplicable4(!notApplicable4)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Not Applicable
              </label>
            </div>

          </div>
        
        </div>
        <div className="my-5 ">
          <h1 className="mb-2  ">Plausibility check of Seagoing Experience</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={inProgress5}
                onChange={() => setInProgress5(!inProgress5)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={done5}
                onChange={() =>
                  setDone5(!done5)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={notApplicable5}
                onChange={() => setNotApplicable5(!notApplicable5)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Not Applicable
              </label>
            </div>

          </div>
        
        </div>

        <div className="my-5 ">
          <h1 className="mb-2  ">Verification of STCW Training Certificates</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={inProgress6}
                onChange={() => setInProgress6(!inProgress6)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={done6}
                onChange={() =>
                  setDone6(!done6)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={notApplicable6}
                onChange={() => setNotApplicable6(!notApplicable6)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Not Applicable
              </label>
            </div>

            
            <div>
              <input
                type="checkbox"
                checked={optional}
                onChange={() =>
                  setOptional(!optional)
                }
                className="ml-4"
              />
              <label className="p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Optional
              </label>
            </div>
          </div>
        
        </div>
        <div className="my-5 ">
          <h1 className="mb-2  ">Verification of Additional Trainings</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={inProgress7}
                onChange={() => setInProgress7(!inProgress7)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={done7}
                onChange={() =>
                  setDone7(!done7)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
            Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={notApplicable7}
                onChange={() => setNotApplicable7(!notApplicable7)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Not Applicable
              </label>
            </div>

            
            <div>
              <input
                type="checkbox"
                checked={optional1}
                onChange={() =>
                  setOptional1(!optional1)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Optional
              </label>
            </div>
          </div>
        
        </div>
        <div className="my-5 ">
          <h1 className="mb-2 ">Verification of Flag State Certificates</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={inProgress8}
                onChange={() => setInProgress8(!inProgress8)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={done8}
                onChange={() =>
                  setDone8(!done8)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
            Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={notApplicable8}
                onChange={() => setNotApplicable8(!notApplicable8)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Not Applicable
              </label>
            </div>

            
            <div>
              <input
                type="checkbox"
                checked={optional2}
                onChange={() =>
                  setOptional2(!optional2)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Optional
              </label>
            </div>
          </div>
        
        </div>

        <div className="my-5 ">
          <h1 className="mb-2  ">Verification of ECDIS type specific trainings (if applicable)</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={inProgress9}
                onChange={() => setInProgress7(!inProgress9)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={done9}
                onChange={() =>
                  setDone9(!done9)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
            Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={notApplicable9}
                onChange={() => setNotApplicable9(!notApplicable9)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Not Applicable
              </label>
            </div>

            
            <div>
              <input
                type="checkbox"
                checked={optional3}
                onChange={() =>
                  setOptional3(!optional3)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Optional
              </label>
            </div>
          </div>
        
        </div>

       
        

        

        <div className="my-5">
          <h1 className="mb-2 ">
          Verification of Engine specific trainings (if applicable)
          </h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={inProgress10}
                onChange={() => setInProgress10(!inProgress10)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={done10}
                onChange={() =>
                  setDone10(!done10)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
            Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={notApplicable10}
                onChange={() => setNotApplicable10(!notApplicable10)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Not Applicable
              </label>
            </div>

            
            <div>
              <input
                type="checkbox"
                checked={optional4}
                onChange={() =>
                  setOptional4(!optional4)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Optional
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-4 mt-4">
          <button
            type="submit"
            className="border border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
          >
            Save
          </button>
          <button
            type="submit"
            className="border border-[#00A264] text-[#00A264] p-2 rounded-lg px-8"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default VettingServices;
