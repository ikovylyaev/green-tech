import React, {FC} from "react";
import "./Contacts.sass"
import {ReactComponent as ITMO} from "../../res/itmo.svg"
import {ReactComponent as Out} from "../../res/out.svg"
import {isMobileOnly} from "react-device-detect";

export interface ContactsProps {

}

const Contacts: FC<ContactsProps> = () => {

    const mobileRefs = (
        <div className="row">
            <a href="/"> privacy policy </a>
            <a href="/"> terms of use </a>
        </div>
    )

    const desktopRefs = (
        <>
            <div className="row">
                { /* TODO fix anchor  */}
                <Out/>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a> политика по обработке персональных данных </a>
            </div>
            <div className="row">
                <Out/>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a> правила использования информации в доменной зоне </a>
            </div>
        </>
    )

    return (
        <>
            <p className="text"> остались вопросы? </p>
            <div className="contacts-container row">
                <div className="contacts-left column">
                    <p> мы будем рады ответить на ваши вопросы
                        или комментарии. просто напишите нам: </p>
                    <p className="inactive"> hi@greentech.itmo.ru </p>
                    <p className="place">
                        мы будем также рады видеть вас по адресу:
                    </p>
                    <p className="inactive">
                        российская федерация, 191002, г. санкт-петербург, ул. ломоносова, д. 9, лит. м
                    </p>
                    <p className="place">или можете позвонить по телефону:</p>
                    <p className="inactive">+7 (950) 000-00-00</p>
                </div>
                <div className="contacts-right">
                    <div className="social-grid">
                        <p className="social inactive">instagram</p>
                        <p className="social inactive">vkontakte</p>
                        <p className="social inactive">youtube</p>
                        <p className="social inactive">twitter</p>
                        <p className="social inactive">facebook</p>
                    </div>

                    <ITMO id="itmo"/>
                    <div className="out">
                        { isMobileOnly ? mobileRefs : desktopRefs }
                    </div>
                    {!isMobileOnly && <div className="devs">
                      <p> связаться с разработчиками </p>
                      <p> дизайн: <a href="ikovylyaev.com"> ikovylyaev.com </a></p>
                      <p> разработка: <a href="v8tenko.github.io"> v8tenko.github.io </a></p>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Contacts
