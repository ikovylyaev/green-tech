import React, {FC} from "react";
import {ValuesData} from "../../../../utils/types";

export interface ValuesPlaceholderProps {
    content: ValuesData
}

const ValuesPlaceholder: FC<ValuesPlaceholderProps> = ({content}: ValuesPlaceholderProps) => {
    return (
        <div className="values-grid">
            <img src="/res/circle.svg" id="values-circle"/>
            <div style={{
                backgroundImage: `url(${content.image})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                boxSizing: "border-box",
                margin: "0px 0px 0px 0"
            }}/>
            <div className="content column">
                <p className="values-number"> 0{content.number} </p>
                <p className="values-content"> {content.title} </p>
                <p> {content.text} </p>
            </div>
        </div>
    )
}


export default ValuesPlaceholder
