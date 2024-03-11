import hackClubLogoPng from "../../assets/hack-club-logo.png";

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 pt-20 pb-20 pl-5 pr-5">
      <div className="pb-20">
        <h1 className="text-3xl font-bold">Sponsors</h1>
      </div>
      <div className="flex gap-5 max-w-5xl w-full flex-col md:flex-row justify-center">
        <img src={hackClubLogoPng} />
      </div>
      <div className="pt-20">
        <h1 className="text-xl font-bold">
          Want to sponsor us?{" "}
          <a href="" className="text-blue-300 hover:underline">
            See our sponsors prospectus
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Sponsors;
