import React from 'react'
import "../Projects/Projects.css"
import Project from "../Projects/Project"


const Projects = () => {

    const data = [
        {
            id: 1,
            image: require("../../assets/asian-butterfly.jpg")
        },
        {
            id: 2,
            image: require("../../assets/green-wrapped.jpg")
        },
        {
            id: 3,
            image: require("../../assets/brown-stone.jpg")
        },
        {
            id: 4,
            image: require("../../assets/green-chair.jpg")
        },
        {
            id: 5,
            image: require("../../assets/asian-butterfly.jpg")
        },
        {
            id: 8,
            image: require("../../assets/green-chair.jpg")
        },
        {
            id: 7,
            image: require("../../assets/brown-stone.jpg")
        },
        {
            id: 6,
            image: require("../../assets/green-wrapped.jpg")
        }
    ]


    return (
        <div>

            <div className="project-designer-container">
                <div className="project-designer">
                    <h2 className="heading2">UI/UX & Graphic Designer</h2>
                    <p className="paragraph">
                        I am a Graphic & Web Designer based in New York,specializing in User
                        Interface Design and Development
                        </p>
                </div>
            </div>

            <section className="projects">
                <div className="project-container">
                    {
                        data.map(project => (
                            <Project key={project.id} project={project} />
                        ))
                    }
                </div>
            </section>

        </div>
    )
}

export default Projects;


