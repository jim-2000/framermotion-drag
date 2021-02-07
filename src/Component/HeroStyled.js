import styled from 'styled-components'

import { motion } from 'framer-motion'


export const Section = styled.section`
    height:100vh;
    width:100%;
    display:flex;
    justify-content:center;
    align-itmes: center;
    background: #131313;

`;
export const Container = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    height: 100vh;
    width:100%;
    padding: 3rem calc((100vw-1300px) / 2);

    @media screen and (max-width: 768px){
        grid-template-columns:1fr;
    };
`  ;

export const CulomnLeft = styled.div`
    display:flex;
    flex-direction:column;
    color:#fff;
    justify-content:center;
    align-items:flex-start;
    padding: 5rem 2rem;
    overflow-x:hidden;
    h1{
        margin-bottom: 0.5rem;
        font-size:2rem;
     
    }
    p{
        margin: 2rem 0;
        font-size:4rem;
        line-height:1.1;
    }

`






export const Button = styled(motion.button)`
padding: 1rem 3rem;
color:#fff;
font-size:1.5rem;
border:  2px solid #fff;
border-radius:4px;
outline:none;
cursor:pointer;
background: transparent ;
`;

export const Image = styled(motion.img)`
position: absolute;
width:100%;
height:100%;
max-width:250px;
max-height:250px;
`;
