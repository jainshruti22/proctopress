import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from './styles.module.css';
import { FaArrowUp } from "react-icons/fa";

const Gototop = ()=>{
    const [isVisible, setIsVisible] = useState(false);
    const gotobtn = () => {
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    };
    const listenToScroll = () => {
        
        let heightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if(winScroll > heightToHidden){
           setIsVisible(true);
        }
        else{
           setIsVisible(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',listenToScroll);
        return () => window.removeEventListener("scroll",listenToScroll);
    }, []);
    return(
        <>
        {isVisible && (
        <div className={clsx(styles.topbtn)} onClick={gotobtn}>
            <FaArrowUp className={clsx(styles.topbtnicon)} />
        </div>
        )} 
        </> 
    );
};

export default Gototop;