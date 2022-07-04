/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { InnerRenderFunction, RenderContext, start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import { setup } from "@twind";
import { virtualSheet } from "twind/sheets";

const sheet = virtualSheet();
sheet.reset();
setup({ sheet });

function render(context: RenderContext, render: InnerRenderFunction) {
  const snapshot = context.state.get("twind") as unknown[] | null;
  sheet.reset(snapshot || undefined);
  render();
  context.styles.splice(0, context.styles.length, ...(sheet).target);
  const newSnapshot = sheet.reset();
  context.state.set("twind", newSnapshot);
}

await start(manifest, { render });
