import GoogleLogin from "@leecheuk/react-google-login";

const clientId = import.meta.env.VITE_CLIENT_ID;

function AuthLogin({ action }) {
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESSFUL! Current user: ", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("LOGIN failed! Current user: ", res);
  };
  return (
    <div className="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText={action}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default AuthLogin;
