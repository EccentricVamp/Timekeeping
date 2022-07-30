/** @jsx h */
import { h } from "preact";
import { container, heading, link, table, tableBody, tableData } from "../../style.ts";
import { Person } from "domain/models/person.ts";
import { Handlers, PageProps } from "fresh/server.ts";
import { tw } from "twind";

export const handler: Handlers<Person[]> = {
  async GET(_, ctx) {
    const people = await Person.all();
    return ctx.render(people);
  },
};

export default function Page({ data }: PageProps<Person[]>) {
  const td = tableData();
  return (
    <main class={container()}>
      <h3 class={heading()}>People</h3>
      <a href="/person/create" class={link()}>Create</a>
      <table class={table()}>
        <tbody class={tableBody()}>  
          {data.map((person) => (
            <tr>
              <td class={td}>{person.id}</td>
              <td class={td}>{person.lastName}</td>
              <td class={td}>{person.firstName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
