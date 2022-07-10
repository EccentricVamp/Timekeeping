/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <main class={tw`p-4 mx-auto max-w-screen-md`}>
      <h3 class={tw`text-xl font-medium`}>Timekeeping</h3>
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </main>
  );
}
