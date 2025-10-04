import styles from "./ArrowBack.module.css";
import { useNavigate } from "react-router-dom";

function ArrowBack() {
    const navigate = useNavigate();
    return (
        <div className={styles.arrow_container}>
            <svg
                className={styles.arrow_icon}
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                onClick={() => navigate(-1)}>
                <path
                    d='M3.4 9.075L8.3 13.975C8.5 14.175 8.59583 14.4083 8.5875 14.675C8.57917 14.9417 8.475 15.175 8.275 15.375C8.075 15.5583 7.84167 15.6542 7.575 15.6625C7.30833 15.6708 7.075 15.575 6.875 15.375L0.275 8.775C0.175 8.675 0.104167 8.56667 0.0625 8.45C0.0208333 8.33333 0 8.20833 0 8.075C0 7.94167 0.0208333 7.81667 0.0625 7.7C0.104167 7.58333 0.175 7.475 0.275 7.375L6.875 0.775C7.05833 0.591667 7.2875 0.5 7.5625 0.5C7.8375 0.5 8.075 0.591667 8.275 0.775C8.475 0.975 8.575 1.2125 8.575 1.4875C8.575 1.7625 8.475 2 8.275 2.2L3.4 7.075H14.575C14.8583 7.075 15.0958 7.17083 15.2875 7.3625C15.4792 7.55417 15.575 7.79167 15.575 8.075C15.575 8.35833 15.4792 8.59583 15.2875 8.7875C15.0958 8.97917 14.8583 9.075 14.575 9.075H3.4Z'
                    fill='#currentcolor'
                />
            </svg>
        </div>
    );
}

export default ArrowBack;
