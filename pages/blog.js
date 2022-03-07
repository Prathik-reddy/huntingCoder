import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from "next/link"
const blog = () => {
  return (
    <div>
      <div className={styles.container}>
        <main className={styles.main}>
            <div className={styles.blogItem}>
             <Link href={"/blogpost/learn-javascript"}>
              <h3>How to learn javascript in 2022</h3></Link>
              <p>JavaScript is a language used to desing logic for the web</p>
            </div>

            <div className={styles.blogItem}>
             <Link href={"/blogpost/learn-javascript"}>
              <h3>How to learn javascript in 2022</h3></Link>
              <p>JavaScript is a language used to desing logic for the web</p>
            </div>

            <div className={styles.blogItem}>
             <Link href={"/blogpost/learn-javascript"}>
              <h3>How to learn javascript in 2022</h3></Link>
              <p>JavaScript is a language used to desing logic for the web</p>
            </div>
            

        </main>
      </div>
    </div>
  )
}

export default blog