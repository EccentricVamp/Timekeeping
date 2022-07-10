import { Handlers } from "$fresh/server.ts";
import { Person } from "@denodb";

export const handler: Handlers = {
  async POST(req: Request) {
    await Person.create([await req.json()]);
    return new Response();
  },
};
