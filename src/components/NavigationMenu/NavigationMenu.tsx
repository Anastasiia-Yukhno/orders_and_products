import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";

import avatar from "../../icons/Avatar.jpg";

import styles from "./NavigationMenu.module.scss";

const NavigationMenu = () => {
  return (
    <div className={styles.NavigationMenu}>
      <div className={styles.Avatar}>
        {" "}
        <Image src={avatar} alt="Avatar" roundedCircle />{" "}
      </div>

      <Nav
        defaultActiveKey="/home"
        fill
        className={`${styles.Navbar} flex-column`}>
        <Nav.Link href="/orders">Приход</Nav.Link>
        <Nav.Link href="/groups">Группы</Nav.Link>
        <Nav.Link href="/products">Продукты</Nav.Link>
        <Nav.Link href="/users">Пользователи</Nav.Link>
        <Nav.Link href="/settings">Настройка</Nav.Link>
      </Nav>
    </div>
  );
};

export default NavigationMenu;
