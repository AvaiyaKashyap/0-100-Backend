/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) { 
  let totalExp = [];

  transactions.forEach(element => {
      if (element.category && element.price) {
          let foundCategory = false;

          totalExp.forEach(object => {
              if (element.category === object.category) {
                  object.totalSpent += element.price;
                  foundCategory = true;
              }
          });

          if (!foundCategory) {
              totalExp.push({
                  "category": element.category,
                  "totalSpent": element.price
              });
          }
      }
  });

  return totalExp;
}

module.exports = calculateTotalSpentByCategory;
