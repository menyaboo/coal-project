import {FC} from "react";
import ContainerComponent from "@/components/container";

const FooterComponent: FC = () => (
  <footer className="py-6 text-white bg-gray-700 mt-6">
    <ContainerComponent className="flex justify-between items-center">
      <h1>Подвал</h1>
      <b>Какая либо информация</b>
    </ContainerComponent>
  </footer>
);

export default FooterComponent;