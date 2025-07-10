const ourteamList = [
  {
    id: 1,
    role: "مدیر عامل",
    name: "دکتر آرمان فریلنسریان",
    desc: "موسس مجموعه فریلنسر",
    img: "/public/images/ourteam/1.jpg",
  },
  {
    id: 2,
    role: "مدیر فروش",
    name: "دکتر نیما میختاریان",
    desc: "کارآفرین برتر سال",
    img: "/public/images/ourteam/2.webp",
  },
  {
    id: 3,
    role: "مدیر پشتیبانی",
    name: "دکتر مهسا صدر",
    desc: "بهترین پشتیبان غرب آسیا",
    img: "/public/images/ourteam/3.jpg",
  },
  {
    id: 4,
    role: "مدیر رسانه",
    name: "دکتر رویا پارسا",
    desc: "دکتری رسانه از دانشگاه آکسفورد",
    img: "/public/images/ourteam/4.jpg",
  },
];
const OurTeam = () => {
  return (
    <div className="py-10 px-4">
      <h2 className="badge text-4xl font-bold my-10 text-secondary-700 w-full text-start"> تیم ما</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {ourteamList.map((item) => (
          <div className="flex flex-col gap-y-3 items-center p-5 rounded-xl bg-secondary-50 dark:bg-secondary-100 shadow-xl transition duration-300 hover:shadow-2xl">
            <div className="rounded-full w-32 h-32 aspect-square overflow-hidden">
              <img
                src={item.img}
                className="w-full h-full object-cover object-top"
                alt=""
              />
            </div>
            <p className="text-secondary-900 font-bold">{item.role} :</p>
            <p className="text-secondary-800 text-sm"> {item.name} </p>
            <div className="h-[1px] bg-primary-800 w-2/3" />
            <p className="text-secondary-800 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
