import styles from '../styles/About.module.css';
import Title from './Title';

const About = function () {
  return (
    <div className={styles.bio_page}>
      <Title>My bio</Title>
      <h1>I will write it soon...</h1>
    </div>
  );
};

export default About;
