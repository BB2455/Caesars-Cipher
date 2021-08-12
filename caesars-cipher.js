function rot13(str) {
  //console.log(' '.charCodeAt(0))
  //console.log(String.fromCharCode(90))
  let letters = str.split(""); // Seperate into array.
  for (let i = 0; i < str.length; i++) {
    let location = letters[i].charCodeAt(0);
    if (location < 65 || location > 90) {
      continue; // Check if not between char code 65-90 (Uppercase Alphabet)
    }
    let newLocation = location + 13; // Rot 13 Move ahead 13
    if (newLocation > 90) {
      newLocation = 64 + (newLocation - 90); // Check if newLocation is ahead of 90 and adject to move to beginning of alphabet Z => A+
    }
    letters[i] = String.fromCharCode(newLocation); // Update Letter to new letter
  }
  return letters.join(""); // Join it back together and return new string.
}
// 65 = A
// 90 = Z
// 32 = " "

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
