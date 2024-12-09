import { Button } from "../components/Button"
import { useNavigate } from 'react-router-dom';
export const Welcome=()=>{
    const navigate = useNavigate();
const navigateToSignupPage=()=>{
  navigate("/signup")
}
    return (
        <div  className="bg-gradient-to-b from-purple-200 to-purple-500 h-screen flex flex-col items-center justify-center">
            <div className="text-cyan-500 font-bold text-6xl mb-4">
                WELCOME TO MY APPLICATION!
            </div>
            <div className="mt-6">
                <Button 
                    onClick={navigateToSignupPage} 
                    value="Continue" 
                />
            </div>
        </div>
    )
}