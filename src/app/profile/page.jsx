import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return (
      <div className="min-h-screen mt-20 text-center">
        <h1 className="text-3xl font-bold">You are not logged in</h1>
        <p className="text-gray-600 mt-4">
          Please log in to access your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-20 space-y-5 flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl font-bold">
        Welcome, {user.given_name} {user.family_name}!
      </h1>
      <p className="text-xl text-center">Email: {user.email}</p>
    </div>
  );
};

export default Page;
