import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../App";

const SideNav = () => {
  const ctx = useContext(Context);

  const location = useLocation();

  const sideNavLinkClickHandler = (scrollTo) => {
    return () => {
      ctx.setSideNavActive(false);
      ctx.scrollToSection(scrollTo);
    };
  };

  return (
    <>
      <div
        className={`${
          ctx.sideNavActive ? "max-h-96 py-8 border-b border-l" : "max-h-0"
        } translate-y-[67px] ease-in-out overflow-hidden flex flex-col fixed bg-primary/50 backdrop-blur-lg webkit-backdrop-blur-lg right-0 px-8 gap-5 rounded-bl-2xl transition-all  border-secondary z-40`}
      >
        {!location.pathname.includes("/prospectus") ? (
          <>
            <Link
              to="about"
              className="hover:text-blue-300 transition-all"
              onClick={sideNavLinkClickHandler("/about")}
            >
              About
            </Link>
            <Link
              to="schedule"
              className="hover:text-blue-300 transition-all"
              onClick={sideNavLinkClickHandler("/schedule")}
            >
              Schedule
            </Link>
            <Link
              to="tracks"
              className="hover:text-blue-300 transition-all"
              onClick={sideNavLinkClickHandler("/tracks")}
            >
              Tracks
            </Link>
            <Link
              to="faq"
              className="hover:text-blue-300 transition-all"
              onClick={sideNavLinkClickHandler("/faq")}
            >
              FAQ
            </Link>
            <Link
              to="sponsors"
              className="hover:text-blue-300 transition-all"
              onClick={sideNavLinkClickHandler("/sponsors")}
            >
              Sponsors
            </Link>
            <a
              href="https://hcb.hackclub.com/donations/start/milpitas-hacks"
              target="_blank"
              className="hover:text-blue-300 transition-all"
            >
              Donate
            </a>
            <Link
              to="team"
              className="hover:text-blue-300 transition-all"
              onClick={sideNavLinkClickHandler("/team")}
            >
              Team
            </Link>
          </>
        ) : (
          <>
            <Link
              to="prospectus/mission"
              className="hover:text-blue-300 transition-all"
              onClick={sideNavLinkClickHandler("/prospectus/mission")}
            >
              Mission
            </Link>
            <Link
              to="prospectus/prospectus"
              className="hover:text-blue-300 transition-all"
              onClick={sideNavLinkClickHandler("/prospectus/prospectus")}
            >
              Prospectus
            </Link>
            <Link
              to="prospectus/faq"
              className="hover:text-blue-300 transition-all"
              onClick={sideNavLinkClickHandler("/prospectus/faq")}
            >
              FAQ
            </Link>
            <a
              href="https://hcb.hackclub.com/donations/start/milpitas-hacks"
              target="_blank"
              className="hover:text-blue-300 transition-all"
            >
              Donate
            </a>
          </>
        )}
      </div>
      <div
        className={`w-screen bg-transparent h-screen fixed z-30 ${
          ctx.sideNavActive ? "" : "hidden"
        }`}
        onClick={() => ctx.setSideNavActive(false)}
      ></div>
    </>
  );
};

export default SideNav;
