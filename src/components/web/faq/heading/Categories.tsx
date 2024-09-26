"use client"; // Ensure this is the first line

import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";

const Categories = () => {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(1);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const topics = [
    // {
    //   id: 1,
    //   title: "Visa",
    //   questions: [
    //     {
    //       id: 1,
    //       question: "Value of EMS Coins?",
    //       answer:
    //         "Each EMS Coins holds the equivalent value of one US Doller in Services ",
    //     },
    //     {
    //       id: 2,
    //       question: "Can I delete a EMI Conis cart?",
    //       answer: "Yes, you can delete a Coins by...",
    //     },
    //     {
    //       id: 3,
    //       question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    //       answer:
    //         "Each EMS Coins holds the equivalent value of one US Doller in Services ",
    //     },
    //     {
    //       id: 4,
    //       question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    //       answer: "Yes, you can delete a Coins by...",
    //     },
    //     {
    //       id: 5,
    //       question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    //       answer:
    //         "Each EMS Coins holds the equivalent value of one US Doller in Services ",
    //     },
    //     {
    //       id: 6,
    //       question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    //       answer: "Yes, you can delete a Coins by...",
    //     },
    //   ],
    // },
    // {
    //   id: 2,
    //   title: "Job Search",
    //   questions: [
    //     {
    //       id: 1,
    //       question: "How do get a Job?",
    //       answer: "To Answer the Something",
    //     },
    //     {
    //       id: 2,
    //       question: "Can I track a phone?",
    //       answer: "Yes, you can track your Phone by... ",
    //     },
    //     {
    //       id: 3,
    //       question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    //       answer:
    //         "Each EMS Coins holds the equivalent value of one US Doller in Services ",
    //     },
    //     {
    //       id: 4,
    //       question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    //       answer: "Yes, you can delete a Coins by...",
    //     },
    //     {
    //       id: 5,
    //       question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    //       answer:
    //         "Each EMS Coins holds the equivalent value of one US Doller in Services ",
    //     },
    //     {
    //       id: 6,
    //       question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    //       answer: "Yes, you can delete a Coins by...",
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   title: "Application Process",
    //   questions: [
    //     {
    //       id: 1,
    //       question: "What should I do if my payment fails?",
    //       answer: "If your payment fails, you should...",
    //     },
    //     {
    //       id: 2,
    //       question: "Can I get a refund?",
    //       answer: "Yes, you can request a refund by...",
    //     },
    //     {
    //       id: 3,
    //       question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    //       answer:
    //         "Each EMS Coins holds the equivalent value of one US Doller in Services ",
    //     },
    //     {
    //       id: 4,
    //       question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    //       answer: "Yes, you can delete a Coins by...",
    //     },
    //     {
    //       id: 5,
    //       question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    //       answer:
    //         "Each EMS Coins holds the equivalent value of one US Doller in Services ",
    //     },
    //     {
    //       id: 6,
    //       question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    //       answer: "Yes, you can delete a Coins by...",
    //     },
    //   ],
    // },
    {
      id: 1,
      title: "Miscellaneous",
      questions: [
        {
          id: 1,
          question: "How does the platform help seafarers?",
          answer: "Our platform is built by seafarers, for seafarers, because we deeply understand the crucial role you play in keeping the world’s economy and global trade moving. We are here to create a powerful collective voice that truly reflects your efforts and dedication. Our goal is not just to connect you with opportunities but to ensure that your hard work, sacrifices, and contributions are acknowledged and celebrated on a global stage. We care about your well-being, and we’re committed to being a platform that stands up for the rights and recognition you deserve.",
        },
        {
          id: 2,
          question: "How does the platform support recruitment?",
          answer: "We believe that the journey to crew welfare starts with fair recruitment. You deserve a process that values your skills, experience, and future potential. That's why our platform is designed to help you make confident career decisions without fear or hesitation. When you trust us with your career, you’re trusting a platform that is fully committed to your best interests. Every step of our recruitment process is centered around ensuring that your career grows on your terms, with the respect and security you deserve.",
        },
        {
          id: 3,
          question: "How will creating my profile benefit me?",
          answer:"By creating your profile, you take the first step toward a career that aligns with your personal goals and aspirations. We use your profile to connect you with the best opportunities available, always ensuring that these opportunities match your terms. Your profile will be handled with utmost confidentiality and security, so you can trust that your career is in good hands as we work to find the right match for you.",
        },
        {
          id: 4,
          question: "Is the platform available for use right now?",
          answer: "At the moment, we are in the early stages of launching a minimal viable version of the platform. In just two months, you’ll have access to the full functionality, including recruitment services. Right now, you can explore the platform and create your profile to be ready when we go live. We’re excited to have you onboard and be part of our journey from the very beginning.",
        },
        {
          id: 5,
          question: "What makes this platform different from other seafarer recruitment sites?",
          answer:"Our platform is built on fairness, empowerment, and transparency, but what truly sets us apart is our genuine care for the seafarer community. We are more than just a recruitment site; we are a platform that is driven by the well-being and recognition of seafarers. Our focus is not only on matching candidates with opportunities but on making sure the process is respectful, transparent, and always in favor of what’s best for you.",
        },
        {
          id: 6,
          question: "Will I get updates about available job opportunities?",
          answer: "Absolutely. Once your profile is set up, we’ll ensure that you’re notified of job openings that match your qualifications and preferences. We are committed to keeping you in the loop, helping you find the right opportunities as soon as they become available, so you can make informed and timely career decisions.",
        },
        {
          id: 7,
          question: "How can I trust that my personal data is safe?",
          answer: "We take the security of your personal information very seriously. Your data is stored securely, and only authorized personnel have access to it. We understand how important your privacy is, and we are dedicated to ensuring that your personal details remain confidential and are only used for the purpose of connecting you with the right opportunities.",
        },
      ],
    },
  ];

  const handleTopicClick = (id: number) => {
    setSelectedTopic(selectedTopic === id ? null : id);
    setSelectedQuestion(null); // Reset selected question when changing topics
  };

  const handleQuestionClick = (id: number) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        {/* {/ Sidebar for Topics /} */}
        <div className="w-1/4 p-4 border-r">
          <h2 className="text-xl text-white font-semibold mb-4 p-2 bg-[#00A264]">
            Category Management
          </h2>
          {topics.map((topic) => (
            <div key={topic.id} className="border border-green-200  ">
              <button
                className="flex items-center justify-between w-full text-left p-2 hover:bg-green-100 "
                onClick={() => handleTopicClick(topic.id)}
              >
                <span className="text-black-600">{topic.title}</span>
                {selectedTopic === topic.id ? (
                  <IoIosArrowDown
                    style={{ color: "green", fontSize: "24px" }}
                    className="w-4 h-4 text-[#D1EFE4] text-base"
                  />
                ) : (
                  <IoIosArrowForward
                    style={{ color: "[#D1EFE4]", fontSize: "24px" }}
                    className="w-4 h-4"
                  />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* {/ Content Area for Topic Details /} */}
        <div className="w-3/4 p-4">
          {selectedTopic !== null && (
            <div className="">
              {topics
                .find((topic) => topic.id === selectedTopic)
                ?.questions.map((question) => (
                  <div key={question.id}>
                    <button
                      className="flex items-center justify-between w-full text-left p-2 bg-[#D1EFE4] mb-5 border-1"
                      onClick={() => handleQuestionClick(question.id)}
                    >
                      <span className="text-black-600">
                        {question.question}
                      </span>
                      {selectedQuestion === question.id ? (
                        <FaMinusCircle
                          style={{ color: "green", fontSize: "24px" }}
                          className="w-4 h-4"
                        />
                      ) : (
                        <FaCirclePlus
                          style={{ color: "green", fontSize: "24px" }}
                          className="w-4 h-4"
                        />
                      )}
                    </button>
                    {selectedQuestion === question.id && (
                      <div
                        className="p-4 bg-white  mb-5"
                        style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                      >
                        <p>{question.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <p className="mb-4 text-xl mr-2">Still have questions?</p>
        <button className="p-2 mb-3 bg-[#00A264] text-white rounded transition ">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Categories;
