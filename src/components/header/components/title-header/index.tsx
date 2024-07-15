import {FC} from "react"
import {socialLinks} from "@/shared/data";

const TitleHeader: FC<{hide: boolean}> = ({hide}) => (
  <>
    {!hide &&
      <div className="grid items-center grid-cols-auto-fit-350 gap-3 w-full">
        <div>
          <b>Cвязаться с нами через:</b>
          <div className="flex gap-3">
            {
              socialLinks.map(({name, url, svg}, index) => (
                <a href={url} key={index} className="flex items-center gap-1 cursor-pointer hover:opacity-70 transition">
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
    }
  </>
);

export default TitleHeader;