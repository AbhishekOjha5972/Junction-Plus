import { Button, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { BsList, BsFillBookmarkFill, BsPlayFill } from "react-icons/bs"
import { MdOutlineFavorite, MdGraphicEq } from "react-icons/md"
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import CastSlider from '../Components/CastSlider'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'



const Details = () => {
  const { id } = useParams();
  const [selectedMovieData, setSelectedMovieData] = useState({})
  const [arrayOfGenre, setArrayOfGenre] = useState([])
  const [castData, setCastData] = useState([])
  const [yearValue, setYearValue] = useState([])
  const cardSlider = useRef(null)



  //TODO:- CALLING THE API WITH THE PERTICULAR MOVIE OR SHOW ID FOR GETTING MORE INFOMATION
  useEffect(() => {

    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=26b4b6b67e3c0341ce0cf1dc7ce746d9&language=en-US`)
      .then((res) => {
        setSelectedMovieData(res.data)
        setYearValue(res.data.release_date.split("-"))
        let genreArray = []
        res.data.genres.map((ele) => {
          genreArray.push(ele.name);
        })
        setArrayOfGenre(genreArray)
      })
      .catch((err) => console.log(err));


    axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=26b4b6b67e3c0341ce0cf1dc7ce746d9&language=en-US`)
      .then((res) => {
        setCastData(res.data.cast)
      })
      .catch((err) => console.log(err));

  }, [])


  //TODO:- SCROLLING THE CAST SLIDER;

  const getSliderValue = (val) => {


    let width = (val / 100) * (Math.abs(cardSlider.current?.clientWidth - 9405)) // Multiply the with of the card number with their total qauntity

    cardSlider.current.scrollLeft = width;

    console.log('width:', width)



  }



  // https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

  console.log(selectedMovieData, "selectedMovieData")
  console.log(castData, "castData")

  //TODO:- GETTING THE GENRE 
  return (
    <>
      <Container
        // border='2px solid green'
        maxWidth="100%"
        p="0"
      >
        <Navbar/>
        <Box
          position="relative"
          w="100%"
          // border='1px solid blue'
          height={["200px", "270px", "400px", "600px"]}
          // backgroundImage={`url(https://image.tmdb.org/t/p/original/${selectedMovieData.backdrop_path})`}
          // bgRepeat="no-repeat"
          // bgSize="cover"
          display="flex"
          alignItems="center"
          color="rgb(234,234,234)"
        >
          <Box position='absolute' top="0" left="0" height={["200px", "270px", "400px", "600px"]} w="100%" filter="blur(3px)"
            backgroundImage={`url(https://image.tmdb.org/t/p/original/${selectedMovieData.backdrop_path})`}
            bgRepeat="no-repeat"
            bgSize="cover"
          ></Box>
          <Box
            // border="6px solid blue"
            px={["0", "5", "10", "12"]}
            display="flex"
            justifyContent='space-between'
            alignItems='center'


          >

            {/* First Child  */}
            <Box
              // border='2px solid green'
              w='28%'
              h="100%"
              bg='black'
              // p="20px 0"
              display='flex'
              alignItems='center'
              borderRadius='10px'
              zIndex='10'

            >
              <Image src={`https://image.tmdb.org/t/p/original/${selectedMovieData.poster_path}`} borderRadius="10px" />
            </Box>

            {/* Second Child */}
            <Box
              // border='10px solid green'
              w="68%"
              p="20px 0"
              zIndex='10'
              display="flex"
              flexDirection="column"
              gap={["0", "5px", "10px", "15px"]}

            >
              <Box>
                <Heading fontSize={["18px", "20px", "25px", "35px"]}>
                  {selectedMovieData.title} {`(${yearValue[0]})`}
                </Heading>
                <Text color=" rgb(247, 210, 210)" fontSize={["10px", "12px", "14px", "16px"]}>{`${selectedMovieData.release_date} / ${arrayOfGenre.join(",")} / ${selectedMovieData.runtime}m  `}</Text>
              </Box>
              <Box display='flex' justifyContent="space-between" alignItems="center"  width={["100%", "90%", "85%", "80%"]}>
                <Box
                  borderRadius='50%'
                  bgColor="rgb(45,45,45)"
                  _hover={{ transformsScale: "1.5", cursor: "cursor" }}
                >
                  <CircularProgress
                    m="3px"
                    size={["25px", "40px", "50px", "60px"]}
                    color={Math.floor(selectedMovieData.vote_average * 10) > 70 ? "green" : Math.floor(selectedMovieData.vote_average * 10) > 30 ? "yellow" : "red"} value={Math.floor(selectedMovieData.vote_average * 10)}

                  >
                    <CircularProgressLabel>{Math.floor(selectedMovieData.vote_average * 10)}%</CircularProgressLabel>
                  </CircularProgress>
                </Box>
                <Box
                  bgColor='rgb(45,45,45)'
                  borderRadius='50%'
                  w={["20px", "30px", "45px", "50px"]}
                  h={["20px", "30px", "45px", "50px"]}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  _hover={{ fontWeight: 'semibold', color: 'gray' }}
                ><BsList fontSize={["12px", "14px", "18px", "20px"]} /></Box>
                <Box
                  bgColor='rgb(45,45,45)'
                  borderRadius='50%'
                  w={["20px", "30px", "45px", "50px"]}
                  h={["20px", "30px", "45px", "50px"]}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  _hover={{ fontWeight: 'semibold', color: 'gray' }}
                ><MdOutlineFavorite fontSize={["12px", "14px", "18px", "20px"]} /></Box>
                <Box
                  bgColor='rgb(45,45,45)'
                  borderRadius='50%'
                  w={["20px", "30px", "45px", "50px"]}
                  h={["20px", "30px", "45px", "50px"]}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  _hover={{ fontWeight: 'semibold', color: 'gray' }}
                ><BsFillBookmarkFill fontSize={["12px", "14px", "18px", "20px"]} /></Box>
                <Button
                  border='none'
                  bg='transparent'

                  _hover={{ fontWeight: 'semibold', color: 'gray' }}
                ><BsPlayFill />Play Trailer</Button>
              </Box>
              <Text
                _hover={{ color: "gray" }}
              >{selectedMovieData.tagline}</Text>
              <Box>
                <Text fontSize={["14px", "16px", "18px", "22px"]} fontWeight="600"  display={["none","none","block","block"]}>Overview</Text>


                <Popover placement='top-start' >
                  <PopoverTrigger>
                    <Button 
                    
                    display={["block","block","none","none"]} 
                    h={["20px","30px","25px"]} 
                    fontSize={["10px", "12px", "14px", "16px"]} 
                    bg="rgb(45,45,45)">
                    
                    Overview
                    
                    </Button>

                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore.
                    </PopoverBody>
                  </PopoverContent>
                </Popover>



                <Text color=" rgb(247, 210, 210);" fontSize={["10px", "12px", "14px", "16px"]} display={["none","none","block","block"]} >{selectedMovieData.overview}</Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box position="relative"
          // border="5px solid blue"
          // h="400px"
          px={["0", "5", "10", "12"]}
          color={'rgb(234,234,234)'}
        >
          <Box display="flex" alignItems="center" justifyContent="left" h="100px">
            <Heading>Cast</Heading>
          </Box>
          <Box display="flex" gap="0 15px" overflow="hidden" ref={cardSlider}>
            {
              castData.map((ele) => {
                return <CastSlider
                  key={ele.carst_id}
                  known_for_department={ele.known_for_department}
                  name={ele.name}
                  character={ele.character}
                  profile_path={ele.profile_path}
                  castId={ele.cast_id}
                />
              })

            }
          </Box>

          <Box display="flex" alignItems="center" justifyContent="center" h="70px">
            <Slider aria-label='slider-ex-4' defaultValue={0} onChange={(val) => getSliderValue(val)} width="60%">
              <SliderTrack bg='red.100'>
                <SliderFilledTrack bg='tomato' />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box color='tomato' as={MdGraphicEq} />
              </SliderThumb>
            </Slider>

          </Box>

        </Box>

        <Footer/>
      </Container>
    </>
  )
}

export default Details