const ExperienceCard = ({ company, role, description, logo }) => {
  return (
    <div className="w-full max-w-[700px] min-h-[350px] sm:h-[400px] rounded-3xl border-2 border-black p-6 bg-white overflow-hidden 
      grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="order-1 sm:order-3 flex items-start justify-center">
        <div className="border-2 border-white rounded-xl p-2 
          w-24 h-24 sm:w-32 sm:h-32 flex items-start justify-center">
          <img
            src={logo}
            alt="logo"
            className="w-full h-full object-contain rounded-sm"
          />
        </div>
      </div>
      <div className="order-2 sm:order-1 col-span-1 sm:col-span-2 flex flex-col gap-4">
        <div className="border-2 border-white rounded-xl px-6 py-3 text-center sm:text-left">
          <p className="text-lg sm:text-2xl font-semibold">{role}</p>
          <h1 className="text-sm sm:text-lg opacity-80">{company}</h1>
        </div>

        <div className="border-2 border-white rounded-xl p-4 sm:p-6 text-sm sm:text-lg">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
