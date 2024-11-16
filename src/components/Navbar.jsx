export default function Navbar() {
  return (
    <section>
      <div className="relative flex items-center px-6 py-4 bg-[#54473F] ">
        <ul className="flex gap-[2rem] text-[1.5rem] text-[#f5deb3] max-md:gap-3 max-md:text-[1rem]">
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>

        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-[2rem] text-[#f5deb3] max-md:text-[1.5rem]">
          Lou
        </h1>

        <button className="text-[#f5deb3] ml-auto text-[1.5rem] max-md:text-[1rem]">
          Cart
        </button>
      </div>
    </section>
  );
}
