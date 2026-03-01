import Nav from "./Nav";
import Hero from "./Hero";
import Midhero from "./Midhero";
import Endhero from "./Endhero";
import Bottomhero from "./Bottomhero";
import Lasthero from "./Lasthero";
import Resume from "./Resume";

import '@fontsource-variable/roboto-slab';
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";


function App() {
      return (
       <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-['Roboto_Slab_Variable']">
  <Nav />

  <div className="pt-24">
    <Routes>
      <Route path="/" element={
        <>
          <Hero />
          <Midhero />
          <Endhero />
          <Bottomhero />
          <Lasthero />
        </>
      } />
      <Route path="/about" element={<Midhero />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contacts" element={<Contact />} />
    </Routes>
  </div>
</div>
         
         
        
      );
    }
    export default App;
