//Reverse the provided string.
//You may need to turn the string into an array before you can reverse it.
//Your result must be a string.

// TODO
function reverseString(str) {
  return str;
}

reverseString("hello");

// Hint
/* We need to take the string and reverse it, so if it originally reads ‘hello’, it will now read ‘olleh’. 
 * You can solve this challenge by creating a new string (initializing it to a blank string “”) and
 * then iterating the string starting from the last character through the first character
 * and the concatenating each character to the new string. 
 * After iterating through all the characters in the string, you return the new string.
/

//==> solution 1
function reverseString(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

//code explanation
 /*a.Starting at the last character of the string passed to the function, you build a new string reversedStr from str.
  *b.During each iteration of the for loop, reversedStr gets concatenated with itself and the current character.
  *c.Finally, you return the final value of reversedStr.
 /


//==> solution 2
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// code explanation
// a.Our goal is to take the input, str, and return it in reverse. Our first step is to split the string by characters using split(''). 
// Notice that we don’t leave anything in between the single quotes, this tells the function to split the string by each character. 
// b.Using the split() function will turn our string into an array of characters, keep that in mind as we move forward.
// c.Next we chain the reverse() function, which takes our array of characters and reverses them.
// d.Finally, we chain join('') to put our characters back together into a string. 
// Notice once again that we left no spaces in the argument for join, 
// this makes sure that the array of characters is joined back together by each character.
