
import { createStore } from 'redux'

let initialState = {
    name: '',
    category: '',
    authorsFName: '',
    authorsLName: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case UPDATE_NAME:
            return {...state, name: payload };
        case UPDATE_CATEGORY:
            return {...state, category: payload };
        case UPDATE_AUTHOR_FNAME:
            return {...state, authorsFName: payload};
        case UPDATE_AUTHOR_LNAME:
            return {...state, authorsLName: payload};
        case UPDATE_INGREDIENTS:
            let newIngredients = [...state.ingredients, payload];
            return {...state, ingredients: newIngredients}
        case UPDATE_INSTRUCTIONS:
            let newInstructions = [...state.instructions, payload];
            return {...state, instructions: newInstructions};
        case ADD_RECIPE:
            const {
                name,
                category,
                authorsFName,
                authorsLName,
                ingredients,
                instructions
            } = state
            const newRecipes = [...state.recipes, {
                name,
                category,
                authorsFName,
                authorsLName,
                ingredients,
                instructions
            }]
            return {...state, recipes: newRecipes}
        case CLEAR_FIELDS:
            return {...state, name: '',
            category: '',
            authorsFName: '',
            authorsLName: '',
            ingredients: [],
            instructions: []};
        case DELETE_RECIPE:
            let recipes = state.recipes;
            recipes.splice(payload, 1);
            return {...state, recipes};
        default:
            return state;
    }
}

export default createStore(reducer);
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_AUTHOR_FNAME = "UPDATE_AUTHOR_FNAME";
export const UPDATE_AUTHOR_LNAME = "UPDATE_AUTHOR_LNAME";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";
export const UPDATE_INSTRUCTIONS = "UPDATE_INSTRUCTIONS";
export const ADD_RECIPE = "ADD_RECIPE";
export const CLEAR_FIELDS = "CLEAR_FIELDS";
export const DELETE_RECIPE = "DELETE_RECIPE"