import React from "react";
import clsx from "clsx";
import styles from './styles.module.css';
const about = ()=>{
    return(
        <>
        <h2 className={clsx(styles.about,"pt-10")}>ProctoPress A Complete <span className={clsx(styles.abouts)}>Secure Proctoring Solution</span></h2>
      <div className="flex flex-col px-4 py-8 space-y-4 md:flex-row md:justify-center md:space-x-4 md:px-8 lg:pt-10">
    <div className="w-full bg-white p-4 md:w-1/2 md:p-6">
            <iframe className={clsx(styles.video)} src="https://www.youtube.com/embed/4Za91dGsxFQ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
    <div className="w-full bg-white p-4 md:w-1/2 ">
        <h3 className={clsx(styles.content)}>All About ProctoPress</h3>
        <p className={clsx(styles.contents,"mt-2")}>ProctoPress is a powerful online proctoring solution which integrates seamlessly with popular LMS such as MasterStudy, LearnPress,LearnDash, Tutor LMS etc. It provides various features such as real-time candidate monitoring, browser limitation, candidate authentication and many more. It provides a comprehensive solution for online exam administration, helping you maintain exam integrity and deliver a seamless user experience.</p>
    </div>
</div>





        </>
    )
}
export default about;