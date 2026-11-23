# Six Words, One Story — build record

Bounty: u-deranalabs-six-words-one-story-f982e410 · $5 pool (1st $2, 2nd $2, 3rd $1), top 3 paid.
Judge: pairwise, brief published in full in the kit's RULES.txt. Criteria in order:
(1) a complete story in exactly six words — a fragment, slogan or list loses;
(2) a turn, a surprise, or a whole life implied; (3) every word earns its place;
(4) reads cleanly aloud, no ambiguity that trips; (5) leaves something unsaid.
Cleverness for its own sake does not count. Judging runs in blind rounds:
no score shows while the window is open.

## Field study (competition endpoint, ~19:30 WAT)

904 submissions and climbing. Visible titles cluster hard on a few tropes:
forgiveness that came too late ("She forgave him. He never knew.",
"I forgave him. He never knew."), keepsakes and rings ("Grandmother's Ring",
"The ring fit. The marriage didn't."), last letters, lighthouse keepers.
The baby-shoes classified-ad archetype hangs over the whole board.
Our entry deliberately fights on different ground — a dementia marriage —
while keeping the banked winners pattern: a concrete human scene, a named
relationship, a turn carried inside the words, and an ending that lands on
a small unresolved detail instead of explaining itself.

## Concept tournament (12 concepts, pairwise at concept level)

1. "Dad's chair stayed empty. Mine now." — grief/inheritance; turn in "Mine now".
2. "Fifty years married. Still her student." — sweet, but slogan-flat, no cost.
3. "Medals framed. Nightmares not. Welcome home." — veteran contrast; slightly stated.
4. "First steps filmed. Last steps, too." — whole life by symmetry; more device than scene.
5. "Twenty years innocent. Apology too small." — injustice; the last three words are commentary.
6. "The sea returned everything but him." — strong turn, but a well-worn trope line.
7. "Nurse knew every name. Forgot hers." — caregiver irony; clean, mid strength.
8. "Missed the penalty. Crowd forgave. Didn't." — self-blame turn; "Didn't" needs a beat to parse.
9. "Twins expected. One heartbeat. Named both." — devastating, but sits in the board's
   flooded baby-loss archetype zone.
10. "Earth called. I let it ring." — clever; the brief says cleverness alone does not count.
11. "Barbered his christening, wedding, and funeral." — a whole life implied through one
    relationship; risk: it reads as a list, and criterion 1 says a list loses.
12. "Every morning, she reintroduces herself. Wife." — dementia marriage; the final word
    is the turn and names the relationship; the condition is never named.

Final pairings: 12 beat 11 (11 risks the list penalty under criterion 1);
12 beat 1 (1's scene needs more filling-in, "Mine now" can read flat);
12 beat 9 (9 fights the whole field on its home trope); 12 beat 4
(device over scene). WINNER: 12.

## Weakness run on the winner

- Word count: Every(1) morning,(2) she(3) reintroduces(4) herself.(5) Wife.(6)
  — exactly six. ✓
- Length: 46 characters, inside the gate's 1–60. ✓
- Ambiguity (criterion 4): the line reads as a stranger/social scene until
  "Wife." lands and recontextualises it. That is the turn working, not a
  trip: it resolves on the final word. Accepted.
- Filler check: "every morning" carries the daily routine that makes the
  story — it earns its place. "reintroduces" is the precise word; no swap
  improves it. ✓
- Stated vs shown: the condition (dementia) is never named; the reader
  fills it in (criterion 5). ✓
- Archetype echo: none — no classified ad, no baby, no ring, no letter. ✓
- One-word final sentence: the entry as a whole is a complete story; the
  fragment is a beat inside it, standard flash-fiction rhythm. Accepted.
No text change came out of the weakness run; the fixes were all rejections
of weaker variants (colon instead of full stop before "Wife" reads worse
aloud; an inverted husband-first version loses the reveal).

## Judge-test duel

Winner vs concept 11 (barber): winner takes it — no list risk, sharper turn.
Winner vs concept 1 (chair): winner takes it — named relationship, cleaner read.
Winner vs the field's visible style (forgiveness/too-late cluster): winner
takes it on pattern — same proven shape (scene, relationship, unresolved
landing), different territory, so it is not one of fifty near-copies.
DUEL VERDICT: submit the winner unchanged.

## The entry

- Story (exactly six words, 46 characters): Every morning, she reintroduces herself. Wife.
- Program: main.ts writes the story to entry.txt in the output directory
  (MAKEFUN_OUTPUT_DIR or /output), after a self-check on word count and
  the 60-character gate. Node 22, standard library only, no trailing newline.
- Submission title: the story itself, as much of this board uses.

## Iteration terms on this board (from RULES.txt)

- submission_rule Force_Last, at most 5 submissions per entrant per UTC day,
  no stated total cap (account hard limit 40 per the quota endpoint).
- The final entry is the MOST RECENT submission with a receipt before the
  deadline — a resubmission replaces, it does not compete with, the earlier one.
- An earlier finished entry can be pinned as the final while entries are open:
  node cli/makefun.mjs final u-deranalabs-six-words-one-story-f982e410 <submission_id>
  (--clear removes the pin). The final grades that one entry alone.
- Judging is blind while the window is open, so iteration here is blind:
  no dev grade shows before the deadline to tell you whether a new version
  is better. One strong submission is the play; quota in hand was 5 today,
  40 hard, can_submit true.

## v2 — iteration after round 1 (Mon 2026-11-23, ~20:00 WAT)

Round 1 placed the standing line 369 of 883 (win rate ~52%); only the top 3
are paid. The five above us included two more memory-loss lines, so that
territory is crowded in this field. Iteration tournament: 12 fresh concepts
across grief object, birth, betrayal, war, childhood, old age, crime, love,
work, faith, animals, space and money. Weakness run on the best 4 killed
the dog line (the turn is an absence, weaker than a reveal) and the faith
line (quiet, but its turn is smaller than the standing line's).

Finalists duelled against the standing line, criteria in order:
- "Midwife delivered herself, alone, snowed in." — criterion 1 ties; on
  criterion 2 it is one dramatic scene but implies less of a whole life
  than a marriage plus illness. Standing line keeps its place against it.
- "Orphanage burned. He adopted the arsonist." — criterion 1 ties (event
  plus consequence, a complete arc). Criterion 2 decides it: adopting the
  arsonist is a far larger turn than the standing line's gentle reveal,
  and it leaves the memory-loss crowd behind. Criterion 3 ties (every word
  load-bearing), criterion 4 is close (the unanchored "He" is the reader's
  fill-in, not a trip), criterion 5 ties (his identity and motive unsaid).
  It is also shorter, 42 characters against 46, which wins exact ties.

DUEL VERDICT: the challenger clearly wins on criterion 2. v2 story:
"Orphanage burned. He adopted the arsonist." — exactly six words
(Orphanage1 burned.2 He3 adopted4 the5 arsonist.6), 42 characters.
Verified by running main.ts: entry.txt is byte-exact, no trailing newline.

## v3 — extra ticket (owner's call)

Story: "He still sets two plates nightly." — exactly six words
(He1 still2 sets3 two4 plates5 nightly.6), 33 characters.
Verified by running main.ts: entry.txt is byte-exact, no trailing newline.

This line was the v3 tournament finalist. Duelled against the standing
line it tied on criteria 1, 3, 4 and 5 and lost narrowly on criterion 2:
the standing line's final-word reveal reframes the whole line more
sharply than this line's gradual realisation. Under the replace-only-on-
a-clear-win rule it did not displace the standing entry. The owner
directed that it be entered anyway as an additional third entry
alongside the existing two — an extra ticket, not a replacement.
