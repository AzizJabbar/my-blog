export default function Post(props) {
  const { title, body, author } = props;

  return (
    <div className=" border p-4 mb-4 w-4/5 bg-white rounded-md h-40 shadow-md hover:cursor-pointer hover:bg-gray-100">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">Author: {author}</p>
      <p className="text-gray-600">{body.slice(0, 100)}...</p>
    </div>
  );
}
