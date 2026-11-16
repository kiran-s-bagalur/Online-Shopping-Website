
let products = [
    {name: "Laptop", price: 45000},
    {name: "Mobile", price: 15000},
    {name: "Headphones", price: 2000},
    {name: "Keyboard", price: 1000}
];

let output = "";

products.forEach(function(product) {
    output += "<div class='product'>";
    output += "<h3>" + product.name + "</h3>";
    output += "<p>Price: ₹" + product.price + "</p>";
    output += "</div>";
});

document.getElementById("products").innerHTML = output;
