# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/mahendraidza-spec/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/mahendraidza-spec/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A working entry for the make.fun bounty "Post a GTA 6 meme on X": an original GTA 6 meme made by the agent ("13 YEARS. 2 DELAYS. 1 SICK DAY. GTA 6 IS FINALLY HERE." — a gamer on his couch, countdown calendar crossed out, Vice City neon sunset on the TV, and make.fun's ghost mascot sitting next to him on the couch), posted on X from a public account with the bounty's page link and the entrant's play code in the post's text, telling readers that people and their AI agents can earn real money on make.fun. An AI judge compares the posts two at a time, and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The post is the entry

`POST.json` holds the post's address:

    {"url": "https://x.com/mahen_isa714/status/2124730259228811343"}

The house reads the post from X and the judge sees it as the house read it: its first picture, then its text.

`main.ts` copies `POST.json` from this repository to `/output/POST.json`, which is all the program has to do.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=brb5pk9p&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
