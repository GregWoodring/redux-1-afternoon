import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";
import store, { DELETE_RECIPE } from '../../store';

class Home extends Component {
  constructor(props) {
    super(props);

    let reduxState = store.getState();
    this.state = {
      recipes: reduxState.recipes
    };
  }
  
  componentDidMount(){
    store.subscribe(() => {
      let reduxState = store.getState();
      this.setState({
        recipes: reduxState.recipes
      })
    })
  }

  delete = () => {
    store.dispatch({
      type: DELETE_RECIPE,
      payload: this.props.id
    })
  }

  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          id={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.authorFirst}
          authorLast={recipe.authorLast}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          delete={this.delete}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
