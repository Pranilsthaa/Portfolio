import CountEffect from "../Components/CountEffect";

const data = [
  {
    to: 15,
    from: 0,
    duration: 2,
    suffix: "+",
    title: "Projects",
    subtitle: "Completed",
  },
  {
    to: 10,
    from: 0,
    duration: 2,
    suffix: "+",
    title: "Technologies",
    subtitle: "Used",
  },
  {
    to: 3,
    from: 0,
    duration: 1.5,
    suffix: "+",
    title: "Years of",
    subtitle: "Coding",
  },
];

const Info = () => {
  return (
    <div className="relative mt-60 min-h-[500px]">
      <div
        style={{
          background: 'url("/images/bg-33.webp")',
          backgroundSize: "cover",
          width: "100%",
          height: "250px",
          backgroundAttachment: "fixed",
          WebkitBackgroundSize: "cover",
        }}
      >
        <div
          style={{
            position: "relative",
            background: "rgba(10,0,0,0.2)",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="flex h-full justify-around items-center text-3xl sm:text-5xl font-bold text-white px-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center select-none"
              >
                <CountEffect
                  from={item.from}
                  to={item.to}
                  duration={item.duration}
                  suffix={item.suffix}
                />
                <p className="font-light text-sm sm:text-xl mt-2 leading-tight">
                  {item.title} <br /> {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
