
const User = require('../models/user.js');
const Dish = require('../models/dish.js');

const {
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString,
    GraphQLSchema, 
    GraphQLList
} = require('graphql');

// User Type
const userType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        // foodId: {
        //     type: dishType,
        //     resolve(parent, args) {
        //         return parent.foodId.map((each, index) => {
        //             return foodData.find(food => food.id === parent.foodId[index])
        //         })
                
        //     }
        // }
    })
});

// Food Type
const dishType = new GraphQLObjectType({
    name: 'Food',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        ingredients: { type: GraphQLString },
        instructions: { type: GraphQLString },
        time: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        dishes: {
            type: new GraphQLList(dishType),
            resolve(parent, args) {
                return Dish.find()
            }
        },
        dish: {
            type: dishType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Dish.findById(args.id)
            },
        },
        users: {
            type: new GraphQLList(userType),
            resolve(parent, args) {
                return User.find();
            }
        },
        user: {
            type: userType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return User.findById(args.id);
            },
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
})
