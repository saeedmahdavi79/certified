// React-Icon
import NewsCard from "@/components/module/NewsCard";
import { FaArrowLeft } from "react-icons/fa6";

const News = () => {
  return (
    <div className="bg-[var(--bg-slate-bold)] custom-container flex flex-col gap-6 py-28">
      <div className="flex flex-col">
        <h1 className="text-white text-xl">اخبار ها و رویدادها</h1>
        <div className="flex justify-between items-center">
          <p className="text-white text-xs">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
          <button className="flex items-center gap-2 text-[var(--text-gold)] border border-[#f6d658] rounded-[32px] p-4">
            مشاهده همه
            <FaArrowLeft className="bg-[#f6d658] p-1 text-white box-content rounded-full" />
          </button>
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default News;
