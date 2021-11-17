import Control from "./Control/Control";
const Controlls = () => {
  return (
    <div className=" border-2 dark:border-indigo-800 p-4 w-1/5">
      <Control setting="padding" />
      <Control />
      <Control />
      <Control />
    </div>
  );
};

export default Controlls;
