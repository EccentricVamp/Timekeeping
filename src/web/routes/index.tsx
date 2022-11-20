import { Container } from "components/container.tsx";
import { PageHeading } from "components/page-heading.tsx";

export default function Home() {
  return (
    <Container>
      <PageHeading value="Timekeeping" />
      <p class="my-3">
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
    </Container>
  );
}
