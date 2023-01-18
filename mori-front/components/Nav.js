export default function Home() {
  return (
    <>
      <div className="pt-5 border-b-2 ">
        <main>
          <section className="grid grid-cols-5 w-full text-center align-middle">
            <div className="col-span-1">
              <img
                className="w-3/4 mx-auto pt-2"
                src="https://www.banimode.com//themes/new/assets/images/banilogo.svg"
              ></img>
            </div>
            <div className="col-span-3 w-full">
              <input
                className="rounded-md w-3/4 p-3 bg-gray-100 text-black placeholder-black text-sm"
                style={{ direction: "rtl" }}
                placeholder="جستجو درمیان 500 برند ..."
              />
            </div>
            <div className="col-span-1">
              <button className="py-3 px-3 rounded-md bg-green-400 text-white ">
                ورود / ثبت نام
              </button>
            </div>
          </section>
          <section className="font-bold flex flex-row w-1/2 mx-auto my-8 justify-between">
            <div>
              <h1>زنانه</h1>
            </div>
            <div>
              <h1>مردانه</h1>
            </div>
            <div>
              <h1>نوجوان</h1>
            </div>
            <div>
              <h1>بچگانه</h1>
            </div>
            <div>
              <h1>برند ها</h1>
            </div>
            <div>
              <h1>فروش ویژه</h1>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
