export default function Comment(props) {
  const { body, name } = props;
  return (
    <div className="flex my-7 space-x-4">
      <img src="/favicon.ico" className="w-12" />
      <div className="flex flex-col">
        <p className="font-bold">{name}</p>
        <p className="text-md">{body}</p>
      </div>
    </div>
  );
}
