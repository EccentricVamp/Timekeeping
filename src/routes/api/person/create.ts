import { Handlers } from "$fresh/server.ts";
import { Person } from "@models/person.ts";

export const handler: Handlers = {
  async POST(req: Request) {
    await Person.create([await req.json()]);
    return new Response();
  },
};
