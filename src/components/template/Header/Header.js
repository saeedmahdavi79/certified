// Link
import Link from "next/link";
// Image
import Image from "next/image";

// img
import usa from "public/assets/svg/US.svg";

const Header = () => {
  return (
    <header className="bg-[#282627] text-white py-4 custom-container">
      <div className="container mx-auto flex items-center">
        <h1 className="basis-3/12">Logo</h1>
        <div className="basis-7/12 flex gap-6 justify-center">
          <Link href="#">سرمایه گذاری</Link>
          <Link href="#">معاملات آنلاین</Link>
          <Link href="#">برنامه امتیازات</Link>
          <Link href="#">امتیازات</Link>
          <Link href="#">آکادمی</Link>
          <Link href="#">درباره ما</Link>
        </div>
        <div className="basis-4/12 flex justify-end gap-4">
          <button className="px-6 py-2 bg-[#363435] custom-shadow rounded-[32px] flex items-center gap-2">
            EN
            <Image src={usa} width={20} height={20} alt="USA" />
          </button>
          <button className="px-5 py-2 bg-[#363435] custom-shadow rounded-[32px]">
            ورود
          </button>
          <button className="bg-[#F6D658] text-black px-4 py-2 rounded-[32px]">
            شروع کنید!
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
