function getShippingMessage(country, price, deliveryFee) {
    console.log(`Shipping to ${country} will cost ${price + deliveryFee} credits`);
  }

  console.log(getShippingMessage("Australia", 120, 50));