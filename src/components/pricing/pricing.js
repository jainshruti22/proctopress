import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { useState } from "react";

const Pricing = () => {
  const [isAnnually, setIsAnnually] = useState(true);
  
  return (
    <section className="relative z-20 overflow-hidden bg-white pt-10">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
            <h2
              className={clsx(
                styles.pricing,
                "mb-2 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]"
              )}
            >
              <span className={clsx(styles.pricing)}>Pricing</span>
              <span className={clsx(styles.plan)}> Plans</span>
            </h2>
            <br />
            <div className={clsx(styles.top)} id="pricing">
              <div class="toggle-btn">
                <span className={clsx(styles.toggles)}>Annually</span>
                <label className={clsx(styles.switch)}>
                  <input
                    type="checkbox"
                    id="checbox"
                    checked={isAnnually}
                    onChange={() => setIsAnnually(!isAnnually)}
                  />
                  <span className={clsx(styles.slider)}></span>
                </label>
                <span className={clsx(styles.toggles)}>Monthly</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center -mx-4">
          <div className="flex flex-wrap -mx-4">
            <PricingCard
              type="Free"
              price={isAnnually ? "$0" : "$0"}
              subscription={isAnnually ? "month" : "year"}
              buttonText={isAnnually ? "Download" : "Download"}
              linkUrl={isAnnually ? "https://wordpress.org/plugins/exam-and-quiz-online-proctoring-with-lms-integration/": "https://wordpress.org/plugins/exam-and-quiz-online-proctoring-with-lms-integration/"}
            >
              
              <br />
              <List><i class="fa fa-check-circle"></i>Browsing Limitation</List>

              <List>Integration with MasterStudy LMS</List>

              <List>Session Management</List>

              <List> Real time monitoring</List>

              <List className={clsx(styles.na)}>Candidate Authentication</List>

              <List>Record Candidate Videos and Review later</List>

              <List>Custom warning messages</List>

              <List>Branding and customization</List>

              <List>24/7 Support</List>
            </PricingCard>
            <PricingCard
              type="Premium"
              price={isAnnually ? "$49" : "$399"}
              subscription={isAnnually ? "month" : "year"}
              buttonText={isAnnually ? "Contact Us" : "Upgrade"}
              linkUrl={isAnnually ? "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=+Interested+in+purchasing+the+Premium+monthly+plan&to=securityteam@xecurify.com&body=Hi+there,%0d%0a %0d%0a First+ Name: %0d%0a %0d%0a Last+ Name:  %0d%0a %0d%0a Company:    %0d%0a  %0d%0a Phone+ Number: %0d%0a %0d%0a I+am+interested+in+purchasing+the+Premium+monthly+plan":"https://login.xecurify.com/moas/login?redirectUrl=https://login.xecurify.com/moas/initializepayment&amp;requestOrigin=wp_proctoring_premium_plan"}
              
            >
              <br />
              <List>Browsing Limitation</List>

              <List>Integration with MasterStudy LMS</List>

              <List>Session Management</List>

              <List> Real time monitoring</List>

              <List>Candidate Authentication</List>

              <List>Record Candidate Videos and Review later</List>

              <List>Custom warning messages</List>

              <List>Branding and customization</List>

              <List>24/7 Support</List>
            </PricingCard>
            <PricingCard
              type="Enterprise"
              price={isAnnually ? "$79" : "$499"}
              subscription={isAnnually ? "month" : "year"}
              buttonText={isAnnually ? "Contact Us" : "Upgrade"}
              linkUrl={isAnnually ? "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=+Interested+in+purchasing+the+Premium+monthly+plan&to=securityteam@xecurify.com&body=Hi+there,%0d%0a %0d%0a First+ Name: %0d%0a %0d%0a Last+ Name:  %0d%0a %0d%0a Company:    %0d%0a  %0d%0a Phone+ Number: %0d%0a %0d%0a I+am+interested+in+purchasing+the+Premium+monthly+plan":"https://login.xecurify.com/moas/login?redirectUrl=https://login.xecurify.com/moas/initializepayment&amp;requestOrigin=wp_proctoring_enterprise_plan"}
            >
              <br />
              <List>
                <i class="fa fa-check-circle"></i>Browsing Limitation
              </List>

              <List>Integration with MasterStudy LMS</List>

              <List>Session Management</List>

              <List> Real time monitoring</List>

              <List>Candidate Authentication</List>

              <List>Record Candidate Videos and Review later</List>

              <List>Custom warning messages</List>

              <List>Branding and customization</List>

              <List>24/7 Support</List>
            </PricingCard>
          </div>
        </div>
      </div>
      <div className={clsx(styles.pricingnote)} id="note">
        <p clasName={clsx(styles.notes)} styles={{ paddingTop: "10px" }}>
          For any customization related queries or if you require any
          assistance, email us at{" "}
          <span>
            <a
              href="securityteam@xecurify.com"
              target="_blank"
              class="text-blue"
            >
              securityteam@xecurify.com
            </a>
          </span>{" "}
          or call us at +1 9786589387.
        </p>
      </div>

      <div className={clsx(styles.paymentmethods, "pt-20")}>
        <div class="title text-center title-line">
          <h5 class="head">
            <span className={clsx(styles.pricing)}>Accepted </span>{" "}
            <span className={clsx(styles.plan)}> Payment Methods</span>
          </h5>
        </div>
        <br />
        <img
          className={clsx(styles.payment, "mx-auto  w-100")}
          src="https://plugins.miniorange.com/wp-content/uploads/2023/04/payment-scaled.webp"
          alt="Payment Icons"
        />
      </div>
    </section>
  );
};

export default Pricing;

const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  linkUrl,
  active,
}) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          className={clsx(
            styles.price,
            "relative z-10 px-8 py-10 mb-10 overflow-hidden bg-white border rounded-xl border-opacity-20 shadow-lg sm:p-8 lg:py-10 lg:px-6 xl:p-6"
          )}
        >
          <span
            className={clsx(
              styles.plans,
              "block mb-4 text-lg font-semibold text-primary"
            )}
          >
            {type}
          </span>
          <h2
            className={clsx(
              styles.cost,
              "mb-5 text-[42px] font-bold text-dark"
            )}
          >
            {price}
            <span className="text-base font-medium text-body-color">
              / {subscription}
            </span>
          </h2>
          <p className=" border-b border-[#F2F2F2]  text-base text-body-color">
            {description}
          </p>
          <ul className="mb-7">
            <p
              className={clsx(
                styles.features,
                "mb-1 text-base leading-loose text-body-color"
              )}
            >
              {children}
            </p>
          </ul>
          <a href={linkUrl} target="_blank" className={clsx(styles.buttons)}>
        {buttonText} </a>
          <div>
            <span className="absolute right-0 top-7 z-[-1]">
              <svg
                width={77}
                height={172}
                viewBox="0 0 77 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1={86}
                    y1={0}
                    x2={86}
                    y2={172}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#eb542494" stopOpacity="0.09" />
                    <stop offset={1} stopColor="#eb542494" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute right-4 top-4 z-[-1]">
              <svg
                width={41}
                height={89}
                viewBox="0 0 41 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="38.9138"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 38.9138 87.4849)"
                  fill="#eb5424"
                />
                <circle
                  cx="38.9138"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 38.9138 74.9871)"
                  fill="#eb5424"
                />
                <circle
                  cx="38.9138"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 38.9138 62.4892)"
                  fill="#eb5424"
                />
                <circle
                  cx="38.9138"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 38.9138 38.3457)"
                  fill="#eb5424"
                />
                <circle
                  cx="38.9138"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 38.9138 13.634)"
                  fill="#eb5424"
                />
                <circle
                  cx="38.9138"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 38.9138 50.2754)"
                  fill="#eb5424"
                />
                <circle
                  cx="38.9138"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 38.9138 26.1319)"
                  fill="#eb5424"
                />
                <circle
                  cx="38.9138"
                  cy="1.42021"
                  r="1.42021"
                  transform="rotate(180 38.9138 1.42021)"
                  fill="#eb5424"
                />
                <circle
                  cx="26.4157"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 26.4157 87.4849)"
                  fill="#eb5424"
                />
                <circle
                  cx="26.4157"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 26.4157 74.9871)"
                  fill="#eb5424"
                />
                <circle
                  cx="26.4157"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 26.4157 62.4892)"
                  fill="#eb5424"
                />
                <circle
                  cx="26.4157"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 26.4157 38.3457)"
                  fill="#eb5424"
                />
                <circle
                  cx="26.4157"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 26.4157 13.634)"
                  fill="#eb5424"
                />
                <circle
                  cx="26.4157"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 26.4157 50.2754)"
                  fill="#eb5424"
                />
                <circle
                  cx="26.4157"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 26.4157 26.1319)"
                  fill="#eb5424"
                />
                <circle
                  cx="26.4157"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 26.4157 1.4202)"
                  fill="#eb5424"
                />
                <circle
                  cx="13.9177"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 13.9177 87.4849)"
                  fill="#eb5424"
                />
                <circle
                  cx="13.9177"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 13.9177 74.9871)"
                  fill="#eb5424"
                />
                <circle
                  cx="13.9177"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 13.9177 62.4892)"
                  fill="#eb5424"
                />
                <circle
                  cx="13.9177"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 13.9177 38.3457)"
                  fill="#eb5424"
                />
                <circle
                  cx="13.9177"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 13.9177 13.634)"
                  fill="#eb5424"
                />
                <circle
                  cx="13.9177"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 13.9177 50.2754)"
                  fill="#eb5424"
                />
                <circle
                  cx="13.9177"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 13.9177 26.1319)"
                  fill="#eb5424"
                />
                <circle
                  cx="13.9177"
                  cy="1.42019"
                  r="1.42021"
                  transform="rotate(180 13.9177 1.42019)"
                  fill="#eb5424"
                />
                <circle
                  cx="1.41963"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 1.41963 87.4849)"
                  fill="#eb5424"
                />
                <circle
                  cx="1.41963"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 1.41963 74.9871)"
                  fill="#eb5424"
                />
                <circle
                  cx="1.41963"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 1.41963 62.4892)"
                  fill="#eb5424"
                />
                <circle
                  cx="1.41963"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 1.41963 38.3457)"
                  fill="#eb5424"
                />
                <circle
                  cx="1.41963"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 1.41963 13.634)"
                  fill="#eb5424"
                />
                <circle
                  cx="1.41963"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 1.41963 50.2754)"
                  fill="#eb5424"
                />
                <circle
                  cx="1.41963"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 1.41963 26.1319)"
                  fill="#eb5424"
                />
                <circle
                  cx="1.41963"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 1.41963 1.4202)"
                  fill="#eb5424"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const List = ({ children }) => {
  return (
    <>
      <p className="mb-1 text-base leading-loose text-body-color">{children}</p>
    </>
  );
};
