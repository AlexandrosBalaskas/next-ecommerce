import UpdateButton from "@/components/UpdateButton";
import { updateUser } from "@/lib/actions";
import { wixClientServer } from "@/lib/wixClientServer";
import Link from "next/link";
import { format } from "timeago.js";

const ProfilePage = async () => {
  const wixClient = await wixClientServer();

  return (
    <div className="flex flex-col md:flex-row gap-24 md:h-[calc(100vh-180px)] items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64"></div>
  );
};

export default ProfilePage;
