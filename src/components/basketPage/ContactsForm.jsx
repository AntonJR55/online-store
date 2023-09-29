import basket from "../../icons/bsk.png";

const ContactsForm = ({ totalPrice }) => {
    
    return (
        <div className="contactsForm">
            <form action="submit">
                <div className="contactsForm__title">
                    <span>Контактная информация</span>
                </div>
                <div className="contactsForm__inputs">
                    <div className="contactsForm__inputs-item">
                        <input type="text" className="name" placeholder="ФИО" />
                    </div>
                    <div className="contactsForm__inputs-item">
                        <input
                            type="text"
                            className="telephone"
                            placeholder="Контактный телефон"
                        />
                    </div>
                    <div className="contactsForm__inputs-item">
                        <input
                            type="text"
                            className="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="contactsForm__inputs-item">
                        <input
                            type="text"
                            className="organization"
                            placeholder="Организация / ИНН"
                        />
                    </div>
                    <div className="contactsForm__inputs-item">
                        <input
                            type="text"
                            className="address"
                            placeholder="Адрес доставки"
                        />
                    </div>
                    <div className="contactsForm__inputs-item">
                        <input
                            type="text"
                            className="code"
                            placeholder="Введите промокод"
                        />
                    </div>
                </div>
                <div className="contactsForm__btn">
                    <button>
                        <span>Применить</span>
                    </button>
                </div>
                <div className="contactsForm__total">
                    <div className="contactsForm__total_text">
                        <span>Итого</span>
                    </div>
                    <div className="contactsForm__total_number">
                        <span>{totalPrice} бел.руб</span>
                    </div>
                </div>
                <button className="contactsForm__register">
                    <div className="contactsForm__register_img">
                        <img src={basket} alt="basket" />
                    </div>
                    <div className="contactsForm__register_text">
                        <span>Оформить заказ</span>
                    </div>
                </button>
            </form>
        </div>
    );
};

export default ContactsForm;
