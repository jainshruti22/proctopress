import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const reviews = [
  {
    title:"Exceptional Solution for Proctored Exam/Quiz in Tutor LMS",
    text: "The Proctopress plugin for Tutor LMS is an absolute game-changer for our learning management platform. From the outset, the support team's attentiveness and technical prowess stood out, leading to a tailored solution for uploading and managing proctored videos and images on Google Drive while automatically clearing them from our website server.",
    href: "https://wordpress.org/support/topic/exceptional-solution-for-proctored-exam-quiz-in-tutor-lms/"
  },
  {
    title:"miniOrange Rocks",
    text: "As a non-profit organization who requires our certificants to be proctored during their certification exams, miniOrange has come through in big ways! They have been incredibly responsive and quick to help as needed. From providing cost-effective customizations and quick support, I cannot recommend them enough. Thank you from ICPM!!",
    href: "https://wordpress.org/support/topic/miniorange-rocks/"
  },
  {
    title:"Quick support",
    text: "Quick support They answered quickly and immediately offered to call about the errors, simultaneously providing solutions to the errors that have already occurred",
    href: "https://wordpress.org/support/topic/quick-support-111/"
  },
  {
    title:"Excellent Work",
    text: "The plugin is advanced and the amazing team can customize it based on your needs. Their professional work made me look to the other services on their website. Thank you",
    href: "https://wordpress.org/support/topic/excellent-work-324/"
  },
];
function testimonials() {
  return (
    <>
      <h2 className={clsx(styles.reviews)}>Testimonials</h2>
      <p className={clsx(styles.customer)}>What Our Happy Clients Say</p>
      <section className="text-gray-700 relative">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {reviews.map((review, index) => (
              <div key={index} className="p-4 md:w-1/2 w-full">
                <div className={clsx(styles.review, "h-full p-8 round")}>
                  <div className="flex">
                  <img
                    className="h-12 w-22"
                    src="https://plugins.miniorange.com/wp-content/uploads/2023/08/quotes.webp"
                  />
                  <h2 className={clsx(styles.context," mt-3")}>{review.title}</h2>
                  </div>
                  <p className={clsx(styles.customers, "font-semibold mb-6 mt-3")}>
                    {review.text}
                  </p>

                  <div className="inline-flex item-center">
                    {/* <img src=""class="w-12 h-12 rounded-full object object-cover"/> */}
                    <span className="flex flex-col">
                      <span
                        className={clsx(
                          styles.testimonials,
                          "font-bold text-eb5424-600"
                        )}
                      >
                        <a className={clsx(styles.testimonials)} href={review.href} target="_blank">Read More</a>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default testimonials;
