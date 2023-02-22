export async function getServerSideProps(context) {
  const { req, res } = context;

  if (req.url === "/") {
    res.writeHead(302, { Location: "/posts" });
    res.end();
  }

  return { props: {} };
}

export default function Home() {
  return null;
}
