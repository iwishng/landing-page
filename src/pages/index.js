import { useEffect } from "react";
import Hero from "../components/hero";
import Center from "../components/center";
import Download from "../components/download";
import Shared from "../components/shared";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <Shared>
      <div className='max-w-7xl sm:w-[90%] mx-auto px-4 sm:px-0'>
        <Hero />
        <Center />
        <Download />
      </div>
    </Shared>
  );
};

export default Home;
