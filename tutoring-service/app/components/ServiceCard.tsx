import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type ServiceCardProps = {
  name: string;
  description: string;
  icon: IconProp;
  href: Url;
  buttonText?: string;
};

const ServiceCard = ({
  name,
  description,
  icon,
  href,
  buttonText = "Learn More",
}: ServiceCardProps) => {
  return (
    <div className="card bg-base-100 card-sm sm:card-md w-3xs sm:w-xs h-max drop-shadow-lg m-2">
      <div className="card-body">
        <div className="flex justify-start my-2 text-primary">
          <FontAwesomeIcon icon={icon} size="xl" />
        </div>
        <h2 className="card-title">{name}</h2>
        <p className="text-left">{description}</p>
        <div className="card-actions justify-center">
          <Link
            type="button"
            href={href}
            className="btn btn-primary btn-sm w-9/10 rounded-xl"
          >
            {buttonText} &#8594;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
