import { currentProfile } from '@/lib/current-profile';

export async function POST(req: Request) {
     try {

          const { name, avatar } = await req.json()

          const profile = await currentProfile();

          if (!profile) {
               return new Response("Unauthorized", { status: 401 })
          }

          // const profile = await db.profile.create({
          //      data: {
          //           name,
          //           avatar
          //      }
          // })

     } catch (error) {
          console.log("[SERVER_POST]", error)
          return new Response("Internal error", { status: 500 })
     }
}