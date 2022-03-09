import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css'
const slugPost = (props) => {
  const [blog, setblog] = useState(props.myBlogs);
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

export async function getServerSideProps(context) {

  const { slugPost } = context.query;
  // console.log("slug : "+slugPost);
  let data = await fetch(`http://localhost:3000/api/getBlog?slug=${slugPost}`);
  let myBlogs = await data.json();
  return {
    props: { myBlogs }, // will be passed to the page component as props
  }
}
export default slugPost