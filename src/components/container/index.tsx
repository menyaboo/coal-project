import {FC, HTMLAttributes, ReactNode} from "react";

interface IContainerComponentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const ContainerComponent: FC<IContainerComponentProps> = ({children, className = '', ...props}) => (
  <div className={`md:mx-14 mx-2 ${className}`} {...props}>
    {children}
  </div>
);

export default ContainerComponent;