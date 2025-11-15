// type: primary, secondary, warning
// disabled: boolean
// icon: icon
// size: small / default / large
// value: text
// onClick: function

import styles from "./Button.module.css";
import classNames from "classnames";

function Button({
    type,
    isDisabled = false,
    icon,
    size,
    value,
    onClick,
    className,
}) {
    const buttonClasses = classNames(
        styles.button,
        {
            [styles.small]: size === "small",
            [styles.large]: size === "large",
            [styles.primary]: type === "primary",
            [styles.secondary]: type === "secondary",
            [styles.terciary]: type === "terciary",
            [styles.disabled]: isDisabled,
            [styles.error]: type === "warning",
        },
        className
    );

    return (
        <input
            className={buttonClasses}
            type='button'
            value={value}
            onClick={onClick}
        />
    );
}

export default Button;
