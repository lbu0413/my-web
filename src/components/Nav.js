import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, Route, Link } from 'react-router-dom'

const StyledNav = styled.div`

    font-family: 'DotGothic16', sans-serif;
    font-weight: bold; 
    box-sizing: border-box;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    position: fixed;
    height: 100px;
    overflow: hidden;

    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f0f0f0;
    }

    header {
        justify-self: flex-start;
        width: 20%;
        font-size: 1.6rem;
    }

    nav {
        width: 100%;
    }
    

    nav ul {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        list-style-type: none;
        padding: 1rem;
    }

    .le {
        font-size: 1.6rem;
    }

    .nav-links {
        text-decoration: none;
        color: black;
        margin: 1rem;
    }

    .nav-links:hover {
        color: #c5d5c5;
    }

    .nav-links:active {
        padding-bottom: 3px solid #c5d5c5;
    }

    @media (max-width: 800px) {
        .nav-container {
            width: 100%;
        }
    }



`




const Nav = () => {

    return (
        <StyledNav>
            <div className="nav-container">
                <header>
                    <NavLink exact to="/" className="home nav-links">
                        Wook
                    </NavLink>
                </header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/about" className="nav-links">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" className="nav-links">
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/pics" className="nav-links">
                                Pics
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
           
        </StyledNav>
    )
}

export default Nav;