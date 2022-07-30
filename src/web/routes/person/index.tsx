/** @jsx h */
import { h } from "preact";
import { container, heading } from "@twind";
import { Person } from "@models/person.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<Person[]> = {
  async GET(_, ctx) {
    const people = await Person.all();
    return ctx.render(people);
  },
};

export default function Page({ data }: PageProps<Person[]>) {
  return (
    <main class={container()}>
      <h3 class={heading()}>People</h3>
      <a href="/person/create">Create</a>
      <ul>
        {data.map((person) => <li>{person.firstName}</li>)}
      </ul>
    </main>
  );
}
