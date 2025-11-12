import styles from "./ProfileCover.module.css";
import profilepic from "../../assets/profilepic.jpg";
function ProfileCover({
    type,
    img_src,
    onImageClick,
    fullName,
    username,
    location,
}) {
    const imageSource = img_src || profilepic;

    return (
        <>
            {type === "regular" && (
                <div className={styles.profile_container}>
                    <div>
                        <img
                            src={imageSource}
                            alt='Profile'
                            className={styles.profile_image}></img>
                    </div>
                    <div className={styles.text_info}>
                        <p className={styles.full_name}>
                            {fullName || "User Name"}
                        </p>
                        <p className={styles.user_name}>
                            {username || "@username"}
                        </p>
                        <p className={styles.location}>
                            {location || "Vancouver, Canada"}
                        </p>
                    </div>
                </div>
            )}
            {type === "info" && (
                <div className={styles.profile_container}>
                    <div className={styles.image_container}>
                        <img
                            src={imageSource}
                            alt='Profile'
                            className={styles.profile_image}></img>
                        {onImageClick && (
                            <div
                                className={styles.change_image}
                                onClick={onImageClick}
                                role='button'
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        onImageClick();
                                    }
                                }}>
                                <svg
                                    width='20'
                                    height='20'
                                    viewBox='0 0 20 20'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <mask
                                        id='mask0_197_1187'
                                        maskUnits='userSpaceOnUse'
                                        x='0'
                                        y='0'
                                        width='20'
                                        height='20'>
                                        <rect
                                            width='20'
                                            height='20'
                                            fill='#D9D9D9'
                                        />
                                    </mask>
                                    <g mask='url(#mask0_197_1187)'>
                                        <path
                                            d='M2.50016 17.5002C2.04183 17.5002 1.64947 17.337 1.32308 17.0106C0.996691 16.6842 0.833496 16.2918 0.833496 15.8335V5.8335C0.833496 5.37516 0.996691 4.9828 1.32308 4.65641C1.64947 4.33002 2.04183 4.16683 2.50016 4.16683H5.12516L6.66683 2.50016H11.6668V4.16683H7.396L5.87516 5.8335H2.50016V15.8335H15.8335V8.3335H17.5002V15.8335C17.5002 16.2918 17.337 16.6842 17.0106 17.0106C16.6842 17.337 16.2918 17.5002 15.8335 17.5002H2.50016ZM15.8335 5.8335V4.16683H14.1668V2.50016H15.8335V0.833496H17.5002V2.50016H19.1668V4.16683H17.5002V5.8335H15.8335ZM9.16683 14.5835C10.2085 14.5835 11.0939 14.2189 11.8231 13.4897C12.5522 12.7606 12.9168 11.8752 12.9168 10.8335C12.9168 9.79183 12.5522 8.90641 11.8231 8.17725C11.0939 7.44808 10.2085 7.0835 9.16683 7.0835C8.12516 7.0835 7.23975 7.44808 6.51058 8.17725C5.78141 8.90641 5.41683 9.79183 5.41683 10.8335C5.41683 11.8752 5.78141 12.7606 6.51058 13.4897C7.23975 14.2189 8.12516 14.5835 9.16683 14.5835ZM9.16683 12.9168C8.5835 12.9168 8.09044 12.7154 7.68766 12.3127C7.28489 11.9099 7.0835 11.4168 7.0835 10.8335C7.0835 10.2502 7.28489 9.75711 7.68766 9.35433C8.09044 8.95155 8.5835 8.75016 9.16683 8.75016C9.75016 8.75016 10.2432 8.95155 10.646 9.35433C11.0488 9.75711 11.2502 10.2502 11.2502 10.8335C11.2502 11.4168 11.0488 11.9099 10.646 12.3127C10.2432 12.7154 9.75016 12.9168 9.16683 12.9168Z'
                                            fill='#141414'
                                        />
                                    </g>
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default ProfileCover;
