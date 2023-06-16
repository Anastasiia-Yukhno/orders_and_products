import { useState } from "react";

import { socket } from "../../socket";
import { getDateTime } from "../../units";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { Time } from "../../icons/Time";
import { Logo } from "../../icons/Logo";

import styles from "./TopMenu.module.scss";

const TopMenu = () => {
  const [activeSessions, setActiveSessions] = useState<number | null>(null);

  const [currentTime, setCurrentTime] = useState(getDateTime());

  socket.on("getActiveSessions", (data) => {
    setActiveSessions(data.users.length);
  });

  setInterval(function () {
    setCurrentTime(getDateTime());
  }, 1000);

  return (
    <>
      <Navbar bg="light" expand="lg" className={styles.TopMenu}>
        <Container className={styles.TopMenuLogo}>
          <Navbar.Brand href="#home" bsPrefix={styles.Logo}>
            <Logo /> {"  "}Inventory
          </Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Collapse className={styles.TopMenuInfo}>
            <div className={styles.BlockDay}>
              <div>{currentTime.day},</div>
              <div>{currentTime.date}</div>
            </div>

            <div className={styles.BlockTime}>
              <Time />
              {currentTime.hour}:{currentTime.minute}
            </div>

            <div className={styles.BlockActiveSessions}>
              {activeSessions}
              {activeSessions && activeSessions > 1
                ? "  active sessions"
                : "  active session"}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopMenu;
