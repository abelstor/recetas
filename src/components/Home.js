import banner from '../assets/img/banner.jpg';
import { About } from './About';
import { Contact } from './Contact';
import { Recipes } from './Recipes';

export const Home = () => {

  return (

    <>
      <main className="home__content">
        <section className="home__banner">
          <img className="home__image" src={banner} alt="banner" />
          <h1 className="home__banner-title">Reaproceche mejor los alimentos</h1>
        </section>
        <section className="home__description">
          <h2 className="home__description-title">Recetar para economizar y ganar salud</h2>
          <p className="mt-5">Nuestras recetas te ayudan a aprovechar mejor los alimentos, economizar, ganar tiempo y practicidad!</p>
        </section>
      </main>
      <Recipes />
      <About />
      <Contact />
    </>
  )
}
