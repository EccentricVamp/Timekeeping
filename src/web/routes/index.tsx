/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { container, heading } from "../style.ts";

export default function Home() {
  return (
    <main class={container()}>
      <h3 class={heading()}>Timekeeping</h3>
      <p class={tw("my-6")}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
    </main>
  );
}
