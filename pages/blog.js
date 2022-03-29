import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from "next/link"
import * as fs from 'fs';
const Blog = (props) => {
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
                  <p>{blogItem.metadesc.substr(0,150)}...</p>
                  <hr />
              </div>
            )
          })
          }
        </main>
      </div>
    </div>
  )
};
export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogData");
  let myfile;
  let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
        console.log(item)
        myfile = await fs.promises.readFile(('blogData/' + item), 'utf-8')
        allBlogs.push(JSON.parse(myfile))
    }
    return {
      props: {allBlogs},
}
}
export default Blog