import { useRef, useState } from "react";

export default function MagnifierImage({ img }) {

  const imgRef = useRef(null);
  const [backgroundPos, setBackgroundPos] = useState("0% 0%");
  const [showLens, setShowLens] = useState(false);

  const handleMove = (e) => {

    const { left, top, width, height } =
      imgRef.current.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setBackgroundPos(`${x}% ${y}%`);
  };

  return (
    <div
      className="relative w-[450px] h-[450px]"
      onMouseEnter={() => setShowLens(true)}
      onMouseLeave={() => setShowLens(false)}
      onMouseMove={handleMove}
    >

      <img
        ref={imgRef}
        src={`http://localhost:5000${img}`}
        className="w-full h-full object-cover rounded"
        alt=""
      />

      {showLens && (
        <div
          className="absolute inset-0 rounded pointer-events-none"
          style={{
            backgroundImage: `url(http://localhost:5000${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "200%",
            backgroundPosition: backgroundPos
          }}
        />
      )}

    </div>
  );
}