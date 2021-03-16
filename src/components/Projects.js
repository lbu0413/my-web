import React from 'react';
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import todoPreview from '../img/todo-preview.png'


const StyleProjects = styled.div`
    font-family: 'DotGothic16', sans-serif;

    .project-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
    }

    .project {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        width: 100%;
        height: 100vh;
        margin-top: 0;
        border-bottom: 2px solid #ddd;
    }
    
    .small-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    img {
        width: 400px;
        margin: 10px;
    }
    
    img:hover {
        cursor: pointer;
    }

    p {
        justify-content: center;
        width: 400px;
        height: 483px;
        text-align: right;
        margin: 10px;
    }

    i {
        font-size: 3rem;
        margin: 5px;
    }

    .icon-container {
        margin-bottom: 20px;
    }

    span {
        font-size: 12px;
        color: #adb5bd;
        align-self: center;
    }

    @media (max-width: 800px) {
    .project .small-container {
        flex-flow: column;
    }

    .project-container {
        margin-top: 200px;
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .project {
        width: 100%;
        height: 100%;
        margin-bottom: 30%;
    }

    img {
        width: 90%;
    }

    p {
        width: 90%;
        height: 100%;
        text-align: right;
        margin-bottom: 5%;
    }

    span {
        text-align: center;
        margin: 0 auto;
    }

}
`



const Projects = () => {
 

    return(
        <StyleProjects>
            <div className="project-container">
                <div className="project">
                    <h2>Todo App</h2>
                    <div className="icon-container">
                        <i className="devicon-javascript-plain colored"></i>
                        <i className="devicon-react-original colored"></i>
                        <i className="devicon-css3-plain colored"></i>
                    </div>
                    <span>Click on image to experience the actual project </span>
                    <div className="small-container">
                        <Link to="/projects/todo-app">
                            <img src={todoPreview} />
                        </Link>
                        
                        <p>One of the first projects I made to practice in React environment.
                        Implemented React.memo, react-virtualized and  functional updates to practice Performance Optimization. I learned that it is very important to keeping states immutable when updating in React components because it can optimize performance by only picking out what has changed and just simply renders them. While making the Todo-App, I tried to follow every rule of immutability: using concat method instead of push, or using spread operation (shallow copy) to copy objects , or also could use immer.</p>
                    </div>
                </div>
                <div className="project">
                    <h2>Todo App</h2>
                    <div className="icon-container">
                        <i className="devicon-javascript-plain colored"></i>
                        <i className="devicon-react-original colored"></i>
                        <i className="devicon-sass-original colored"></i>
                    </div>
                    <div className="small-container">
                        <img src={todoPreview} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate maximus magna, in imperdiet mauris ultricies nec. Maecenas iaculis nisl odio, id porta tortor faucibus vel. Donec nibh neque, aliquet tempus scelerisque a, scelerisque id nunc. Nullam ante nunc, efficitur sed lacus sed, dignissim rutrum arcu. Duis pharetra, nisi ac porttitor efficitur, justo massa vulputate lacus, id malesuada dolor dolor quis massa. Phasellus purus arcu, finibus pharetra mattis sagittis, rhoncus ac elit. Nullam massa mauris, consectetur at erat viverra, elementum condimentum tortor. Aenean euismod diam elit, ac molestie ex efficitur sit amet. Duis semper malesuada diam vitae sollicitudin. Maecenas ligula tellus, volutpat id nunc a, tristique fermentum mi. Nulla sed facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    </div>
                </div>
                
                
            </div>
        
        </StyleProjects>
    )
   
}

export default Projects