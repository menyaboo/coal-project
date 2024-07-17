import {FC} from "react"
import {socialLinks, telephoneLinks} from "@/shared/data";

const TitleHeader: FC<{hide: boolean}> = ({hide}) => (
  <>
    {!hide &&
      <div className="grid items-center grid-cols-auto-fit-350 gap-3 w-full">
        <div>
          <b>Cвязаться с нами через:</b>
          <div className="flex gap-3">
            {
              socialLinks.map(({name, url, svg}, index) => (
                <a href={url} key={index} className="flex items-center gap-1 hover:opacity-70 transition">
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
            {telephoneLinks.map(({href, telephone}) =>
                <a className="hover:opacity-70 transition" href={href}>{telephone}</a>)}
          </div>
        </div>
      </div>
    }
  </>
);

export default TitleHeader;