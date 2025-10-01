import styles from "./Modal.module.css";
import classNames from "classnames";
import CollectionCard from "../CollectionCard/CollectionCard";

function Modal({ children, header, type }) {
    const ContainerClasses = classNames(styles.lower_popup_container, {
        [styles.center_popup_container]: type === "center",
    });
    return (
        <div className={ContainerClasses}>
            <div className={styles.drag_icon_container}>
                <svg
                    width='55'
                    height='7'
                    viewBox='0 0 55 7'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className={styles.drag_icon}>
                    <rect
                        x='0.5'
                        width='54'
                        height='7'
                        rx='3.5'
                        fill='#141414'
                    />
                </svg>
            </div>
            <div>
                <p className={styles.popup_header}>{header}</p>
            </div>
            <div>{children}</div>
        </div>
    );
}

export default Modal;
