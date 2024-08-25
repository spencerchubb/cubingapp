# CubingApp

This is the repository for [cubingapp.com](https://cubingapp.com)

## Algorithm Database Guidelines

Don't include obvious mirrors. For example, include R U R' U R U2 R', but do not include L U L' U L U2 L'. The reason is due to the paradox of choice: it takes effort for the user to choose, so we should remove redundant choices.
w
TODO:
- Fix 2x2 train pages
- Key shortcuts for train page
    - Enter = next alg
    - Backspace = prev alg
    - Space = show solution
    - Show keyboard shortcut on hover
- Instead of timer, allow user to set alg frequency in trainer
- New alg sets
    - sq1 eo
    - sq1 cp
    - 2 look oll
    - 2 look pll
- Use subsets list in train page so subsets are in correct order
- Refactor algs so subset is the object key
    - Purpose is to reduce size and improve network latency. How much will it reduce?
- Make sure LSO EO and EOLR works with setup moves
- Show case name in train page
- prev and next alg in train page
- Improve birthday sorting. Other factors to consider:
    - Kinch
    - SoR
    - Member of WCA
- Show "claim to fame" in birthdays page
- Recent pages (in menu and homepage?)
- Combine kinch pages into kinch-ranks and sor pages into sum-of-ranks
    - Purpose is to reduce clutter in Calculators tab of menu
- Remove 0,0 in sq1 alg simplify
- In trainer, let user specify bad, okay, good like anki. Then each case has a different probability of appearing depending on how good it is, and how long it's been since they've seen it.
- link to trainer in algs and vice versa (except for 4x4-PLL-Parity)
- work on my own solver so I can do solvers for 3x3, 2x2, 4x4, mega, sq1, skewb, pyra, etc