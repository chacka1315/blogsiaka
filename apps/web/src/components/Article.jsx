import styles from '../styles/Article.module.css';
import { useParams } from 'react-router';
import Title from './Title';
import utils from '@siakablog/utils';
import api from '@siakablog/client';
import { useState, useEffect } from 'react';
import { HashLoader } from '@siakablog/ui';

const Article = function () {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await api.getPost(slug);
        setPost(data);
        setError(null);
      } catch (error) {
        setPost(null);
        setError(error.msg || 'A network error accountered.');
      } finally {
        setIsLoading(false);
      }
    };

    getPost();
  }, [slug]);

  return (
    <div className={styles.article_page}>
      <Title>{slug}</Title>
      {isLoading && (
        <div className={styles.loading}>
          <HashLoader color="#bf225a" />
        </div>
      )}
      {error && <p>{error}</p>}
      {post && (
        <>
          <section className={styles.article}>
            <p className={styles.date}>
              {utils.formatPostDate(post.publishedAt)}
            </p>
            <h1>{post.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className={styles.article_content}
            ></div>
          </section>
        </>
      )}
    </div>
  );
};

export default Article;
