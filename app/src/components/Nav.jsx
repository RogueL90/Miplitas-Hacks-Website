import circlePNG from "../assets/circle-logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-center fixed w-full">
      <div className="flex justify-between items-center p-2 max-w-7xl w-full">
        <Link>
          <img src={circlePNG} width={50}></img>
        </Link>
        <div className="flex gap-5">
          <Link to="about">About</Link>
          <Link to="about">Schedule</Link>
          <Link to="about">Tracks</Link>
          <Link to="about">FAQ</Link>
          <Link to="about">Sponsors</Link>
          <Link to="about">Donate</Link>
          <Link to="about">Team</Link>
        </div>
        <div className="flex gap-5">
          <button className="bg-blue-700 opacity-90 p-2 rounded-md hover:opacity-100">
            Register
          </button>
          <button className="bg-blue-700 opacity-90 p-2 rounded-md hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25"
              viewBox="0 -960 960 960"
              width="25"
              fill="white"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
