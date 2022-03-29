import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from "next/link"
import InfiniteScroll from 'react-infinite-scroll-component';
import * as fs from 'fs';
const Blog = (props) => {
  console.log(props);
  const [blog, setblog] = useState(props.allBlogs);
  const [count, setcount] = useState(2);
  const fetchMoreData = async () => {
    let d = await fetch(`http://localhost:3000/api/Blogs/?count=${count+2}`);
    setcount(count+2);
    let data = await d.json();
    setblog(data);

  };


  return (
    <div>
      <div className={styles.container}>
        <main className={styles.main}>


          <InfiniteScroll
            dataLength={blog.length} //This is important field to render the next data
            next={fetchMoreData}
            hasMore={props.allCount!==blog.length}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }>
            {blog.map((blogItem) => {
              return (
                <div className={styles.blogItem} key={blogItem.slug}>
                  <Link href={`/blogpost/${blogItem.slug}`}>
                    <h3>{blogItem.title}</h3></Link>
                  <p>{blogItem.metadesc.substr(0, 150)}...</p>
                  <hr />
                </div>
              )
            })
            }
          </InfiniteScroll>
        </main>
      </div>
    </div >
  )
};
export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogData");
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < 2; index++) {
    const item = data[index];
    console.log(item)
    myfile = await fs.promises.readFile(('blogData/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }
  return {
    props: { allBlogs ,allCount },
  }
}
export default Blog