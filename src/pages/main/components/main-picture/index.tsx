import {FC} from "react";
import {qualityList} from "@/shared/quality";
import ContainerComponent from "@/components/container";

const MainPicture: FC = () => (
  <div className="h-dvh min-h-[620px] bg-cover" style={{backgroundImage: 'url("ugolek.jpg")'}}>
    <div className='bg-[rgba(0,0,0,0.4)] text-white flex items-center w-full h-full'>
      <ContainerComponent className="flex flex-col gap-16">
        <div>
          <h1 className="font-bold text-8xl pb-3">УГОЛЬ</h1>
          <p className="text-3xl">Возможно какое либо описание...</p>
        </div>
        <div>
          <h2 className="font-bold pb-0">Качества:</h2>
          <ul className="text-[1.2rem] list-disc">
            {
              qualityList.map((quality, index) => <li key={index}>{quality}</li>)
            }
          </ul>
        </div>
      </ContainerComponent>
    </div>
  </div>
);

export default MainPicture;