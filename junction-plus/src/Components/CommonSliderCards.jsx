import { Text } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styles from "./CommonSliderCards.module.css"
import GenreData, { GenreUniversal } from './GenreData'


const CommonSliderCards = ({ image, genre, id, adult, title, release_date }) => {

  //TODO:- STATE AREA
  const { genreData } = useContext(GenreUniversal);

  // image={ele.poster_path} 
  // genre={ele.genre_ids}
  // id={ele.id}
  // adult={ele.adult}
  // title={ele.title}
  // release_date={ele.release_date}
  console.log(title, release_date, adult, id, genre)
  let genreArray = []
  let i = 0;
  genreData.map((gEle, ind) => {
    if (gEle.id == genre[i]) {
      genreArray.push(gEle.name);
      i++
    }
  })

  console.log(genreArray)
  return (
    <Link to={`details/${id}`}>
      <div className={styles.sliderCards}>
        <div className={styles.titleImage}>
          <img src={`https://image.tmdb.org/t/p/original/${image}`} />
        </div>
        <div>

        </div>
        <Text fontSize= '17px' fontWeight="600" marginTop="10px" noOfLines={2}>
        {title}
        </Text>
        <p style={{ color: 'gray' }}>{release_date}</p>
        <p><span style={{fontWeight:"600"}}>Genre:</span> {genreArray.join(", ")}</p>
        {adult?<p><span style={{color:"red"}}>Age Limit</span>NC-17 🔞</p>:null}
      </div>
    </Link>
  )
}

export default CommonSliderCards