import CountEffect from "../Components/CountEffect";

const data = [
  { to: 657, from: 400, duration: 2, label: "Number" },
  { to: 1223, from: 1000, duration: 2, label: "Example" },
  { to: 8772, from: 8300, duration: 2, label: "Testing" },
  { to: 892, from: 850, duration: 5, label: "Coffee" },
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
          <div className="flex h-full justify-around items-center text-4xl font-bold text-white">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <CountEffect
                  from={item.from}
                  to={item.to}
                  duration={item.duration}
                />
                <p className="font-thin text-xl">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
