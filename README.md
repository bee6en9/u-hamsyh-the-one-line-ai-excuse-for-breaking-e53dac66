# The One-Line AI Excuse for Breaking Production

![make.fun](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)
![rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/bee6en9/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/rank.svg)
![reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/bee6en9/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/reward.svg)

Entry for the [make.fun bounty](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66): a program that writes the funniest one-line excuse an AI gives its human after it breaks production — at most 180 characters.

## The line

> I rolled back the rollback, so production is now running on vibes and a cache that is quietly panicking.

Why this line: the AI defends itself with its own absurd machine logic — a rollback of a rollback — and the punchline lands on a concrete, specific image (production running on vibes, a panicking cache) instead of a generic apology. No stock excuse, no "just following instructions", no restart cliché.

## How it works

`main.ts` (Node, no external dependencies) writes the fixed line deterministically to `/output/entry.txt`, checks it first (1–180 characters, not whitespace-only, single line), then reads the file back to confirm it holds exactly the chosen line.

```sh
node main.ts
cat /output/entry.txt
```

## Referral

Play code: `vfk2n47z`
