import React, {FC} from "react";
import {PartnersData} from "../../../../utils/types";
import {isMobileOnly} from "react-device-detect";

export interface PartnersPlaceholderProps {
    content: PartnersData
}

const PartnersPlaceholder: FC<PartnersPlaceholderProps> = ({content}: PartnersPlaceholderProps) => {
    const flashSize = {
        width: 43.057,
        height: 63.1
    }
    const outSize = {
        width: 20.414,
        height: 20.414
    }
    if (isMobileOnly) {
        flashSize.width /= 2.2
        flashSize.height /= 2.2

        outSize.width /= 1.5
        outSize.height /= 1.5
    }
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
                    <div>
                        <div className="center">
                            <img src="/res/flash.svg" alt="flash"/>
                        </div>
                        <div className="partners-titles column">
                            <h3> {content.name} </h3>
                            <p> {content.title} </p>
                        </div>
                    </div>
                    <p> {content.text} </p>
                    <div className="row inactive urls" style={{
                        alignItems: "center",
                        gap: 10,
                        marginTop: 10,
                    }}>
                        <img src="/res/out.svg" style={{
                            ...outSize
                        }}/>
                        <p> сайт </p>
                    </div>
                </div>
            </div>
            )
            }

            export default PartnersPlaceholder
