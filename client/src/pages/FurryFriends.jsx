import "../index.css";

// Gallery of Cat's registered to be sat
const FurryFriends = () => {
  return (
    <div className="container">
      <Card imgSrc="./img/louie.png" title="Louie" />
      <Card imgSrc="./img/ovie.png" title="Ovie" />
      <Card imgSrc="./img/moira.png" title="Moira" />
      <Card imgSrc="./img/lola.png" title="Lola" />
      <Card imgSrc="./img/bobby.png" title="Bobby" />
      <Card imgSrc="./img/charlie.png" title="Charlie" />
      <Card imgSrc="./img/garfield.png" title="Garfield" />
      <Card imgSrc="./img/lily.png" title="Lily" />
      <Card imgSrc="./img/killer.png" title="Killer" />
      <Card imgSrc="./img/bronson.png" title="Bronson" />
      <Card imgSrc="./img/mavis.png" title="Mavis" />
      <Card imgSrc="./img/winston.png" title="Winston" />
    </div>
  );
};

// Each card will show the Cat's name, description and a 'Sit Me' button

// eslint-disable-next-line react/prop-types
const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="card">
      <img className="cat-portrait" src={imgSrc} alt={`Image of ${title}`} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>

        <button className="card-button">Sit Me</button>
      </div>
    </div>
  );
};

export default FurryFriends;
