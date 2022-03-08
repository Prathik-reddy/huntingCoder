import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from "next/link"
const blog = () => {
  const [blog, setblog] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/Blogs').then((a) => {
      return a.json();
    })
      .then((parsed) => {
        console.log(parsed);
        setblog(parsed);
      })
  }, [])
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

export default blog