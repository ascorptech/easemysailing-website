"use client";

import { useEffect, useRef, useState } from "react";
import { TfiReload } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2"; // Import the phone input component
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from 'react-google-recaptcha';
import { sanitizedValues } from "@/services/services";
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import { GetDropdownDetails } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import { countryCodeDrop } from "@/constants/constants";
import { AddContactData, verifyRecaptchaData } from "@/app/(web)/contact-us/Services/contactService";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91"); // Default country code
  const [textarea, setTextArea] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext('2d');
    initializeCaptcha(ctx);
  }, []);

  const generateRandomChar = (min: any, max: any) =>
    String.fromCharCode(Math.floor
      (Math.random() * (max - min + 1) + min));

  const generateCaptchaText = () => {
    let captcha = '';
    for (let i = 0; i < 3; i++) {
      captcha += generateRandomChar(65, 90);
      captcha += generateRandomChar(97, 122);
      captcha += generateRandomChar(48, 57);
    }
    return captcha.split('').sort(
      () => Math.random() - 0.5).join('');
  };

  const drawCaptchaOnCanvas = (ctx: any, captcha: any) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const textColors = ['rgb(0,0,0)', 'rgb(130,130,130)'];
    const letterSpace = 150 / captcha.length;
    for (let i = 0; i < captcha.length; i++) {
      const xInitialSpace = 25;
      ctx.font = '20px Roboto Mono';
      ctx.fillStyle = textColors[Math.floor(
        Math.random() * 2)];
      ctx.fillText(
        captcha[i],
        xInitialSpace + i * letterSpace,

        // Randomize Y position slightly
        Math.floor(Math.random() * 16 + 25),
        100
      );
    }
  };

  const initializeCaptcha = (ctx: any) => {
    setUserInput('');
    const newCaptcha = generateCaptchaText();
    setCaptcha(newCaptcha);
    drawCaptchaOnCanvas(ctx, newCaptcha);
  };


  const validateInputs = () => {
    let formIsValid = true;
    let newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
    if (!name.trim()) {
      newErrors.name = "Name is required";
      formIsValid = false;
    }

    if (!sanitizedValues(name)) {
      newErrors.name = "Name is invalid";
      formIsValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
      formIsValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
      formIsValid = false;
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
      formIsValid = false;
    } else if (/^\d{13}$/.test(phone)) {
      console.log('phone', phone.length)
      newErrors.phone = "Phone number must be 10 digits";
      formIsValid = false;
    } else if (phone.length < 7) {
      newErrors.phone = "Phone number must be minimum 7 digits";
      formIsValid = false;
    }

    if (!textarea.trim()) {
      newErrors.message = "Message is required";
      formIsValid = false;
    } else if (textarea.length < 10) { // Adjust the minimum length as needed
      newErrors.message = "Message must be at least 10 characters long.";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const token = await recaptchaRef.current.executeAsync();
    // console.log('tokwen',token)
    if (!validateInputs()) {
      return;
    } else {
      if (userInput == '') {
        toast.error('Captcha is required');
      } else {
        if (userInput === captcha) {
          // toast.success('Success Captcha');
          let data = {
            name: name,
            email: email,
            mobileNumber: `${countryCode} ${phone}`,
            message: textarea,
          };

          AddContactData(data, AddContactDataCB);
        } else {
          toast.error('Incorrect Captcha');
          const canvas: any = canvasRef.current;
          const ctx = canvas.getContext('2d');
          initializeCaptcha(ctx);
        }
      }
    }
  };

  const resetCaptcha = ()=>{
    const canvas: any = canvasRef.current;
          const ctx = canvas.getContext('2d');
          initializeCaptcha(ctx);
  }

  const AddContactDataCB = (res: any) => {
    toast.success("Thank you for contacting us");
    setName("");
    setEmail("");
    setPhone("");
    setTextArea("");
    setErrors({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext('2d');
    initializeCaptcha(ctx);
  };

  // const handleCaptchaChange = (value:any) => {
  //   setCaptchaValue(value);
  // };

  return (
    <div className="contact mt-14">
      <div className="flex justify-center items-center h-[8rem] bg-green-100 bg-[url('/images/Rectangle1.png')] ">
        <h1 className="text-[46px] leading-[69px] text-[#00A264] font-bold">
          Get in touch
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-24 md:mx-24 mx-2 my-10">
        <div className="bg-gray-200 p-8 rounded-xl">
          <h1 className="text-center mb-2">
            For questions and assistance, reach out to us.
          </h1>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-[7px]">
              <input
                id="Name"
                type="text"
                value={name}
                onChange={(e) => {
                  // Allow only alphabetic characters and spaces
                  const value = e.target.value;
                  if (/^[a-zA-Z\s]*$/.test(value)) {
                    setName(value.trimStart());
                  }
                }}
                onBlur={(e) => {
                  // Validation for min length
                  if (e.target.value.length < 2) {
                    toast.error("Name must be at least 2 characters long");
                  } else if (e.target.value.length > 30) {
                    toast.error("Name cannot exceed 30 characters");
                  }
                }}
                className="border lg:h-10 rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                placeholder="Name"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Input */}
            <div className="mb-[7px]">
              {/* <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border lg:h-10 rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                placeholder="Email"
                required
              /> */}
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  let value = e.target.value.replace(/\s+/g, ''); // Removes all spaces
                  setEmail(value?.trim());
                }}
                onBlur={(e) => {
                  // Basic email validation
                  if (!e.target.validity.valid) {
                    toast.error("Please enter a valid email address.");
                  }
                }}
                className="border lg:h-10 rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                placeholder="Email"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Number with Country Code */}
            <div className="mb-[7px]">
              <div className="relative flex items-center">
                {/* Country Code Dropdown */}
                {/* <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="border h-10  rounded-lg px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                >
                  <option value="+91">IN +91 </option>
                  <option value="+1">US +1 </option>
                  <option value="+93">AF +93 </option>
                  

                  {/* Add more country codes as needed */}
                {/* </select> */}

                {/* Phone Input */}
                <div className="flex w-full">
                  <select value={countryCode} className="border bg-white lg:h-10 rounded-lg w-[40%] sm:w-[20%] xl:w-[25%] py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" onChange={(e: any) => setCountryCode(e.target.value)}>
                    {countryCodeDrop && countryCodeDrop?.map((code: any, index: number) => (
                      <option key={index} value={code?.phoneCode}>{code?.flag + ' ' + code?.phoneCode?.toUpperCase()}</option>
                    ))}
                  </select>
                  <input
                    id="phone"
                    type="text" // Keeping type as text to manage length validation
                    value={phone}
                    maxLength={12} // Maximum 12 digits
                    onChange={(e) => {
                      // Allow only numeric input
                      const value = e.target.value;
                      if (/^\d*$/.test(value)) { // Regex to allow only digits
                        setPhone(value.trimStart());
                      }
                    }}
                    onBlur={(e) => {
                      if (e.target.value.length < 7) {
                        toast.error("Phone number must be at least 7 digits long");
                      }
                    }}
                    className="border lg:h-10 rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                {/* <PhoneInput
                  country={"in"} //default country
                  value={phone}
                  // maxLength={10}
                  // onChange={(e) => setPhone(e.target.value.trim())}
                  onChange={(phone) => { console.log('p', phone); setPhone(phone) }}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: false,
                  }}
                  inputClass="!w-full !h-[42px] !leading-[21.79px] !text-[16px] !text-[#333333] !border !rounded-lg focus:!outline-none focus:!shadow-outline font-[poppins] "
                  containerClass="w-full"
                /> */}
                {/* <span className="absolute inset-y-0 left-0 flex items-center p-3 bg-[#00A264] text-white mr-7 rounded-l-md">
                  <FaPhone />
                </span> */}
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Message Textarea */}
            <div className="mb-[7px]">
              {/* <textarea
                value={textarea}
                maxLength={500}
                onChange={(e) => setTextArea(e.target.value)}
                className="border rounded-lg w-full h-28 py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                placeholder="Message"
                required
              /> */}
              <textarea
                value={textarea}
                maxLength={500}
                onChange={(e) => {
                  // Allow changes only if they are from user input
                  if (e.nativeEvent.isTrusted) {
                    setTextArea(e.target.value.trimStart().replace(/<[^>]*>/g, ""));
                  }
                }}
                onBlur={(e) => {
                  // Minimum length validation
                  if (e.target.value.length < 10) { // Adjust the minimum length as needed
                    toast.error("Message must be at least 10 characters long.");
                  }
                }}
                className={`border rounded-lg w-full h-28 py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm ${textarea.length > 500 ? "border-red-500" : ""
                  }`} // Change border color if exceeded maxLength
                placeholder="Message"
                required
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <div className="mb-[7px] flex justify-center items-center">
              <div className="flex w-[65%]">
                <input
                  id="Captcha"
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="border rounded-lg w-full lg:h-10  py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  placeholder="Captcha Code"

                />
              </div>
              <div className="flex items-center gap-2 ">
                <div className="ml-4 ">
                  {/* <ReCAPTCHA
                    sitekey={'6LfqTlsqAAAAAEezEzshPCv3NPP0QyIQ1FqrEpq_'}
                    ref={recaptchaRef}
                    onChange={handleChange}
                    onExpired={handleExpired}
                  /> */}
                  {/* <ReCAPTCHA
                    sitekey={'6LfoUVsqAAAAAD6TM-xdumuFGc6hTLS2kBvYKX3S'}
                    // size="invisible"
                    ref={recaptchaRef}
                    onChange={handleChange}
                    onExpired={handleExpired}
                    badge="inline"
                  /> */}
                  <canvas ref={canvasRef}
                    width="200"
                    height="70">

                  </canvas>
                </div>
                <span className="text-white p-2 bg-green-600 text-2xl font-extrabold rounded-md cursor-pointer" onClick={resetCaptcha}>
                  <TfiReload />
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#00A264] hover:bg-[#00A264] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info Section */}
        <div>
          <div className="flex items-center bg-white shadow-lg border p-3 mt-3 rounded-xl">
            <div className="w-16 h-16 flex items-center justify-center text-[#00A264] text-3xl">
              <GrLocation />
            </div>
            <div className="lg:ml-4 ml-6">
              <h2 className="font-bold text-lg">Address</h2>
              <p className="text-sm">
                Noida, Gautam Buddha Nagar, Uttar Pradesh, India -201301
              </p>
            </div>
          </div>

          <div className="items-center bg-white shadow-lg border flex py-3 px-1 lg:px-3 mt-3 rounded-xl">
            <div className="w-16 h-16 flex items-center justify-center text-[#00A264] text-3xl">
              <FiPhoneCall />
            </div>
            <div className="ml-3 lg:ml-4">
              <h2 className="font-bold text-lg">Call us on</h2>
              <p className="text-sm">(+91) - 7055-70-5555</p>
            </div>
          </div>

          <div className="items-center bg-white shadow-lg border flex lg:p-3 px-2 mt-3 rounded-xl">
            <div className="w-16 h-16 flex items-center justify-center text-[#00A264] text-3xl font-extrabold">
              <FiMail />
            </div>
            <div className="ml-3">
              <h2 className="font-bold text-lg">Mail Us</h2>
              <p className="text-sm">business@EaseMySailing.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
