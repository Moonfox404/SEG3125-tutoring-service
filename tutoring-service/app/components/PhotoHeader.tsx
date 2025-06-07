import { PropsWithChildren } from "react"

type PhotoHeaderProps = PropsWithChildren<{
  imgSrc: string,
  title: string,
  subtitle?: string
}>;

const PhotoHeader = ({ children, imgSrc, title, subtitle }: PhotoHeaderProps) => {
  return <div
    className="hero w-full min-h-fit h-80 md:h-100"
    style={{
      backgroundImage: `url(${imgSrc})`,
    }}
  >
    <div className="flex flex-col items-center justify-evenly h-full w-full">
      <div className="mt-6 text-secondary-content bg-secondary/60 text-center w-full p-3">
        <h1 className="text-5xl">{title}</h1>
        {subtitle ? <p>{subtitle}</p> : <></>}
      </div>
      <div className="my-10">
        {children}
      </div>
    </div>
  </div>
};

export default PhotoHeader;
