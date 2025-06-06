import { PropsWithChildren } from "react"

type PhotoHeaderProps = PropsWithChildren<{
  imgSrc: string,
  title: string,
  subtitle?: string
}>;

const PhotoHeader = ({ children, imgSrc, title, subtitle }: PhotoHeaderProps) => {
  return <div
    className="hero w-full h-80 md:h-100"
    style={{
      backgroundImage: `url(${imgSrc})`,
    }}
  >
    <div className="flex flex-col items-center justify-evenly h-full w-full">
      <div className="text-secondary-content bg-secondary/60 text-center w-full p-3">
        <h1 className="text-5xl">{title}</h1>
        {subtitle ? <p>{subtitle}</p> : <></>}
      </div>
      <div>
        {children}
      </div>
    </div>
  </div>
};

export default PhotoHeader;
