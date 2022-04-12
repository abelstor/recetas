
import bowl from '../assets/img/recetas/bowl-de-aguacate.jpg';
import kiwi from '../assets/img/recetas/ensalada-de-kiwi.jpg';
import mix from '../assets/img/recetas/mix-de-vegetales.jpg';
import pimentones from '../assets/img/recetas/pimentones-a-la-juliana.jpg';
import oriental from '../assets/img/recetas/plato-oriental.jpg';
import remolachas from '../assets/img/recetas/remolachas-horneadas.jpg';

export const Recipes = () => {

  return (
    <section className="recipe__content">
      <div className="recipe__card">
        <img alt="Tigela de abacate" className="recipe__card-image" src={bowl} />
        <div className="recipe__card-item">
          <h4 className="recipe__card-title">Bowl de aguacate</h4>
          <p className="recipe__card-description">Receta refrescante y llena de vitaminas para su desayuno.</p>
          <button className="recipe__card-button pointer">Ver receta</button>
        </div>
      </div>
      <div className="recipe__card">
        <img alt="Ensalada de kiwi" className="recipe__card-image" src={kiwi} />
        <div className="recipe__card-item">
          <h4 className="recipe__card-title">Ensalada de kiwi</h4>
          <p className="recipe__card-description">Receta refrescante y llena de vitaminas para su desayuno.</p>
          <button className="recipe__card-button pointer">Ver receta</button>
        </div>
      </div>
      <div className="recipe__card">
        <img alt="Mix de vegetales" className="recipe__card-image" src={mix} />
        <div className="recipe__card-item">
          <h4 className="recipe__card-title">Mix de vegetales</h4>
          <p className="recipe__card-description">Receta refrescante y llena de vitaminas para su desayuno.</p>
          <button className="recipe__card-button pointer">Ver receta</button>
        </div>
      </div>
      <div className="recipe__card">
        <img alt="Pimentones a la Juliana" className="recipe__card-image" src={pimentones} />
        <div className="recipe__card-item">
          <h4 className="recipe__card-title">Pimentones a la Juliana</h4>
          <p className="recipe__card-description">Receta refrescante y llena de vitaminas para su desayuno.</p>
          <button className="recipe__card-button pointer">Ver receta</button>
        </div>
      </div>
      <div className="recipe__card">
        <img alt="Plato oriental" className="recipe__card-image" src={oriental} />
        <div className="recipe__card-item">
          <h4 className="recipe__card-title">Plato oriental</h4>
          <p className="recipe__card-description">Receta refrescante y llena de vitaminas para su desayuno.</p>
          <button className="recipe__card-button pointer">Ver receta</button>
        </div>
      </div>
      <div className="recipe__card">
        <img alt="Remolachas horneadas" className="recipe__card-image" src={remolachas} />
        <div className="recipe__card-item">
          <h4 className="recipe__card-title">Remolachas horneadas</h4>
          <p className="recipe__card-description">Receta refrescante y llena de vitaminas para su desayuno.</p>
          <button className="recipe__card-button pointer">Ver receta</button>
        </div>
      </div>
    </section>
  )
}
