import {FC, HTMLAttributes, ReactNode} from "react";

interface IContainerComponentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const ContainerComponent: FC<IContainerComponentProps> = ({children, className = '', ...props}) => (
  <div className={`container ${className}`} {...props}>
    {children}
  </div>
);

export default ContainerComponent;