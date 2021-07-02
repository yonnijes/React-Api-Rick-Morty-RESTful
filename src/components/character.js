import React, { useEffect } from "react";

// hooks react redux
import { useDispatch, useSelector } from "react-redux";

// importamos la acción
import { obtenerCharacterAction } from "../redux/characterDucks";

const Character = () => {
  // declaramos displach para llamar a la acción o acciones
  const dispatch = useDispatch();

  // crearmos el state utilizando nuestra tienda
  // store.Character lo sacamos de la tienda
  const character = useSelector((store) => store.character.array);
  const page = useSelector((store) => store.character.page);

  useEffect(() => {
    dispatch(obtenerCharacterAction());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="title">Personajes!</h1>

      {character.map((item) => (
        <div key={item.id}>
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src={item.image} alt="Placeholder image" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{item.name}</p>
                  <p className="subtitle is-6">
                    {item.species} -{item.gender}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br></br>
        </div>
      ))}

      {page > 1 ? (
        <button
          className="button"
          onClick={() => dispatch(obtenerCharacterAction(page-1))}
        >
          Anterior
        </button>
      ) : null}
      <button
        className="button"
        onClick={() => dispatch(obtenerCharacterAction(page+1))}
      >
        Siguente
      </button>

      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
export default Character;
