import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect('/api/auth/login');
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
