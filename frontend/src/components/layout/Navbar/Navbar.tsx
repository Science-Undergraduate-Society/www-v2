import { NavbarDesktop } from "../NavbarDesktop/NavbarDesktop";
import { NavbarMobile } from "../NavbarMobile/NavbarMobile";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <header>
            <div className={styles.desktop}>
                <NavbarDesktop />
            </div>

            <div className={styles.mobile}>
                <NavbarMobile />
            </div>
        </header>
    );
};
