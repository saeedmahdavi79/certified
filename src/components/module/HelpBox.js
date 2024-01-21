// img
import Image from "next/image";

const HelpBox = ({ w, h, photo }) => {
  return (
    <div className={`w-[${w}] h-[${h}]`}>
      <Image className="w-full h-full" src={photo} alt="Icons" />
    </div>
  );
};

export default HelpBox;
