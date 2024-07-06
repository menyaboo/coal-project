import {FC} from "react";
import HeaderComponent from "./components/header";
import MainPage from "./pages/main";

const App: FC = () => (
  <>
    <HeaderComponent/>
    <MainPage/>
  </>
);

export default App;