import styles from '../styles/Article.module.css';
import { useParams, Link, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import Title from './Title';
import utils from '@siakablog/utils';
import api from '@siakablog/client';
import { Button, HashLoader, LoaderCircle } from '@siakablog/ui';

const Article = function () {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [publishIsLoading, setPublishIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handlePublish = async () => {
    setPublishIsLoading(true);
    try {
      const upsatedPost = await api.changePostPublishStatus('publish', post.id);
      setPost(upsatedPost);
    } catch (error) {
      setError(error.msg || 'A network error encountered.');
    } finally {
      setPublishIsLoading(false);
    }
  };

  const handleUnpublish = async () => {
    setPublishIsLoading(true);
    try {
      const upsatedPost = await api.changePostPublishStatus(
        'unpublish',
        post.id,
      );
      setPost(upsatedPost);
    } catch (error) {
      setError(error.msg || 'A network error encountered.');
    } finally {
      setPublishIsLoading(false);
    }
  };

  const handleDelete = async () => {
    const consirmation = confirm('Do you realy want to delete this article?');
    if (!consirmation) return;

    try {
      await api.deletePost(post.id);
      navigate('/', { replace: true });
    } catch (error) {
      setError(error.msg || 'A network error encountered.');
    }
  };

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
          <HashLoader color="#000" />
        </div>
      )}
      {error && <p>{error}</p>}
      {post && (
        <>
          <section className={styles.article}>
            <p className={styles.date}>
              <>
                {post.published
                  ? ` Publihed at ${utils.formatPostDate(post.publishedAt)} ✅ `
                  : `Last modified ${utils.formatPostDate(post.updatedAt)} `}
                {post.published ? (
                  <Button
                    className={styles.unpublish_btn}
                    onClick={handleUnpublish}
                  >
                    {publishIsLoading ? <LoaderCircle /> : 'Unpublish'}
                  </Button>
                ) : (
                  <Button
                    className={styles.publish_btn}
                    onClick={handlePublish}
                  >
                    {publishIsLoading ? <LoaderCircle /> : 'Publish'}
                  </Button>
                )}
                <Link
                  to={`/updatepost/${post.slug}`}
                  className={styles.edit_link}
                >
                  Edit
                </Link>
                <Button className={styles.delete_btn} onClick={handleDelete}>
                  Delete
                </Button>
              </>
            </p>
            <h1>{post.title}</h1>
            <div
              className={styles.article_content}
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </section>
        </>
      )}
    </div>
  );
};

export default Article;
