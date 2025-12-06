const ExperienceCard = ({ company, role, description, logo }) => {
  return (
    <div className="w-[800px] h-[450px] rounded-3xl border-2 border-black p-6 bg-white overflow-hidden relative grid grid-cols-3 gap-6">
      <div className="col-span-2 flex flex-col gap-6">
        <div className="border-2 border-white rounded-xl px-6 py-3 w-fit text-2xl">
          {role}
          <h1 className="text-lg">{company}</h1>
        </div>
        <div className="border-2 border-white rounded-xl p-6 text-xl flex-1">
          {description}
        </div>
      </div>
      <div className="col-span-1 flex items-start justify-center">
        <div className="border-2 border-white rounded-full p-2 w-[150px] h-[150px] flex items-center justify-center">
          <img src={logo} alt="logo" className="w-full h-full object-contain rounded-sm" />
        </div>
      </div>

    </div>
  );
};

export default ExperienceCard;
