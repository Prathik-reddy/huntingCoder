import { useRouter } from 'next/router';
const slugPost = () => {
  const router = useRouter()
  const { slugPost } = router.query

  return <p>Post: {slugPost}</p>
}

export default slugPost