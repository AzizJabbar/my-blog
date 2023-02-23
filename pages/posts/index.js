import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Post from "@/components/Post";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts, perPage, currPage }) {
  // Get current posts
  const indexOfLastPost = currPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>

        <div className="flex flex-wrap justify-center gap-4">
          {currentPosts.map((post) => (
            <Post key={post.id} id={post.id} title={post.title} body={post.body} author={post.user_id} />
          ))}
        </div>

        <div className="flex justify-center mt-8 flex-wrap ">
          {Array.from({ length: Math.ceil(posts.length / perPage) }, (_, i) => (
            <Link href={{ pathname: "/posts", query: { page: i + 1, per_page: perPage } }} key={i} passHref>
              <button className={`mx-2 py-2 px-4 rounded-full ${currPage === i + 1 ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-700"}`}>{i + 1}</button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps({ query }) {
  // Fetch data from an API
  const res = await fetch(`https://gorest.co.in/public/v2/posts?page=1&per_page=50`);
  const posts = await res.json();

  // Get current page from query parameter or default to 1
  const currPage = query.page ? Number(query.page) : 1;
  const perPage = query.perPage ? Number(query.perPage) : 5;
  return {
    props: {
      posts,
      currPage,
      perPage,
    },
  };
}
