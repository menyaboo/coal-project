import {FC} from "react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

interface ISocialInfoComponentProps {
  hide: boolean;
  setHide(): void;
}

const SocialInfoComponent: FC<ISocialInfoComponentProps> = ({hide, setHide}) => (
  <div className="flex justify-between items-center">
    <div>
      <h5 className="uppercase font-bold">Доставка угля</h5>
      <span>
          Уголь из Кузбасса в Томской области
        </span>
    </div>

    <div onClick={setHide} className="md:hidden *:size-6">
      {hide ?
        <IoIosArrowDown/> :
        <IoIosArrowUp/>
      }
    </div>
  </div>
);

export default SocialInfoComponent;