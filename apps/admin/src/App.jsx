import styles from './styles/App.module.css';
import Header from './components/Header';
import { Outlet, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import api from '@siakablog/client';

const App = function () {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      try {
        setIsLoading(true);
        const user = await api.getMe();
        if (user.role !== 'ADMIN') return navigate('/auth', { replace: true });
        setUser(user);
      } catch {
        navigate('/auth', { replace: true });
        console.log();
      } finally {
        setIsLoading(false);
      }
    }
    getUser();
  }, []);

  if (isLoading)
    return (
      <h2
        style={{
          width: '100vw',
          height: '100vh',
          paddingTop: '200px',
          textAlign: 'center',
        }}
      >
        Loading...
      </h2>
    );
  if (!user) return null;
  return (
    <div className={styles.layout}>
      <Header user={user} />
      <main className={styles.main}>
        <Outlet context={{ user }} />
      </main>
    </div>
  );
};

export default App;
