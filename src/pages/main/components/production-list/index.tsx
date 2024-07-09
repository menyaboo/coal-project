import {FC} from "react";
import ContainerComponent from "@/components/container";

const ProductionList: FC = () => (
  <ContainerComponent className="py-6">
    <h1>Наша продукция</h1>

    <div className="grid grid-cols-auto-fit-250 text-white gap-6 pt-6">
      {
        [...Array(8)].map((_, i) =>
          <div key={i} className="flex text-center flex-col justify-center items-center bg-gray-700 p-4 rounded-md hover:scale-105 transition cursor-pointer">
            <h5>Мешок угля марки ДПК</h5>
            <img src="/coal.png" alt="coal"/>
            <p>Фракция: 50-200 мм</p>
            <b>Фасовка: 40 кг</b>
            <p>ДПК - Длинноплеменный плитный крупный</p>
            <b className="pt-3 text-[1.1rem]">Цена: <s>400</s> <span className="text-green-500">300 рублей</span></b>
          </div>
        )
      }
    </div>
  </ContainerComponent>
);

export default ProductionList;