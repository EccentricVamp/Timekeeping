import { start } from "fresh/server.ts";
import twindPlugin from "fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
import manifest from "./fresh.gen.ts";

import { database } from "infrastructure/database.ts";
import { Person } from "domain/models/person.ts";

database.link([Person]);

await start(manifest, { plugins: [twindPlugin(twindConfig)] });
