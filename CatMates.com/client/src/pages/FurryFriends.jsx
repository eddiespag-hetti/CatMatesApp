import "../index.css";

// Gallery of Cat's registered to be sat
const FurryFriends = () => {
  return (
    <div className="container">
      <Card
        imgSrc="./img/louie.png"
        title="Louie"
        description="Description of image 1."
      />
      <Card
        imgSrc="./img/ovie.png"
        title="Ovie"
        description="Description of image 2."
      />
      <Card
        imgSrc="./img/moira.png"
        title="Moira"
        description="Description of image 3."
      />
        <Card
          imgSrc="./img/lola.png"
          title="Lola"
          description="Description of image 4."
        />
      <Card
        imgSrc="./img/bobby.png"
        title="Bobby"
        description="Description of image 4."
      />
      <Card
        imgSrc="./img/charlie.png"
        title="Charlie"
        description="Description of image 6."
      />
      <Card
        imgSrc="./img/garfield.png"
        title="Garfield"
        description="Description of image 7."
      />
      <Card
        imgSrc="./img/lily.png"
        title="Lily"
        description="Description of image 8."
      />
      <Card
        imgSrc="./img/killer.png"
        title="Killer"
        description="Description of image 9."
      />
        <Card
       imgSrc="./img/bronson.png"
       title="Bronson"
       description="Description of image 10."
     />
      <Card
        imgSrc="./img/mavis.png"
        title="Mavis"
        description="Description of image 11."
      />
      <Card
        imgSrc="./img/winston.png"
        title="Winston"
        description="Description of image 12."
      />
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
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default FurryFriends;
