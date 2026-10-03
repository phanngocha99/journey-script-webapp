import "./Header.css";
import Navbar from "../Navbar";
import Button from "../Button";
import Logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} />
      <Navbar />
      <Button classValue={"btn-luxury"} label={"Log in"} />
    </div>
  );
}
