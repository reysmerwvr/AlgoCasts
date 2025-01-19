/**
 * * Given an array of prices where prices[i] is the price of a given stock on the ith day.
 * * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * * Return the maximum profit, if you cannot achieve any profit, return 0
 * E.g. numbers = [7, 1, 5, 3, 6, 4], output 5
 * E.g. numbers = [7, 6, 4, 3, 1], output 0
 * @param {number[]} prices
 * @returns {number} 
 */

// Brute Force Solution
// function maxProfit(prices) {
//   let globalProfit = 0

//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       const currentProfit = prices[j] - prices[i];
//       if (currentProfit > globalProfit) globalProfit = currentProfit
//     }
//   }

//   return globalProfit
// }

function maxProfit(prices) {
  let minStockPurchasePrice = prices[0] || 0
  let profit = 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minStockPurchasePrice) {
      minStockPurchasePrice = prices[i]
    }
    let currentProfit = prices[i] - minStockPurchasePrice
    profit = Math.max(profit, currentProfit)
  }

  return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))

module.exports = {
  maxProfit
}