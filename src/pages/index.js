import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Footer from '../components/footer/footer';
import Hero from '../components/Hero/hero';
import Stats from '../components/stats/stats';
import Faq from '../components/faq/faq';
import Features from '../components/features/features';
import Pricing from '../components/pricing/pricing';
import Reviews from '../components/reviews/reviews';
import Lms from '../components/supportedlms/lms';
import About from '../components/about/about';
import Gototop from '../components/gototop/top';
import styles from './index.module.css';



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const featuresData = [
	{
		"leftNavTitle": "Browsing Limitation",
		"rightSection": {
			"content": "ProctoPress locks and restricts the test-taker actions during assessments, and ends the test if the test-taker navigates away from the test screen frequently.",
			// "image": <img src="https://plugins.miniorange.com/wp-content/uploads/2022/09/browser-limitation.webp"/>,
			// "actions": [
			// 	{
			// 		"text": "Learn More",
			// 		"action": "#"
			// 	}
			// ]
		}
	},
	{
		"leftNavTitle": "Real-time Candidate Monitoring",
		"rightSection": {
			"content": "One method used during assessments involves monitoring students' video and audio feeds, as well as utilizing image proctoring technology to identify any potentially problematic behavior. This helps to quickly identify and address any issues that may arise during the assessment process.",
			// "image": (<BenefitsLoadBalancing />),
			// "actions": [
			// 	{
			// 		"text": "Learn More",
			// 		"action": "#"
			// 	}
			// ]
		}
	},
	{
		"leftNavTitle": "Integration with popular LMS",
		"rightSection": {
			"content": "ProctoPress integrates with popular LMS such as LearnDash Tutor LMS, LearnPress, MasterStudy LMS etc.",
			// "image": (<BenefitsRateLimiting />),
			// "actions": [
			// 	{
			// 		"text": "Learn More",
			// 		"action": "#"
			// 	}
			// ]
		}
	},
	{
		"leftNavTitle": "Advanced Control Features",
		"rightSection": {
			"content": "If any cheating or misleading activity is suspected, ProctoPress raises an alert during the proctored assessment. If alerts continue, the proctor can pause or end the test, as well as the copy-paste functionality is disabled during the assessment.",
			// "image": (<AuthenticateAndAuthorize />),
			// "actions": [
			// 	{
			// 		"text": "Learn More",
			// 		"action": "#"
			// 	}
			// ]
		}
	},
	{
		"leftNavTitle": "Candidate Authentication",
		"rightSection": {
			"content": "ProctoPress has a candidate authentication process that involves verifying the identity of the test-taker during the registration stage. This step ensures that the individual taking the exam is the original candidate, thereby ensuring the integrity of the assessment process.",
			// "image": (<BenefitsAnalytics width="120" height="120" />),
			// "actions": [
			// 	{
			// 		"text": "Learn More",
			// 		"action": "#"
			// 	}
			// ]
		}
	},
	{
		"leftNavTitle": "Detailed Report",
		"rightSection": {
			"content": "At the end of the test, ProctoPress generates a detailed report that provides an in-depth analysis of the candidate’s performance during the test. It highlights if any sort of unusual activity took place during the proctored assessment.",
			// "image": (<APIAggregation />),
			// "actions": [
			// 	{
			// 		"text": "Learn More",
			// 		"action": "#"
			// 	}
			// ]
		}
	},
	{
		"leftNavTitle": "Data Storage And Review",
		"rightSection": {
			"content": "After the completion of the proctored assessment, real-time audio and video recording of the assessment are stored on the cloud. In case the admins want to review the cases again, they can do so.",
			// "image": (<ProtocolTransformation />),
			// "actions": [
			// 	{
			// 		"text": "Learn More",
			// 		"action": "#"
			// 	}
			// ]
		}
	},
	{
		"leftNavTitle": "Secure Data And Information",
		"rightSection": {
			"content": "ProctoPress may ask test-takers to share personal information for identity verification to prevent malpractices. However, the plugin ensures the protection of shared data.",
			// "image": (<APIAuthorizationBrokering />),
			// "actions": [
			// 	{
			// 		"text": "Learn More",
			// 		"action": "#"
			// 	}
			// ]
		}
	},
	{
		"leftNavTitle": "Branding",
		"rightSection": {
			"content": "Store frequently requested data in cache memory for faster access in subsequent requests. By caching responses, the gateway can reduce the number of requests forwarded to the backend services, thereby improving overall system performance and scalability.",
			// "image": (<Caching />),
			// "actions": [
			// 	{
			// 		"text": "Learn More",
			// 		"action": "#"
			// 	}
			// ]
		}
	}
]
  return (
    <Layout
      title="miniOrange"
      description="Description will go into a meta tag in <head />">
      <Hero/>
      <main>
        <About/>
        <Features
				featuresData={featuresData}
				cardExtraClasses="border-0 p-5 rounded-4 bg-white zIndex-1 position-relative h-max-content w-100" />
        <Lms/>
		<br/>
        <br/>
        <Reviews/>
        <Gototop/>
        <Footer/>
      </main>
    </Layout>
  );
}
