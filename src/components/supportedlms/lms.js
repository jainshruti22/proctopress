import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
const Lms = () => {
  return (
    <>
      <h2 className={clsx(styles.heading, "pt-20")}>
        <span className={clsx(styles.heading)}>Supported LMS By</span>
        <span className={clsx(styles.headings)}> ProctoPress </span>
      </h2>
      <div className="content-box plugin-password plugin-trial-content">
        <div className="content-body">
          <div className="title text-center title-line"></div>
          <br />
          <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
              <div className="col-md-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className={clsx(styles.lms, "text-center")}>
                    <img
                      className="login-forms-img img-fluid lazyload loaded"
                      src="https://plugins.miniorange.com/wp-content/uploads/2023/08/learndash.webp"
                      alt="Learn Dash"
                      width="60"
                      height="60"
                    />
                    <p className="">
                      <b className="caption">Learn Dash</b>
                    </p>
                  </div>
                  <div className={clsx(styles.lms, "text-center")}>
                    <img
                      className="login-forms-img img-fluid lazyload loaded"
                      src="https://plugins.miniorange.com/wp-content/uploads/2023/08/learnpress.webp"
                      alt="Learn Press"
                      width="60"
                      height="60"
                    />
                    <p className="">
                      <b className="caption">
                        Learn Press
                      </b>
                    </p>
                  </div>
                  <div className={clsx(styles.lms, "text-center")}>
                    <img
                      className="login-forms-img img-fluid lazyload loaded"
                      src="https://plugins.miniorange.com/wp-content/uploads/2023/05/tutor-lms.webp"
                      alt="Tutor LMS"
                      width="60"
                      height="60"
                    />
                    <p className="">
                      <b className="caption">Tutor LMS</b>
                    </p>
                  </div>
                  <div className={clsx(styles.lms, "text-center")}>
                    <img
                      className="login-forms-img img-fluid lazyload loaded"
                      src="https://plugins.miniorange.com/wp-content/uploads/2023/05/masterstudy.webp"
                      alt="Master Study"
                      width="60"
                      height="60"
                    />
                    <p className="">
                      <b className="caption">MasterStudy LMS</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <p className={clsx(styles.contact,"pt-10")}>
                    We support most of the Learning Management Systems
                    mentioned.
                  </p>
                  <p className={clsx(styles.contact)}>
                    <a
                      
                      href="https://mail.google.com/mail/u/0/?fs=1&amp;tf=cm&amp;source=mailto&amp;su=+WP+ProctoPress+Enquiry&amp;to=securityteam@xecurify.com&amp;body=Hi+there,%0d%0a %0d%0a
                        First+ Name: %0d%0a %0d%0a
                        Last+ Name:  %0d%0a %0d%0a
                        Company:    %0d%0a  %0d%0a
                        Phone+ Number: %0d%0a %0d%0a
                        I+would+like+to+get+guidance+for+ProctoPress+Plugin"
                      target="_blank"
                      rel="nofollow"
                    >
                      <button className={clsx(styles.contactus)}>
                        Contact Us
                      </button>
                    </a>
                  </p>
                  <p className={clsx(styles.contact)}>
                    If there is any other LMS you would like to use with the
                    plugin, please reach out to us by dropping a mail at{" "}
                    <a
                      href="mailto:securityteam@xecurify.com"
                      className="text-danger"
                    >
                      securityteam@xecurify.com
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className={clsx(styles.lmss, "text-center")}>
                    <img
                      className="forms-img img-fluid lazyload loaded"
                      src="https://plugins.miniorange.com/wp-content/uploads/2023/05/sensei-lms.webp"
                      alt="Sensei LMS"
                      width="60"
                      height="60"
                    />
                    <p className="">
                      <b className="caption">Sensei LMS</b>
                    </p>
                  </div>
                  <div className={clsx(styles.lmss, "text-center")}>
                    <img
                      className="login-forms-img img-fluid lazyload loaded"
                      src="https://plugins.miniorange.com/wp-content/uploads/2023/05/moddle.webp"
                      alt="moddle LMS"
                      width="60"
                      height="60"
                    />
                    <p className="">
                      <b className="caption">Moodle LMS</b>
                    </p>
                  </div>
                  <div className={clsx(styles.lmss, "text-center")}>
                    <img
                      className="login-forms-img img-fluid lazyload loaded"
                      src="https://plugins.miniorange.com/wp-content/uploads/2023/05/lifter.webp"
                      alt="Lifter LMS"
                      width="60"
                      height="60"
                    />
                    <p className="">
                      <b className="caption">Lifter LMS</b>
                    </p>
                  </div>
                  <div className={clsx(styles.lmss, "text-center")}>
                    <img
                      className="login-forms-img img-fluid"
                      src="https://plugins.miniorange.com/wp-content/uploads/2023/05/masteriyo.webp"
                      alt="Masteriyo LMS"
                      width="60"
                      height="60"
                    />
                    <p className="">
                      <b className="caption">Masteriyo LMS</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Lms;
