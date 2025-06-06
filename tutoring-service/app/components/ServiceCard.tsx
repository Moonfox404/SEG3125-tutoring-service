import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ServiceCardProps = {
  name: string,
  description: string,
  icon: IconProp,
  href: string,
};

const ServiceCard = ({name, description, icon, href}: ServiceCardProps) => {
  return <div className="card bg-base-100 card-sm sm:card-md w-3xs sm:w-xs h-max drop-shadow-lg">
    <div className="card-body">
      <div className="flex justify-start my-2 text-primary">
        <FontAwesomeIcon icon={icon} size="xl" />
      </div>
      <h2 className="card-title">{name}</h2>
      <p>{description}</p>
      <div className="card-actions justify-center">
        <a type="button" href={href} className="btn btn-primary btn-sm w-9/10 rounded-xl">Learn More &#8594;</a>
      </div>
    </div>
  </div>
};

export default ServiceCard;
