import Image from "next/image";

const Title = ({
  text,
  subText,
  underline = false,
  textR,
  textL,
  underlineSvg,
}) => {
  return (
    <div className="flex flex-col gap-4 text-white">
      {underline ? (
        <h1 className="flex gap-1 text-4xl">
          {textR}
          <span className="relative text-[var(--text-gold)]">
            <Image
              className="absolute bottom-[-15px]"
              src={underlineSvg}
              alt="Underline svg"
            />
            {text}
          </span>
          {textL}
        </h1>
      ) : (
        <h1 className="text-4xl">{text}</h1>
      )}

      <p className="text-sm">{subText}</p>
    </div>
  );
};

export default Title;
