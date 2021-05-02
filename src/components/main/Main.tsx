import React from "react";
import {FC} from "react";
import "./Main.sass"
import logo from "../../res/logo.svg"
import pic from "../../res/pic.png"

const Main: FC = () => {

    // const content = <><b>green</b>tech - это <br/> обновленный факультет низко- <br/> температурной энергетики <br/> с новой фокосуривкой, которая овтечает мировым запросам</>
    const content = <> <b>green</b>tech - это об&shy;нов&shy;лен&shy;ный фа&shy;куль&shy;тет низко&shy;тем&shy;пе&shy;ра&shy;тур&shy;ной энер&shy;ге&shy;ти&shy;ки с новой фо&shy;ку&shy;си&shy;ров&shy;кой, которая от&shy;ве&shy;чает сов&shy;ре&shy;мен&shy;ным за&shy;про&shy;сам </>
    return (
        <>
            <Header/>
            <div id="main">
                <div id="main-left">
                    <div>
                        <p className="uni-info float-left">
                            университет итмо
                        </p>
                        <p id="uni-desc"> {content} </p>
                    </div>
                    <div id="refs">
                        <p className="uni-bottom"> абитуриентам </p>
                        <p className="uni-bottom"> партнерам </p>
                    </div>
                </div>
                <div>
                    <img id="pic" src={pic} alt=""/>
                </div>
            </div>
        </>
    )
}

export const Header: FC = (props) => {
    return (
        <header>
            <div id="header-logo">
                <img src={logo} alt=""/>
            </div>
            <div id="header-search">
                поиск
            </div>
            <div id="header-buttons">
                <div className="langs">
                    <p> ru </p>
                    <p className="inactive"> en </p>
                </div>
                <h1 className="menu">
                    меню
                </h1>
            </div>
        </header>
    )
}

export default Main
