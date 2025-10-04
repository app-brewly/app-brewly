import Toggle from "../Toggle/Toggle";
import styles from "../SettingsOptions/SettingsOptions.module.css";

function SettingsOptions({
    type,
    icon_left,
    setting_title,
    toggle__type,
    onArrowClick,
}) {
    return (
        <div>
            {type === "dual_icon" && (
                <div className={styles.setting_row} onClick={onArrowClick}>
                    <div className={styles.left_icon}>{icon_left}</div>
                    <div className={styles.setting_title}> {setting_title}</div>
                    <div className={styles.right_icon}>
                        <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            >
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M6.27119 4.56514C6.52146 4.31488 6.92721 4.31488 7.17748 4.56514L10.3817 7.76933C10.6319 8.01959 10.6319 8.42535 10.3817 8.67561L7.17748 11.8798C6.92721 12.1301 6.52146 12.1301 6.27119 11.8798C6.02093 11.6295 6.02093 11.2238 6.27119 10.9735L9.02224 8.22247L6.27119 5.47142C6.02093 5.22116 6.02093 4.8154 6.27119 4.56514Z'
                                fill='#060606'
                            />
                        </svg>
                    </div>
                </div>
            )}
            {type === "single_icon" && (
                <div className={styles.setting_row}>
                    <div className={styles.left_icon}>{icon_left}</div>
                    <div className={styles.setting_title}>{setting_title}</div>
                </div>
            )}
            {type === "direct_action" && (
                <div className={styles.setting_action_row}>
                    <div className={styles.left_icon}>{icon_left}</div>
                    <div className={styles.setting_title}>{setting_title}</div>
                </div>
            )}
            {type === "toggle" && (
                <div className={styles.setting_row}>
                    <div>{icon_left}</div>
                    <div className={styles.setting_title}>{setting_title}</div>
                    <div className={styles.right_icon}>
                        <Toggle type={toggle__type} />
                    </div>
                </div>
            )}
            {type === "language" && (
                <div className={styles.setting_row}>
                    <div className={styles.left_icon}>{icon_left}</div>
                    <div className={styles.setting_title}> {setting_title}</div>
                    <div className={styles.language_icon_container}>
                        <p className={styles.language}>English</p>
                        <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.87079 5.01377L0.245789 1.38877C0.195789 1.33877 0.158301 1.2846 0.133301 1.22627C0.108302 1.16794 0.095795 1.10544 0.095795 1.03877C0.0957951 0.905437 0.141641 0.788771 0.233307 0.688771C0.324974 0.588772 0.445795 0.53877 0.595795 0.53877L8.1958 0.538771C8.3458 0.538771 8.46662 0.588768 8.55829 0.688768C8.64996 0.788768 8.6958 0.905437 8.6958 1.03877C8.6958 1.0721 8.64578 1.18877 8.54578 1.38877L4.92081 5.01377C4.83747 5.0971 4.75414 5.15544 4.67081 5.18877C4.58747 5.2221 4.49578 5.23877 4.39578 5.23877C4.29578 5.23877 4.20412 5.2221 4.12079 5.18877C4.03746 5.15544 3.95412 5.0971 3.87079 5.01377Z" fill="#125B48"/>
</svg>

                    </div>
                </div>
            )}
        </div>
    );
}
export default SettingsOptions;
