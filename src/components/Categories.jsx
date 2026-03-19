import { useNavigate } from "react-router-dom";

export default function Categories() {

  const navigate = useNavigate();

  const items = [
    {
      title: "WOODEN HEADBOARD",
      category: "BEDROOM",
      sub: "Beds",
      img: "/bed.webp"
    },
    {
      title: "WOODEN STORAGE CABINETS",
      category: "LIVING ROOM",
      sub: "Cabinets",
      img: "/storage.webp"
    },
    {
      title: "WOODEN CHEST OF DRAWERS",
      category: "BEDROOM",
      sub: "Dressers",
      img: "/drawers.webp"
    },
    {
      title: "WOODEN COFFEE TABLE",
      category: "LIVING ROOM",
      sub: "Coffee Tables",
      img: "/coffee.jpg"
    },
    {
      title: "WOODEN TV UNIT",
      category: "LIVING ROOM",
      sub: "TV Units",
      img: "/tvunit.avif"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto justify-center px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-12 ">
        <p className="text-sm text-gray-500 uppercase">
          Handcrafted With Integrity
        </p>

        <h2 className="text-4xl font-bold mt-2">
          Our Categories
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Our furniture combines luxury, ethnicity, royalty,
          and tradition into one and gives any ambiance
          a look of excellence.
        </p>
      </div>

      {/* Category Cards */}
      
        <div className="grid md:grid-cols-5 gap-6 items-center w-full">

          {items.map((item, i) => (

            <div
              key={i}
              onClick={() =>
                navigate(`/category/${item.category}/${item.sub}`)
              }
              className="cursor-pointer flex flex-col justify-center items-center"
            >

              <img
                src={item.img}

                className="rounded-xl h-96 w-96 md:h-46 md:w-46 items-center object-contain xl:object-contain hover:scale-105 transition"
              />

              <p className="text-center mt-3 font-medium">
                {item.title}
              </p>

            </div>

          ))}
        
      </div>

    </section>
  );
}