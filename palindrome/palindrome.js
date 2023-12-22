var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function n_palindrome(input) {
    var word = __spreadArray([], input.split(""), true);
    var reverse = __spreadArray([], word, true).reverse();
    for (var index = 0; index < word.length; index++) {
        if (word[index] !== reverse[index]) {
            return false;
        }
    }
    return true;
}
function n2_palindrome(input) {
    var len = input.length;
    for (var i = 0; i < Math.floor(len / 2); i++) {
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
