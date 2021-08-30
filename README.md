# Yahtzee!

A simple Yahtzee game app built with React, JavaScript, and CSS.

NOTE: This app was build using starter code provided by [The Modern React Bootcamp](https://www.udemy.com/course/modern-react-bootcamp) on Udemy. To get an idea of what was provided, please checkout the first commit, `Initial commit`.

### [Try it live](https://andrewhuntington.github.io/react-yahtzee/)

# Project Screen Shot

![Screenshot of Yahtzee App](/other/screenshot.png "Yahtzee App")

# Installation and Setup Instructions

Clone down the repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

`http://localhost:3000`

# Reflection

This is a project that was built for Colt Steele's excellent [The Modern React Bootcamp](https://www.udemy.com/course/modern-react-bootcamp) on Udemy.

The bulk of this app's code was already provided, and having to work with someone else's code proved to be its own challenge.
In particular, I was not able to fully implement parts eight and nine on my own (see the tasks section below for more information.)

Despite some difficulties, I consider the time spent on this project valuable, as working with code that has been written by another person is (what I assume) the bulk of a programmer's job. Also, it introduced me to the [styled-components](https://styled-components.com) library, which I think I will use for my own projects going forward.

# Tasks

These are the tasks that were to be completed, as provided by the course:

> ### Part Zero: Run the Solution and Play
>
> Play a game or two to get a sense of how things should work — this is the version you’ll be working to build.
>
> ### Part One: Draw Diagram of Components
>
> Read through the source code and make a diagram of the components, along with their props and state.
>
> As you read the code, think about which areas felt very easy to understand, and whether there were things that took a minute to understand.
>
> ### Part Two: Fix Clicking Dice
>
> You’re supposed to click dice to toggle whether or not they’re going to be re-rolled. Unfortunately, this doesn’t work right now!
>
> Figure out what’swrong or missing with the code for this feature and fix it!
>
> ### Part Three: Read Rules.js
>
> The system for evaluating a roll score is handled by a series of object oriented classes, since many of the rules are similar to each other.
>
> Familiarize yourself with how this works, because up next you’ll be fixing some rules…
>
> ### Part Four: Add Missing Rules
>
> Two evaluation rule classes in Rules.js are incomplete:
>
> - a full house should be 3 of one die and 2 of another, and should always score 25
>
> - a small straight is four dice in a row (1-2-3-4 or 2-3-4-5, for example), and should always score 30
>
> Write the classes for these rules.
>
> ### Part Five: Prevent Rolling More than 3 Times
>
> You should only get two chances per turn to re-roll, but the game has a bug where you can re-roll as often as you want as long as you unlock some of the dice first. Fix it!
>
> ### Part Six: Disallow Re-Using The Score Line
>
> The game currently lets you keep re-scoring the same scoring line (so you can score 3 of a kind several times, whereas you should only be able to allocate one set of dice here.) Fix it!! (I’ve provided classes called RuleRow-active and RuleRow-disabled that you can use for styling purposes).
>
> ### Part Seven: Add Descriptions
>
> Add a description to each rule to explain how it’s scored (for example: “25 points for a full house”), and have it display before the user has clicked on a rule row. Once the user clicks a row, hide the description and instead display the score value.
>
> ### Part Eight: Add Icons
>
> Instead of rendering each Die as a simple number in a box, rewrite the code to use font-awesome die icons. You’ll need to include font-awesome, either using a CDN or try finding a node module to help! The classes you should use are: “fas fa-dice-one”, “fas fa-dice-two”, “fas fa-dice-three”, etc.
>
> ### Part Nine: Animate The Dice!
>
> This part is a little tricky! Make the Dice shake or spin when they are being rolled. Don’t worry about creating particularly beautiful animations. Make sure that a user cannot click on a Die to select it while the animation is going on.
>
> ## Further study
>
> - A bug not fixed in our solution: you can assign the same dice to more than one score line. Test and fix this.
> - It would be nice if the game started with the dice already rolled (rather than having to click the button). Implement this.
> - Show the total score.
> - Add code to detect when the game is over, and add a “play again?” feature that resets the game.
> - There’s an add-on library you could use with React for “styled components,” where you can move CSS out of .css files and into component definitions. Learn about this and try it out.

# Things Left Undone/Areas to Improve

The following items from the _Further study_ have been left unimplemented as of now:

> - The look and feel is super-drab. Add some CSS. Perhaps even any animation for the dice when rolling!
> - Add a new scoring category for “trash”; this should score only for dice that would not match any of the other right-hand categories (i.e., not three of a kind and not four of a kind and not a full house and …). What could be a good way to do this?
> - It would be great to track the highest score ever. Use localStorage to keep track of this highest score so that it is displayed below the scoring area.
> - Implement more complex scoring: you can find more complex rules to try out at https://en.wikipedia.org/wiki/Yahtzee#Yahtzee_bonuses_and_Joker_rules

# Additional Acknowledgements

This readme is based on a template called the [Peronsal project README template](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4) by GitHub user [martensonbj](https://gist.github.com/martensonbj).

This project is based on starter code provided by Colt Steele. The main objective of this project was to
take a project with a substantial amount of already written code and go through it, step-by-step,
and fix any bugs found/implement additional features to make a fully functional app.
Any code that was not already provided is my own.
