import { Container } from "components/container.tsx";
import { PageHeading } from "components/page-heading.tsx";
import { Handlers, PageProps } from "fresh/server.ts";
import { Person } from "domain/models/person.ts";
import { tw } from "twind";

export const handler: Handlers = {
  async POST(req) {
    const data = await req.formData();
    let person = {};
    data.forEach((value, key) => person = { ...person, [key]: value });
    await Person.create(person);
    return Response.redirect(new URL("/person", document.location.origin), 302);
  },
};

export default function Page(props: PageProps) {
  const label = tw("block");
  const input = tw("mt-1 block bg-slate-100");
  return (
    <Container>
      <PageHeading value="Create person" />
      <form method="post" class={tw("grid gap-6 my-3")}>
        <label class={label}>
          ID
          <input name="id" type="number" class={input} required />
        </label>
        <label class={label}>
          First name
          <input
            name="firstName"
            type="text"
            class={input}
            maxLength={50}
            required
          />
        </label>
        <label class={label}>
          Last name
          <input
            name="lastName"
            type="text"
            class={input}
            maxLength={50}
            required
          />
        </label>
        <div class={tw("block mt-2")}>
          <button class={tw("bg-sky-400 text-white p-2 rounded")}>
            Submit
          </button>
        </div>
      </form>
    </Container>
  );
}
