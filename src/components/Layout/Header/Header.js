import ThemeSwitcher from "../../UI/Theme-Switcher/Theme-Switcher";

const Header = (props) => {
  return (
    <header>
      <nav className="bg-gray-50 dark:bg-indigo-800 p-4 filter drop-shadow-md transition duration-400">
        <ThemeSwitcher toggleMode={props.toggleMode} dark={props.dark} />
      </nav>
    </header>
  );
};

export default Header;
