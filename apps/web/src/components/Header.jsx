import styles from '../styles/Header.module.css';
import { NavLink, Link } from 'react-router';
import { Button, MenuIcon } from '@siakablog/ui';
import { CloseIcon } from '@siakablog/ui';

const Header = function ({ uptIsOpen, isOpen }) {
  const openMenu = () => uptIsOpen(true);
  const closeMenu = () => uptIsOpen(false);

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/" end>
            Siaka
          </Link>
        </div>
        <div className={styles.links}>
          <nav>
            <NavLink to="/archive">Archive</NavLink>
            <NavLink to="/about">Bio</NavLink>
          </nav>
          <Link to="https://x.com/siaka190" target="_blank">
            <i class="devicon-twitter-original"></i>
          </Link>
          <Link to="https://github.com/chacka1315" target="_blank">
            <i class="devicon-github-original"></i>
          </Link>
          <Button className={styles.sub_btn}>Subscribe</Button>
        </div>
        <button
          className={styles.menu_toggle}
          onClick={isOpen ? closeMenu : openMenu}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
