import logo from '../assets/logo.svg';
const Header = () => {
  return (
    <div className="w-full h-[150px] bg-blue-600 flex justify-around items-center">
      <img src={logo} className="w-[250px] h-[100px]" />
      <h1 className="text-white text-center text-[35px]">Task Manager</h1>
    </div>
  );
};

export default Header;
