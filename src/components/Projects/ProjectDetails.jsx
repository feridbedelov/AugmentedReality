import React from 'react'
import DetailsProject from "../Projects/DetailsProject.css"
import { FaArrowLeft, FaArrowRight, FaTh } from "react-icons/fa"
import image from "../../assets/green-wrapped.jpg";

class ProjectDetails extends React.Component {

    render() {
        return (

            <div>

                <div>
                    <div className="single-project">
                        <div className="details-project">
                            <h2 className="heading1">Reprehenderit Estalti </h2>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, architecto nemo?</p>
                            <p className="paragraph paragraph-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, architecto nemo?</p>

                            <h4 className="heading4">Client: <span className="heading4-span">1001 Miami Beach , Miami</span> </h4>
                            <h4 className="heading4">Date: <span className="heading4-span">25.09.2012</span></h4>
                            <h4 className="heading4">Share: <span className="heading4-span">Facebook,Twitter,Pinterest</span> </h4>

                        </div>

                        <img className="project-image" src={image} alt="" />

                    </div>

                    <div className="icons-for-navigation">
                        <a href="#" className="prev-icon slide-icon">
                            <FaArrowLeft /> <span>Previous project</span>
                        </a>
                        <a href="#" className="menu-icon slide-icon">
                            <FaTh />
                        </a>
                        <a href="#" className="next-icon slide-icon">
                            <span>Next project</span> <FaArrowRight />
                        </a>
                    </div>
                </div>

            </div>

        )
    }


}
export default ProjectDetails;