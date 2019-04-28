# Hello!

And welcome to our coding challenge. We started building a basic tic-tac-toe app, but got busy halfway through and haven't been able to finish it. We need your help.

- [Instructions](#instructions)
- [Tickets](#tickets)
- [Time and Submission](#time-and-submission)

## Instructions

We've left basic functionality unfinished, a handful of bugs unfixed, and a lot of wishlist items on the table.

Take some time reading through this document, getting familiar with the app, and making sure it runs. Then:

- Work through the [the basic functionality](#the-basics) and fix [the bugs](#bug-fixes) (both at the top of the [tickets](#tickets) section below).
- Commit your code so far, and set aside **~2 hours** to work on whichever other "tickets" you find most interesting. [Guidance below](#which-tickets-should-i-tackle).

As you work, please try to:

- Check the relevant checkbox in this README for tickets you complete, and,
- Make separate commits for separate tickets (where sensible; some work obviously overlaps).

**Most importantly**:

> This is a choose-your-own-adventure -- **not** an exhaustive list of requirements. We don't expect you to complete all the below tickets. Take your time, work on what you find interesting, and don't worry about getting it all done.

### Getting Started

This is a relatively vanilla React app, built with `create-react-app`. It should work more or less "out of the box", by running:

```
$ yarn install
$ yarn start
```

To run tests:

```
$ yarn test
```

If you run into any issues getting it up and running, please let us know. Debugging systems issues is **not** part of this challenge, and we don't want to waste your time on it.

### Which Tickets Should I Tackle?

Go for those that seem interesting or play to your strengths. If you consider yourself more of a full-stack candidate, we'd love to see you try the [game history](#game-history) tickets and some frontend improvements, and work on [game history 2.0](#game-history-20) if you've got extra time. More of a frontend applicant? Maybe focus on making [visual improvements](#visual-improvements) without leaning too hard on external libraries. In either/all cases, your [thoughts](#thoughts) would also be appreciated.


## Tickets

### The Basics

#### Victory and Stalemate

The game doesn't really work, because we haven't built in victory or stalemate conditions.

- [ ] Add a check and alert for victory.
- [ ] Add a check and alert for basic stalemate -- when the game hasn't been won and there are no more moves.

#### Better Play UI

Honestly, our Play UI sucks.

- [ ] Improve it, however you see fit. (Some options: keyboard input, move on click, etc).

### Bug Fixes

#### Play bugs

There are at least two bugs on the Play page.

- [ ] Find them and fix them.
- [ ] Add to the limited test suite to make sure that your changes fix the issues, and they don't happen again.

### Bonus Basics

#### Victory and Stalemate Continued

- [ ] Add a check and alert for preemptive stalemate -- when the board still has open squares, but nobody can win.
- [ ] Test your check functions, to make sure they work reliably.

### Visual Improvements

#### Styling the Play component

Our board component is un-styled, and looks pretty awful right now.

- [ ] Make it look nice. We've added some styles to the Welcome page, and you could use them as a guide.

#### Styling game alerts

We got lazy, and set up a bad pattern for alerting players -- just using JavaScript's in-built `alert` function.

- [ ] Change how we give user feedback, using whatever visual/coding patterns or tools you see fit.

#### Animation

- [ ] Add some subtle animation, wherever feels relevant and fun.

#### Responsive

We forgot to do a responsive pass, and the header looks scrunched up on smaller screens.

- [ ] Make the existing app look nice across screen sizes.
- [ ] Make sure any new functionality you add is responsive as well.

### Added functionality

#### Game history

Tic-tac-toe is cool on its own, but we think it'd be even cooler if we could use the app to look through the game history and relive the glory of old games.

- [ ] Figure out a pattern for tracking and storing each game move in the store, and storing each complete game in "history".
- [ ] Fill in the `HistoryList` route file, so that it displays the history of previously played games, with whatever information feels relevant. Style it (minimally is OK).
- [ ] Add a link (or two) to `HistoryList`, wherever seems best.
- [ ] Fill in the `HistoricalGame` route file, so that it displays the history of the specified game. Implement a UI for stepping back and forward through game moves.

###### Game History 2.0

"History" is a misnomer if it's un-persisted and local.

- [ ] Persist the game history, so a refresh doesn't empty it.

Want your app to work across devices?

- [ ] Build out an API endpoint that can store previous game history, and fetch the history of previous games on app refresh.

History getting out of control?

- [ ] Build a UI for clearing history, and/or removing individual games from the history, in case you lose a game and are embarrassed for others to see it.

### Thoughts

See something you didn't have time to work on or don't like?

- [ ] Let us know what you would have done if you had more time.
- [ ] Let us know what *we* should have done differently.


## Time and Submission

### Time

That's a long laundry list. This take-home is meant take up no more than roughly 3 hours of your time. Please start a 2-hour timer when you start the supplementary tickets, and triage your time.

> Let us know how long you took, including the basics.

We'd really appreciate it. We want to know so we can 1) make sure you're not sinking too much time into this project, and 2) get a better sense of realistic time constraints.

Please note: This project is meant to be fodder for discussion. We don't expect everything to be perfectly complete, so don't worry about getting it all done -- really.

### Submission

You can submit by sharing a link to either a Github repo or a zip of the app directory. Please include instructions for running the app, if they've changed.

Bonus points: Deploy your app, and give us a link.

Good luck, and, hopefully, enjoy!
