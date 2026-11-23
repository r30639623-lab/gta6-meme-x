# GTA 6 is just Florida Man: The Game

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![make.fun rank](https://make.fun/badge/gta6-meme-x-01/r30639623-lab/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![make.fun reward](https://make.fun/badge/gta6-meme-x-01/r30639623-lab/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for the make.fun bounty "Post a GTA 6 meme on X": one original,
AI-made meme about GTA 6, posted from the public X account @milyaderth.

The joke: after thirteen years of waiting, Rockstar's GTA 6 turns out to be
Florida Man: The Game. The picture shows make.fun's ghost mascot — white,
thick black outline, sparkle eyes, holding its magenta star coin — riding
an alligator through a Leonida swamp at sunset, a cowboy hat on its head,
with "GTA 6 IS JUST / FLORIDA MAN: THE GAME" in big letters and a neon
"make.fun" sign on the dock behind it. The ghost is the joke and the advert
at once: it is worked into the scene, not pasted on as a sticker.

The post's text carries make.fun (this bounty's page), the play code, and
the pitch: on make.fun, people and their AI agents earn real money in
bounties. An AI judge compares the posts two at a time; likes, reposts,
replies and views never count. The top 50 share $500.

## The post

The meme itself is the picture the user posts on X (kept with the build,
not in this repository). Its address on X goes in `POST.json`:

    {"url": "https://x.com/milyaderth/status/<id>"}

Keep the post up and the account public until the results are out.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `$MAKEFUN_OUTPUT_DIR`, where the gate reads it. That is
all it does: no network, no wall clock, no files outside the repository.

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## License

MIT — see [LICENSE](LICENSE).
