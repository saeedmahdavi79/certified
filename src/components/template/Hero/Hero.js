// React-Icon
import { IoArrowDown } from "react-icons/io5";

// img
import Image from "next/image";
import alpari from "public/assets/svg/alpari.svg";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-72px)] bg-[var(--bg-slate)] background-hero custom-container">
      <div className="container mx-auto flex flex-col gap-16">
        <div className="flex">
          <div className="basis-11/12 text-white flex flex-col gap-10 pr-[370px] mt-20">
            <p>به آلپاری خوش آمدید، دروازه شما به دنیای رمز ارزها</p>
            <h3 className="text-2xl">معاملات</h3>
            <h1 className="text-5xl pr-8">امن، سریع و آسان</h1>
            <h3 className="text-2xl line">ارزهای دیجیتالی</h3>
          </div>
          <div className="basis-1/12 flex justify-center items-center">
            <Image src={alpari} width={40} height={170} alt="kk" />
          </div>
        </div>
        <div className="flex text-white">
          <div className="basis-11/12 flex items-center gap-4">
            <span>بزن بریم!!!</span>
            <button className="border-2 border-[#F6D658] custom-bg px-4 py-2 rounded-[32px]">
              ورود به پنل کاربری
            </button>
            <span>بیشتر بدانید</span>
          </div>
          <div className="basis-1/12 flex justify-center">
            <span className="w-20 h-20 background-arrow flex justify-center items-center rounded-full">
              <IoArrowDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
