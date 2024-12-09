import { Header } from "../components/Header";
import { InputBox } from "../components/InputBox";
import { Password } from "../components/Password";
import { Button } from "../components/Button"; 
import { useNavigate } from 'react-router-dom';
export const Signup = () => {
  const navigate = useNavigate();
const navigateToSigninPage=()=>{
  navigate("/signin")
}
  return (

    <div className=" bg-violet-400 h-screen flex items-center justify-center">
      <div className="bg-purple-300 w-96 h-96 rounded-2xl shadow-lg  mt-10 px-10 py-10">
      <Header value="Signup" />
      <InputBox value="Username"/>
      <Password/>
      <Button onClick={navigateToSigninPage}  value="Sign up"/>
      <div className="flex">
      <div className="text-purple-700 font-semibold">Already have an account? </div>
      <div onClick={navigateToSigninPage} className="text-purple-700 font-bold hover:cursor-pointer"> Sign in</div>
      </div>
      </div>
    </div>
  );
};
