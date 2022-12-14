import { Link } from "react-router-dom";
import TextInputField from "../../components/Shared/Textinput/TextInputField";

const ResetPassword = () => {
  return (
    <div className="flex h-screen">
      <div className="relative flex-1">
        <div className="absolute top-5 left-5">
          <img src="/kaya_logo.svg" alt="Kaya logo" className="w-18" />
        </div>
        <div className="flex h-screen items-center justify-center align-middle">
          <div className="w-full rounded-md  bg-neutral-25 px-10 py-10 sm:w-11/12 md:w-3/5 lg:w-1/2">
            <h2 className="mb-6 text-center text-3xl font-bold">
              Reset your Password
            </h2>
            <form className="flex flex-col  content-between justify-between gap-y-4">
              <TextInputField
                label="Email Address"
                placeholder="Enter your Email Address to get a link to reset your Password"
              />
              <button className="btn-primary" type="submit">
                Send reset password link
              </button>
            </form>
            <p className="text-center">
              Remember your password?{" "}
              <Link className="link" to="/auth/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
