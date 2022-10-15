import { useEffect, useState } from "react";
import call from "../images/call.png";
import mail from "../images/mail.png";
import venue from "../images/venue.png";
import Shared from "../components/shared";
import VendorHero from "../components/vendorHero";
import VendorMid from "../components/vendorMid";
import VendorJoin from "../components/vendorJoin";
import Download from "../components/download";
import Modal from "../components/modal";
import { useGlobalContext } from "../context";

const Vendor = () => {
  const { setInd } = useGlobalContext();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    setInd(false);
  }, []);

  const [modal, setModal] = useState(false);
  return (
    <Shared>
      <div className='max-w-7xl sm:w-[90%] mx-auto px-4 sm:px-0 py-8'>
        <VendorHero setModal={setModal} />
        <VendorMid setModal={setModal} />
        <VendorJoin setModal={setModal} />
        <Download />
        <Modal modal={modal} setModal={setModal} />
      </div>
    </Shared>
  );
};

export default Vendor;
