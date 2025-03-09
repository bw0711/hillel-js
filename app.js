const { orders } = require('./orders.js');

const amountOfOrders = (listOfOrders) => {
    return listOfOrders.reduce((acc, order) => {
        acc[order.user] = (acc[order.user] || 0) + 1;
        return acc;
    }, {});
};

console.log(amountOfOrders(orders));

const userOrdersPrice = (listOfOrders) =>
    listOfOrders
        .map(order => ({
            user: order.user,
            total: order.items.reduce((sum, item) => sum + item.price, 0)
        }))
        .reduce((acc, { user, total }) => {
            acc[user] = (acc[user] || 0) + total;
            return acc;
        }, {});

console.log(userOrdersPrice(orders));

const uniqueItems = (orders) => new Set([].concat(...orders.map(order => order.items.map(item => item.name))));

console.log(uniqueItems(orders));

const biggestSpender = (orders) => {
  const userSpending = orders.reduce((acc, order) => {
    const total = order.items.reduce((sum, item) => sum + item.price, 0);
    acc[order.user] = (acc[order.user] || 0) + total;
    return acc;
  }, {});

  const [topUser, maxSpent] = Object.entries(userSpending).reduce((max, entry) =>
    entry[1] > max[1] ? entry : max
  );

  return `${topUser} spent more than everyone else: $${maxSpent}`;
};

console.log(biggestSpender(orders));