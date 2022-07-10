/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { start } from "$fresh/server.ts";
import { virtualSheet } from "twind/sheets";
import { setup, theme } from "@twind";
import { DB } from "@denodb";
import { Person } from "@models/person.ts";
import routes from "./fresh.gen.ts";

DB.link([Person]);

const sheet = virtualSheet();
sheet.reset();
setup({ sheet, theme });

await start(routes, {
  render(ctx, render) {
    const snapshot = ctx.state.get("twind") as unknown[] | null;
    sheet.reset(snapshot || undefined);
    render();
    ctx.styles.splice(0, ctx.styles.length, ...(sheet).target);
    const newSnapshot = sheet.reset();
    ctx.state.set("twind", newSnapshot);
  },
});
