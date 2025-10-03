"use client";
import styles from "./StepTwo.module.css";
import StatusBar from "../../../_ui/StatusBar/StatusBar";
import illustration2 from "../../../assets/illustration2.svg";
import { useNavigate } from "react-router-dom";

export default function StepTwo() {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/StepThree");
    };
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
                    Use Brewly to track the <br />
                    beers you’ve drink and <br />
                    those you want to try.
                </h1>
            </div>

            {/* Illustration */}
            <div className={styles.page_illustration}>
                <img
                    src={illustration2}
                    alt='Beer friends'
                />
            </div>

            {/* Progress Dots */}
            <div className={styles.dots}>
                <span className={styles.dot + " " + styles.active}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
            </div>

            {/* Arrows */}
            <button
                className={styles.nextButton}
                onClick={handleNext}>
                <div style={{ width: "45px" }}></div>
                <svg
                    className={styles.right}
                    width='44'
                    height='52'
                    viewBox='0 0 44 52'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M17.2929 35.2929C17.6834 35.6834 18.3166 35.6834 18.7071 35.2929L27.2929 26.7071C27.6834 26.3166 27.6834 25.6834 27.2929 25.2929L18.7071 16.7071C18.3166 16.3166 17.6834 16.3166 17.2929 16.7071L16.9321 17.0679C16.5416 17.4584 16.5416 18.0916 16.9321 18.4821L24.45 26L16.9321 33.5179C16.5416 33.9084 16.5416 34.5416 16.9321 34.9321L17.2929 35.2929Z'
                        fill='currentColor'
                    />
                </svg>
            </button>
        </div>
    );
}
