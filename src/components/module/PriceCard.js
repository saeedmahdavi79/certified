// img
import Image from "next/image";
import price_icon from "@/public/assets/svg/card-icon.svg";

const PriceCard = ({ photo, type }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4 w-[200px]">
        <Image src={price_icon} alt="Price Icon" />
        <div className="text-white flex flex-col">
          <span>بایننس کوین</span>
          <span>BNB</span>
        </div>
      </div>

      <div className="w-[200px]">
        <span className="text-white">۱۰،۸۹۸،۶۲۴ تومان</span>
      </div>

      <div className="w-[200px]">
        <span className={`${type === "red" ? "bg-red-400 text-red-800" : "bg-green-400 text-green-800"} p-1 rounded-[32%]`}>56%</span>
      </div>

      <div className="w-[200px]">
        <Image src={photo} alt="lime_line" />
      </div>
      <div className="w-[200px]">
        <span className="text-[var(--text-gold)]">خرید و فروش</span>
      </div>
    </div>
  );
};

export default PriceCard;
