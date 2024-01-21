// Module
import Title from "@/components/module/Title";
import HelpBox from "@/components/module/HelpBox";
// img
import underline from "@/public/assets/svg/underline.svg";
import component_1 from "@/public/assets/svg/component-1.svg";
import component_2 from "@/public/assets/svg/component-2.svg";
import component_3 from "@/public/assets/svg/component-3.svg";
import component_4 from "@/public/assets/svg/component-4.svg";
import component_5 from "@/public/assets/svg/component-5.svg";
import component_6 from "@/public/assets/svg/component-6.svg";

const Help = () => {
  return (
    <div className="bg-[#1E1C1D] py-32">
      <div className="custom-container h-[100%]">
        <Title
          text="کمکی"
          textR="آلپاری چه"
          textL="به شما میکند؟"
          subText="آلپاری به شما کمک میکند تا دنیای رمز ارزها برای شما آسان و قابل فهم شود"
          underline={true}
          underlineSvg={underline}
        />

        <div className="flex justify-center items-center">
          <div className="flex flex-col items-end">
            <HelpBox w="190px" h="140px" photo={component_1} />
            <HelpBox w="230px" h="200px" photo={component_2} />
          </div>
          <div className="pt-16 flex flex-col gap-3">
            <HelpBox w="320px" h="240px" photo={component_3} />
            <HelpBox w="120px" h="90px" photo={component_4} />
          </div>
          <div className="pt-28">
            <HelpBox w="230px" h="190px" photo={component_5} />
            <HelpBox w="120px" h="130px" photo={component_6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
