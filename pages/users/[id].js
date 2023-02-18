import { useRouter } from "next/router";
export default function User({ data }) {
  return (
    <div>
      <p>Name: {data.name}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://gorest.co.in/public/v2/users?page=1&per_page=20");
  const users = await res.json();

  // generate the paths
  const paths = users.map((user) => ({
    params: { id: user.id + "" },
  }));
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await fetch(`${process.env.API_ENDPOINT}/users/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
