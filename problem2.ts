function largestNumber(array:number[]) {
    // your code here
    if (array.length === 1) {
      return array[0];
    }
  
    const numberMax:number = largestNumber(array.slice(1));
    return array[0] > numberMax ? array[0] : numberMax;
  }
  
  
  console.log(largestNumber([5, 2, 67, 37, 85, 19, 10])) // 85
  console.log(largestNumber([5, 10, 20, 3, 98, 95])) // 98
  console.log(largestNumber([20, 22, 18, 25, 75, 62, 88])) // 88
  console.log(largestNumber([6, 23, 9, 5])) // 23
  console.log(largestNumber([70, 44, 28, 18, 55, 68, 11])) // 70