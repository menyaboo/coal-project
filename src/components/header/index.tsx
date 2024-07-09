import {FC, HTMLAttributes} from "react";
import useHideState from "@/hook/hide";
import ContainerComponent from "@/components/container";
import {SocialInfoComponent, TitleHeader} from "@/components/header/components";

const HeaderComponent: FC<HTMLAttributes<HTMLElement>> = ({className = '', ...props}) => {
   const {setHide, hide} = useHideState()

  return (
    <header className={`fixed z-10 bg-[rgba(0,0,0,0.8)] py-6 w-full text-white ${className}`} {...props}>
      <ContainerComponent className="grid items-center grid-cols-auto-fit-350 gap-3 w-full">
        <SocialInfoComponent hide={hide} setHide={() => setHide(prevState => !prevState)}/>
        <TitleHeader hide={hide}/>
      </ContainerComponent>
    </header>
  );
}

export default HeaderComponent;