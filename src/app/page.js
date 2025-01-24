const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>
      
    </div>
  );
};

export default page;
