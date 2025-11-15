"use client";
import styles from "./StepFive.module.css";
import StatusBar from "../../../_ui/StatusBar/StatusBar";
import illustration5 from "../../../assets/illustration5.svg";
import Button from "../../../_ui/Button/Button";
import { useNavigate } from "react-router-dom";

export default function StepFour() {
    const navigate = useNavigate();

    const handleSkip = () => {
        navigate("/AgeVerification");
    };
    

    return (
        <div className={styles.page_container}>
            {/* Status Bar */}
            <StatusBar />
            <button
                className={styles.skipButton}
                onClick={handleSkip}>
                Skip
                <svg
                    className={styles.icon}
                    width='13'
                    height='15'
                    viewBox='0 0 13 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M4.59999 7.5L0.724994 2.075C0.491661 1.74167 0.462494 1.39583 0.637494 1.0375C0.812494 0.679167 1.10833 0.5 1.52499 0.5C1.69166 0.5 1.84999 0.5375 1.99999 0.6125C2.14999 0.6875 2.26666 0.791667 2.34999 0.925L7.04999 7.5L2.34999 14.075C2.26666 14.2083 2.14999 14.3125 1.99999 14.3875C1.84999 14.4625 1.69166 14.5 1.52499 14.5C1.12499 14.5 0.833327 14.3208 0.649994 13.9625C0.466661 13.6042 0.491661 13.2583 0.724994 12.925L4.59999 7.5ZM10.55 7.5L6.67499 2.075C6.44166 1.74167 6.41249 1.39583 6.58749 1.0375C6.76249 0.679167 7.05833 0.5 7.47499 0.5C7.64166 0.5 7.79999 0.5375 7.94999 0.6125C8.09999 0.6875 8.21666 0.791667 8.29999 0.925L13 7.5L8.29999 14.075C8.21666 14.2083 8.09999 14.3125 7.94999 14.3875C7.79999 14.4625 7.64166 14.5 7.47499 14.5C7.07499 14.5 6.78333 14.3208 6.59999 13.9625C6.41666 13.6042 6.44166 13.2583 6.67499 12.925L10.55 7.5Z'
                        fill='#currentColor'
                    />
                </svg>
            </button>

            {/* Content */}
            <div className={styles.page_content}>
                <h1 className={styles.page_title}>
                    Create or own collections
                    <br /> to organize your experiences
                    <br /> and favourites beers.
                </h1>
            </div>

            {/* Illustration */}
            <div className={styles.page_illustration}>
                <img
                    src={illustration5}
                    alt='Beer drinking beer'
                />
            </div>

            {/* Progress Dots */}
            <div className={styles.dots}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot + " " + styles.active}></span>
            </div>

            {/* Button */}

            <Button
                type='primary'
                size='large'
                value='Start now'
                onClick={handleSkip}
            />
        </div>
    );
}
