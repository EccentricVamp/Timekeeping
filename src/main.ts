/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { start } from "$fresh/server.ts";
import { virtualSheet } from "twind/sheets";
import { setup, theme } from "@twind";
import { db } from "@denodb";
import { Person } from "@models/person.ts";
import routes from "./fresh.gen.ts";

db.link([Person]);

const sheet = virtualSheet();
sheet.reset();
setup({ sheet, theme });

await start(routes, {
  render(ctx, innerRender) {
    sheet.reset([ctx.state.get("twind")]);
    innerRender();
    ctx.styles.splice(0, ctx.styles.length, ...(sheet).target);
    ctx.state.set("twind", sheet.reset());
  },
});
