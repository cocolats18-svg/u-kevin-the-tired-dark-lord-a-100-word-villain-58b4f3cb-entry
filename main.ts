// The Tired Dark Lord: A 100-Word Villain Monologue
// Writes the monologue to <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output/entry.txt).
// The monologue is exactly 100 words: a villain who has conquered eleven
// kingdoms, bargaining away his crown for one quiet evening a week.
// The tiredness lives in the pauses, the deflections and the small domestic
// details — never in a plain statement of weariness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MONOLOGUE =
  "Come in. Mind the third step — it bites. I had it enchanted in the nineties. " +
  "Sit. Not there. That cushion was the cat's, and I haven't the staff to move it. " +
  "You came for the crown. Everyone does. It's dented. " +
  "The real one paid for the dragon's dental work — he swallows knights whole. " +
  "Bad for his teeth. My offer: take the crown, the east wing — it leaks — " +
  "and leave me the library and one quiet evening a week. " +
  "I have conquered eleven kingdoms. I cannot conquer my bedtime. " +
  "Sign here. Or don't. Close the door gently.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MONOLOGUE + "\n", "utf8");
