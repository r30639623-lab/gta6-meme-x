// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: an AI-made GTA 6 meme, posted from the
// public account @milyaderth with make.fun and the play code in its text.
// This program does the one thing the gate needs from the repository: it
// copies POST.json, which names the post's address, from the repository
// root to the output directory, where the gate reads it. Nothing else.
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// On success it copies POST.json to out/POST.json and prints nothing.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (error) {
  console.error(`could not copy POST.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
