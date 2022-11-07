import React from "react";
import Logo from "../Logo/logo";
import "./footer.css";

export default () => {
    return <footer>
        <Logo/>
        <span className="copy">&copy;{new Date().getFullYear()}DoogFood.ru</span>
        <a href="">Каталог</a>
        <a href="">Акции</a>
        <a href="">Новости</a>
        <a href="">Отзывы</a>
        <a href="">Оплата и доставка</a>
        <a href="">Часто спрашивают</a>
        <a href="">Обратная связь</a>
        <a href="">Контакты</a>
        <div className="contacts">
            <p>Мы на связи</p>
            <a href="tel:+79991234567">+7(999)123-45-67</a>
            <nav>
                <a href="">
                <i class="fa-brands fa-vk"></i>
                </a>
                <a href="">
                <i class="fa-brands fa-odnoklassniki"></i>
                </a>
                <a href="">
                <i class="fa-brands fa-telegram"></i>
                </a>
            </nav>
        </div>
    </footer>
}