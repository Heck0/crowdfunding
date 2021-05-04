import styles from "../styles/components/link.module.css";

type LinkProps = {
  href: string;
  link: string;
};

const Link = ({ href, link }: LinkProps) => {
  return (
    <li className={styles.item} key={link}>
      <a href={href} className={styles.link}>
        {link}
      </a>
    </li>
  );
};

export default Link;
