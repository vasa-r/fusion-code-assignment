import { certificationsData } from "../lib/constants";

const Certifications = () => {
  return (
    <section className="bg-[#F6F5E8] px-[20px] md:px-[30px] lg:px-[60px] py-[50px] md:py-[100px] lg:py-[100px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[30px] lg:gap-[40px]">
          {certificationsData.map(({ id, title, description }) => (
            <div key={id} className="flex flex-col items-center text-center">
              <h3 className="font-bold mb-[15px] md:mb-[20px] text-[#333333]">
                {title}
              </h3>
              <p className="text-[14px] md:text-[15px] lg:text-sm font-light leading-[1.7] text-[#333333] max-w-[350px]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
