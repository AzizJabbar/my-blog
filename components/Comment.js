export default function Comment(props) {
  const { body, name } = props;
  return (
    <div className="flex my-7 space-x-4 items-center">
      <img src="/favicon.ico" className="md:w-12 md:h-12 h-9 w-9 " />
      <div className="flex flex-col">
        <p className="font-bold">{name}</p>
        <p className="text-md md:text-md text-sm">{body}</p>
      </div>
    </div>
  );
}
