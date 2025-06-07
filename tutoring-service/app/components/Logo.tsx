type LogoProps = {};

const Logo = ({}: LogoProps) => {
  return (
    <div className="flex-shrink-0">
      <a
        href="/"
        className="text-blue-500 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl"
      >
        Tutoring<span className="text-orange-500">Service</span>
      </a>
    </div>
  );
};

export default Logo;
