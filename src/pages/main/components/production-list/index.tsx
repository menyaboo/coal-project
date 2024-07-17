import {FC} from "react";
import ContainerComponent from "@/components/container";
import {coalList} from "@/shared/data";

const ProductionList: FC = () => (
  <ContainerComponent className="py-6">
    <h1 className="text-3xl md:text-5xl">Наша продукция</h1>

    <div className="grid grid-cols-auto-fit-250 text-white gap-6 pt-6">
      {
        coalList.map(({title, image, description}, i) =>
          <div key={i} className="flex text-center flex-col gap-2 justify-center items-center bg-gray-700 p-4 rounded-md hover:scale-105 transition cursor-pointer">
            <h5>{title}</h5>
            <img className="object-contain w-full max-h-52" src={image} alt="coal"/>
            <ul>{description.map((desc, i) => <li key={i}>{desc}</li>)}</ul>
          </div>
        )
      }
    </div>
  </ContainerComponent>
);

export default ProductionList;