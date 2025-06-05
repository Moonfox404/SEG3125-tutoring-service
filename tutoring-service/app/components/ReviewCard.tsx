import PersonCard from "./PersonCard";
import type { PersonCardProps } from "./PersonCard";

const ReviewCard = ({name, role, rating, imgSrc}: PersonCardProps) => {
  return <PersonCard name={name} role={role} rating={rating} imgSrc={imgSrc} />;
};

export default ReviewCard;
