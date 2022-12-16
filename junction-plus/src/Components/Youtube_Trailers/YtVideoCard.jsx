import React from 'react'
import { Box } from '@chakra-ui/react'

const YtVideoCard = ({onMouseOver}) => {
  return (
    <div onMouseOver={()=>onMouseOver('https://is5-ssl.mzstatic.com/image/thumb/lgskq6n1xkUI5DOyA5tWWQ/1478x832.webp')}>
     <Box>
     <img src='https://is5-ssl.mzstatic.com/image/thumb/lgskq6n1xkUI5DOyA5tWWQ/1478x832.webp'/>
     </Box>
     <p>title</p>
     <p>title</p>
    </div>
  )
}
export default YtVideoCard;