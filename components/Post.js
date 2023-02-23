import { useRouter } from "next/router";
export default function Post(props) {
  const { id, title, body, author } = props;
  const router = useRouter();
  function redirect(id) {
    router.push(`posts/${id}`);
  }

  return (
    <div onClick={() => redirect(id)} className="p-2 border md:p-4 mb-4 w-4/5 bg-white rounded-md min-h-44 h-max shadow-md hover:cursor-pointer hover:bg-gray-100">
      <h2 className="md:text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">Author: {author}</p>
      <p className="text-gray-600 text-sm md:text-md">{body.slice(0, 100)}...</p>
    </div>
  );
}
