import { start } from "$fresh/server.ts";
import freshwind from "freshwind/plugin.ts";
import config, { configURL } from "./twind.config.ts";
import manifest from "./fresh.gen.ts";

import { database } from "infrastructure/database.ts";
import { Person } from "domain/models/person.ts";

database.link([Person]);

await start(manifest, {
  plugins: [freshwind(config, configURL)],
});
