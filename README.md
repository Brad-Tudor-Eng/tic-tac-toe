# Hello!

[Link to Heroku App ](https://btudor-tic-tac-toe.herokuapp.com/ "Tic-Tac-Toe")

### Getting Started

Basic commands to start:

```
$ yarn install
$ yarn start
```

To run tests:

```
$ yarn test
```

## Tickets

### The Basics

#### Victory and Stalemate

The game doesn't really work, because we haven't built in victory or stalemate conditions.

- [ X ] Add a check and alert for victory.
- [ X ] Add a check and alert for basic stalemate -- when the game hasn't been won and there are no more moves.

#### Better Play UI

Honestly, our Play UI sucks.

- [ X ] Improve it, however you see fit. (Some options: keyboard input, move on click, etc).

### Bug Fixes

#### Play bugs

There are at least two bugs on the Play page.

- [ X ] Find them and fix them.
- [ X ] Add to the limited test suite to make sure that your changes fix the issues, and they don't happen again.

### Bonus Basics

#### Victory and Stalemate Continued

- [ X ] Add a check and alert for preemptive stalemate -- when the board still has open squares, but nobody can win.
- [ X ] Test your check functions, to make sure they work reliably.

### Visual Improvements

#### Styling the Play component

Our board component is un-styled, and looks pretty awful right now.

- [ X ] Make it look nice. We've added some styles to the Welcome page, and you could use them as a guide.

#### Styling game alerts

We got lazy, and set up a bad pattern for alerting players -- just using JavaScript's in-built `alert` function.

- [ ] Change how we give user feedback, using whatever visual/coding patterns or tools you see fit.

#### Animation

- [ X ] Add some subtle animation, wherever feels relevant and fun.

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

- [ X ] Let us know what you would have done if you had more time.
- [ X ] Let us know what *we* should have done differently.


## Time and Thoughts

### Time

- Planning: ~40 min

> I spent most of the inital time in the project simply laying out what I wanted to do, reading though the code base, and figuring out what tickets I wanted to focus on.  Then coming up with a game plan.

- Basics: ~10 min

> The bugs were easy to find and solve simply by changing the values from null to zero.
As for the test, I chose to modify the existing test to ensure that the state started off correctly

- Other Tickets: ~120 min

> I set a timer for 2 hours.  When the time was getting close I stopped working on the styling.  Finished what I was doing and pushed the code.

- Setting up Heroku App and simple express server: ~5 - 10 min 

> I didn't time this.  It's a pure guess.

### Thoughts
-  More Time: 
> I was really looking forward to doing this history portion but, ran out of time.  If I can find some free time I'll proably go back and finish it for fun.  

- Improvements:  
> Things could be broken out into specific componets. I.e. Board, Title, Cell Selectors.  
The Play > index.js file is almost 200 lines of code.  Breaking the code up into components would really help to reduce the length of that file and make it easier to understand.
