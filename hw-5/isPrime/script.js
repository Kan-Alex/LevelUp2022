function isPrime(num) {
  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false
      } else {
        return false
      }
    }
  } else {
    return false;
  }
}
console.log(isPrime(0))
console.log(isPrime(1))
console.log(isPrime(17))
console.log(isPrime(1000000000000))
