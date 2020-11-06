import React, {useEffect, useState} from "react";
import './Genres.scss'
import {getMoviesGenres, getTvGenres} from "../../services/typeSearch/typeSearch";
import * as ReactBootstrap from "react-bootstrap";


const Genres = (props) => {

  const typesForSearchGenre = props.types;
  const [typeGenre, setTypeGenre] = useState([]);

  useEffect(() => {

    if(typesForSearchGenre==='movies'){
          getMoviesGenres().then(res => {
            let key=Object.keys(res.data);
            setTypeGenre(Object.values(res.data[key]));

          });



    }else if (typesForSearchGenre==='series'){
      getTvGenres().then(res => {
              let key=Object.keys(res.data);
              setTypeGenre(Object.values(res.data[key]));

            })

    }



  }, [typesForSearchGenre]);



  return (
    <main className='container-genres'>
      <ul className='genre-list'>
        {typeGenre.map(types=>

        <li key={types.id} className='list-items-genre'><ReactBootstrap.FormCheck className='check-items' label={types.name} type='radio'
                                                     id={types.id} /></li>

        )}

      </ul>

    </main>
  )


};

export default Genres;
