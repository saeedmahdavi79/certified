// React-Icon
import { FaFacebook } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[var(--bg-slate-bold)] custom-container pt-28">
      <div className="flex items-center justify-between w-[85%] mx-auto bg-[var(--bg-brown-bold)] rounded-t-2xl p-6">
        <p className="text-white basis-8/12">
          عضویت در خبرنامهآلپاری آخرین اخبار و اطلاعیه‌ها را در ایمیل خود دریافت
          کنید:
        </p>

        <div className="border p-2 rounded-[32px] flex basis-4/12">
          <input
            className="bg-inherit focus:outline-none text-white w-full"
            type="text"
            placeholder="ایمیل خود را وارد کنید"
          />

          <button className="bg-[#F6D658] rounded-[32px] px-6 py-2">
            ارسال
          </button>
        </div>
      </div>

      <div className="bg-[var(--bg-brown)] p-6 rounded-2xl text-white flex flex-col gap-4">
        <div className="flex gap-8">
          <div className="basis-6/12 flex flex-col gap-2">
            <h1 className="text-4xl font-bold">LOGO</h1>
            <p>
              در صرافی ارز دیجیتال کریپتر که امن ترین صرافی آلپاری
              (Cryptocurrency) کشور است، شما توانایی خرید و فروش انواع ارزهای
              دیجیتال معتبر دنیا مانند بیت کوین، اتریوم، تتر، دوج کوین، شیبا و
              ... را به صورت حرفه ای و سریع را خواهید داشت.با اطمینان خاطر
              فراوان در صرافی امن کریپتر اقدام به معامله و خرید ارز دیجیتال
              نمایید. پلتفرم ترید حرفه ای
            </p>
          </div>
          <div className="basis-2/12 flex flex-col gap-4">
            <h1 className="font-bold">راهنمای آلپاری</h1>
            <ul className="text-sm list-disc">
              <li>نحوه ثبت‌نام</li>
              <li>روش‌های خرید و فروش</li>
              <li>شیوه‌های پرداخت</li>
              <li>مقالات آموزشی</li>
              <li>وبلاگ کریپتر</li>
              <li>سوالات متداول</li>
            </ul>
          </div>
          <div className="basis-2/12 flex flex-col gap-4">
            <h1 className="font-bold">دسترسی سریع</h1>
            <ul className="text-sm list-disc">
              <li>خرید تتر</li>
              <li>خرید بیت کوین</li>
              <li>خرید اتریوم</li>
              <li>خرید دوج کوین</li>
              <li>خرید bnb</li>
              <li>خرید سولانا</li>
              <li>خرید شیبا</li>
              <li>خرید آواکس</li>
              <li>خرید متیک</li>
            </ul>
          </div>
          <div className="basis-2/12 flex flex-col gap-4">
            <h1 className="font-bold">لینک های مهم</h1>
            <ul className="text-sm list-disc">
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>قوانین و مقررات</li>
              <li>معرفی دوستان</li>
              <li>فرصت‌های شغلی</li>
              <li>اطلاعیه‌ها</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-end gap-20">
          <span>شبکه های اجتماعی</span>
          <div className="flex gap-3 text-xl">
            <FaLinkedin className="cursor-pointer" />
            <IoLogoInstagram className="cursor-pointer" />
            <SiTwitter className="cursor-pointer" />
            <FaFacebook className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
