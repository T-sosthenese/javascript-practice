function change(coins, total) {
  if (total <= 0) {
    return 0;
  } else {
    let count = 0;
    let sortedCoins = coins.sort((a, b) => b - a);

    for (let coin of sortedCoins) {
      while (coin <= total) {
        count += 1;
        total -= coin;
      }
    }
    if (total === 0) {
      return count;
    }
    return -1;
  }
}

console.log(change([20, 10, 5], 115));