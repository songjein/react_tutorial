import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h3>{rating}/6.0</h3>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://via.placeholder.com/150/FF0000",
    rating: 5.0,
  },
  {
    id: 2,
    name: "samgyep",
    image: "https://via.placeholder.com/150/0000FF",
    rating: 5.5,
  },
  {
    id: 3,
    name: "jeinsong",
    image: "https://via.placeholder.com/150/00FF00",
    rating: 5.1,
  },
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}

// function App() {
//   return (
//     <div className="App">
//       Hello
//       {foodILike.map((dish) => (
//         <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
//       ))}
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count: 0,
    isLoading: true,
  };
  add = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    //this.setState({ count: this.state.count - 1 });
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("component rendered");
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  render() {
    const { isLoading } = this.state;
    console.log("component is rendering");
    return (
      <div>
        <div>{isLoading ? "Loadding..." : "We are ready"}</div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
