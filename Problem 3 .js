function concatenate(str, n = 1) {
    n = Math.max(n, 1);
    return str.repeat(n);
}
console.log(concatenate("Hakdog", 0));