/**
 * @param {string[]} words
 * @return {string}
 */
 var firstPalindrome = function(words) {
    // Define a function to check if a string is a palindrome.
    const isPalindrome = (s) => {
        let i = 0, j = s.length - 1;

        // Iterate from both ends towards the center to check for equality.
        while (i <= j) {
            if (s[i] !== s[j]) {
                return false;
            }
            i++;
            j--;
        }

        return true;
    };

    // Iterate through each word in the array.
    for (const word of words) {
        // If a palindrome is found, return it.
        if (isPalindrome(word)) {
            return word;
        }
    }

    // If no palindrome is found, return an empty string.
    return "";
};