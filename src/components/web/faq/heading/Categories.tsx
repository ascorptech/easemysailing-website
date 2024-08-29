"use client"; // Ensure this is the first line

import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";

const Categories = () => {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const topics = [
    {
      id: 1,
      title: "Visa",
      questions: [
        {
          id: 1,
          question: "Value of EMS Coins?",
          answer:
            "Each EMS Coins holds the equivalent value of one US Doller in Services ",
        },
        {
          id: 2,
          question: "Can I delete a EMI Conis cart?",
          answer: "Yes, you can delete a Coins by...",
        },
        {
          id: 3,
          question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          answer:
            "Each EMS Coins holds the equivalent value of one US Doller in Services ",
        },
        {
          id: 4,
          question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          answer: "Yes, you can delete a Coins by...",
        },
        {
          id: 5,
          question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          answer:
            "Each EMS Coins holds the equivalent value of one US Doller in Services ",
        },
        {
          id: 6,
          question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          answer: "Yes, you can delete a Coins by...",
        },
      ],
    },
    {
      id: 2,
      title: "Job Search",
      questions: [
        {
          id: 1,
          question: "How do get a Job?",
          answer: "To Answer the Something",
        },
        {
          id: 2,
          question: "Can I track a phone?",
          answer: "Yes, you can track your Phone by... ",
        },
        {
          id: 3,
          question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          answer:
            "Each EMS Coins holds the equivalent value of one US Doller in Services ",
        },
        {
          id: 4,
          question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          answer: "Yes, you can delete a Coins by...",
        },
        {
          id: 5,
          question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          answer:
            "Each EMS Coins holds the equivalent value of one US Doller in Services ",
        },
        {
          id: 6,
          question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          answer: "Yes, you can delete a Coins by...",
        },
      ],
    },
    {
      id: 3,
      title: "Application Process",
      questions: [
        {
          id: 1,
          question: "What should I do if my payment fails?",
          answer: "If your payment fails, you should...",
        },
        {
          id: 2,
          question: "Can I get a refund?",
          answer: "Yes, you can request a refund by...",
        },
        {
          id: 3,
          question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          answer:
            "Each EMS Coins holds the equivalent value of one US Doller in Services ",
        },
        {
          id: 4,
          question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          answer: "Yes, you can delete a Coins by...",
        },
        {
          id: 5,
          question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          answer:
            "Each EMS Coins holds the equivalent value of one US Doller in Services ",
        },
        {
          id: 6,
          question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          answer: "Yes, you can delete a Coins by...",
        },
      ],
    },
    {
      id: 4,
      title: "Miscellaneous",
      questions: [
        {
          id: 1,
          question: "What should I do if my payment fails?",
          answer: "If your payment fails, you should...",
        },
        {
          id: 2,
          question: "Can I get a refund?",
          answer: "Yes, you can request a refund by...",
        },
        {
          id: 3,
          question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          answer:
            "Each EMS Coins holds the equivalent value of one US Doller in Services ",
        },
        {
          id: 4,
          question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          answer: "Yes, you can delete a Coins by...",
        },
        {
          id: 5,
          question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          answer:
            "Each EMS Coins holds the equivalent value of one US Doller in Services ",
        },
        {
          id: 6,
          question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          answer: "Yes, you can delete a Coins by...",
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
          <h2 className="text-xl text-white font-semibold mb-4 p-2 bg-green-700">
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
                    className="w-4 h-4 text-green-100 text-base"
                  />
                ) : (
                  <IoIosArrowForward
                    style={{ color: "green", fontSize: "24px" }}
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
            <div>
              {topics
                .find((topic) => topic.id === selectedTopic)
                ?.questions.map((question) => (
                  <div key={question.id}>
                    <button
                      className="flex items-center justify-between w-full text-left p-2 bg-green-100 mb-5 border-1"
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
        <button className="p-2 mb-3 bg-green-700 text-white rounded hover:bg-green-500 transition ">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Categories;
