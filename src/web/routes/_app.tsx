import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";
import { tw } from "twind";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <title>Timekeeping</title>
      </Head>
      <body class={tw("text-slate-500 bg-slate-100")}>
        <Component />
      </body>
    </html>
  );
}
