import React from "react";
import Logo from "../Logo/logo";
import "./footer.css";

export default () => {
    return <footer>
        <Logo/>
        <span className="copy">&copy;{new Date().getFullYear()}DoogFood.ru</span>
        <a href="">Lorem.</a>
        <a href="">Reprehenderit.</a>
        <a href="">Sit!</a>
        <a href="">Et.</a>
        <a href="">Aliquid!</a>
        <a href="">Ex.</a>
        <a href="">Deleniti.</a>
        <a href="">Aliquam!</a>
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