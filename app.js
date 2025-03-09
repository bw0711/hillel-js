const orders = [
    {
        user: "Alice",
        items: [
            { name: "Phone", price: 500 },
            { name: "Case", price: 20 },
        ],
    },
    { user: "Bob", items: [{ name: "Laptop", price: 1200 }] },
    { user: "Alice", items: [{ name: "Headphones", price: 100 }] },
    { user: "Bob", items: [{ name: "Phone", price: 500 }] },
    { user: "Charlie", items: [{ name: "Monitor", price: 300 }] },
    { user: "David", items: [{ name: "Keyboard", price: 50 }] },
    { user: "Emma", items: [{ name: "Mouse", price: 30 }] },
    { user: "Frank", items: [{ name: "Smartwatch", price: 250 }] },
    { user: "Grace", items: [{ name: "Tablet", price: 600 }] },
    {
        user: "Hannah",
        items: [
            { name: "Phone", price: 500 },
            { name: "Wireless Charger", price: 40 },
        ],
    },
    { user: "Ian", items: [{ name: "Gaming Chair", price: 200 }] },
    { user: "Jack", items: [{ name: "Laptop Stand", price: 45 }] },
    { user: "Karen", items: [{ name: "External Hard Drive", price: 120 }] },
    { user: "Leo", items: [{ name: "USB-C Hub", price: 60 }] },
    { user: "Mia", items: [{ name: "Mechanical Keyboard", price: 150 }] },
    {
        user: "Nathan",
        items: [{ name: "Noise Cancelling Headphones", price: 250 }],
    },
    { user: "Olivia", items: [{ name: "Smart TV", price: 900 }] },
    { user: "Paul", items: [{ name: "Router", price: 80 }] },
    { user: "Quinn", items: [{ name: "Fitness Tracker", price: 130 }] },
    { user: "Rachel", items: [{ name: "E-Reader", price: 180 }] },
    { user: "Steve", items: [{ name: "Wireless Mouse", price: 35 }] },
    { user: "Tina", items: [{ name: "Portable Speaker", price: 90 }] },
    { user: "Uma", items: [{ name: "Drone", price: 1000 }] },
    { user: "Victor", items: [{ name: "Graphics Tablet", price: 400 }] },
    { user: "Wendy", items: [{ name: "VR Headset", price: 700 }] },
    { user: "Xander", items: [{ name: "Bluetooth Headphones", price: 150 }] },
    { user: "Yasmine", items: [{ name: "Gaming Mouse", price: 75 }] },
    { user: "Zach", items: [{ name: "Microphone", price: 110 }] },
    { user: "Alice", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Bob",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Charlie",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "David", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Emma",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Frank",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Grace", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Hannah",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Ian",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Jack", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Alice",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Bob",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Charlie", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "David",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Emma",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Frank", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Grace",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Hannah",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Ian", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Jack",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Alice",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Bob", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Charlie",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "David",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Emma", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Frank",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Grace",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Hannah", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Ian",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Jack",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Alice", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Bob",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Charlie",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "David", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Emma",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Frank",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Grace", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Hannah",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Ian",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Jack", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Alice",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Bob",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Charlie", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "David",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Emma",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Frank", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Grace",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Hannah",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Ian", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Jack",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Alice",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Bob", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Charlie",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "David",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Emma", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Frank",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Grace",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Hannah", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Ian",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Jack",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Alice", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Bob",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Charlie",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "David", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Emma",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Frank",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Grace", items: [{ name: "Wireless Keyboard", price: 80 }] },
    {
        user: "Hannah",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
        ],
    },
    {
        user: "Ian",
        items: [
            { name: "Wireless Keyboard", price: 80 },
            { name: "Monitor", price: 300 },
            { name: "SSD 1TB", price: 150 },
        ],
    },
    { user: "Jack", items: [{ name: "Wireless Keyboard", price: 80 }] },
];


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