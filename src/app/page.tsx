import Login from "@/components/login/Login";
import SignUp from "@/components/login/Signup";
export default function Home() {
  return (
      <div className="flex justify-center">
         <Login />
         <SignUp />
      </div>
  );
}
