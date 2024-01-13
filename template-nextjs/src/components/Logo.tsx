import { AppConfig } from '../utils/AppConfig';

const Logo = () => {
  return (
    <div className={`inline-flex items-center`}>
      <img className="mr-2 h-10 w-10" src={`/favicon.svg`} alt="logo"></img>

      <span className="text-xl font-semibold text-[#150F37]">
        {AppConfig.site_name}
      </span>
    </div>
  );
};

export { Logo };
