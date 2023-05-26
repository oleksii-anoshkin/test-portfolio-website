// components
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import BtnUp from "./BtnUp";
import MenuBtn from "./MenuBtn";
import { useState } from "react";

export default function App() {
  // texts
  const menuText = "menu";

  // states
  const [btnLogo, setBtnLogo] = useState(menuText);

  return (
    <>
      <MenuBtn setBtnLogo={setBtnLogo} btnLogo={btnLogo} />
      <BtnUp />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
