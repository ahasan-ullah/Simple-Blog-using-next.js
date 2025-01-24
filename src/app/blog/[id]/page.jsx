import Link from "next/link";

const page = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  if (!post.id) {
    return (
      <div className="mt-20 text-center min-h-screen">
        <h2 className="text-2xl font-semibold text-red-500">Post Not Found!</h2>
        <p className="text-gray-500 mt-2">
          The post you are looking for doesn't exist or was removed.
        </p>
      </div>
    );
  }

  return (
    <div className=" p-6 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg text-white">
        <div className="card-body p-8">
          <h1 className="card-title text-4xl font-extrabold mb-6">
            {post.title}
          </h1>
          <p className="text-lg leading-relaxed">{post.body}</p>
        </div>
      </div>

      <div className="mt-5 text-center">
        <Link
          href="/"
          className="btn"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default page;
