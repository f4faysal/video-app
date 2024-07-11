import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

export const currentProfile = async () => {
  const { userId }: { userId: string | null } = auth();

  if (!userId) {
    return null;
  }

  const profile = await db.profile.findUnique({
    where: {
      userId,
    },
  });

  return profile;
};
