import React, {ReactElement, ReactNode, useState} from 'react';
import {PlaceholdersTypes} from "../../utils/types";
import {isMobileOnly} from 'react-device-detect';

export interface AboutListProps<T> {
    title: string,
    groups: [string, string[] | null][]
    info?: T[]
    placeholder?: (info: PlaceholdersTypes) => ReactNode
    placeholders?: (allData: T[], index: number) => ReactNode
    options?: {
        line?: boolean
        urls?: [string | null, string[] | null][]
        wordsToUnderLine?: "all" | string | string[]
        after?: () => ReactNode
    }
}


function AboutList({
                       title,
                       groups,
                       info,
                       placeholder,
                       placeholders,
                       options
                   }: AboutListProps<PlaceholdersTypes>): ReactElement {
    const [click, setClick] = useState<number>(0)
    const [children,] = useState<ReactNode[] | undefined>((() => {
        if (placeholder !== undefined) {
            return info?.map(el => placeholder(el))
        } else if (placeholders && info) {
            return groups.map((_, index) => {
                return placeholders(info, index)
            })
        }
        return undefined
    })())

    return (
        <>
            <p className="text"> {title} </p>
            <div className="about-list">
                <div className="about-li">
                    <div className="about-titles">
                        {
                            groups.map((element, index) => {
                                let cls = "about-title"
                                cls += options?.line ? ' line' : ''
                                cls += children && index !== click ? ' inactive' : ''
                                cls += options?.wordsToUnderLine === 'all' ? ' underline' : ''
                                // TODO update here
                                const mobileInfo = children && index === click ? "" : "closed"
                                const text = options?.wordsToUnderLine && element[0]?.split(' ').map(t => {
                                    if (
                                        t === options?.wordsToUnderLine || (options?.wordsToUnderLine as string[]).includes(t)
                                    ) {
                                        return <u key={t}> {t} </u>
                                    }
                                    return ` ${t} `
                                })
                                return (
                                    <div key={index} className={`about-elements ${mobileInfo ? "closed" : ""}`}>
                                        <p
                                            className={cls}
                                            onClick={() => setClick(index)}
                                        > {text ?? element[0]}
                                        </p>
                                        {element[1] && <ul>
                                            {element[1] && element[1].map(text => {
                                                return <li key={text}> {text} </li>
                                            })}
                                        </ul>}
                                        {children && isMobileOnly && click === index &&
                                        <div className="about-content">
                                            {click !== null && children[click]}
                                        </div>}
                                        {index === groups.length - 1
                                            ? options?.after && options?.after()
                                            : null
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {
                    children && !isMobileOnly
                    && <div className="about-content">
                        {click !== null && children[click]}
                    </div>
                }
            </div>
        </>
    )
}

export default AboutList
