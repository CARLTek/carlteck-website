const CallToActionSection = () => {
  return (
    <div className="max-w-[calc(100%-2in)] mx-auto flex flex-col md:flex-row items-center justify-between  bg-gray-200 dark:bg-gray-900 rounded-xl p-0 mt-16 mb-20
     overflow-visible">
      {/* Image */}
      <div className="relative w-full md:w-1/2 flex justify-end mb-8 md:mb-0">
        <img
          src="/robot.png"
          alt="Robot"
          className="w-64 md:w-80 -mt-30" 
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-full pl-0 md:pl-30  text-center  md:text-left">
      
        <h2 className="text-3xl font-bold mb-4">
          Want to Collaborate or Learn More?
        </h2>
        <p className=" mb-6">
          We're always open to new ideas, research and partnerships.
        </p>
        <button className="text-white px-6 py-3 rounded-lg bg-[#0583A0]  hover:bg-[#8eb6bf] transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default CallToActionSection;
