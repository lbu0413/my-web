import React from 'react';
import styled from 'styled-components'
import leon1 from '../img/leon-1.jpeg'
import leon2 from '../img/leon-2.jpg'
import leon3 from '../img/leon-3.jpg'
import leon4 from '../img/leon-4.jpg'
import leon5 from '../img/leon-5.jpg'
import leon6 from '../img/leon-6.jpg'
import leon7 from '../img/leon-7.jpg'
import leon8 from '../img/leon-8.jpg'
import leon9 from '../img/leon-9.jpg'
import leon10 from '../img/leon-10.jpg'
import levi1 from '../img/levi-1.jpeg'
import levi2 from '../img/levi-2.jpg'
import levi3 from '../img/levi-3.jpg'
import levi4 from '../img/levi-4.jpg'
import levi5 from '../img/levi-5.jpg'
import levi6 from '../img/levi-6.jpg'
import levi7 from '../img/levi-7.jpg'
import levi8 from '../img/levi-8.jpg'
import levi9 from '../img/levi-9.jpg'
import levi10 from '../img/levi-10.jpg'
import levi11 from '../img/levi-11.jpg'
import le1 from '../img/le-1.jpg'
import le2 from '../img/le-2.jpg'
import le3 from '../img/le-3.jpg'
import le4 from '../img/le-4.jpg'
import le5 from '../img/le-5.jpg'
import le6 from '../img/le-6.jpg'
import le7 from '../img/le-7.jpg'
import le8 from '../img/le-8.jpg'
import le9 from '../img/le-9.jpg'
import le10 from '../img/le-10.jpg'
import le11 from '../img/le-11.jpg'


const StylePics = styled.div`
    font-family: 'DotGothic16', sans-serif;
    padding-top: 100px;
    

    img {
        display: block;
        width: 200px;
        height: 200px;
        margin: auto;
        border: 1px solid #ddd;
        padding: 5px;
        transition: transform .1s;
        border-radius: 20px;
    }
    .image-container {
        display: flex;
        flex-flow: wrap;
        justify-content: center;
        align-items: center; 
    }

    img:hover {
        transform: scale(1.2);
    }

    @media (max-width: 800) {
        .pics-container {
            flex-flow: column;
        }
    }
`


const Pics = () => {
    return(
        <StylePics className="pics-container">
            <div className="image-container">
            <img src={leon1}/>
                    <img src={leon2}/>
                    <img src={leon3}/>
                    <img src={leon4}/>
                    <img src={leon5}/>
                    <img src={leon6}/>
                    <img src={leon7}/>
                    <img src={leon8}/>
                    <img src={leon9}/>
                    <img src={leon10}/>
                    <img src={levi1}/>
                    <img src={levi2}/>
                    <img src={levi3}/>
                    <img src={levi4}/>
                    <img src={levi5}/>
                    <img src={levi6}/>
                    <img src={levi7}/>
                    <img src={levi8}/>
                    <img src={levi9}/>
                    <img src={levi10}/>
                    <img src={levi11}/>
                    <img src={le1}/>
                    <img src={le2}/>
                    <img src={le3}/>
                    <img src={le4}/>
                    <img src={le5}/>
                    <img src={le6}/>
                    <img src={le7}/>
                    <img src={le8}/>
                    <img src={le9}/>
                    <img src={le10}/>
                    <img src={le11}/>
            </div>
                    
            
        </StylePics>
    )
} 

export default Pics;