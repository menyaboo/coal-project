import {FC, HTMLAttributes} from "react";
import ContainerComponent from "../container";
import {socialLinks} from "../../shared/links";

const HeaderComponent: FC<HTMLAttributes<HTMLElement>> = ({className = '', ...props}) => (
  <header className={`fixed z-10 bg-[rgba(0,0,0,0.8)] py-6 w-full text-white ${className}`} {...props}>
    <ContainerComponent className="grid items-center grid-cols-auto-fit-350 gap-3 w-full">
      <div>
        <h5 className="uppercase font-bold">Доставка угля</h5>
        <span>
          Уголь из Кузбасса в Томской области
        </span>
      </div>

      <div className="grid items-center grid-cols-auto-fit-350 gap-3 w-full">
        <div>
          <b>Cвязаться с нами через:</b>
          <div className="flex gap-3">
            {
              socialLinks.map(({name, url, svg}, index) => (
                <a href={url} key={index} className="flex items-center gap-1 cursor-pointer">
                  {svg}
                  <span>{name}</span>
                </a>
              ))
            }
          </div>
        </div>

        <div>
          <b>Или позвоните нам по номеру телефона:</b>
          <div className="flex gap-3">
            <span>+7 909 510-08-73</span>
            <span>+7 913 510-08-73</span>
          </div>
        </div>
      </div>
    </ContainerComponent>
  </header>
);

export default HeaderComponent;