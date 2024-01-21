// img
import Image from "next/image";
import card_icon from "@/public/assets/svg/card-icon.svg";

const Card = ({ price, buy, sale }) => {
  return (
    <div className="p-4 w-52 text-white bg-[var(--bg-brown-bold)] rounded-2xl flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Image src={card_icon} height={35} width={35} />
          <div>
            <h1>بایننس کوین</h1>
            <span>BNB</span>
          </div>
        </div>
        <div>56%</div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <label>قیمت</label>
          <span>{price} دلار</span>
        </div>
        <div className="flex justify-between items-center">
          <label>خرید</label>
          <span>{buy} تومان</span>
        </div>
        <div className="flex justify-between items-center">
          <label>فروش</label>
          <span>{sale} تومان</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
