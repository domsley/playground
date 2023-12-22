function n_palindrome(input: string) {
  const word = [...input.split("")];
  const reverse = [...word].reverse();

  for (let index = 0; index < word.length; index++) {
    if (word[index] !== reverse[index]) {
      return false;
    }
  }
  return true;
}

function n2_palindrome(input: string) {
  const len = input.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (input[i] !== input[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.time("palindrom - O(n)");
n_palindrome("test");
console.timeEnd("palindrom - O(n)");

console.time("palindrom - O(n/2)");
n2_palindrome("test");
console.timeEnd("palindrom - O(n/2)");
