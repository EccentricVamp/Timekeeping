/** @jsx h */
import { h } from "preact";
import { Head } from "fresh/runtime.ts"
import { tw } from "twind";
import { AppProps } from "fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <title>Timekeeping</title>
      </Head>
      <body class={tw`text-black dark:text-white bg-white dark:bg-black`}>
        <Component />
      </body>
    </html>
  );
}
