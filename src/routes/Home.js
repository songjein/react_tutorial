import axios from "axios";
import React from "react";
import PropTypes from "prop-types";

import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count: 0,
    isLoading: true,
    movies: [],
  };
  add = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    //this.setState({ count: this.state.count - 1 });
    this.setState((current) => ({ count: current.count - 1 }));
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    console.log("component rendered");
    this.getMovies();
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  render() {
    const { isLoading, movies } = this.state;
    console.log("component is rendering");
    return (
      <div>
        <section className="container">
          {isLoading ? (
            <div className="loader">
              <span className="loader__text">Loadding...</span>
            </div>
          ) : (
            movies.map((movie) => {
              console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })
          )}
        </section>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h1>I like {name}</h1>
//       <h3>{rating}/6.0</h3>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// };

// const foodILike = [
//   {
//     id: 1,
//     name: "kimchi",
//     image: "https://via.placeholder.com/150/FF0000",
//     rating: 5.0,
//   },
//   {
//     id: 2,
//     name: "samgyep",
//     image: "https://via.placeholder.com/150/0000FF",
//     rating: 5.5,
//   },
//   {
//     id: 3,
//     name: "jeinsong",
//     image: "https://via.placeholder.com/150/00FF00",
//     rating: 5.1,
//   },
// ];

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }

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

export default Home;
