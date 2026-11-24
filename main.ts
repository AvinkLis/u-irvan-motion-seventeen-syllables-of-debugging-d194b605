// Seventeen Syllables of Debugging — make.fun entry.
// Writes one haiku about debugging (three lines, 5-7-5 syllables,
// at most 200 characters) to entry.txt in the output directory.
//
// First draft was the oldest debugging story there is — green on the
// laptop, red in production ("The tests all pass now / on my machine,
// at midnight / the server says no"). It scanned and it was true, but
// the middle picture was a cliche and the turn was expected.
//
// Final pick, revised after the first run: a smaller, more concrete
// scene with a harder turn. A green build, one deleted line, and the
// last line reframing that deletion as structural damage.
//   The build is green now     (5)
//   I just deleted one line    (7)
//   that line held the roof    (5)
// No rubber duck (the field is full of ducks), no filler: every word
// is load-bearing, like the line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU = [
  "The build is green now",
  "I just deleted one line",
  "that line held the roof",
].join("\n");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), HAIKU, "utf8");
