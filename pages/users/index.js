import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Post from "@/components/Post";

const inter = Inter({ subsets: ["latin"] });

export default function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li>
          <a href={"users/" + user.id}>{user.name}</a>
        </li>
      ))}
    </ul>
  );
}
export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_ENDPOINT}/users?page=1&per_page=20`);
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
