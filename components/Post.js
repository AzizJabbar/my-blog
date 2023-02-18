export default function Post(props) {
  const { title, body, author } = props;

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}
