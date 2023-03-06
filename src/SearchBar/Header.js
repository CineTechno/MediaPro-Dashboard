import classes from "./Header.module.css";
import SearchBar from "./SearchBar";
import Logo from "../assets/Iconly/Light/Category.svg";
import Notification from "../assets/Notification.svg";
const Header = () => {
  
  return (
    <header className={classes.Header}>
      <button >
        <ion-icon name="home-outline"></ion-icon>
      </button>

      <SearchBar />
      <button id={classes.HeaderNewProject__button}><ion-icon name="add-circle-outline"/>
Nowy projekt</button>
      <button>
        <ion-icon name="notifications-outline"></ion-icon>
      </button>
    </header>
  );
};

export default Header;
