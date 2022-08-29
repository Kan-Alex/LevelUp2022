function fib(num) {
  if (num === 0 || num === 1 || num === -1) {
    return (num)
  }
  if (num > 0) {
    let fibNum 
    let pFirstNum = 0
    let pLustNum = 1
    while (num > 1) { 
      num--
      fibNum = pFirstNum + pLustNum
      pFirstNum = pLustNum
      pLustNum = fibNum
    }  
    return fibNum
  }else {
    let fibNum 
    let mFirstNum = 0
    let mLustNum = -1
    while (num < -1) { 
      num++
      fibNum = mFirstNum + mLustNum
      mFirstNum = mLustNum
      mLustNum = fibNum
    }  
    return fibNum
  }
}
console.log(fib(0))
console.log(fib(1))
console.log(fib(10))
console.log(fib(20))