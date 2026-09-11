// TASK 1 

let task1API_URL = "https://fakestoreapi.com/products";

// 1. Fetch all products

fetch(task1API_URL)
.then((task1Response) => {
    return task1Response.json();
})
.then((task1Products) => {

    // 2. Display Product Title, Price and Category

    console.log("===== ALL PRODUCTS =====");

    task1Products.map((task1Product) => {
        console.log("Title:", task1Product.title);
        console.log("Price:", "$" + task1Product.price);
        console.log("Category:", task1Product.category);
        console.log("-------------------------");
    });

    // 3. Create a new array containing only title and price

    let task1TitleAndPrice = task1Products.map((task1Product) => {
        return {
            title: task1Product.title,
            price: task1Product.price
        };
    });

    console.log("Title and Price:");
    console.log(task1TitleAndPrice);

    // 4. Find products with price greater than $100

    let task1ProductsAbove100 = task1Products.filter((task1Product) => {
        return task1Product.price > 100;
    });

    console.log("Products above $100:");
    console.log(task1ProductsAbove100);

    // 5. Find the first product in electronics category

    let task1FirstElectronicsProduct = task1Products.find((task1Product) => {
        return task1Product.category === "electronics";
    });

    console.log("First Electronics Product:");
    console.log(task1FirstElectronicsProduct);

    // 6. Calculate the total price

    let task1TotalPrice = task1Products.reduce((task1Total, task1Product) => {
        return task1Total + task1Product.price;
    }, 0);

    console.log("Total Price:", "$" + task1TotalPrice.toFixed(2));

    // 7. Sort products from highest price to lowest

    let task1ProductsHighestToLowest = [...task1Products].sort((a, b) => {
        return b.price - a.price;
    });

    console.log("Products from highest to lowest:");
    console.log(task1ProductsHighestToLowest);
})
.catch((task1Error) => {
    console.log("API Error:", task1Error.message);
})
.finally(() => {
    console.log("Task 1 API process completed.");
});



// TASK 2 — Product Category Dashboard

let task2API_URL = "https://fakestoreapi.com/products";

// 1. Fetch all products

fetch(task2API_URL)
.then((task2Response) => {
    return task2Response.json();
})
.then((task2Products) => {

    // 2. Function to count products by category

    let task2CountCategory = (task2Category) => {
        return task2Products.filter((task2Product) => {
            return task2Product.category === task2Category;
        }).length;
    };

    // 3. Get total products

    let task2TotalProducts = task2Products.length;

    // 4. Count products by category

    let task2Electronics = task2CountCategory("electronics");
    let task2Jewelery = task2CountCategory("jewelery");
    let task2MensClothing = task2CountCategory("men's clothing");
    let task2WomensClothing = task2CountCategory("women's clothing");

    // 5. Find highest price

    let task2HighestPrice = Math.max(
        ...task2Products.map((task2Product) => {
            return task2Product.price;
        })
    );

    // 6. Find lowest price

    let task2LowestPrice = Math.min(
        ...task2Products.map((task2Product) => {
            return task2Product.price;
        })
    );

    // 7. Calculate total price

    let task2TotalPrice = task2Products.reduce((task2Total, task2Product) => {
        return task2Total + task2Product.price;
    }, 0);

    // 8. Calculate average price

    let task2AveragePrice = task2TotalPrice / task2TotalProducts;

    // 9. Sort products from highest price to lowest

    let task2SortedProducts = [...task2Products].sort((a, b) => {
        return b.price - a.price;
    });

    // 10. Display dashboard

    console.log(`
===== PRODUCT DASHBOARD =====

Total Products: ${task2TotalProducts}
Electronics: ${task2Electronics}
Jewelery: ${task2Jewelery}
Men's Clothing: ${task2MensClothing}
Women's Clothing: ${task2WomensClothing}
Highest Price: $${task2HighestPrice.toFixed(2)}
Lowest Price: $${task2LowestPrice.toFixed(2)}
Average Price: $${task2AveragePrice.toFixed(2)}
    `);

    console.log("Products from highest price to lowest:");
    console.log(task2SortedProducts);
})
.catch((task2Error) => {
    console.log("API Error:", task2Error.message);
})
.finally(() => {
    console.log("Task 2 API process completed.");
});



// TASK 3 — User & Post API

let task3UsersAPI = "https://jsonplaceholder.typicode.com/users";
let task3PostsAPI = "https://jsonplaceholder.typicode.com/posts";

// 1. Fetch users

fetch(task3UsersAPI)
.then((task3UserResponse) => {
    return task3UserResponse.json();
})
.then((task3Users) => {

    // 2. Display all user names

    console.log("===== ALL USER NAMES =====");

    task3Users.map((task3User) => {
        console.log(task3User.name);
    });

    // 3. Display user name + email

    console.log("===== USER NAME + EMAIL =====");

    task3Users.map((task3User) => {
        console.log("Name:", task3User.name);
        console.log("Email:", task3User.email);
        console.log("-------------------------");
    });

    // 4. Find the user with ID 5

    let task3UserID5 = task3Users.find((task3User) => {
        return task3User.id === 5;
    });

    console.log("===== USER WITH ID 5 =====");
    console.log(task3UserID5);

    // 5. Filter users from a particular city

    let task3UsersFromCity = task3Users.filter((task3User) => {
        return task3User.address.city === "Gwenborough";
    });

    console.log("===== USERS FROM GWENBOROUGH =====");
    console.log(task3UsersFromCity);
})
.catch((task3UserError) => {
    console.log("Users API Error:", task3UserError.message);
});


// 6. Fetch posts

fetch(task3PostsAPI)
.then((task3PostResponse) => {
    return task3PostResponse.json();
})
.then((task3Posts) => {

    // 7. Display posts written by user ID 1

    let task3User1Posts = task3Posts.filter((task3Post) => {
        return task3Post.userId === 1;
    });

    console.log("===== POSTS BY USER ID 1 =====");
    console.log(task3User1Posts);

    // 8. Count posts created by user ID 1

    let task3User1PostCount = task3Posts.filter((task3Post) => {
        return task3Post.userId === 1;
    }).length;

    console.log("Number of posts by User ID 1:", task3User1PostCount);

    // 9. Find the first post with more than 50 characters in the title

    let task3LongTitlePost = task3Posts.find((task3Post) => {
        return task3Post.title.length > 50;
    });

    console.log("===== FIRST POST WITH TITLE > 50 CHARACTERS =====");
    console.log(task3LongTitlePost);
})
.catch((task3PostError) => {
    console.log("Posts API Error:", task3PostError.message);
});



// TASK 4 — API + Search

let task4API = "https://fakestoreapi.com/products";

let task4Category = prompt("Enter product category:");

let task4MaximumPrice = Number(prompt("Enter maximum price:"));

// 1. Fetch products

fetch(task4API)
.then((task4Response) => {
    return task4Response.json();
})
.then((task4Products) => {

    // 2. Function to search products

    let task4SearchProducts = (products, category, maximumPrice) => {
        return products.filter((product) => {
            return product.category === category &&
                   product.price <= maximumPrice;
        });
    };

    // 3. Get matching products

    let task4MatchingProducts = task4SearchProducts(
        task4Products,
        task4Category,
        task4MaximumPrice
    );

    // 4. Display matching products

    console.log("===== SEARCH RESULTS =====");

    task4MatchingProducts.map((task4Product) => {
        console.log("Title:", task4Product.title);
        console.log("Price:", "$" + task4Product.price);
        console.log("Category:", task4Product.category);
        console.log("-------------------------");
    });

    console.log("Category:", task4Category);
    console.log("Maximum Price:", "$" + task4MaximumPrice);
})
.catch((task4Error) => {
    console.log("API Error:", task4Error.message);
});



// TASK 5 — API Shopping Cart

let task5API = "https://fakestoreapi.com/products";

let task5Cart = [];

// 1. Fetch products

fetch(task5API)
.then((task5Response) => {
    return task5Response.json();
})
.then((task5Products) => {

    // 2. Display available products

    console.log("===== AVAILABLE PRODUCTS =====");

    task5Products.map((task5Product) => {
        console.log(
            "ID:", task5Product.id,
            "|",
            "Title:", task5Product.title,
            "|",
            "Price:", "$" + task5Product.price
        );
    });

    // 3. Ask user to select product IDs

    let task5SelectedIDs = prompt(
        "Enter product IDs separated by commas:"
    );

    let task5IDs = task5SelectedIDs.split(",").map((task5ID) => {
        return Number(task5ID.trim());
    });

    // 4. Add selected products to cart

    task5IDs.map((task5ID) => {

        let task5SelectedProduct = task5Products.find((task5Product) => {
            return task5Product.id === task5ID;
        });

        if (task5SelectedProduct) {
            task5Cart.push(task5SelectedProduct);
        }

    });

    // 5. Display cart

    console.log("===== CART =====");

    task5Cart.map((task5Product, task5Index) => {
        console.log(
            `Product ${task5Index + 1}: ${task5Product.title}`
        );

        console.log(
            `Price: $${task5Product.price}`
        );

        console.log("-------------------------");
    });

    // 6. Calculate cart total using reduce()

    let task5CartTotal = task5Cart.reduce((task5Total, task5Product) => {
        return task5Total + task5Product.price;
    }, 0);

    // 7. Apply discount

    let task5Discount = 0;

    if (task5CartTotal > 200) {
        task5Discount = 20;
    }
    else if (task5CartTotal > 100) {
        task5Discount = 10;
    }

    // 8. Calculate discount amount

    let task5DiscountAmount =
        task5CartTotal * task5Discount / 100;

    // 9. Calculate final amount

    let task5FinalAmount =
        task5CartTotal - task5DiscountAmount;

    // 10. Display final cart

    console.log(`
===== CART =====

Total: $${task5CartTotal.toFixed(2)}
Discount: ${task5Discount}%
Final Amount: $${task5FinalAmount.toFixed(2)}
    `);
})
.catch((task5Error) => {
    console.log("API Error:", task5Error.message);
});



// TASK 6 — FakeStore Product Report

let task6API = "https://fakestoreapi.com/products";

// 1. Fetch API

fetch(task6API)
.then((task6Response) => {
    return task6Response.json();
})
.then((task6Products) => {

    console.log("========== PRODUCT REPORT ==========");

    // 2. Display total products

    console.log("Total Products:", task6Products.length);

    // 3. Display all products using forEach()

    console.log("Product Details:");

    task6Products.forEach((task6Product) => {
        console.log(
            `- ${task6Product.title} | $${task6Product.price} | ${task6Product.category}`
        );
    });

    // 4. Create product names array using map()

    let task6ProductNames = task6Products.map((task6Product) => {
        return task6Product.title;
    });

    console.log("Product Names:");

    task6ProductNames.forEach((task6ProductName) => {
        console.log(`- ${task6ProductName}`);
    });

    // 5. Filter expensive products using filter()

    let task6ExpensiveProducts = task6Products.filter((task6Product) => {
        return task6Product.price > 100;
    });

    console.log("Products Above $100:");

    task6ExpensiveProducts.forEach((task6Product) => {
        console.log(
            `- ${task6Product.title} : $${task6Product.price}`
        );
    });

    // 6. Find first electronics product using find()

    let task6ElectronicsProduct = task6Products.find((task6Product) => {
        return task6Product.category === "electronics";
    });

    console.log("Electronics Product:");

    console.log(task6ElectronicsProduct);

    // 7. Calculate total price using reduce()

    let task6TotalPrice = task6Products.reduce((task6Total, task6Product) => {
        return task6Total + task6Product.price;
    }, 0);

    console.log("Total Product Value:");
    console.log("$" + task6TotalPrice.toFixed(2));

    // 8. Check if any product is above $500 using some()

    let task6AnyAbove500 = task6Products.some((task6Product) => {
        return task6Product.price > 500;
    });

    console.log("Any Product Above $500:");
    console.log(task6AnyAbove500);

    // 9. Check if every product is above $1 using every()

    let task6EveryAbove1 = task6Products.every((task6Product) => {
        return task6Product.price > 1;
    });

    console.log("All Products Above $1:");
    console.log(task6EveryAbove1);

    // 10. Sort products from highest price to lowest

    let task6SortedProducts = [...task6Products].sort((a, b) => {
        return b.price - a.price;
    });

    console.log("Highest → Lowest:");

    task6SortedProducts.forEach((task6Product) => {
        console.log(
            `- ${task6Product.title} : $${task6Product.price}`
        );
    });

    console.log("====================================");
})
.catch((task6Error) => {
    console.log("API Error:", task6Error.message);
})
.finally(() => {
    console.log("Task 6 completed.");
});