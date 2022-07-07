const nonConstructableChange = (coins) => {
    let coins = coins.sort();
    let amountOfChange = 0;

    for (const coin of coins) {
        if (amountOfChange + 1 >= coin) {
            amountOfChange += coin
        } else {
            return amountOfChange + 1
        }
    }

    return amountOfChange + 1;
}