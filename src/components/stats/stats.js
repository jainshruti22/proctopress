import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import clsx from "clsx";

function Stats(){
    return(
<>

<div className={clsx(styles.ratings,"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4")}>
  <div className={clsx(styles.content, "col-span-1 md:col-span-2 lg:col-span-1 text-center")}>
    <div>
      <div className={clsx(styles.section)}>1100<span className={clsx(styles.orangetext)}> + </span></div>
      <p><a className={clsx(styles.text)}
        href="https://wordpress.org/plugins/exam-and-quiz-online-proctoring-with-lms-integration/advanced/"
        target="_blank">DOWNLOADS <i className="fas fa-external-link-alt"></i></a></p>
    </div>
  </div>
  <div className={clsx(styles.content, "col-span-1 md:col-span-2 lg:col-span-1 text-center")}>
    <div>
      <div className={clsx(styles.section, "font-bold")}>70<span className={clsx(styles.orangetext)}> + </span></div>
      <p><a className={clsx(styles.text)}
        href="https://wordpress.org/plugins/search/proctopress/"
        target="_blank">ACTIVE INSTALLS <i className="fas fa-external-link-alt"></i></a></p>
    </div>
  </div>
  <div className={clsx(styles.content, "col-span-1 md:col-span-2 lg:col-span-1 text-center")}>
    <div>
      <div className={clsx(styles.section, "font-bold")}>5.0<span className={clsx(styles.orangetext)}> * </span></div>
      <p><a className={clsx(styles.text)}
        href="https://wordpress.org/plugins/exam-and-quiz-online-proctoring-with-lms-integration/#reviews"
        target="_blank">WORDPRESS RATINGS <i className="fas fa-external-link-alt"></i></a></p>
    </div>
  </div>
  <div className={clsx(styles.content,"col-span-1 text-center")}>
    <div className={styles.sectionheader}>
      <a id="download_link" className={clsx(styles.texts)}
        href="https://wordpress.org/plugins/exam-and-quiz-online-proctoring-with-lms-integration/"
        target="_blank"><i className="fas fa-download"></i>&nbsp;Download Plugin</a>
    </div>
    <p className={clsx(styles.ribbontext)}><a className={clsx(styles.ribbontext)}
      href="https://wordpress.org/plugins/exam-and-quiz-online-proctoring-with-lms-integration/#reviews" target="_blank">SEE
      OUR REVIEWS <i className="fas fa-external-link-alt"></i></a></p>
  </div>
</div>
</>

    )
}
export default Stats;

export const stats = [
    {
      id: "stats-1",
      title: "Downloads",
      value: "3800+",
    },
    {
      id: "stats-2",
      title: "Active Installs",
      value: "230+",
    },
    {
      id: "stats-3",
      title: "WordPress Ratings",
      value: "$230M+",
    },
  ];
  