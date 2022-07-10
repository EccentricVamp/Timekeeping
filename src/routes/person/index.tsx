/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Person } from "@denodb";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<Person[]> = {
  async GET(_, ctx) {
    const people = await Person.all();
    return ctx.render(people);
  },
};

export default function Page({ data }: PageProps<Person[]>) {
  return (
    <main class={tw`p-4 mx-auto max-w-screen-md`}>
      <h3 class={tw`text-xl font-medium`}>People</h3>
      <ul>
        {data.map((person) => <li>{person.Name}</li>)}
      </ul>
    </main>
  );
}
