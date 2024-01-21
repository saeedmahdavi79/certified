// Module
import PriceCard from "@/components/module/PriceCard";
import Title from "@/components/module/Title";
// img
import lime_line from "@/public/assets/svg/lime-line.svg";
import red_line from "@/public/assets/svg/red-line.svg";

const PriceBox = () => {
  return (
    <div className="bg-[var(--bg-slate-bold)] custom-container flex flex-col gap-8 py-28">
      <Title
        text="قیمت‌های لحظه‌ای آپارلی در یک نگاه"
        subText="با خیال راحت در رمزارزها سرمایه‌گذاری کنید"
      />

      <div>
        <div className="bg-[var(--bg-brown)] w-fit p-4 rounded-t-2xl flex gap-4">
          <span className="text-white">انتخاب بازار بر اساس:</span>

          <div className="flex gap-4">
            <button className="text-[var(--text-gold)]">تومان</button>
            <button className="text-[var(--text-gold)]">تتر</button>
          </div>
        </div>

        <div className="bg-[var(--bg-brown)] p-4 flex flex-col gap-6 rounded-l-2xl">
          <div className="flex justify-between text-white">
            <span className="w-[200px]">نام</span>
            <span className="w-[200px]">آخرین قیمت</span>
            <span className="w-[200px]">تغییر ۲۴ ساعت</span>
            <span className="w-[200px]">نمودار هفتگی</span>
            <span className="w-[200px]"></span>
          </div>

          <div className="flex flex-col gap-6">
            <PriceCard photo={lime_line} />
            <PriceCard type="red" photo={red_line} />
            <PriceCard photo={lime_line} />
            <PriceCard type="red" photo={red_line} />
            <PriceCard photo={lime_line} />
            <PriceCard photo={lime_line} />
          </div>

          <div className="flex justify-center">
            <span className="text-[var(--text-gold)] bg-[var(--bg-slate-bold)] p-4 rounded-[32px] cursor-pointer">
              نمایش همه رمز ارزها
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceBox;
