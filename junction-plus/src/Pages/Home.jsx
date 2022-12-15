import React, { useEffect, useState } from 'react'
import HomePageCarousel from '../Components/HomePageCarousel'
import axios from "axios"
import CommonSlider from '../Components/CommonSlider';
import { Box, Container, Divider, Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Navbar from '../Components/Navbar';

const Home = () => {

  //* THIS IS THE STATES DECLARING ARE.
  const [popularMovieData, setPupularMovieData] = useState([]);



  //TODO:- GET THE DATA OF POPULAR MOVIES FOR SLIDER ONE.

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=26b4b6b67e3c0341ce0cf1dc7ce746d9&language=en-US&page=1`)
      .then((res) => {
        console.log(res)
        setPupularMovieData(res.data.results)
      })
      .catch((err) => console.log(err))
  }, [])


  //TODO:- HERE WE ARE CREATING A FUNCTION WHO WILL ACCEPT THE TYPE IN WHICH YOUR WANTS THE MOVIES 

  const handleStateAndTypeOfMovie = (val) => {

    let query = ""
    if (val == "Popular") {
      query = "popular";
    }
    else if (val == "In Threatre") {
      query = "now_playing";
    }
    else if(val=="Top Rated"){
      query="top_rated"
    }
   
    
    console.log(val,query)
    // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
    axios.get(`https://api.themoviedb.org/3/movie/${query}?api_key=26b4b6b67e3c0341ce0cf1dc7ce746d9&language=en-US&page=1`)
    .then((res) => {
        console.log(res.data.results,"this is the current calling function")
        setPupularMovieData(res.data.results)
        console.log("hellow ")
      })
      .catch((err) => console.log(err))

  }

  console.log('popularMovieData:', popularMovieData)

  return (
    <div>

      <Navbar />
      <HomePageCarousel />
      <Container maxWidth="100%" p={0}>
        <Box  padding="3% 0" position="relative">
          <Container maxWidth="100%"  px={["5", "10", "12"]}>


            <Tabs size='md' variant='enclosed' padding="20px 0">
              <TabList >
                <Text w={["100", "150px", "200px"]} fontWeight="700" fontSize={["16px", "18px", "25px"]} color="rgb(234,234,234)" display="flex" justifyContent="left" alignItems="center"  >What's Popular</Text>


                <Tab onClick={() => handleStateAndTypeOfMovie("Popular")} color="rgb(234,234,234)">Popular</Tab>
                <Tab onClick={() => handleStateAndTypeOfMovie("Top Rated")} color="rgb(234,234,234)" >Top Rated</Tab>
                <Tab onClick={() => handleStateAndTypeOfMovie("In Threatre")} color="rgb(234,234,234)" >In Theatres</Tab>
              </TabList>
            </Tabs>
          </Container>
          <CommonSlider popularMovieData={popularMovieData} />
        </Box>

      </Container>

    </div>
  )
}

export default Home