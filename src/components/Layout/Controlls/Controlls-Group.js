import Control from "./Control/Control";
const Controlls = () => {
  return (
    <div className="h-full flex flex-col justify-center  w-1/5 bg-gray-100 dark:bg-gray-900 p-4">
      <div className=" bg-gray-200 dark:bg-gray-800 p-4">
        <Control setting="padding" />
        <Control />
        <Control />
        <Control />
      </div>
    </div>
  );
};

export default Controlls;
