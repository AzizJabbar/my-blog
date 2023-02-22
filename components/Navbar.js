import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  const isActive = (href) => {
    return router.pathname === href ? "font-bold" : "";
  };

  return (
    <nav className="bg-blue-500 text-white">
      <ul className="flex justify-center">
        <li className={`px-4 py-2 ${isActive("/posts")}`}>
          <a href="/posts">Posts</a>
        </li>
        <li className={`px-4 py-2 ${isActive("/users")}`}>
          <a href="/users">Users</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
