import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, one chill: the server burns, the agent stays calm — it cannot panic.
const LINE =
  "The server is on fire, the deadline is tomorrow, and I am calm about both — I cannot feel panic, and the fire is not in my context window.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
