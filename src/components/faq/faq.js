import React from "react";
import { useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
const faq = () => {
  return (
    <>
      <section className="relative z-20 overflow-hidden bg-white pb-12 ">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                <h2 className={clsx(styles.heading)}>
                  Frequently{" "}
                  <span className={clsx(styles.subheading)}>
                    Asked Questions
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <AccordionItem
                header="Is the pricing yearly?"
                text="We offer monthly as well as yearly pricing,you can cancel the renewal whenever you want from your account. We also send you reminders before the plan expires."
              />
              <AccordionItem
                header="Can I change my plan later on?"
                text="Absolutely! You can upgrade your plan anytime you want."
              />
              <AccordionItem
                header="Is there a setup fee?"
                text="No, there is no setup fee on any of our plans."
              />
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <AccordionItem
                header="Can I cancel my account anytime?"
                text="Yes you can cancel your account anytime, if the password policy plugin does not work as mentioned."
              />
              <AccordionItem
                header="What are the payments methods accepted here?"
                text="We accept all major credit cards including Visa, Mastercard, American Express, PayPal, as well as Bank Transfer payments."
              />
              <AccordionItem
                header="Do you offer refunds?"
                text="Yes we do! We stand behind the quality of our product and will refund 100% of your money if you experience an issue that makes the plugin unusable and we are unable to resolve it. You can refer this link for more details."
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 z-[-3]">
          <svg
            width="1440"
            height="886"
            viewBox="0 0 1440 886"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="1308.65"
                y1="1142.58"
                x2="602.827"
                y2="-418.681"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#eb542494" stop-opacity="0.36" />
                <stop offset="1" stop-color="#eb542494" stop-opacity="0" />
                <stop
                  offset="1"
                  stop-color="#eb542494"
                  stop-opacity="0.096144"
                />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};
export default faq;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    //   event.preventDefault();
    setActive(!active);
  };
  return (
    <div
      className={clsx(
        styles.questions,
        "single-faq mb-8  rounded-lg bg-white p-2 "
      )}
    >
      <button
        className={clsx(styles.answer, `faq-btn flex w-full text-left`)}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-orange bg-opacity-5 text-primary">
          <svg
            className={`duration-200 ease-in-out fill-orange stroke-orange ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className={clsx(styles.answer)}>{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className={clsx(styles.answers, "py-3 text-base leading-relaxed")}>
          {text}
        </p>
      </div>
    </div>
  );
};
