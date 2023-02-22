import Navbar from "@/components/Navbar";
import Comment from "@/components/Comment";
export default function Post({ data, comments }) {
  return (
    <>
      <Navbar />
      <div className="bg-white rounded shadow-md m-10 w-3/5 mx-auto p-10">
        <h1 className="text-4xl font-bold text-center mb-8">{data.title}</h1>
        <p className="text-sm text-center m-8 text-slate-500">Author: {data.user_id}</p>
        <p>{data.body}</p>

        <hr class="h-px my-8 bg-gray-200 border-0" />

        <h2 className="text-l font-bold mt-8">Comments</h2>
        {comments.map((comment) => (
          <Comment key={comment.id} body={comment.body} name={comment.name} />
        ))}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://gorest.co.in/public/v2/posts");
  const posts = await res.json();

  // generate the paths
  const paths = posts.map((post) => ({
    params: { id: post.id + "" },
  }));
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const res = await fetch(`${process.env.API_ENDPOINT}/posts/${id}`);
  const comments = await (await fetch(`${process.env.API_ENDPOINT}/posts/${id}/comments`)).json();
  const data = await res.json();
  return {
    props: {
      data,
      comments,
    },
  };
}
