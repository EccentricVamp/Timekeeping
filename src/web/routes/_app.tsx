import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <title>Timekeeping</title>
      </Head>
      <body class="text-slate-500 bg-slate-100">
        <Component />
      </body>
    </html>
  );
}
