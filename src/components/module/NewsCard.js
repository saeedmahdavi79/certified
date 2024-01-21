// React-Icon
import { LuClock4 } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa6";

// img
import Image from "next/image";
import news_card_photo from "@/public/assets/svg/news-card-photo.svg";

const NewsCard = () => {
  return (
    <div className="background-news-card rounded-[16px] p-4 flex flex-col gap-4">
      <Image className="w-full" src={news_card_photo} alt="News Card Photo" />
      <div className="flex items-center gap-2">
        <LuClock4 className="text-[var(--text-gold)] text-xl" />
        <h1 className="text-[#A9A29D]">مطالعه ۱۰ دقیقه</h1>
      </div>

      <p className="text-white">Adobe Photoshop 2024 v25.0.0.37 Win/Mac + Portable فتوشاپ</p>
      <p className="text-white">
        Adobe Photoshop فتوشاپ نرم افزاری گرافیکی که در ورژن 2024 به همراه هوش
        مصنوعی Firefly جهت ساخت، ترکیب، ویرایش، بازسازی و یا دگرگونی عکس‌ها بکار
        می‌رود.
      </p>
      <button className="flex items-center gap-2 text-[var(--text-gold)]">
        ادامه مطلب
        <FaArrowLeft />
      </button>
    </div>
  );
};

export default NewsCard;
