let stocks = {
  fruits: ["strawberry", "grapes", "bananas", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let shopIsOpen = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (shopIsOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("The shop is closed"));
    }
  });
};

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.fruits[0]}`);

    await time(0);
    console.log("Staring the production");

    await time(2000);
    console.log("The fruit was chopped");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
  }
  catch(error) {
    console.log("Customer left", error);
  }
  finally {
    console.log("Day eneded. The shop is closed");
  }
};

kitchen();