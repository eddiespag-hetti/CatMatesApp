import '../index.css';
import About from '../components/About/About.jsx';


const Home = () => {
    return(
        <>
       <section className="hero-container">
       <div className='hero-content'>
        <img src="./img/catmatesdark.png"  className="hero-img"></img>
        </div>
        </section>
        <section className='about'>
            <About/>
        </section>
        </>
    )
}

export default Home; 