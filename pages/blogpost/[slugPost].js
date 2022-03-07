import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css'
const slugPost = () => {
  const router = useRouter();
  const { slugPost } = router.query

  return (
    <>
      <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page : {slugPost}</h1>
        <hr />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id at totam consequatur nemo quidem quas suscipit architecto alias similique, ad autem odio sunt aut saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem asperiores quis voluptates praesentium delectus eveniet, minus inventore animi? Minus nulla dicta itaque dolor fuga delectus, deleniti veritatis, possimus saepe quia numquam ad modi doloribus illum.</p>
        </div>
      </main>
      </div>
    </>
  )
}

export default slugPost