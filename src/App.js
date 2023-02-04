import SectionTwo from './components/SectionTwo';
import Title from './components/Title';
import ThirdSection from './components/ThirdSection';


function App() {
  return (
    <div className='snap-y snap-mandatory h-screen w-screen overflow-scroll'>
      <Title />
      <SectionTwo />
      <ThirdSection />
    </div>
  );
}

export default App;
