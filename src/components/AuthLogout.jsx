import { GoogleLogout } from "@leecheuk/react-google-login";
const clientId = import.meta.env.VITE_CLIENT_ID;

export default function AuthLogout() {
  const onSuccess = () => {
    console.log("Logout successful!");
  };
  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
