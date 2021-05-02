import React, {FC} from "react";
import "./PartnersPlaceholder.sass"
import {ReactComponent as Flash} from "../../../../../res/flash.svg";
import {PartnersData} from "../../../../../utils/types";

export interface PartnersPlaceholderProps {
    content: PartnersData
}

const PartnersPlaceholder: FC<PartnersPlaceholderProps> = ({content}: PartnersPlaceholderProps) => {
    return (
        <div className="partners-grid">
            <div className="div1" style={{
                backgroundImage: `url(${content.imageTop})`,
                backgroundPosition: "center center",
                backgroundSize: "cover"
            }}/>
            <div className="div2" style={{
            backgroundImage: `url(${content.imageLeft})`,
                backgroundPosition: "center center",
                backgroundSize: "cover"
            }}/>
            <div className="div3">
                <div className="header">
                    <Flash />
                    <div>
                        <p> {content.title} </p>
                        <h1> {content.title} </h1>
                    </div>
                </div>
                <p> {content.text} </p>
            </div>
        </div>
    )
}

export default PartnersPlaceholder
