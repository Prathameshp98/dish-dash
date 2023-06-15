const foodData = [
    {
        id:"1",
        name: "Omlet",
        ingredients: "egg, salt, pepper, oil",
        instructions: "Crack the eggs into a bowl, season with salt and pepper, and whisk them together with a fork or whisk until well beaten. Add the milk or water and whisk again until incorporated.Preheat a non-stick frying pan over medium heat. Add the butter or oil and allow it to melt and coat the bottom of the pan.Pour the beaten eggs into the pan, tilting it to ensure the eggs spread evenly across the surface.",
        time: "10 mins",
    },
    {
        id:"2",
        name: "Salad",
        ingredients: "tomatoes, cucumber, spinach",
        instructions: "In a large bowl, combine the salad greens, cherry tomatoes, cucumber, red onion, bell pepper, olives (if using), and feta cheese (if using). Toss gently to mix the ingredients. In a small bowl, whisk together the olive oil, lemon juice or vinegar, Dijon mustard, salt, and pepper until well combined.",
        time: "15 mins",
    },
    {
        id:"3",
        name: "Lemon Juice",
        ingredients: "lemon, water, sweetner",
        instructions: "Wash the lemons thoroughly to remove any dirt or residue.Roll each lemon on a hard surface, like a countertop, while applying gentle pressure. This helps to break down the fibers inside the lemon and make it easier to extract juice. Cut each lemon in half using a sharp knife. Squeeze the juice from each lemon half into a bowl or directly into a glass. You can use a citrus juicer, a manual lemon squeezer, or your hands to extract the juice. Be careful to remove any seeds that may fall into the juice.",
        time: "5 mins",
    }
]

const userData = [
    {
        id: "1",
        name: "sample name 1",
        email: "sampleemail@mail.com",
        password: "123456",
        foodId: ["1", "3"]
    },
    {
        id: "2",
        name: "sample name 2",
        email: "sampleemail@mail.com",
        password: "123456",
        foodId: ["2"]
    },
    {
        id: "3",
        name: "sample name 3",
        email: "sampleemail@mail.com",
        password: "123456",
        foodId: []
    }
]

module.exports = { foodData, userData }