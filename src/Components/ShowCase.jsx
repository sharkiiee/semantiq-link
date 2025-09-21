import rectangle from "/Group 48096943.png";
import { useRef, useState, useEffect } from "react";
const data = [
  {
    text: "Follow us on Facebook",
    color: "#3B579D",
  },
  {
    text: "Follow us on Instagram",
    color: "#d62976",
  },
  {
    text: "Follow us on LinkedIn",
    color: "#0077B5",
  },
  {
    text: "Talk to Us",
    color: "#000000",
  },
];
export default function ShowCase() {
  let timerRef = useRef();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      if (index === data.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2000);

    return () => clearInterval(timerRef.current);
  }, [index]);

  return (
    <div className="relative">
      <img src={rectangle} alt="" />
      <div
        className="absolute top-[74%] right-0 w-[300px] h-[40px] z-10 py-4 text-white text-center flex items-center justify-end"
        style={{ backgroundColor: data[index].color }}
      >
        {data[index].text}
        <hr className="border-t border-white w-20 ml-4" />
      </div>
    </div>
  );
}
