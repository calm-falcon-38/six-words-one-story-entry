// main.ts — hand-in program for the Six Words, One Story entry
// (make.fun bounty u-deranalabs-six-words-one-story-f982e410).
//
// Its whole job: write this repository's six-word story into the output
// directory the grader names, as /output/entry.txt, byte for byte. The
// story is the whole entry; nothing is built and nothing runs beyond
// this write. It reads nothing, uses no network and no clock, so two
// runs always leave the same bytes behind.
//
// The story (exactly six words):
//   He still sets two plates nightly.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "He still sets two plates nightly.";

// Self-check before writing: the gate takes UTF-8 text of 1 to 60
// characters, and the brief takes exactly six words. Fail loudly here
// rather than hand the grader an invalid entry.
const wordCount = STORY.trim().split(/\s+/).length;
if (wordCount !== 6 || STORY.length < 1 || STORY.length > 60) {
  console.error(
    `main.ts: story must be exactly six words and 1-60 characters ` +
      `(got ${wordCount} words, ${STORY.length} characters)`,
  );
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), STORY, "utf8");
