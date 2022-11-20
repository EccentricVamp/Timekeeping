import { Container } from "components/container.tsx";
import { PageHeading } from "components/page-heading.tsx";
import { Table, TableBody, TableHead, TableRow } from "components/table.tsx";
import { Person } from "domain/models/person.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<Person[]> = {
  async GET(_, ctx) {
    const people = await Person.all();
    return ctx.render(people);
  },
};

export default function Page({ data }: PageProps<Person[]>) {
  return (
    <Container>
      <PageHeading value="People" />
      <a href="/person/create" class="text-sky-500">Create</a>
      <Table>
        <TableHead>
          <TableRow>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((person) => (
            <TableRow>
              <td>{person.id}</td>
              <td>{person.lastName}</td>
              <td>{person.firstName}</td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
