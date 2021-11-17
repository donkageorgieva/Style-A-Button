import ThemeSwitcher from "../../UI/Theme-Switcher/Theme-Switcher";

const Header = (props) => {
  return (
    <header>
      <nav className="bg-gray-50 dark:bg-indigo-800 p-4 filter drop-shadow-md">
        <ThemeSwitcher toggleMode={props.toggleMode} />
      </nav>
    </header>
  );
};

export default Header;
