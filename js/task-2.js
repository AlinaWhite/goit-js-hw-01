function getShippingMessage(country, price, deliveryFee) {
    const finelMessege =(`Shipping to ${country} will cost ${price + deliveryFee} credits`);
    return finelMessege;
  }

  console.log(getShippingMessage("Australia", 120, 50));