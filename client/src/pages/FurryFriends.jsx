import "../furryFriends.css";
import { useNavigate } from 'react-router-dom';

// Gallery of Cat's registered to be sat
const FurryFriends = () => {
  return (
    <div className="container-gallery">
      <Card imgSrc="./img/louie.png" title="Louie" />
      <Card imgSrc="./img/ovie.png" title="Ovie" />
      <Card imgSrc="./img/moira.png" title="Moira" />
      <Card imgSrc="./img/lola.png" title="Lola" />
      <Card imgSrc="./img/bobby.png" title="Bobby" />
      <Card imgSrc="./img/charlie.png" title="Charlie" />
      <Card imgSrc="./img/lily.png" title="Lily" />
      <Card imgSrc="./img/killer.png" title="Killer" />
      <Card imgSrc="./img/bronson.png" title="Bronson" />
      <Card imgSrc="./img/garfield.png" title="Garfield" />
      <Card imgSrc="./img/mavis.png" title="Mavis" />
      <Card imgSrc="./img/winston.png" title="Winston" />
    </div>
  );
};


// Each card will show the Cat's name and a 'Sit Me' button
const Card = ({ imgSrc, title }) => {


    const navigate = useNavigate();
  
    const handleSitMeClick = () => {
      navigate(`/CatInfo/${title}`);
    };
  
  return (
  
    <div className="card">
      <img className="cat-portrait" src={imgSrc} alt={`Image of ${title}`} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>

        <button className="card-button" oncClick={handleSitMeClick}>Sit Me</button>
      
      </div>
    </div>
  
    
  );
};

export default FurryFriends;
