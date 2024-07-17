import {FC} from "react";
import ContainerComponent from "@/components/container";
import {qualityList} from "@/shared/data";

const MainPicture: FC = () => (
  <div className="h-dvh min-h-[620px] bg-cover" style={{backgroundImage: 'url("ugolek.jpg")'}}>
    <div className='bg-[rgba(0,0,0,0.4)] text-white flex items-center w-full h-full'>
      <ContainerComponent className="flex flex-col gap-16">
        <h2 className="break-words text-3xl md:text-5xl">Предоставляем высококачественный <b>уголь</b></h2>
        <div>
          <h4 className="font-bold pb-0">Наши преимущества:</h4>
          <ul className="text-[1.2rem]">
            {
              qualityList.map(({title, svg}, index) => (
                <div className="flex gap-3 items-center">
                  <div className="text-green-500 *:size-6">{svg}</div>
                  <li key={index}>{title}</li>
                </div>
              ))
            }
          </ul>
        </div>
      </ContainerComponent>
    </div>
  </div>
);

export default MainPicture;