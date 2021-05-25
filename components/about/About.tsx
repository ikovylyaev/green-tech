import React, {FC} from "react";
import AboutList from "./about-list/AboutList";
import {DataHelper} from "../utils/DataHelper";
import {EnterData, PartnersData, ValuesData} from "../utils/types";
import PartnersPlaceholder from "./about-list/placeholders/partners/PartnersPlaceholder";
import ValuesPlaceholder from "./about-list/placeholders/values/ValuesPlaceholder";
import EnterPlaceholder from "./about-list/placeholders/enter/EnterPlaceholder";
import Image from "next/image";

const About: FC = () => {

    return (
        <div id="about-content">
            <div id="about-us-info">
                <div>
                    <p> кто мы? </p>
                    <p className="text"> университет итмо уже несколько лет развивает интердисциплинарный подход в
                        образовании и науке.
                        благодаря компетенциям нашего факультета и взаимодействию
                        с другими подразделениями университета, удалось расширить наши направления.
                        <br/> мы выбрали новую фокусировку факультета – green technology (<i>«зеленые»</i> технологии),
                        которые
                        активно развиваются во всем мире. сейчас и в будущем в тренде будут междисциплинарные
                        направления, связанные с чистыми технологиями, в том числе
                        и энергетикой, нацеленных на сохранение природы. </p>
                </div>
                <div className="center">
                    <Image width={415} height={415} src="/res/about.svg" id="about-logo" alt=""/>
                    <img width={107} height={163} src="/res/flash.svg" alt="" id="about-flash"/>
                </div>
            </div>
            <AboutList title="чему мы учим" groups={DataHelper.teach()}/>
            <AboutList
                title="кто наши партнеры?"
                groups={DataHelper.partners().titles}
                info={DataHelper.partners().content}
                placeholder={data => <PartnersPlaceholder content={data as PartnersData}/>}
                options={{line: true}}
            />
            <AboutList
                title="какие у нас ценности?"
                groups={DataHelper.values().titles}
                info={DataHelper.values().content}
                placeholder={data => <ValuesPlaceholder content={data as ValuesData}/>}
                options={{line: true}}
            />
            <AboutList
                title="как к нам поступить?"
                groups={DataHelper.enter().titles}
                info={DataHelper.enter().content}
                placeholders={(all, index) => {
                    return EnterPlaceholder.placeholders().enter((all as EnterData[])[0])
                }}
                options={{
                    line: true,
                    wordsToUnderLine: ["программами"],
                    after: () => {
                        return (
                            <p id="enter-after"><i>если нашел себя в списках, добро пожаловать в
                                нашу семью </i></p>
                        )
                    }
                }}
            />
        </div>
    )
}

export default About
