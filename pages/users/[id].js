import styles from "@/styles/Home.module.css";

export default function User({ data }) {
  return (
    <div className="mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">User Detail</h1>
      <div className="text-sm flex flex-col items-center bg-white rounded shadow-md w-80 mx-auto space-y-3 p-4">
        <table className="table-fixed border-separate border-spacing-3">
          <tbody>
            <tr>
              <td>ID</td>
              <td>:</td>
              <td className="w-2/5">{data.id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>:</td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>:</td>
              <td>{data.gender}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>:</td>
              <td>{data.email}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>:</td>
              <td>{data.status}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => (window.location.href = "/users")} className="bg-white rounded text-green-500 p-2">
          Back to list
        </button>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://gorest.co.in/public/v2/users");
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

export async function getStaticProps({ params }) {
  const id = params.id;
  const res = await fetch(`${process.env.API_ENDPOINT}/users/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
