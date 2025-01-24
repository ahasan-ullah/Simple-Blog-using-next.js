import Link from "next/link";

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="my-20">
      <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
        {posts.map((post) => (
          <div key={post.id} className="card border">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>
                {post.body.length > 100
                  ? `${post.body.slice(0, 100)}...`
                  : post.body}
              </p>
              <div className="card-actions justify-end">
                <Link href={`/blogPage/${post.id}`} className="btn btn-neutral">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
