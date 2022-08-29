function factorial(num) {
  if (num < 0) {
    return undefined
  }else if (num === 0 || num === 1) {
    return (1)
  }else if(num > 1) {
    let result = num 
    while (num > 1) { 
      num--
      result *= num
    }  
    return result
  }
}
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(6))