import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css'
const slugPost = () => {

  const [blog, setblog] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if(!router.isReady){
      return;
    }
    const { slugPost } = router.query;
    // console.log("slug : "+slugPost);
    fetch(`http://localhost:3000/api/getBlog?slug=${slugPost}`).then((a) => {
      return a.json();
    })
      .then((parsed) => {
        setblog(parsed);
        // console.log(setblog);
      })
  }, [router.isReady])

  return (
    <>
      <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>
          <p>{blog && blog.content}</p>
        </div>
      </main>
      </div>
    </>
  )
}

export default slugPost