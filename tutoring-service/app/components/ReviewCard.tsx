import PersonCard from "./PersonCard";
import type { PersonCardProps } from "./PersonCard";

const ReviewCard = ({
  children,
  name,
  role,
  rating,
  imgSrc,
}: PersonCardProps) => {
  return (
    <PersonCard name={name} role={role} rating={rating} imgSrc={imgSrc}>
      {children}
    </PersonCard>
  );
};

export default ReviewCard;
