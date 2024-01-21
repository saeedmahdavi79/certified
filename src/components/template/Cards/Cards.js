// img
import Image from "next/image";
import triangle from "@/public/assets/svg/triangle.svg";
// Module
import Card from "@/components/module/Card";
import Title from "@/components/module/Title";

const data = [
  { id: 1, price: 10000, buy: 20000, sale: 30000 },
  { id: 2, price: 10000, buy: 20000, sale: 30000 },
  { id: 3, price: 10000, buy: 20000, sale: 30000 },
  { id: 4, price: 10000, buy: 20000, sale: 30000 },
  { id: 5, price: 10000, buy: 20000, sale: 30000 },
  { id: 6, price: 10000, buy: 20000, sale: 30000 },
];

const Cards = () => {
  return (
    <div className="flex flex-col gap-16 h-[100vh] py-32 bg-[--bg-brown] relative z-[-1]">
      <Image
        className="absolute z-[-2] left-0 top-[140px]"
        src={triangle}
        alt="Triangle Photo"
      />
      <div className="custom-container">
        <Title
          text="پر سودترین رمزارزها در ۲۴ ساعت اخیر"
          subText="آلپاری به شما کمک میکند تا دنیای رمز ارزها برای شما آسان و قابل فهم شود"
        />
      </div>
      <div className="flex justify-between">
        {data.map((item) => (
          <Card
            key={item.id}
            price={item.price}
            buy={item.buy}
            sale={item.sale}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
