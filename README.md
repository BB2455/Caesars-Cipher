# Caesars Cipher

Caesars Cipher algorithm for the freeCodeCamp JavaScript Algorithms and Data Structures.

## What Is The Problem?

> One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
>
> A common modern use is the [ROT13](https://en.wikipedia.org/wiki/ROT13) cipher, where the values of the letters are shifted by 13 places. Thus `A ↔ N`, `B ↔ O` and so on.
>
> Write a function which takes a [ROT13](https://en.wikipedia.org/wiki/ROT13) encoded string as input and returns a decoded string.
>
> All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

## How It Works

- The function takes a string that will be shifted by 13 places.
- First the string is split into a array, which will then be looped through to the new character.
- In the loop it will check character code if it the character is an uppercase alphabet character and will continue the loop if it isn't but will update the code location number and check if the location is ahead of where it should be in which it will move back to the beginning.
- Once looped through the array will be rejoined into a string and returned.
