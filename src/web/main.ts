import { start } from "fresh/server.ts";

import { RestoreSnapshot, setup, virtual } from "twind";
import presetTailwind from "@twind/preset-tailwind";
import presetTailwindForms from "@twind/preset-tailwind-forms";

import { database } from "infrastructure/database.ts";
import { Person } from "domain/models/person.ts";

import routes from "./fresh.gen.ts";

database.link([Person]);

const sheet = virtual()
setup({ presets: [presetTailwind(), presetTailwindForms()] }, sheet);

await start(routes, {
  render(ctx, innerRender) {
    const restore = ctx.state.get("twind") as RestoreSnapshot | null;
    if (restore != null) restore();
    innerRender();
    ctx.styles.splice(0, ctx.styles.length, ...sheet.target)
    ctx.state.set("twind", sheet.snapshot());
  }
});
