import React from 'react';
import styled from 'styled-components'
import todoPreview from '../img/todo-preview.png'

const StyleProjects = styled.div`
    font-family: 'DotGothic16', sans-serif;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    .project-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        height: 100vh;
    }
    .small-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 400px;
        padding: 20px;
    }

    p {
        justify-content: center;
        width: 40%;
    }

    i {
        font-size: 3rem;
        margin: 5px;
    }
    
`

const Projects = () => {
    return(
        <StyleProjects>
            <div className="project-container">
                <h2>Todo App</h2>
                <div className="icon-container">
                    <i class="devicon-javascript-plain colored"></i>
                    <i class="devicon-react-original colored"></i>
                    <i class="devicon-sass-original colored"></i>
                </div>
                <div className="small-container">
                    <img src={todoPreview} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate maximus magna, in imperdiet mauris ultricies nec. Maecenas iaculis nisl odio, id porta tortor faucibus vel. Donec nibh neque, aliquet tempus scelerisque a, scelerisque id nunc. Nullam ante nunc, efficitur sed lacus sed, dignissim rutrum arcu. Duis pharetra, nisi ac porttitor efficitur, justo massa vulputate lacus, id malesuada dolor dolor quis massa. Phasellus purus arcu, finibus pharetra mattis sagittis, rhoncus ac elit. Nullam massa mauris, consectetur at erat viverra, elementum condimentum tortor. Aenean euismod diam elit, ac molestie ex efficitur sit amet. Duis semper malesuada diam vitae sollicitudin. Maecenas ligula tellus, volutpat id nunc a, tristique fermentum mi. Nulla sed facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
            </div>
            <div className="project-container">
                <h2>Todo App</h2>
                <div className="icon-container">
                    <i class="devicon-javascript-plain colored"></i>
                    <i class="devicon-react-original colored"></i>
                    <i class="devicon-sass-original colored"></i>
                </div>
                <div className="small-container">
                    <img src={todoPreview} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate maximus magna, in imperdiet mauris ultricies nec. Maecenas iaculis nisl odio, id porta tortor faucibus vel. Donec nibh neque, aliquet tempus scelerisque a, scelerisque id nunc. Nullam ante nunc, efficitur sed lacus sed, dignissim rutrum arcu. Duis pharetra, nisi ac porttitor efficitur, justo massa vulputate lacus, id malesuada dolor dolor quis massa. Phasellus purus arcu, finibus pharetra mattis sagittis, rhoncus ac elit. Nullam massa mauris, consectetur at erat viverra, elementum condimentum tortor. Aenean euismod diam elit, ac molestie ex efficitur sit amet. Duis semper malesuada diam vitae sollicitudin. Maecenas ligula tellus, volutpat id nunc a, tristique fermentum mi. Nulla sed facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
            </div>
        </StyleProjects>
    )
   
}

export default Projects