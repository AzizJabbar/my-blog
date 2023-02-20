import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Post from "@/components/Post";
import { useState } from "react";
import { useRouter } from "next/router";
import AddUserModal from "@/components/AddUserModal";
import UpdateUserModal from "@/components/UpdateUserModal";

const inter = Inter({ subsets: ["latin"] });

export default function Users({ users }) {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };
  async function deleteUser(id) {
    console.log(id);
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + "48f0213961ef4084e90f6cd03881e8b89903a733772d4fa9c471ec316bd8b126",
      },
    };
    try {
      const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, options);
      refreshData();
      alert("Success Delete User");
    } catch (error) {
      alert("Error");
    }
  }

  return (
    <div>
      <AddUserModal />
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <a href={"users/" + user.id}>{user.name}</a>
              </td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.status}</td>
              <td>
                <UpdateUserModal data={user} />
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
