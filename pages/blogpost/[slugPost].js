import React, { useEffect, useState } from 'react'
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs';

const SlugPost = (props) => {
  function createMarkup(c) {
    return {__html:c};
  }
  const [blog, setblog] = useState(props.myBlog);
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>{blog && blog.title}</h1>
          <hr width="50%"/>
          {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
        </main>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slugPost: 'howToLearnFlask'} },
      { params: { slugPost: 'howToLearnJs'} },
      { params: { slugPost: 'howToLearnNextJs'} },
    ],
    fallback: true
  };
}

export async function getStaticProps(context) {
  const { slugPost } = context.params;
  console.log(slugPost);

  let myBlog = await fs.promises.readFile(`blogData/${slugPost}.json`,'utf-8')
  console.log(myBlog);
  return {
    props: { myBlog: JSON.parse(myBlog) },
  }
}
export default SlugPost