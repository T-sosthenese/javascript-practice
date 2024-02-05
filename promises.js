let stocks = {
  fruits: ["strawberry", "grapes", "bananas", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let shopIsOpen = true;

let order = (time, work) => {

  return new Promise((resolve, reject) => {
    if (shopIsOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed."));
    }
  });
};

order(2000, () => console.log(`${stocks.fruits[0]} was selected.`))
  .then(() => {
    return order(0, () => console.log("Production has started."));
  })
  .then(() => {
    return order(2000, () => console.log("The fruit was chopped."));
  })
  .then(() => {
    return order(1000, () => {
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
    });
  })
  .then(() => {
    return order(1000, () => console.log("The machine was started"));
  })
  .then(() => {
    return order(2000, () => console.log(`Ice cream was placed on ${stocks.holder[0]}`));
  })
  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} was topped`))
  })
  .then(() => {
    return order(1000, () => console.log("Ice cream was served."));
  })
  // Capture any errors
  .catch(() => {
    console.log("Customer exited the shop.")
  })
  .finally(() => {
    console.log("Day ended. The shop has closed.")
  });