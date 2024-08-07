import { useState, useRef, useEffect } from "react";
import headerMenuIcon from "../../assets/images/heder-menu-icon.png";
import paintBrash from "../../assets/images/paint-board-and-brush.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  faArrowLeft,
  faGears,
  faUsers,
  faUser,
  faTh,
  faFileLines,
  faHeadset,
  faCalendarDays,
  faBell,
  faFolder,
  faClipboardList,
  faEnvelopeOpenText,
  faCommentDots,
  faClock,
  faSquarePlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ bg, setBg }) => {
  const [paint, setPaint] = useState(false);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuList = [
    { title: "Push Notes", href: "/push-notes", icon: faClipboardList },
    { title: "Agency Folder", href: "/agency-folder", icon: faFolder },
    { title: "Calendars", href: "/calendars", icon: faCalendarDays },
    { title: "Business Community", href: "/business-community", icon: faUsers },
    { title: "Individual", href: "/individual", icon: faUser },
    { title: "Setting", href: "/setting", icon: faGears },
    { title: "Help & Support", href: "/help-support", icon: faHeadset },
    {
      title: "Forms Library",
      href: "/forms-library",
      icon: faEnvelopeOpenText,
    },
    { title: "Messages", href: "/messages", icon: faCommentDots },
    { title: "Reminders", href: "/reminders", icon: faClock },
    { title: "Notification", href: "/reminders", icon: faBell },
    {
      title: "Incident Report Form",
      href: "/incident-report-form",
      icon: faList,
    },
    {
      title: "Medication Administration Record",
      href: "/medication-administration-record",
      icon: faTh,
    },
    {
      title: "Physician Order Sheet (POS)",
      href: "/treatment-administration-record",
      icon: faTh,
    },
    {
      title: "Treatment Administration Record",
      href: "/treatment-administration-record",
      icon: faSquarePlus,
    },
    {
      title: "Xoomia Training Resource",
      href: "/xoomia-training-resource",
      icon: faSquarePlus,
    },
    { title: "Manage Report", href: "/mange-report", icon: faFileLines },
  ];
  const allColors = [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
  ];
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setPaint(false);
      setMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={ref}>
      <div
        className={`${bg} w-full max-lg:justify-between justify-between pr-5 max-sm:justify-between min-h-[57px] gap-x-5 max-sm:px-5 flex items-center`}
      >
        <div className="flex gap-x-5 items-center">
          <button
            onClick={() => {
              setMenu(!menu);
              setPaint(false);
            }}
          >
            <img src={headerMenuIcon} className="w-[21px] h-[21px]" alt="" />
          </button>
          <button
            onClick={() => {
              setPaint(!paint);
              setMenu(false);
            }}
          >
            <img src={paintBrash} className="w-[30px] h-[30px]" alt="" />
          </button>
        </div>
        {location.pathname !== "/" && (
          <button
            className="bg-[#cdba96] px-2 py-1 rounded-[5px] text-[12px] leading-[18px] text-white flex gap-x-2 items-center"
            onClick={() => navigate(-1)}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
          </button>
        )}
      </div>
      {paint && (
        <div className="z-50 absolute top-[57px] max-sm:top-[50px] left-0  min-h-20 bg-slate-900 bg-opacity-10 w-full">
          <div className="grid grid-cols-6 w-[180px] gap-1 bg-white m-5 relative p-2">
            <span
              style={{ clipPath: `polygon(48% 48%, 0% 100%, 100% 100%)` }}
              className="h-5 w-5 bg-white absolute -top-5 max-sm:left-10 left-7 z-40"
            ></span>
            <span className="text-[10px] col-span-6 text-slate-500">
              Select color
            </span>
            <button
              onClick={() => setBg(`bg-red-500`)}
              className={`w-6 h-6 rounded-[5px] bg-red-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-red-900`)}
              className={`w-6 h-6 rounded-[5px] bg-red-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-orange-500`)}
              className={`w-6 h-6 rounded-[5px] bg-orange-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-orange-900`)}
              className={`w-6 h-6 rounded-[5px] bg-orange-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-amber-500`)}
              className={`w-6 h-6 rounded-[5px] bg-amber-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-amber-900`)}
              className={`w-6 h-6 rounded-[5px] bg-amber-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-yellow-500`)}
              className={`w-6 h-6 rounded-[5px] bg-yellow-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-yellow-900`)}
              className={`w-6 h-6 rounded-[5px] bg-yellow-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-lime-500`)}
              className={`w-6 h-6 rounded-[5px] bg-lime-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-lime-900`)}
              className={`w-6 h-6 rounded-[5px] bg-lime-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-green-500`)}
              className={`w-6 h-6 rounded-[5px] bg-green-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-green-900`)}
              className={`w-6 h-6 rounded-[5px] bg-green-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-emerald-500`)}
              className={`w-6 h-6 rounded-[5px] bg-emerald-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-emerald-900`)}
              className={`w-6 h-6 rounded-[5px] bg-emerald-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-teal-500`)}
              className={`w-6 h-6 rounded-[5px] bg-teal-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-teal-900`)}
              className={`w-6 h-6 rounded-[5px] bg-teal-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-cyan-500`)}
              className={`w-6 h-6 rounded-[5px] bg-cyan-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-cyan-900`)}
              className={`w-6 h-6 rounded-[5px] bg-cyan-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-sky-500`)}
              className={`w-6 h-6 rounded-[5px] bg-sky-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-sky-900`)}
              className={`w-6 h-6 rounded-[5px] bg-sky-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-blue-500`)}
              className={`w-6 h-6 rounded-[5px] bg-blue-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-blue-900`)}
              className={`w-6 h-6 rounded-[5px] bg-blue-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-indigo-500`)}
              className={`w-6 h-6 rounded-[5px] bg-indigo-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-indigo-900`)}
              className={`w-6 h-6 rounded-[5px] bg-indigo-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-violet-500`)}
              className={`w-6 h-6 rounded-[5px] bg-violet-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-violet-900`)}
              className={`w-6 h-6 rounded-[5px] bg-violet-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-purple-500`)}
              className={`w-6 h-6 rounded-[5px] bg-purple-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-purple-900`)}
              className={`w-6 h-6 rounded-[5px] bg-purple-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-fuchsia-500`)}
              className={`w-6 h-6 rounded-[5px] bg-fuchsia-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-fuchsia-900`)}
              className={`w-6 h-6 rounded-[5px] bg-fuchsia-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-pink-500`)}
              className={`w-6 h-6 rounded-[5px] bg-pink-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-pink-900`)}
              className={`w-6 h-6 rounded-[5px] bg-pink-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-rose-500`)}
              className={`w-6 h-6 rounded-[5px] bg-rose-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-rose-900`)}
              className={`w-6 h-6 rounded-[5px] bg-rose-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-slate-500`)}
              className={`w-6 h-6 rounded-[5px] bg-slate-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-slate-900`)}
              className={`w-6 h-6 rounded-[5px] bg-slate-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-gray-500`)}
              className={`w-6 h-6 rounded-[5px] bg-gray-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-gray-900`)}
              className={`w-6 h-6 rounded-[5px] bg-gray-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-zinc-500`)}
              className={`w-6 h-6 rounded-[5px] bg-zinc-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-zinc-900`)}
              className={`w-6 h-6 rounded-[5px] bg-zinc-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-neutral-500`)}
              className={`w-6 h-6 rounded-[5px] bg-neutral-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-neutral-900`)}
              className={`w-6 h-6 rounded-[5px] bg-neutral-900`}
            ></button>

            <button
              onClick={() => setBg(`bg-stone-500`)}
              className={`w-6 h-6 rounded-[5px] bg-stone-500`}
            ></button>
            <button
              onClick={() => setBg(`bg-stone-900`)}
              className={`w-6 h-6 rounded-[5px] bg-stone-900`}
            ></button>
          </div>
        </div>
      )}
      {menu && (
        <div className="z-50 absolute top-[67px]   left-1 min-h-20 bg-slate-900 bg-opacity-70 w-[99%] p-1">
          <div className="grid relative grid-cols-10 max-sm:grid-cols-3 gap-1 ">
            <span
              className="w-5 h-5 bg-opacity-70 absolute -top-5 max-sm:-top-6 left-0 max-sm:left-3 bg-slate-900"
              style={{ clipPath: `polygon(48% 48%, 0% 100%, 100% 100%)` }}
            ></span>
            {menuList.map((item, index) => (
              <Link
                to={item.href}
                key={index}
                className={` ${bg} min-h-28 p-2 flex flex-col gap-2 items-center justify-start rounded-[5px]`}
              >
                <FontAwesomeIcon
                  className="text-[30px] text-white"
                  icon={item.icon}
                />
                <span className="text-center text-[12px] text-white">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
