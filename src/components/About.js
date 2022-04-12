import roberta from '../assets/img/personas/roberta.jpg';
import marcela from '../assets/img/personas/marcela.jpg';
import andrea from '../assets/img/personas/andrea.jpg';

export const About = () => {
  return (
    <section className="about__content">
      <h3 className="about__title">Quienes somos</h3>
      <p className="about__descripcion">Conozca la comunidad por detrás de la iniciativa!</p>
      <div className="about__team">
        <div className="about__person">
          <img className="about__person-image" src={roberta} alt="team" />
          <span className="about__person-name">Roberta</span>
          <span className="about__person-rol">Contenido</span>
        </div>
        <div className="about__person">
          <img className="about__person-image" src={marcela} alt="team" />
          <span className="about__person-name">Marcela</span>
          <span className="about__person-rol">Chef de cocina</span>
        </div>
        <div className="about__person">
          <img className="about__person-image" src={andrea} alt="team" />
          <span className="about__person-name">Andrea</span>
          <span className="about__person-rol">Pequeña Productora</span>
        </div>
      </div>
    </section>
  )
}
