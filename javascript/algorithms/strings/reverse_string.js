/**

Given a string, return a new string with the reversed order of
characters

**/


function reverse_one(str) {
    // Turn 'str' into an array
    const arr = str.split('');

    // Call the reverse method on the array
    arr.reverse();

    // Join the array back into a string and return
    return arr.join('');

    // return str.split('').reverse().join('');
}


function reverse_two(str) {
  // Create an empty string called 'reversed'
  let reversed = '';

  // 'For each' every character in the provided string
  for (let char of str) {
    // Take the character and add it to 'reversed'
    reversed = char + reversed
  }

  // Return the variable 'reversed'
  return reversed;
}


function reverse_three(str) {
  // Turn 'str' into an array
  const arr = str.split('');

  // Use the array helper 'reduce'
  return arr.reduce((reversed, character) => {
    return character + reversed;
  }, '');

  // return str.split('').reduce((rev, char) => char + rev, '');
}
