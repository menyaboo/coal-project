import {GiCheckMark} from "react-icons/gi";
import {IQualityProps} from "@/interfaces/data";
import {TbTruckDelivery} from "react-icons/tb";
import {FaUserCheck} from "react-icons/fa6";
import {HiOutlineIdentification} from "react-icons/hi";

const qualityList: IQualityProps[] = [
  {
    svg: <GiCheckMark/>,
    title: 'Качественный уголь без примесей'
  },
  {
    svg: <TbTruckDelivery />,
    title: 'Доставка нашим автопарком'
  },
  {
    svg: <FaUserCheck />,
    title: 'Индивидуальный подход к каждому клиенту'
  },
  {
    svg: <HiOutlineIdentification />,
    title: 'Работаем с физическими юридическими лицами'
  }
]

export {
  qualityList
}