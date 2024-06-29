import {useState}from "react";
import avatar from "../../assets/images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faUser,
  faMoneyBill,
  faLock,
  faWrench,
  faCircleInfo,
  faUsers,
  faUserPlus,
  faLocation,
  faGear,
  faTh,
  faFileLines,
  faBell,
  faCalendarDays,
  faShare,
  faFolder,
  faPlus,
  faList,
  faBook,
  faFile,
  faCar,
  faEye,
  faTicket,
  faEnvelope,
  faPhone,
  faCircleQuestion,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import { AlignJustify } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {motion} from "framer-motion"
const Sidebar = ({ bg }: { bg: string }) => {
  const sideBarMenu = [
    {
      title: "Settings",
      href: "",
      icon: faGears,
      subMenu: [
        {
          title: "Company Profile",
          href: "/profile",
          icon: faUser,
        },
        {
          title: "Agency Invoice",
          href: "/agency-invoice",
          icon: faMoneyBill,
        },
        {
          title: "Payroll",
          href: "/payroll",
          icon: faCircleInfo,
        },
        {
          title: "change Password",
          href: "/change-password",
          icon: faLock,
        },
        {
          title: "Positive Identifications",
          href: "/positive-identifications",
          icon: faCircleQuestion,
        },
        {
          title: "Notification Setting",
          href: "/notification-Setting",
          icon: faWrench,
        },
        {
          title: "Permissions",
          href: "/permissions",
          icon: faUsers,
        },
      ],
    },
    {
      title: "Mange Co-Admins",
      href: "",
      icon: faUsers,
      subMenu: [
        {
          title: "Co-Admins",
          href: "/co-admins",
          icon: faUsers,
        },
      ],
    },
    {
      title: "Mange Subusers",
      href: "",
      icon: faUsers,
      subMenu: [
        {
          title: "Sub Users",
          href: "/sub-users",
          icon: faUsers,
        },
      ],
    },
    {
      title: "Billing Module",
      href: "",
      icon: faUsers,
      subMenu: [
        {
          title: "Billing",
          href: "/billing",
          icon: faUserPlus,
        },
      ],
    },
    {
      title: "Individual",
      href: "",
      icon: faUserPlus,
      subMenu: [
        {
          title: "Individual",
          href: "/individual",
          icon: faUserPlus,
        },
        {
          title: "Create New Individual",
          href: "/create-new-individual",
          icon: faUserPlus,
        },
        {
          title: "Individual Audit Review",
          href: "/individual-audit-review",
          icon: faUserPlus,
        },
      ],
    },
    {
      title: "Business Community",
      href: "",
      icon: faUsers,
      subMenu: [
        {
          title: "Caregiver/Staff",
          href: "/staff",
          icon: faUserPlus,
        },
        {
          title: "Guardians",
          href: "guardians",
          icon: faUserPlus,
        },
        {
          title: "Support Administrators",
          href: "/support-administrators",
          icon: faUserPlus,
        },
        {
          title: "Healthcare Professional",
          href: "/healthcare-professional",
          icon: faUserPlus,
        },
        {
          title: "Compliance",
          href: "/Compliance",
          icon: faUserPlus,
        },
      ],
    },
    {
      title: "Location of Service",
      href: "/location-of-service",
      icon: faLocation,
      subMenu: [],
    },
    {
      title: "Push Notes",
      href: "push-notes",
      icon: faFileLines,
      subMenu: [],
    },
    {
      title: "eMAR Suite",
      href: "",
      icon: faGear,
      subMenu: [
        {
          title: "POS",
          href: "/pos",
          icon: faTh,
        },
        {
          title: "MAR",
          href: "mar",
          icon: faTh,
        },
        {
          title: "TAR",
          href: "/tar",
          icon: faTh,
        },
      ],
    },
    {
      title: "Clock in/out Group",
      href: "",
      icon: faBell,
      subMenu: [
        {
          title: "Clock in",
          href: "/clock-in",
          icon: faBell,
        },
        {
          title: "clock-out",
          href: "clock-out",
          icon: faBell,
        },
        {
          title: "View Log",
          href: "/view-log",
          icon: faTh,
        },
      ],
    },
    {
      title: "Timesheet",
      href: "/timesheet",
      icon: faCalendarDays,
      subMenu: [],
    },
    {
      title: "Mileage Log",
      href: "",
      icon: faCalendarDays,
      subMenu: [
        {
          title: "View Assigned Mileage",
          href: "view-assigned-mileage",
          icon: faShare,
        },
        {
          title: "Add New Mileage",
          href: "add-new-mileage",
          icon: faShare,
        },
        {
          title: "Mileage Log",
          href: "/mileage-log",
          icon: faShare,
        },
      ],
    },
    {
      title: "Folders",
      href: "",
      icon: faFolder,
      subMenu: [
        {
          title: "Folders",
          href: "/folders",
          icon: faFolder,
        },
      ],
    },
    {
      title: "Community Integration",
      href: "",
      icon: faBell,
      subMenu: [
        {
          title: "Set Budget",
          href: "/set-budget",
          icon: faPlus,
        },
        {
          title: "Add Community Integration",
          href: "/add-community-integration",
          icon: faPlus,
        },
        {
          title: "Community Integration Log",
          href: "/community-integration-log",
          icon: faList,
        },
        {
          title: "Add Category",
          href: "/add-category",
          icon: faTh,
        },
        {
          title: "Add List Of Activity",
          href: "/add-list-of-activity",
          icon: faList,
        },
      ],
    },
    {
      title: "Adult Day Service",
      href: "",
      icon: faBook,
      subMenu: [
        {
          title: "Category",
          href: "/category",
          icon: faBook,
        },
        {
          title: "Ads Location",
          href: "/add-location",
          icon: faFolder,
        },
        {
          title: "List Of Activity Log",
          href: "/list-of-activity-log",
          icon: faBook,
        },
        {
          title: "Add Group Activity documentation",
          href: "/add-group-activity-documentation",
          icon: faBook,
        },
        {
          title: "View Group Documentation Log",
          href: "/view-group-documentation-log",
          icon: faCalendarDays,
        },
        {
          title: "ADS Configuration",
          href: "/ads-configuration",
          icon: faGears,
        },
        {
          title: "Attendance sheet",
          href: "/attendance-sheet",
          icon: faCalendarDays,
        },
        {
          title: "Reports",
          href: "/reports",
          icon: faCalendarDays,
        },
        {
          title: "Support Employment",
          href: "/support-employment",
          icon: faCalendarDays,
        },
        {
          title: "View Outcome Log",
          href: "/view-outcome-log",
          icon: faCalendarDays,
        },
        {
          title: "Add Shift Summary",
          href: "/add-shift-summary",
          icon: faCalendarDays,
        },
        {
          title: "View Shift Summary",
          href: "/view-shift-summary",
          icon: faCalendarDays,
        },
      ],
    },
    {
      title: "Employee Record",
      href: "",
      icon: faFolder,
      subMenu: [
        {
          title: "Payroll",
          href: "/payroll",
          icon: faCircleInfo,
        },
        {
          title: "Employee Files",
          href: "/employee-files",
          icon: faFolder,
        },
        {
          title: "Notices",
          href: "/Notices",
          icon: faFile,
        },
        {
          title: "Requested Time Off",
          href: "/requested-time-off",
          icon: faCalendarDays,
        },
        {
          title: "Scheduler",
          href: "/scheduler",
          icon: faCalendarDays,
        },
      ],
    },
    {
      title: "No Medical Transportation",
      href: "",
      icon: faCar,
      subMenu: [
        {
          title: "My vehicles",
          href: "/my-vehicles",
          icon: faCar,
        },
        {
          title: "My Routes",
          href: "/my-routes",
          icon: faCar,
        },
        {
          title: "Add Vehicle Inspection",
          href: "/add-vehicle-inspection",
          icon: faCar,
        },
        {
          title: "View Vehicle Inspection",
          href: "/view-vehicle-inspection",
          icon: faEye,
        },
        {
          title: "View Log",
          href: "/view-log",
          icon: faEye,
        },
        {
          title: "My Briefcase",
          href: "/my-briefcase",
          icon: faFolder,
        },
      ],
    },
    {
      title: "Calendars",
      href: "",
      icon: faCalendarDays,
      subMenu: [
        {
          title: "Calendars",
          href: "/calendars",
          icon: faCalendarDays,
        },
        {
          title: "Shared Events",
          href: "/shared-events",
          icon: faList,
        },
      ],
    },
    {
      title: "Help and Support",
      href: "",
      icon: faCircleQuestion,
      subMenu: [
        {
          title: "Add New Ticket",
          href: "/add-new-ticket",
          icon: faTicket,
        },
        {
          title: "Contact us",
          href: "/contact-us",
          icon: faEnvelope,
        },
        {
          title: "Call us",
          href: "/call-us",
          icon: faPhone,
        },
      ],
    },
    {
      title: "Recycle Bin",
      href: "/recycle-bin",
      icon: faRecycle,
      subMenu: [],
    },
  ];
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <>
      <div
        className={`min-w-[316px] ${bg}  max-sm:hidden max-lg:hidden min-h-screen`}
      >
        <div className="avatar flex items-center flex-col justify-center p-[30px]">
          <img className="w-[316px]" src={avatar} alt="avatar" />
          <p className="text-[14px] mt-5 leading-[15px] text-white">
            Welcome liban
          </p>
          <p className="text-[12px] mt-3 text-center truncate leading-[17.1429px] text-white">
            Jamila Home Care & Transporttation Dashboard
          </p>
        </div>
        <div className="nav-menu border-t border-t-slate-500 ">
          <Accordion type="single" collapsible className="w-full">
            {sideBarMenu.map((item, index) => {
              if (item.subMenu.length > 0) {
                return (
                  <AccordionItem
                    key={index}
                    className="!border-slate-500 !py-0 !text-white"
                    value={item.title}
                  >
                    <AccordionTrigger className="!border-slate-500 transition-all duration-500 delay-100 ease-in-out hover:bg-slate-900 hover:bg-opacity-65 px-5 !py-3">
                      <div className="flex gap-x-2 items-center">
                        <FontAwesomeIcon
                          icon={item.icon}
                          className="text-[12px] text-white"
                        />
                        <span className="text-[12px] text-white leading-[17px]">
                          {item.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    {item.subMenu.map((subItem, subIndex) => (
                      <AccordionContent className="w-full !py-0" key={subIndex}>
                        <NavLink
                          to={subItem.href}
                          className="flex gap-x-2 pl-10 w-full transition-all duration-500 delay-100 ease-in-out hover:bg-slate-900 hover:bg-opacity-65 py-2 items-center"
                        >
                          <FontAwesomeIcon
                            icon={subItem.icon}
                            className="text-[12px] text-white"
                          />
                          <span className="text-[12px] text-white leading-[17px]">
                            {subItem.title}
                          </span>
                        </NavLink>
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                );
              } else {
                return (
                  <NavLink
                    key={index}
                    to={item.href}
                    className="flex gap-x-2 px-5 py-3 transition-all duration-500 delay-100 ease-in-out hover:bg-slate-900 hover:bg-opacity-65 items-center border-b border-b-slate-500"
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-[12px] text-white"
                    />
                    <span className="text-[12px] text-white leading-[17px]">
                      {item.title}
                    </span>
                  </NavLink>
                );
              }
            })}
          </Accordion>
          <button className="flex gap-x-2 w-full px-5 py-3 transition-all duration-500 delay-100 ease-in-out hover:bg-slate-900 hover:bg-opacity-65 items-center border-b border-b-slate-500">
            <FontAwesomeIcon icon={faLock} className="text-[12px] text-white" />
            <span className="text-[12px] text-white leading-[17px]">
              Logout
            </span>
          </button>
          <Link
            className="text-[12px] px-5 text-white py-3 inline-block text-center leading-[17px]"
            to="mailto:support@xoomia.com"
          >
            support@xoomia.com
          </Link>
        </div>
      </div>
      {/* mobile navbar  */}
      <div
        className={`min-w-full hidden max-sm:flex max-lg:flex max-sm:justify-between max-lg:justify-between max-sm:items-center max-sm:px-5 max-lg:px-5 ${bg}`}
      >
        <div className="avatar flex gap-x-3 items-center justify-center py-2">
          <img
            className="w-[40px] max-sm:rounded-full max-lg:rounded-full"
            src={avatar}
            alt="avatar"
          />
          <p className="text-[14px]  leading-[15px] text-white">
            Welcome liban
          </p>
        </div>
        <button
          onClick={() => setSideMenu(!sideMenu)}
          className=" p-2 text-white text-sm rounded-[5px]"
        >
          <AlignJustify />
        </button>
      </div>
      {/* side menu  */}
      {sideMenu &&<motion.div  initial={{opacity:0}}
        animate={{opacity:100}}
        transition={{ duration: 0.5, ease: "easeInOut" }}   className={`nav-menu border-t border-t-slate-500 w-full ${bg}`}>
        <Accordion type="single" collapsible className="w-full">
          {sideBarMenu.map((item, index) => {
            if (item.subMenu.length > 0) {
              return (
                <AccordionItem
                  key={index}
                  className="!border-slate-500 !py-0 !text-white"
                  value={item.title}
                >
                  <AccordionTrigger className="!border-slate-500 transition-all duration-500 delay-100 ease-in-out hover:bg-slate-900 hover:bg-opacity-65 px-5 !py-3">
                    <div className="flex gap-x-2 items-center">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-[12px] text-white"
                      />
                      <span className="text-[12px] text-white leading-[17px]">
                        {item.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  {item.subMenu.map((subItem, subIndex) => (
                    <AccordionContent className="w-full !py-0" key={subIndex}>
                      <NavLink
                        to={subItem.href}
                        className="flex gap-x-2 pl-10 w-full transition-all duration-500 delay-100 ease-in-out hover:bg-slate-900 hover:bg-opacity-65 py-2 items-center"
                      >
                        <FontAwesomeIcon
                          icon={subItem.icon}
                          className="text-[12px] text-white"
                        />
                        <span className="text-[12px] text-white leading-[17px]">
                          {subItem.title}
                        </span>
                      </NavLink>
                    </AccordionContent>
                  ))}
                </AccordionItem>
              );
            } else {
              return (
                <NavLink
                  key={index}
                  to={item.href}
                  className="flex gap-x-2 px-5 py-3 transition-all duration-500 delay-100 ease-in-out hover:bg-slate-900 hover:bg-opacity-65 items-center border-b border-b-slate-500"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-[12px] text-white"
                  />
                  <span className="text-[12px] text-white leading-[17px]">
                    {item.title}
                  </span>
                </NavLink>
              );
            }
          })}
        </Accordion>
        <button className="flex gap-x-2 w-full px-5 py-3 transition-all duration-500 delay-100 ease-in-out hover:bg-slate-900 hover:bg-opacity-65 items-center border-b border-b-slate-500">
          <FontAwesomeIcon icon={faLock} className="text-[12px] text-white" />
          <span className="text-[12px] text-white leading-[17px]">Logout</span>
        </button>
        <Link
          className="text-[12px] px-5 text-white py-3 inline-block text-center leading-[17px]"
          to="mailto:support@xoomia.com"
        >
          support@xoomia.com
        </Link>
      </motion.div>}
      
    </>
  );
};

export default Sidebar;
