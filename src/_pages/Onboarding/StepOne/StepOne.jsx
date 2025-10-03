"use client";
import StatusBar from "../../../_ui/StatusBar/StatusBar";
import styles from "./StepOne.module.css";
import illustrationone from "../../../assets/illustrationone.svg";
import Button from "../../../_ui/Button/Button";
import { useNavigate } from "react-router-dom";

export default function StepOne() {
    const navigate = useNavigate();
    const handleStartClick = () => {
        navigate("/StepTwo");
    };

    return (
        <div className={styles.page_container}>
            {/* Status Bar */}
            <StatusBar />

            {/* Content */}
            <div className={styles.page_content}>
                <h1 className={styles.page_title}>Welcome to</h1>
                <svg
                    className={styles.page_logo}
                    width='323'
                    height='39'
                    viewBox='0 0 323 39'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M0 38.9622V0H30.3236C34.4409 0 37.5759 0.890268 39.7267 2.6708C41.8046 4.37827 42.8425 6.82795 42.8425 10.0179C42.8425 14.4712 40.8204 17.4573 36.7782 18.9802C41.9334 20.28 44.5129 23.5085 44.5129 28.6655C44.5129 31.9304 43.4365 34.4551 41.2856 36.2356C39.0598 38.0546 35.8517 38.9622 31.6595 38.9622H0ZM14.466 14.4712H25.7605C27.5039 14.4712 28.3746 13.8232 28.3746 12.5234C28.3746 11.2235 27.502 10.5755 25.7605 10.5755H14.466V14.4712ZM14.466 28.3867H27.4308C29.1742 28.3867 30.0469 27.7387 30.0469 26.4388C30.0469 25.139 29.1742 24.491 27.4308 24.491H14.466V28.3867Z'
                        fill='#currentColor'
                    />
                    <path
                        d='M66.4882 38.9621H52.0222V0H77.7846C83.9047 0 88.5793 1.33636 91.8066 4.00716C94.9589 6.56836 96.537 10.241 96.537 15.0288C96.537 21.078 94.0517 25.3447 89.081 27.8309L96.537 38.9641H81.5136L75.5607 30.0576H66.4921V38.9641L66.4882 38.9621ZM66.4882 17.8111H78.2844C80.8062 17.8111 82.0671 16.8843 82.0671 15.0288C82.0671 13.1733 80.8062 12.2465 78.2844 12.2465H66.4882V17.813V17.8111Z'
                        fill='#currentColor'
                    />
                    <path
                        d='M145.223 0V11.1331H118.515V14.4731H144.666V24.4929H118.515V27.8329H145.223V38.966H104.049V0H145.223Z'
                        fill='#currentColor'
                    />
                    <path
                        d='M231.189 0L217.835 38.9622H198.36L190.57 16.2517L182.78 38.9622H163.304L149.951 0H164.975L173.599 25.1582L182.224 0H198.916L207.541 25.1582L216.165 0H231.189Z'
                        fill='#currentColor'
                    />
                    <path
                        d='M251.775 0V26.7177H274.032V38.9622H237.309V0H251.775Z'
                        fill='#currentColor'
                    />
                    <path
                        d='M322.996 0L303.244 26.3273V38.9622H288.778V26.3273L269.026 0H285.163L296.013 14.4712L306.864 0H323H322.996Z'
                        fill='#currentColor'
                    />
                </svg>

                {/* Illustration */}
                <div className={styles.page_illustration}>
                    <img
                        src={illustrationone}
                        alt='Beer can illustration'
                    />
                </div>
            </div>
            <Button
                type='primary'
                size='large'
                value='Start now'
                onClick={handleStartClick}
            />
        </div>
    );
}
