import InfoCard from "./components/InfoCard";
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
    </main>
  )
}

export default App;