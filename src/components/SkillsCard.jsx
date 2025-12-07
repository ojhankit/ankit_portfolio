const SkillsCard = ({ title, skills }) => {
  return (
    <div className="w-full max-w-[500px] min-h-[300px] rounded-3xl border-2 border-black p-6 bg-white 
      flex flex-col gap-6">
      
      {/* Title */}
      <div className="border-2 border-white rounded-xl px-6 py-3 text-center">
        <p className="text-2xl font-semibold">{title}</p>
      </div>

      {/* Skills List */}
      <div className="border-2 border-white rounded-xl p-6 text-lg flex flex-col gap-2">
        {skills.map((skill, i) => (
          <p key={i} className="opacity-90">
            • {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
