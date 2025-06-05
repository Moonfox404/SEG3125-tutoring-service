import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ServiceCardProps = {
  name: string,
  description: string,
  icon: IconProp,
  href: string,
};

const ServiceCard = ({name, description, icon, href}: ServiceCardProps) => {
  return <div className="card bg-base-100 card-lg w-100 h-70 drop-shadow-lg">
    <div className="card-body">
      <div className="flex justify-start my-5 text-primary">
        <FontAwesomeIcon icon={icon} size="xl" />
      </div>
      <h2 className="card-title">{name}</h2>
      <p>{description}</p>
      <div className="card-actions justify-center">
        <a type="button" href={href} className="btn btn-primary rounded-xl w-80 mx-10">Learn More &#8594;</a>
      </div>
    </div>
  </div>
};

export default ServiceCard;
