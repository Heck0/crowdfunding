import { useState } from "react";
import logo from "../assets/images/logo.svg";
import styles from "../styles/components/navbar.module.css";
import helpers from "../styles/helpers/helpers.module.css";
import HamburgerMenu from "./HamburgerMenu";
import Link from "./Link";

export type LinkInterface = {
  href: string;
  link: string;
};

const Navbar = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const links: LinkInterface[] = [
    { href: "/", link: "About" },
    { href: "/", link: "Discover" },
    { href: "/", link: "Get Started" },
  ];

  const handleMenu = (e: any) => {
    e.preventDefault();
    setMenuActive(!menuActive);
  };

  return (
    <nav className={`${helpers.container} ${styles.container}`}>
      <ul className={styles.list}>
        <a href="/">
          <img src={logo} alt="Logo du site" />
        </a>

        <div
          className={`${styles.links__container} ${
            menuActive && helpers.showContent
          }`}
        >
          {links.map(({ href, link }: LinkInterface) => {
            return <Link key={link} href={href} link={link} />;
          })}
        </div>

        <HamburgerMenu menuActive={menuActive} handleMenu={handleMenu} />
      </ul>
    </nav>
  );
};

export default Navbar;
