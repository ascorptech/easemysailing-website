"use client";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { GoEye } from "react-icons/go";
import { MdOutlineLock } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

import { FaPhone } from "react-icons/fa";
import { countryCodeDrop } from "@/constants/constants";
import { useEffect, useState } from "react";
import LoginImg from "../image/LoginImg";
import LoginHeader from "@/app/Shared/LoginHeader/LoginHeader";
import Footer from "@/app/Shared/Footer/Footer";
import { SignupData } from "@/app/(candidate)/candidate/signup/Services/signupService";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { GetDropdownDetails } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";

type PhoneLengthRule = {
  min: number;
  max: number;
};

type CountryPhoneLengthRules = {
  [key: string]: PhoneLengthRule;
};
const phoneLengthRules: CountryPhoneLengthRules = {
  in: { min: 12, max: 12 },
  us: { min: 12, max: 15 },
  uk: { min: 10, max: 11 },
};

type PasswordRules = {
  length: { min: number };
  lowercase: RegExp;
  uppercase: RegExp;
  digit: RegExp;
  special: RegExp;
};

const passwordRules: PasswordRules = {
  length: { min: 8 },
  lowercase: /[a-z]/,
  uppercase: /[A-Z]/,
  digit: /\d/,
  special: /[!@#$%^&*(),.?":{}|<>]/,
};

type Props = {
  route: string;
};
const SignUp = ({ route }: Props) => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [cPassword, setCpassword] = useState("");
  const [showCpassword, setShowCpassword] = useState(false);

  // const [error, setError] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [countryCode, setCountryCode] = useState("+91"); // Default country code
  // const [countryCodeDrop, setCountryCodeDrop] = useState([]);
  const [passwordError, setPasswordError] = useState("");

  // useEffect(() => {
  //   GetDropdownDetails('countryCode', (res: any) => {
  //     // console.log('County',res?.data)
  //     setCountryCodeDrop(res?.data?.values)
  //   })
  // }, [])



  // Password Validation
  const validatePassword = (password: string): string | undefined => {
    if (password.length < passwordRules.length.min) {
      return "Password must be at least 8 characters long.";
    }
    if (!passwordRules.lowercase.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!passwordRules.uppercase.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!passwordRules.digit.test(password)) {
      return "Password must contain at least one digit.";
    }
    if (!passwordRules.special.test(password)) {
      return "Password must contain at least one special character.";
    }
    return undefined;
  };

  // const validatePasswords = () => {
  //   if (password !== cPassword) {
  //     setError("Passwords do not match");
  //   } 
  //   else {
  //     setError("");
  //   }
  // };
  // const validatePasswords = () => {
  //   return password === cPassword;
  // };


  const validatePhoneLength = (phone: string, countryCode: any) => {
    const normalizedCountryCode = countryCode.toLowerCase();


    const rule = phoneLengthRules[countryCode];


    if (!rule) return true;
    const phoneWithoutCountryCode = phone.replace(`+${countryCode}`, "");


    return (
      phoneWithoutCountryCode.length >= rule.min &&
      phoneWithoutCountryCode.length <= rule.max
    );
  };

  const handlePhoneChange = (value: string, country: any) => {
    setPhone(value);
    setCountryCode(country.countryCode);

    const isValid = validatePhoneLength(value, country.countryCode);
    setIsValidPhone(isValid);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

      // Email validation check
      if (!emailPattern.test(email)) {
        toast.error("Please enter a valid email address.");
        return;
      }

      if (!isValidPhone) {
        toast.error("Phone number is not valid according to the selected country.");
        return;
      }

      // Validate password
      const passwordValidationError = validatePassword(password);

      if (passwordValidationError) {
        toast.error('Password must contain at A,a,1,@ character')

        setPasswordError(passwordValidationError);

        return;
      }
      if (password !== cPassword) {
        // if(!validatePasswords){
        toast.error("Passwords do not match");
      }
       if (!termsAccepted) {
        toast.error("You must accept the terms and conditions");
        return;
      }
       else {
        let data = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phone,
          password: password,
          role: route == 'candidate' ? 'CANDIDATE' : 'RECRUITER'
        }
        const response = await SignupData(data);
        console.log('res', response)
        if (response?.status == 200) {
          toast.success('Register successfully')
          if (route == 'candidate') {
            router.push("/candidate");
          } else {
            router.push("/recruiter");
          }

        } else {
          toast.error('Register failed')
        }
      }

    } catch (error) {
      console.log("err", error);
      toast.error("Registration failed. Please try again.");

    }

  };

  return (
    <div className="flex flex-col">
      <LoginHeader />
      <div className=" flex items-center justify-center bg-[#EAEAEA] ">
        <div className="flex w-full h-auto md:overflow-hidden bg-[#EAEAEA]">
          <LoginImg />

          {/* Sign-Up Form Section */}
          <div className="w-full flex flex-col items-center justify-center md:w-1/2  bg-[#EAEAEA]   ">
            <h2 className="mt-4 mb-2 text-[30.52px] leading-[45.79px] font-semibold text-center ">
              Sign In as {route == 'candidate' ? 'Candidate' : 'Recruiter'}
            </h2>
            <p className="text-center text-[18px] leading-[27px] text-[#333333] w-[70%]">
              Enter your credential to access your account.
            </p>
            <form
              onSubmit={handleSubmit}
              className="w-[70%]"
            >
              <div className="mb-1 mt-2 flex flex-wrap w-full lg:flex-nowrap lg:space-x-2">
                <div className="w-full lg:w-[50%] mb-2">

                  <label
                    className="block mb-1 text-[16px] leading-[24px] font-[500] text-[#333333]"
                    htmlFor="userName"
                  >
                    First Name
                  </label>
                  <div className="relative flex items-center pl-8 ">
                    <input
                      id="userName"
                      type="text"
                      value={firstName}
                      onChange={(e) => {
                        // Allow only alphabetic characters and spaces
                        const value = e.target.value;
                        if (/^[a-zA-Z\s]*$/.test(value)) {
                          setFirstName(value.trimStart());
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
                      className="w-full px-3 h-[42px] leading-[21.79px] text-[16px] text-[#333333] border rounded-lg focus:outline-none focus:shadow-outline"
                      placeholder="Enter First Name"
                      required
                    />
                    <span className="absolute inset-y-0 left-0 flex items-center p-3 bg-[#00A264] text-white rounded-l-md">
                      <FaRegUser />
                    </span>
                  </div>
                </div>

                <div className="w-full lg:w-[50%] mb-1">
                  <label
                    className="block mb-1 text-[16px] leading-[24px] font-[500] text-[#333333]"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <div className="relative flex items-center pl-8 ">
                    <input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => {
                        // Allow only alphabetic characters and spaces
                        const value = e.target.value;
                        if (/^[a-zA-Z\s]*$/.test(value)) {
                          setLastName(value.trimStart());
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
                      className="w-full px-3 h-[42px] leading-[21.79px] text-[16px] text-[#333333] border rounded-lg focus:outline-none focus:shadow-outline"
                      placeholder="Enter Last Name"
                      required
                    />
                    <span className="absolute inset-y-0 left-0 flex items-center p-3 bg-[#00A264] text-white rounded-l-md">
                      <FaRegUser />
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-1">
                <label
                  className="block mb-1 text-[16px] leading-[24px] font-[500] text-[#333333]"
                  htmlFor="email"
                >
                  Enter Registered Email
                </label>
                <div className="relative flex items-center pl-8 ">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    // onChange={(e) => setEmail(e.target.value.trim())}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\s+/g, ''); // Removes all spaces
                      setEmail(value.toLowerCase()?.trim());
                    }}
                    onBlur={(e) => {
                      // Basic email validation
                      if (!e.target.validity.valid) {
                        toast.error("Please enter a valid email address.");
                      }
                    }}
                    // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="w-full px-3 h-[42px] leading-[21.79px] text-[16px] text-[#333333] border rounded-lg focus:outline-none focus:shadow-outline"
                    placeholder="Email"
                    required
                  />

                  <span className="absolute inset-y-0 left-0 flex items-center p-3 bg-[#00A264] text-white rounded-l-md">
                    <MdOutlineEmail />
                  </span>
                </div>
              </div>
              <div className="mb-1">
                <label
                  className="block mb-1 text-[16px] leading-[24px] font-[500] text-[#333333]"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <div className="relative flex items-center pl-8 ">
                  <div className="flex w-full">
                    {/* <select value={countryCode} className="border lg:h-10 rounded-lg w-[20%] py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" onChange={(e:any)=>setCountryCode(e.target.value)}>
                 {countryCodeDrop && countryCodeDrop?.map((code: any, index: number) => (
                    <option key={index} value={code}>{code?.toUpperCase()}</option>
                  ))}
                </select> */}
                    <select value={countryCode} className="border bg-white lg:h-10 rounded-lg w-[40%] sm:w-[20%] xl:w-[25%] py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" onChange={(e: any) => setCountryCode(e.target.value)}>
                      {countryCodeDrop && countryCodeDrop?.map((code: any, index: number) => (
                        <option key={index} value={code?.phoneCode}>{code?.flag + ' ' + code?.phoneCode?.toUpperCase()}</option>
                      ))}
                    </select>
                    <input
                      id="phone"
                      type="number"
                      value={phone}
                      maxLength={10}
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

                  <span className="absolute inset-y-0 left-0 flex items-center p-3 bg-[#00A264] text-white mr-2 rounded-l-md ">
                    <FaPhone />
                  </span>
                </div>
                {/* {!isValidPhone && <span className="text-red-500 text-sm mt-1">Invalid phone number for the selected country.</span>} */}

              </div>

              <div className="mb-1">
                <label
                  className="block mb-1 text-[16px] leading-[24px] font-[500] text-[#333333]"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative pl-8">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    // onChange={(e) => setPassword(e.target.value.trim())}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError("");
                    }}
                    className="w-full px-3 h-[42px] leading-[21.79px] text-[16px] text-[#333333] border rounded-lg focus:outline-none focus:shadow-outline"
                    placeholder="Password"
                    required
                  />

                  <span className="absolute inset-y-0 left-0 flex items-center p-3 bg-[#00A264] text-white rounded-l-md">
                    <MdOutlineLock />
                  </span>
                  <span
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <GoEye />
                  </span>
                </div>
              </div>

              <div className="mb-2">
                <label
                  className="block mb-1 text-[16px] leading-[24px] font-[500] text-[#333333]"
                  htmlFor="Password"
                >
                  Confirm Password
                </label>
                <div className="relative pl-8">
                  <input
                    id="Password"
                    type={showCpassword ? "text" : "password"}
                    value={cPassword}
                    onChange={(e) => setCpassword(e.target.value.trim())}
                    className="w-full px-3 h-[42px] leading-[21.79px] text-[16px] text-[#333333] border rounded-lg focus:outline-none focus:shadow-outline"
                    placeholder="Confirm Password"
                    required
                  />

                  <span className="absolute inset-y-0 left-0 flex items-center p-3 bg-[#00A264] text-white rounded-l-md">
                    <MdOutlineLock />
                  </span>
                  <span
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={() => setShowCpassword(!showCpassword)}
                  >
                    <GoEye />
                  </span>
                </div>
              </div>

              <div>
                {/* {error && <p style={{ color: "red" }}>{error}</p>} */}

                <button
                  type="submit"
                  className="w-full bg-[#00A264] hover:bg-green-700 text-white font-bold h-[42px] px-4 rounded focus:outline-none focus:shadow-outline mt-2"
                >
                  Sign Up
                </button>

                <div className="flex  items-center lg:justify-start gap-2 mt-2 ">

                  <div>
                    <input
                      id="termsAccepted"
                      type="checkbox"
                      className="h-4 w-4 text-[#00A264] focus:ring-green-800 border-gray-300 rounded"
                      checked={termsAccepted}
                      onChange={() => setTermsAccepted(!termsAccepted)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="termsAccepted"
                      className="block text-sm text-left  text-[16px] leading-[24px] text-[#333333]  "
                    >
                      You agree to our
                      <Link href="/terms" className="text-[#00A264] font-[500] hover:underline mx-1">
                        Teams & Conditions
                      </Link>
                      and{" "}
                      <Link href="/privacy-policy" className="text-[#00A264] font-[500] hover:underline ">
                        Privacy Policy.
                      </Link>
                    </label>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </form>

            <p className="text-center font-semibold mb-6 mt-2 text-[16px] leading-[24px] text-[#333333]">
              Already have on account?
              {route == 'candidate' ? <Link href="/candidate" className="text-[#00A264] font-[500] hover:underline ml-1">
                Sign In as Candidate
              </Link> : <Link href="/recruiter" className="text-[#00A264] font-[500] hover:underline ml-1">
                Sign In as Recruiter
              </Link>}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
