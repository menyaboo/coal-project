import {FC} from "react";
import {MainPicture, ProductionList} from "@/pages/main/components";
import FooterComponent from "@/components/footer";

const MainPage: FC = () => (
  <main>
    <MainPicture/>
    <ProductionList/>
    <FooterComponent/>
  </main>
);

export default MainPage;