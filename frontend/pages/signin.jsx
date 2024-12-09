import { Header } from "../components/Header";
import { InputBox } from "../components/InputBox";
import { Password } from "../components/Password";
import { Button } from "../components/Button"; 
import { useNavigate } from 'react-router-dom';
export const Signin = () => {
    const navigate = useNavigate();
    const navigateToMainPage=()=>{
      navigate("/todos")
    }
  return (
    <div className=" bg-violet-400 h-screen flex items-center justify-center">
      <div className="bg-purple-300 w-96 h-96 rounded-2xl shadow-lg  mt-10 px-10 py-10">
      <Header value="Signin" />
      <InputBox value="Username"/>
      <Password/>
      <Button onClick={navigateToMainPage}  value="Login"/>
      <div className="text-purple-700 pt-2 font-bold hover:cursor-pointer">Forgot Password? </div>
      </div>
    </div>
  );
};
