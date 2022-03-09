import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from "next/link"
const blog = (props) => {
  console.log(props);
  const [blog, setblog] = useState(props.allBlogs);
  return (
    <div>
      <div className={styles.container}>
        <main className={styles.main}>

          {blog.map((blogItem) => {
            return (
              <div className={styles.blogItem} key={blogItem.slug}>
                <Link href={`/blogpost/${blogItem.slug}`}>
                  <h3>{blogItem.title}</h3></Link>
                  <p>{blogItem.content.substr(0,150)}...</p>
              </div>
            )
          })
          }
        </main>
      </div>
    </div>
  )
}
export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/Blogs')
  let allBlogs = await data.json();
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}
export default blog