import { redirect } from "next/navigation";
import { fetchCommunityPosts } from "@/lib/actions/community";
import ThreadCard from "../cards/ThreadCard";
import { fetchUserPosts } from "@/lib/actions/user";
import { ICommunity, IThread, IUser } from "@/types/schema";

// interface Result {
//   name: string;
//   image: string;
//   id: string;
//   threads: {
//     _id: string;
//     text: string;
//     parentId: string | null;
//     author: {
//       name: string;
//       image: string;
//       id: string;
//     };
//     community: {
//       id: string;
//       name: string;
//       image: string;
//     } | null;
//     createdAt: string;
//     children: {
//       author: {
//         image: string;
//       };
//     }[];
//   }[];
// }

interface Props {
  currentUserId: string;
  accountId: string;
  accountType: string;
}

const ThreadsTab = async ({ currentUserId, accountId, accountType }: Props) => {
  let result: IUser;

  if (accountType === "Community") {
    result = await fetchCommunityPosts(accountId);
  } else {
    result = await fetchUserPosts(accountId);
  }

  if (!result) {
    redirect("/");
  }

  return (
    <section className="mt-9 flex flex-col gap-10">
      {result.threads.map((thread) => (
        <ThreadCard
          key={thread._id}
          id={thread._id}
          currentUserId={currentUserId}
          parentId={thread.parentId}
          content={thread.text}
          author={accountType === "User" ? result : thread.author}
          community={
            accountType === "Community"
              ? ({
                  name: result.name,
                  id: result.id,
                  image: result.image,
                } as ICommunity)
              : (thread.community as ICommunity)
          }
          createdAt={thread.createdAt}
          comments={thread.children}
        />
      ))}
    </section>
  );
};

export default ThreadsTab;
