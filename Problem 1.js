function isPalindrome(str) {

    str = str.toLowerCase();

    str = str.replace(/[^a-z0-9]/g, '');
    
    if (str === str.split('').reverse().join('')) {
        return "String is a Palindrome";
    } else {
        return "Uwu";
    }
}
console.log(isPalindrome("Genchana Rasasakit"));