import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy! Just choose a package and click 'Get Started' or fill out the contact form below. We'll reach out to you within 24 hours to transition your project.",
  },
  {
    question: "How does the process work?",
    answer:
      "Once you sign up, we'll set up a dedicated communication channel and a shared folder for your raw footage. You upload, we edit, and you get ready-to-post bangers.",
  },
  {
    question: "How do I send my footage?",
    answer:
      "You can send your footage through Google Drive, Dropbox, WeTransfer, or any cloud storage service you prefer. We'll provide a dedicated folder for organized asset management.",
  },
  {
    question: "What's included in the packages?",
    answer:
      "Each package includes high-quality video editing, trendy captions, B-roll integration, sound design, and revisions. The Pro package adds advanced motion graphics and transitions.",
  },
  {
    question: "How long does it take to edit my videos?",
    answer:
      "Turnaround time is typically 24-48 hours per video, depending on the complexity and current queue. We prioritize quality and speed for all our clients.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Absolutely! We offer unlimited revisions to ensure you are 100% satisfied with the final result. Your satisfaction is our top priority.",
  },
  {
    question: "What if I need more than 30 edits?",
    answer:
      "If you need more than the standard 30 edits per month, we can create a custom plan tailored to your high-volume requirements. Let's discuss your needs!",
  },
  {
    question: "What if I don't know which package is right for me?",
    answer:
      "No worries! Reach out through our contact form, and we'll guide you to the package that best fits your goals and business size.",
  },
  {
    question: "Do you manage posting, or just editing?",
    answer:
      "We primarily focus on professional video editing. However, our content management features include helping you organize and schedule your clips for posting.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely for your peace of mind.",
  },
];

const FaqItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div
      className={`border border-[var(--primary-text-color)] rounded-[12px] mb-3 overflow-hidden transition-all duration-300 ${isOpen ? "bg-[#000000]" : ""}`}
    >
      <button
        onClick={toggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left group"
      >
        <span className="text-[15px] md:text-[17px] font-bold text-[var(--text-color)]  transition-colors">
          {question}
        </span>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <Minus
              size={18}
              className={`text-[var(--primary-text-color)] transition-transform duration-300`}
            />
          ) : (
            <Plus
              size={18}
              className={`text-[var(--primary-text-color)] transition-transform duration-300`}
            />
          )}
        </div>
      </button>

      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[200px] pb-4 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="text-[var(--text-color)] text-[14px] leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FaqsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 px-4">
      <div className="container mx-auto max-w-[950px]">
        {/* Header Section */}
        <div className="text-center  relative">
          <div className="relative inline-block px-12">
            <h2 className="text-[40px] md:text-[60px] font-black uppercase text-[var(--text-color)] tracking-tight">
              FAQ'S
            </h2>
          </div>
        </div>

        {/* FAQ List */}
        <div className="mt-8">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
