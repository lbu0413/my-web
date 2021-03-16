import React from 'react';
import styled, { css } from 'styled-components'


const StyledHome = styled.div`
    font-family: 'DotGothic16', sans-serif;
    display: flex;
    height: 100vh;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    span {
        font-size: 8rem
    }

    h2 {
        text-align: center;
    }

    @media (max-width: 800px){
        .home-container {
            width: 100%;
            height: 100%;
        }
        span {
            font-size: 4rem;
        }

        h2 {
            font-size: 1rem;
        }
    }

`


const Home = () => {
    
    return(
        <StyledHome className="home-container">
    
            <span>Welcome</span>
            <h2>This is my multi-purpose website.<br/>
                    It was not only designed for a portfolio piece, <br/>
                    but also includes my personal things.<br/>
                    Enjoy your time here. <br/>
                    Thank you for your visit. <br/>
            </h2>
           
        </StyledHome>
    )
}

export default Home;