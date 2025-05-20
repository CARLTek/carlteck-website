interface pageTitleProps {
  title: string;
}

const AboutPage: React.FC<pageTitleProps> = ({ title }) => {
  return (
    <div>
        <h1 className=" py-20 flex justify-center items-center text-4xl sm:text-5xl font-bold ">
          {title}
        </h1>
        <div className="border-t border-black dark:border-white w-full" />
    </div>
  );
};

export default AboutPage;