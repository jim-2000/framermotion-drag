import React from 'react'
import styled from 'styled-components'

import { motion } from 'framer-motion'
import { Section,Container, CulomnLeft,Button, Image } from './HeroStyled'

import Planet from './Images/planet.svg'
import PlanetThree from './Images/planet-3.svg'
import PlanetTwo from './Images/planet-2.svg'
import PlanetFour from './Images/planet-4.svg'
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const CulomnRight = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 padding:2rem;
 position:relative;
 ${Image}:nth-child(1){
     top:10px;
     left:10px;
 }
 ${Image}:nth-child(2){
    top:170px;
    right:10px;
}
${Image}:nth-child(3){
    top:350px;
    left:10px;
}
${Image}:nth-child(4){
    bottom:100px;
    right:75px;
}
`;




//>>>>>>>
function Hero() {
const fadeleft = {
    hidden: { opacity:0,y:-5000},
    visiable: { opacity:1, y:0}
}



    return (
        <div>
            <Section>
                <Container>
                    <CulomnLeft>
                        <motion.h1
                        initial={{ x:-300}}
                        animate={{ x:0}}
                        transition={{duration:1}}
                        >Welcome to Space</motion.h1>
                        <motion.p
                        variants={fadeleft}
                        initial="hidden"
                        animate="visiable"
                        transition={{duration:1, type:"spring", stiffness:50}}
                        >Journey to the unknown</motion.p>
                        <Button
                        initial={{opacity:0}}
                        animate={{ opacity:1}}
                        transition={{ duration:1.5}}
                        whileHover={{scale:1.05, color:"Highlight"}}
                        whileTap={{ scale:0.95, 
                            backgroundColor:"#67f6e7",border:"none",
                            color:"#000"
                        
                    }}
                        >Come Hare</Button>
                    </CulomnLeft>
                    <CulomnRight>
                        <Image src={Planet} alt="Planet" 
                        whileTap={{scale:0.9}} drag={true}
                        dragConstraints={{ left:0, right:250, top:0, bottom:50}}
                        initial={{ opacity:0, y:-2000}}
                        animate={{ opacity:1, y:0, transition:{duration:3}}}
                        />
                        <Image src={PlanetTwo} alt="Planet"
                        whileTap={{scale:0.9}} drag={true}
                        dragConstraints={{ left:50, right:0, top:0, bottom:50}}
                        initial={{ opacity:0, x:6000}}
                        animate={{ opacity:1, x:0, transition:{duration:3}}} />

                        <Image src={PlanetThree} alt="Planet" 
                          whileTap={{scale:0.9}} drag={true}
                          dragConstraints={{ left:0, right:250, top:0, bottom:50}}
                          initial={{ opacity:0, y:4000}}
                          animate={{ opacity:1, y:0, transition:{duration:3}}}
                         />


                        <Image src={PlanetFour} alt="Planet"
                            whileTap={{scale:0.9}} drag={true}
                            dragConstraints={{ left:0, right:0, top:0, bottom:0}}
                            initial={{ opacity:0, x:-4000}}
                            animate={{ opacity:1, x:0, transition:{duration:3, delay:0}}} />
                    </CulomnRight>
                    
                </Container>
            </Section>
        </div>
    )
}

export default Hero;
