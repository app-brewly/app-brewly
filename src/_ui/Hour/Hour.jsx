"use client";
import { useEffect, useState } from "react";
import styles from "./Hour.module.css";

const Hour = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    return <div className={styles.hour}>{formattedTime}</div>;
};

export default Hour;
