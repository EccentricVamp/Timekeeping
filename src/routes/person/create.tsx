/** @jsx h */
import { h } from "preact";
import { container, heading } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Person } from "@models/person.ts";

export const handler: Handlers = {
  async POST(req) {
    const data = await req.formData();
    let person = {};
    data.forEach((value, key) => person = {...person, [key]: value});
    await Person.create(person);
    return Response.redirect(new URL("/person", document.location.origin), 302);
  },
};

export default function Page(props: PageProps) {
  return (
    <main class={container()}>
      <h3 class={heading()}>Create person</h3>
      <form method="post">
        <label>
          ID
          <input name="id" type="number" required />
        </label>
        <label>
          First name
          <input name="firstName" type="text" maxLength={50} required />
        </label>
        <label>
          Last name
          <input name="lastName" type="text" maxLength={50} required />
        </label>
        <button>Submit</button>
      </form>
    </main>
  );
}
