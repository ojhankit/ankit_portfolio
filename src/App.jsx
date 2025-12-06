// import InfoCard from "./components/InfoCard";
// import ExperienceCard from "./components/ExperienceCard";
// import { EXPERIENCES } from "./constant/experience";
// import "@fontsource/inter";

// const App = () => {
//   return (
//     <main className="min-h-screen bg-[#F9F8F6]">
//       <section className="w-full min-h-screen flex flex-col items-center justify-center px-4">
//         <InfoCard
//           linkedin={"https://www.linkedin.com/in/ankit-ojha-bb17b92b9"}
//           github={"https://github.com/ojhankit"}
//           email={"mailto:ojha27ankit@gmail.com"}/>
//       </section>
//       <section className="relative w-full min-h-screen flex items-center justify-center px-6">
//         <div className="flex max-w-full gap-6 items-start">
//           <ExperienceCard
//             company={EXPERIENCES[0].company}
//             role={EXPERIENCES[0].role}
//             description={EXPERIENCES[0].description}
//             logo={EXPERIENCES[0].logo}
//           />
//           <ExperienceCard
//             company={EXPERIENCES[0].company}
//             role={EXPERIENCES[0].role}
//             description={EXPERIENCES[0].description}
//             logo={EXPERIENCES[0].logo}
//           />
//           <ExperienceCard
//             company={EXPERIENCES[0].company}
//             role={EXPERIENCES[0].role}
//             description={EXPERIENCES[0].description}
//             logo={EXPERIENCES[0].logo}
//           />
//         </div>
//       </section>
//     </main>
//   )
// }

// export default App;


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
          email={"mailto:ojha27ankit@gmail.com"}/>
      </section>
      <section className="relative w-full min-h-screen flex flex-col items-center justify-around px-6">
        <h1 className="text-4xl"> Work Experience </h1>
        <div className="relative w-full max-w-2xl h-96">
          {EXPERIENCES.slice(0, 3).map((experience, index) => {
            const zIndex = 30 - (index * 10); // 30, 20, 10
            const translateX = 16 - (index * 8); // 16, 8, 0
            const translateY = 4 - (index * 2); // 4, 2, 0
            
            return (
              <div 
                key={index}
                className={`absolute top-0 left-0 z-${zIndex}`}
                style={{
                  transform: `translate(${translateX * 0.25}rem, ${translateY * 0.25}rem)`,
                  zIndex: zIndex
                }}
              >
                <ExperienceCard
                  company={experience.company}
                  role={experience.role}
                  description={experience.description}
                  logo={experience.logo}
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  )
}

export default App;