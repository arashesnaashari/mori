import { useRef } from "react";

export default function Home({ data }) {
  const ax = useRef();
  const handleHover = (e) => {
    ax.current.style.backgroundImage = `url(${data.img_hover})`;
  };
  const handleLeave = (e) => {
    ax.current.style.backgroundImage = `url(${data.img})`;
  };
  let x = data.size[0].split(" ")[0].split("\n");
  return (
    <>
      <a href={data.link} style={{ direction: "rtl" }}>
        <div
          onMouseOver={handleHover}
          onMouseLeave={handleLeave}
          ref={ax}
          className="w-72 h-72"
          style={{
            backgroundImage: `url(${data.img})`,
            color: "transparent",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        {/* <div
          className="w-56 h-56"
          style={{
            backgroundImage: `url(${data.img_hover})`,
            color: "transparent",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div> */}
        <div className="flex flex-col justify-around h-40">
          <div className="flex flex-row justify-between">
            <h1 className=" font-bold text-xl">{data.model}</h1>
            <h1></h1>
          </div>
          <div className="text-gray-500 flex flex-row justify-between text-sm">
            <h1>{data.name}</h1>
            <h1 className="text-green-400">{data.price}</h1>
          </div>
          <div>
            <div>
              {x.map((e) => {
                return (
                  <>
                    <button className="p-1 rounded-md border-2 mr-1">
                      {e}
                    </button>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
