import React, { useRef, useState } from 'react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Box,
    Text,
    Container,

} from '@chakra-ui/react'
import { MdGraphicEq } from "react-icons/md"
import styles from "./GetTrailers.module.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import axios from "axios"
import YtVideoCard from './YtVideoCard'


const GetTrailers = () => {
    const thumbnails = useRef(null)
    const [ytData,setYtData] = useState([])
    const boxBgImage = useRef(null)

    const clickNext = (val) => {
        console.log('val:', val)

        let width = (val / 100) * (Math.abs(thumbnails.current?.clientWidth - (20 * 200))) // Multiply the with of the card number with their total qauntity

        thumbnails.current.scrollLeft = width;

        console.log('width:', width)
    }


    const handleYTrequest = (query) => {


        //TODO:- GET THE DATA FROM YOUTUBE API

        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyAJ_l-qloiu0uwUZqtNkRS3PBx3LZAnDeA`)
        .then((res)=>{
            setYtData(res.data.items)
            console.log(res)
        })
        .catch((err)=>console.log(err));
    }

    const handleMouseOver = (val) =>{
        boxBgImage.current.style.backgroundImage=`url(${val})`;
    }

console.log(ytData)

    return (
        <>
            <Box className={styles.ytMainContainer} ref={boxBgImage}>


                <Box position="relative" border={'1px solid blue'}>
                    <Container maxWidth="100%" px={["5", "10", "12"]} border={'1px solid blue'}>
                        <Tabs size='md' variant='enclosed' padding="20px 0" border={'1px solid blue'}>
                            <TabList >
                                <Text w={["100px", "150px", "fit-content"]} fontWeight="700" fontSize={["16px", "18px", "25px"]} color="rgb(234,234,234)" display="flex" justifyContent="left" alignItems="center" paddingRight={"10px"} >Latest Trailers</Text>
                                <Tab onClick={() => handleYTrequest("hollywood trending movie trailer")} color="rgb(234,234,234)">Trending</Tab>
                                <Tab onClick={() => handleYTrequest("Top Rated")} color="rgb(234,234,234)" >Top Rated</Tab>
                                <Tab onClick={() => handleYTrequest("On The Air")} color="rgb(234,234,234)" >On the Air</Tab>
                                <Tab onClick={() => handleYTrequest("Airing Today")} color="rgb(234,234,234)" >Airing Today</Tab>
                            </TabList>
                        </Tabs>
                    </Container>
                </Box>






                <Container maxWidth="100%" px={["5", "10", "12"]}>

                    <div className={styles.thumbnailsContainer} ref={thumbnails}>
                    
                        <YtVideoCard onMouseOver={handleMouseOver}/>
                        <YtVideoCard onMouseOver={handleMouseOver}/>
                        <YtVideoCard onMouseOver={handleMouseOver}/>
                        <YtVideoCard onMouseOver={handleMouseOver}/>
                        <YtVideoCard onMouseOver={handleMouseOver}/>
                        <YtVideoCard onMouseOver={handleMouseOver}/>
                        <YtVideoCard onMouseOver={handleMouseOver}/>
                        <YtVideoCard onMouseOver={handleMouseOver}/>
                        <YtVideoCard onMouseOver={handleMouseOver}/>
                        <YtVideoCard onMouseOver={handleMouseOver}/>
                        <YtVideoCard onMouseOver={handleMouseOver}/>
                    </div>
                </Container>

                <div>
                    <Slider aria-label='slider-ex-5' onChange={(val) => {
                        clickNext(val)

                    }} w="30%" defaultValue={0}>
                        <SliderTrack>
                            <SliderFilledTrack bg='tomato' />
                        </SliderTrack>
                        <SliderThumb boxSize={6}>
                            <Box color='tomato' as={MdGraphicEq} />
                        </SliderThumb>
                    </Slider>
                </div>
            </Box>

        </>
    )
}

export default GetTrailers