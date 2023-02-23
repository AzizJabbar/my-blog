import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Post from "@/components/Post";
import { useState } from "react";
import { useRouter } from "next/router";
import AddUserModal from "@/components/AddUserModal";
import UpdateUserModal from "@/components/UpdateUserModal";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Users({ users, perPage, currPage }) {
  // Get current users
  const indexOfLastUser = currPage * perPage;
  const indexOfFirstUser = indexOfLastUser - perPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  console.log(currentUsers);
  const [data, setData] = useState(currentUsers);
  // if (data != currentUsers) {
  useEffect(() => {
    setData(currentUsers);
  }, [currPage]);
  // }

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
    // setData(currentUsers);
    // getServerSideProps();
  };

  const pagination = (page) => {
    router.push({
      pathname: router.pathname,
      query: { page: page, per_page: perPage },
    });
    setData(currentUsers);
  };
  const redirect = (id) => {
    router.push(`/users/${id}`);
  };
  async function handleSearchForm(event) {
    const value = event.target.value;
    if (value === "") {
      refreshData();
    } else {
      try {
        const response = await fetch(`https://gorest.co.in/public/v2/users/?name=${value}`);
        if (response.ok) {
          setData(await response.json());
          refreshData();
        } else {
          alert(`Error fetching data, code ${response.status}`);
        }
      } catch (error) {
        alert("Oops terjadi masalah pada server");
        console.log(error);
      }
    }
  }
  async function handleDeleteUser(id) {
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
      console.log(response);
      if (response.ok) {
        refreshData();
        alert("Success Delete User");
      } else {
        alert("Failed to delete user");
      }
    } catch (error) {
      alert("Error");
    }
  }

  return (
    <>
      <Navbar />
      <div className="mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Users List</h1>
        <div class="flex justify-center ">
          <div class="xl:w-96 bg-white rounded-full shadow-md p-2">
            <div class="relative flex w-full flex-wrap items-stretch ">
              <input
                type="search"
                class="relative m-0 block w-[1%] min-w-0 flex-auto rounded-full bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
                placeholder="Search user"
                name="search"
                onChange={handleSearchForm}
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <span class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200" id="basic-addon2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                  <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded mt-3 ">
          <AddUserModal />

          <table className="border-separate border-spacing-y-4 w-full md:text-md text-sm ">
            <thead>
              <tr className="border-b md:font-medium font-sm text-slate-800 text-left">
                <th className="py-3 pl-5">Username</th>
                <th className="py-3 md:table-cell hidden">Email</th>
                <th className="py-3 md:table-cell hidden">Gender</th>
                <th className="py-3 md:table-cell hidden">Status</th>
                <th className="text-center py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id} className="border-b border-slate-100">
                  <td className="pl-5">
                    {/* <a href={"users/" + user.id}>{user.name}</a> */}
                    {user.name}
                  </td>
                  <td className="md:table-cell hidden">{user.email}</td>
                  <td className="md:table-cell hidden">{user.gender}</td>
                  <td className="md:table-cell hidden">{user.status}</td>
                  <td className="flex space-x-3 justify-center">
                    <button className="bg-green-500 text-white p-2 rounded " onClick={() => redirect(user.id)}>
                      <FontAwesomeIcon icon={faEye} className="text-white" />
                    </button>
                    <UpdateUserModal data={user} />
                    <button className="bg-red-500 text-white p-2 rounded " onClick={() => handleDeleteUser(user.id)}>
                      <FontAwesomeIcon icon={faTrash} className="text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-8 flex-wrap">
            {Array.from({ length: Math.ceil(users.length / perPage) }, (_, i) => (
              // <Link href={{ pathname: "/users", query: { page: i + 1, per_page: perPage } }} key={i} passHref>
              <button onClick={() => pagination(i + 1)} className={`mx-2 py-2 px-4 rounded-full ${currPage === i + 1 ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-700"}`}>
                {i + 1}
              </button>
              // </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps({ query }) {
  const res = await fetch(`${process.env.API_ENDPOINT}/users?page=1&per_page=100`);
  const users = await res.json();

  // Get current page from query parameter or default to 1
  const currPage = query.page ? Number(query.page) : 1;
  const perPage = query.perPage ? Number(query.perPage) : 10;
  return {
    props: {
      users,
      currPage,
      perPage,
    },
  };
}
