import React, { useContext, useEffect, useState } from 'react'
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react"
import axios from "axios"
import { useParams } from 'react-router-dom'
import { GenreUniversal } from '../Components/GenreData'
const Details = () => {
  const { id } = useParams();
  const [selectedMovieData, setSelectedMovieData] = useState({})
  const [yearValue, setYearValue] = useState([])
  const { genreData } = useContext(GenreUniversal)
  const [arrayOfGenre, setArrayOfGenre] = useState([])
  console.log(id)
  let genreArray = []


  //TODO:- CALLING THE API WITH THE PERTICULAR MOVIE OR SHOW ID FOR GETTING MORE INFOMATION
  useEffect(() => {

    // console.log(i,"this is i")
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=26b4b6b67e3c0341ce0cf1dc7ce746d9&language=en-US`)
      .then((res) => {
        setSelectedMovieData(res.data)
        setYearValue(res.data.release_date.split("-"))
        let i = 0;
        genreData.map((ele) => {
          if (ele.id == res.data.genres[i].id) {
            console.log("jugaad")
            genreArray.push("hello")
            i++
          }
        })
      })
      .catch((err) => console.log(err));
  }, [])


  //TODO:- GETTING THE GENRE 
  console.log(genreArray)

  return (
    <>
      <Container
        border='2px solid green'
        maxWidth="100%"
        p="0"
      >
        <Box
          position="relative"
          w="100%"
          border='1px solid blue'
          height={["200px", "270px", "400px", "600px"]}
          backgroundImage={`url(https://image.tmdb.org/t/p/original/${selectedMovieData.backdrop_path})`}
          bgRepeat="no-repeat"
          bgSize="cover"
          display="flex"
          alignItems="center"
          color="rgb(234,234,234)"
        >
          <Box
            border="3px solid blue"
            px={["5", "10", "12"]}
            display="flex"
            justifyContent='space-between'
            alignItems='center'

          >

            {/* First Child  */}
            <Box
              border='2px solid green'
              w='28%'
              h="100%"
              bg='black'
              // p="20px 0"
              display='flex'
              alignItems='center'
              borderRadius='10px'
            >
              <Image src={`https://image.tmdb.org/t/p/original/${selectedMovieData.poster_path}`} borderRadius="10px" />
            </Box>

            {/* Second Child */}
            <Box
              border='2px solid green'
              w="68%"
              p="20px 0"
            >
              <Box>
                <Heading>
                  {selectedMovieData.title} {`(${yearValue[0]})`}
                </Heading>
                <Text>`{selectedMovieData.release_date} / {arrayOfGenre.join(" ")}` </Text>
              </Box>
              <Box></Box>
              <Box></Box>
            </Box>


          </Box>



        </Box>
      </Container>
    </>
  )
}

export default Details