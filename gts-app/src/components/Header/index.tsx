import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src="/logo.png" width="166" height="61" />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
