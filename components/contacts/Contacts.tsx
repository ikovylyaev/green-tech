import React, {FC} from "react";
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
                <img src="/res/out.svg" alt="refs"/>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a> политика по обработке персональных данных </a>
            </div>
            <div className="row">
                <img src="/res/out.svg" alt="refs"/>
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

                    <img src="/res/itmo.svg" id="itmo" alt="itmo"/>
                    <div className="out">
                        { isMobileOnly ? mobileRefs : desktopRefs }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts
