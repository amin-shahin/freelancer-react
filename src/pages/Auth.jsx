import CheckOTPForm from "../features/authentication/CheckOTPForm"
import SendOTPForm from "../features/authentication/SendOTPForm"

function Auth() {
  return (
    <div className="flex justify-center items-center">
        {/* <SendOTPForm/> */}
        <CheckOTPForm/>
    </div>
  )
}

export default Auth