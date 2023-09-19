import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import clsx from "clsx";
function Hero() {
  return (
    <>
      <div className={clsx(styles.hero, "w-full py-5")}>
        <div className="">
          <div className="flex flex-col justify-start">
            <h1
              className={clsx(
                styles.heading,
                "py-2 pl-6  text-4xl leading-[1.4] pt-10 "
              )}
            >
              ProctoPress A WordPress
              <br />
              <span className="text-[#eb5424]">
                Online Exam Procotring Plugin For LMS
              </span>
            </h1>
            <div className="flex flex-col items-center ml-6">
              <p className={clsx(styles.contents)}>
                ProctoPress is a fully customizable plugin that can be used by
                educational institutions as well as corporations for monitoring
                candidates during online exams.
              </p>
              <div className="flex mt-4 space-x-6">
                <a rel="dofollow" href="https://wordpress.org/plugins/exam-and-quiz-online-proctoring-with-lms-integration/" target="_blank">
                <button
                  className={clsx(
                    styles.primarybtns,
                    "px-6 py-3 font-bold border border-solid border-[#eb5424] rounded-lg text-sm bg-[#ffffff]"
                  )}
                >
                  Download
                </button>
                </a>
                <a
                      href="https://mail.google.com/mail/u/0/?fs=1&amp;tf=cm&amp;source=mailto&amp;su=+WP+ProctoPress+Demo+Request&amp;to=securityteam@xecurify.com&amp;body=Hi+there,%0d%0a %0d%0a
                        First+ Name: %0d%0a %0d%0a
                        Last+ Name:  %0d%0a %0d%0a
                        Company:    %0d%0a  %0d%0a
                        Phone+ Number: %0d%0a %0d%0a
                        Requirements: %0d%0a %0d%0a
                        I+would+like+to+request+a+demo+for+ProctoPress+Plugin"
                      target="_blank"
                      rel="nofollow"
                    >
                <button
                  className={clsx(
                    styles.secondarybtn,
                    "px-6 py-3 font-bold border border-solid border-[#eb5424] rounded-lg text-sm bg-[#ffffff]"
                  )}
                >
                  Free Demo
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
