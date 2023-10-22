import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

const Navbar = ({ data }) => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search data={data} placeholder="Search a album of your choice" />
      <Button>Feedback</Button>
    </nav>
  );
};

export default Navbar;
