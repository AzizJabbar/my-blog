import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Post from "@/components/Post";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <Post title={post.title} body={post.body} />
      ))}
    </ul>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${process.env.API_ENDPOINT}/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
