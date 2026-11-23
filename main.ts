// gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json
// from the repository root to /output/POST.json, where the gate reads it.
// That is all the program has to do. The entry is the post itself: the meme
// was made by the agent, posted on X from a public account with make.fun
// (a link) and the play code in its text, POST.json names the post's address,
// and the house reads the post from X (its first picture and its text) and
// hands that to the judge. Nothing this program writes about the post is judged.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const srcPath = join(BOT_DIR, 'POST.json');
let post: unknown;
try {
  post = JSON.parse(readFileSync(srcPath, 'utf8'));
} catch (err) {
  console.error(`POST.json could not be read as JSON from ${srcPath}: ${(err as Error).message}`);
  process.exit(1);
}
// Fail loudly instead of shipping a bad entry: the post address must be
// an X status URL, https://x.com/<handle>/status/<digits>.
const url = (post as { url?: unknown }).url;
if (typeof url !== 'string' || !/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/.test(url)) {
  console.error(`POST.json does not name an X post URL: ${JSON.stringify(url)}`);
  process.exit(1);
}
try {
  copyFileSync(srcPath, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
// Confirm the round trip: what was written must be exactly what was read.
if (readFileSync(join(OUTPUT_DIR, 'POST.json'), 'utf8') !== readFileSync(srcPath, 'utf8')) {
  console.error('POST.json was not written completely');
  process.exit(1);
}
