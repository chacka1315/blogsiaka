import Header from './components/Header';
import Footer from './components/Footer';
import styles from './styles/App.module.css';
import { useState, useEffect } from 'react';
import api from '@siakablog/client';
import { LogIn, LogOut, CircleUser } from '@siakablog/ui';
import { NavLink, Link, Outlet } from 'react-router';
import { Button } from '@siakablog/ui';

const App = function () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <Header isOpen={isOpen} uptIsOpen={setIsOpen} />
      <Menu isOpen={isOpen} uptIsOpen={setIsOpen} />
      <main className={styles.main} style={isOpen ? { display: 'none' } : {}}>
        <Outlet />
      </main>
      {!isOpen && <Footer />}
    </div>
  );
};

function Menu({ isOpen, uptIsOpen }) {
  const closeMenu = () => uptIsOpen(false);

  return (
    <div
      className={
        isOpen ? `${styles.menu} ${styles.show_menu}` : styles.hide_menu
      }
    >
      <NavLink to="/archive" onClick={closeMenu}>
        Archive
      </NavLink>
      <NavLink to="/about" onClick={closeMenu}>
        Bio
      </NavLink>
      <Button className={styles.sub_btn}>Subscribe</Button>

      <Link to="https://x.com/siaka190" target="_blank" onClick={closeMenu}>
        <i class="devicon-twitter-original"></i>
        Twitter
      </Link>
      <Link
        to="https://github.com/chacka1315"
        target="_blank"
        onClick={closeMenu}
      >
        <i class="devicon-github-original"></i>
        Github
      </Link>
    </div>
  );
}
export default App;
