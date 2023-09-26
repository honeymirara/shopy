
import style from './style.module.css';
import Link from "next/link";


async function getData() {
  const response = await fetch(`http://jsonplaceholder.typicode.com/posts`, {
    next: {
      revalidate:60,
    }
  })

  return response.json()
}

export const metadata = {
  title: "Products | Next App",
};

export default async function Products() {
  const posts = await getData()


  return (
    <>
      <h1>Products page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title} </Link>
          </li>
        ))}
      </ul>
    </>
  )
}


