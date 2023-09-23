import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import AccountProfile from "@/components/forms/AccountProfile";
import { fetchUser } from "@/lib/actions/user";

const Page = async () => {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo = await fetchUser(user.id);

  if (userInfo?.onboarded) redirect("/");

  const userData = {
    id: user.id,
    objectId: userInfo?._id as string,
    username: userInfo ? userInfo?.username : user.username!,
    name: userInfo ? userInfo?.name : user.firstName ?? "",
    bio: userInfo ? userInfo?.bio : "",
    image: userInfo ? userInfo?.image : user.imageUrl,
  };

  return (
    <main className="flex flex-col justify-start max-w-3xl px-10 py-20 mx-auto">
      <h1 className="head-text">Onboarding</h1>
      <p className="text-base-regular text-light-2 mt-3">
        Complete your profile now, to use Threads.
      </p>

      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle="Submit" />
      </section>
    </main>
  );
};

export default Page;
