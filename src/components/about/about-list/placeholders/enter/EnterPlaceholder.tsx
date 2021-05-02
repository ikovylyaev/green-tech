import React, {FC, useState} from "react";
import "./EnterPlaceholder.sass"
import {EnterData} from "../../../../../utils/types";

export interface EnterPlaceholderProps {
    content: EnterData
}

const Enter: FC<EnterPlaceholderProps> = ({content}) => {

    // TODO update with real data
    const stages = ["бакалавриат", "магистратура", "аспирантура"]
    const [currentStage, setCurrentStage] = useState<string>(stages[0])

    return (
        <div className="enter-container">
            <h3> вступительные испытания </h3>
            <div className="enter-stages row">
                {stages.map(text => {
                    return (
                        <p key={text} onClick={() => setCurrentStage(text)}>
                            {text === currentStage ? <u> {text} </u> : text}
                        </p>
                    )
                })}
            </div>
            <p>
                {content.trials[currentStage] ?? null}
            </p>
        </div>
    )
}

export default class EnterPlaceholder {
    static placeholders() {
        return {
            enter: (content: EnterData) => <Enter content={content}/>
        }
    }
}
