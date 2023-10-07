import clsx from "clsx";
import styles from "./Button.module.css";

const Button = ({ children, className }) => {
  return <div className={clsx(styles.btn, className)}>{children}</div>;
};

export default Button;
