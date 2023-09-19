import React, { useState } from "react";
import Card from "../Card/Card";
import clsx from "clsx";
import styles from "./styles.module.css";

const Features = (props) => {
  const featuresContent = props.featuresData;

  const changeLeftNavActive = (leftNavActiveIndex) => {
    setActiveLeftNavItem(featuresContent[leftNavActiveIndex].leftNavTitle);
  };

  const [activeLeftNavItem, setActiveLeftNavItem] = useState(
    featuresContent[0].leftNavTitle
  );

  return (
    <>
      <h2 className={clsx(styles.features,"mt-10")}>Plugin <span className={clsx(styles.feature)}>Feature Highlights</span></h2>
      <p className={clsx(styles.subfeatures)}>See the features and benefits that make ProctoPress a powerful, easy-to-use proctoring plugin for WordPress.</p>
      <br/>
      <div className="bg-gray-900 overflow-hidden relative ">
        <div className="absolute top-0 right-0 hidden md:block">
          <img
            src="data:image/svg+xml,%3Csvg%20width%3D%22458%22%20height%3D%22436%22%20viewBox%3D%220%200%20458%20436%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Ccircle%20cx%3D%22350%22%20cy%3D%2286%22%20r%3D%22350%22%20fill%3D%22%23E67754%22%2F%3E%0A%3C%2Fsvg%3E"
            width={290}
            height={290}
            alt="ellipse"
            style={{"position": "unset"}}
          />
        </div>
        <div className="container py-5" style={{position:"relative",zIndex:"6"}}>
          <div className="flex flex-wrap mt-5">
            <div className="md:w-1/4 relative">
              <ul className=" py-2 text-white">
                {featuresContent.map((item, index) => (
                  <li
                    key={`feature-${index}`}
                    className={clsx(
                      styles.headers,
                      `border-start list-group-item border-0 bg-transparent ${
                        activeLeftNavItem === item.leftNavTitle
                          ? "text-white"
                          : "text-white-50 border-white border-opacity-50"
                      } px-3 py-3 cursor-pointer`
                    )}
                    onClick={() => changeLeftNavActive(index)}
                  >
                    {activeLeftNavItem === item.leftNavTitle && (
                      <div className="rounded-pill border-2 border-white border absolute left--2 top-0 h-full"></div>
                    )}
                    {item.leftNavTitle}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={clsx(styles.context, "md:w-3/4 md:pl-16 pt-4 md:pt-0")}
            >
              {featuresContent.map((item, index) => {
                if (item.leftNavTitle === activeLeftNavItem) {
                  return (
                    <Card
                      cardExtraClasses={props.cardExtraClasses}
                      key={`feature-desc-${index}`}
                    >
                      <div className="flex">
                        <div className="w-9/12">
                          <p className={clsx(styles.leading)}>
                            {item.rightSection.content}
                          </p>
                        </div>
                        <div className="w-3/12 flex justify-end items-center">
                          {item.rightSection.image} 
                        </div>
                      </div>
                      <div className="flex pt-2">
                        {item?.rightSection?.actions?.length > 0 &&
                          item.rightSection.actions.map((action, index) => (
                            <a
                              href={action.action}
                              key={`features-action-${index}`}
                              className="pr-3 text-primary"
                            >
                              {action.text}
                            </a>
                          ))}
                      </div>
                    </Card>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
