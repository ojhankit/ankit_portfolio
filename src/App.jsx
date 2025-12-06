import InfoCard from "./components/InfoCard";
import ExperienceCard from "./components/ExperienceCard";
import { EXPERIENCES } from "./constant/experience";
import "@fontsource/inter";

const App = () => {
  return (
    <main className="min-h-screen bg-[#F9F8F6]">
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-4">
        <InfoCard
          linkedin={"https://www.linkedin.com/in/ankit-ojha-bb17b92b9"}
          github={"https://github.com/ojhankit"}
          email={"mailto:ojha27ankit@gmail.com"}
        />
      </section>

      <section className="relative w-full min-h-screen flex flex-col items-center justify-around px-6 py-8">
        <h1 className="text-4xl mb-8">Work Experience</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 w-full">
          {EXPERIENCES.slice(0, 4).map((experience, index) => (
            <div key={index}>
              <ExperienceCard
                company={experience.company}
                role={experience.role}
                description={experience.description}
                logo={experience.logo}
              />
            </div>
          ))}
        </div>

      </section>

      <section className="">

      </section>
    </main>
  );
};

export default App;
