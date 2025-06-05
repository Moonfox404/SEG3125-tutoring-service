import { PropsWithChildren } from "react"
import Rating from "./Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";


const PLACEHOLDER_PROFILE_IMG = "/file.svg";


type DefaultPersonCardProps = PropsWithChildren<{
  name: string,
  role: string,
  rating: number,
  imgSrc?: string,
  bookable?: "tutor" | "mentor" | "review" | "consult",
}>;

type PersonCardProps = Omit<DefaultPersonCardProps, "bookable">;


const PersonCard = ({ children, name, role, rating, imgSrc, bookable }: DefaultPersonCardProps) => {
  return <div className="card card-lg w-100 h-70 bg-base-100 drop-shadow-lg">
    <div className="card-body">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={imgSrc ?? PLACEHOLDER_PROFILE_IMG} />
            </div>
          </div>
          <div className="ml-5">
            <h2 className="card-title">{name}</h2>
            <p className="text-neutral-content">{role}</p>
          </div>
        </div>
        {bookable ? <a className="btn btn-primary btn-square" href={`/book?service=${bookable}`}><FontAwesomeIcon icon={faCalendarCheck} /></a> : <></>}
      </div>
      <Rating rating={rating} />
      <div>
        {children}
      </div>
    </div>
  </div>;
};


export default PersonCard;
export type {PersonCardProps};
