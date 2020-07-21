import React from "react";
import PropTypes from "prop-types";

function Company({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/10.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const companyILike = [
  {
    id: 1,
    rating: 4,
    name: "Tesla",
    image:
      "https://image.chosun.com/sitedata/image/202007/19/2020071900291_0.jpg",
  },
  {
    id: 2,
    rating: 5,
    name: "Amazon",
    image:
      "https://i.insider.com/5d51c9257e337f074d2d2460?width=1100&format=jpeg&auto=webp",
  },
  {
    id: 3,
    rating: 6,
    name: "Apple",
    image:
      "https://lh3.googleusercontent.com/proxy/JhjgI7GdJ8tusPQHp996O7EnymQgJH3Q3HLInOc2YpMS8BMb7qY76rof7lbYiq3C5gpsPCcMMAhhoIS8LxEBDqSaoJ7eTHMrNqTslwKGSeVKseIBE8hzEw",
  },
  {
    id: 4,
    rating: 7,
    name: "Google",
    image:
      "https://s.france24.com/media/display/6aaac352-163c-11ea-9c6b-005056bff430/w:1280/p:16x9/ALPHABET-GOOGLE.webp",
  },
];

Company.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function renderCompany(comp) {
  console.log(comp);
  return (
    <Company
      key={comp.id}
      rating={comp.rating}
      name={comp.name}
      picture={comp.image}
    />
  );
}

function App() {
  return <div>{companyILike.map(renderCompany)}</div>;
}

export default App;
