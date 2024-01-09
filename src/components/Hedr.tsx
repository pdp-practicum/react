import { useNavigate } from "react-router-dom";

interface HedrProps {}

const Hedr = (props: HedrProps) => {
  const navigate = useNavigate();

  return (
    <div data-aos="fade-down-right" className="fixed w-[100%] z-10">
      <div className="flex p-3 pl-8 pr-8 w-[100%] bg-none items-center border-b-gray-900 justify-between">
        <div className="flex items-center gap-4">
          <span className="flex pl-4 items-center gap-1">
            <h1 className="rm text-[#4C4C4C]">R... </h1>
            <h1 className="rm text-[#6930c3]">M</h1>
          </span>
        </div>

        <span className="gap-4 flex items-center">
          <p
            className="a hover:-translate-y-1 hover:scale-110 hover:bg-[#4C4C4C] hover:text-yellow-200 hover:rounded-2xl duration-300"
            onClick={() => navigate("/home")}
          >
            Home
          </p>

          <p
            className="a hover:-translate-y-1 hover:scale-110 hover:bg-[#4C4C4C] hover:text-yellow-200 hover:rounded-2xl duration-300"
            onClick={() => navigate("/about")}
          >
            About
          </p>
          <p
            className="a hover:-translate-y-1 hover:scale-110 hover:bg-[#4C4C4C] hover:text-yellow-200 hover:rounded-2xl duration-300"
            onClick={() => navigate("/skills")}
          >
            Skills
          </p> <p
            className="a hover:-translate-y-1 hover:scale-110 hover:bg-[#4C4C4C] hover:text-yellow-200 hover:rounded-2xl duration-300"
            onClick={() => navigate("/writeups")}
          >
            Writeups
          </p> <p
            className="a hover:-translate-y-1 hover:scale-110 hover:bg-[#4C4C4C] hover:text-yellow-200 hover:rounded-2xl duration-300"
            onClick={() => navigate("/projects")}
          >
            Projects
          </p> <p
            className="a hover:-translate-y-1 hover:scale-110 hover:bg-[#4C4C4C] hover:text-yellow-200 hover:rounded-2xl duration-300"
            onClick={() => navigate("/contact")}
          >
            Contact
          </p>
        </span>
      </div>
    </div>
  );
};

export default Hedr;
