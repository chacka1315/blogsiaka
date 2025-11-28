import styles from '../styles/Header.module.css';
import { Link } from 'react-router';
import api from '@siakablog/client';
import { CircleUser, LogOut } from '@siakablog/ui';

const Header = function ({ user }) {
  const handleLogout = () => {
    api.logout();
    window.location.replace('/auth');
  };

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/" end>
            Siaka
          </Link>
        </div>
        <div className={styles.links}>
          <Link to="/newpost" className={styles.new_post_link}>
            New article
          </Link>
          <button className={styles.logout_btn} onClick={handleLogout}>
            Logout
            <LogOut />
          </button>

          <div className={styles.avatar}>
            {user.avatar ? (
              <img src={user.avatar} alt="avatar" />
            ) : (
              <CircleUser />
            )}
            <p>{user.username}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
