function makeTransaction(quantity, pricePerDroid) {
    const transFormul =(`You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`);
    return transFormul;
  }

 
  console.log(makeTransaction(5, 3000));
  console.log(makeTransaction(3, 1000));
  console.log(makeTransaction(10, 500))