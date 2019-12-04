import React, { useEffect, useState } from "react";
import bass from "./Images/bass.png";
import drums from "./Images/drums.png";
import guitar from "./Images/guitar.png";
import piano from "./Images/piano.png";
import Fade from 'react-reveal/Fade';
import "./style.css";

function ImageOverlay(props) {
    const [images, setImage] = useState([]);

    useEffect(() => {
        switch (props.status) {
            case "beginner":
                setImage(images => [...images, drums]);
                break;
            case "novice":
                setImage(images => [...images, drums]);
                setImage(images => [...images, guitar]);
                break;
            case "expert":
                setImage(images => [...images, drums]);
                setImage(images => [...images, guitar]);
                setImage(images => [...images, bass]);
                break;
            case "master":
                setImage(images => [...images, drums]);
                setImage(images => [...images, guitar]);
                setImage(images => [...images, bass]);
                setImage(images => [...images, piano]);
                break;
            default:
                return;
        }
    }, [props.status])
    return (
        <div className="image-overlay-wrapper">
            {images.map((image, index) => (
                <Fade bottom big key={image[index + 14]}>
                    <img src={image} alt={props.status} id={"image-overlay-" + image[index + 14]} className="image-overlay"></img>
                </Fade>
            ))}
        </div>
    )
}

export default ImageOverlay;