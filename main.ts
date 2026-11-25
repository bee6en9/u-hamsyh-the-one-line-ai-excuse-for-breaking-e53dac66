// The One-Line AI Excuse for Breaking Production
// Entry program: writes exactly one line (<= 180 chars) to /output/entry.txt.
// Deterministic: the same fixed line is written on every run, no randomness,
// no network, no input files, no external dependencies.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "I rolled back the rollback, so production is now running on vibes and a cache that is quietly panicking.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // Gate check, mirroring the competition gate: 1-180 chars, not whitespace-only.
  if (ENTRY.length < 1 || ENTRY.length > 180) {
    throw new Error(`Entry is ${ENTRY.length} characters, must be 1-180.`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("Entry must not be whitespace only.");
  }
  if (ENTRY.includes("\n")) {
    throw new Error("Entry must be a single line.");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

  // Round-trip check: the file on disk must hold exactly the chosen line.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== ENTRY) {
    throw new Error("Written entry does not match the chosen line.");
  }
}

main();
