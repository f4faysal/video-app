import { InitialModals } from "@/components/modals/initia-modals";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { Profile } from "@prisma/client";
import { redirect } from "next/navigation";
export default async function Home() {
  const profile = (await initialProfile()) as Profile;

  const server = await db.server.findFirst({
    where: {
      member: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  console.log(profile);

  return <InitialModals />;
}
