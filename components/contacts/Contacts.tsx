import React, {FC} from "react";

export interface ContactsProps {

}

const Contacts: FC<ContactsProps> = () => {
    return (
        <>
            <p className="text"> остались вопросы? </p>
            <div className="contacts-container row">
                <div className="contacts-left">
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
                    <p className="social inactive">instagram</p>
                    <p className="social inactive">vkontakte</p>
                    <p className="social inactive">youtube</p>
                    <img src="/res/itmo.svg" id="itmo" />
                    <div className="out">
                        <div className="row">
                            { /* TODO fix anchor  */ }
                            <img src="/res/out.svg" />
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a> политика по обработке персональных данных </a>
                        </div>
                        <div className="row">
                            <img src="/res/out.svg"/>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a> правила использования информации в доменной зоне </a>
                        </div>
                    </div>
                    <div className="devs">
                        <p> связаться с разработчиками </p>
                        <p> дизайн: <a href="ikovylyaev.com"> ikovylyaev.com </a></p>
                        <p> разработка: <a href="v8tenko.github.io"> v8tenko.github.io </a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts
