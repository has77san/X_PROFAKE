import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  CalendarDays,
  UserCircle,
  List,
  Table,
  FileText,
  BarChart3,
  Box,
  Plug,
  Layers,
  TrendingUp,
  ClipboardList,
  LogIn,
  LogOut,
  Coins,
  FolderOpen,
  ChevronDown,
} from "lucide-react";

import { useSidebar } from "../context/SidebarContext";
import SidebarWidget from "./SidebarWidget";

// ✅ القوائم الرئيسية
const navItems = [
  {
    icon: <LayoutDashboard />,
    name: "الصفحة الرئيسية",
    path: "/",
  },
  {
    icon: <CalendarDays />,
    name: "ملف الحسابات",
    path: "/calendar",
  },
  {
    icon: <UserCircle />,
    name: "صيرفة",
    path: "/profile",
  },
  {
    icon: <List />,
    name: "تسجيل الايرادات",
    path: "/form-elements",
  },
  {
    icon: <Table />,
    name: "تسجيل المصاريف",
    path: "/expenses",
  },
  {
    icon: <FileText />,
    name: "الموجودات الثابته",
    path: "/blank",
  },
];

// ✅ القوائم الأخرى
const othersItems = [
  {
    icon: <BarChart3 />,
    name: "الاندثارات",
    path: "/line-chart",
  },
  {
    icon: <Box />,
    name: "الاطفاءات",
    subItems: [
      { name: "Alerts", path: "/alerts" },
      { name: "Avatar", path: "/avatars" },
      { name: "Badge", path: "/badge" },
      { name: "Buttons", path: "/buttons" },
      { name: "Images", path: "/images" },
      { name: "Videos", path: "/videos" },
    ],
  },
  {
    icon: <TrendingUp />,
    name: "الامتثال",
    path: "/line-chart",
  },
  {
    icon: <Coins />,
    name: "تسليم حوالة",
    path: "/Attreceivtow",
  },
  {
    icon: <Coins />,
    name: "استلام حوالة",
    path: "/Attreceiv",
  },
  {
    icon: <FolderOpen />,
    name: "السجلات المحاسبة ",
    subItems: [
      { name: "سجل اليومية العام", path: "/" },
      { name: "سجل الاسناد العام", path: "/" },
      { name: "سجل الموجودات الثابته", path: "/" },
      { name: "سجل القاصة /فئات", path: "/" },
    ],
  },
  {
    icon: <Layers />,
    name: "ميزان المراجعة",
    subItems: [
      {
        name: "ميزان المراجعة قبل ",
        path: "/",
        subItems: [
          { name: "ارصدة", path: "/" },
          { name: "مجاميع", path: "/" },
        ],
      },
      { name: "ميزان مراجعة قبل الخلف", path: "/" },
      { name: "ميزان مراجعة لفترة محددة", path: "/" },
    ],
  },
  {
    icon: <ClipboardList />,
    name: "التسويات القيدية",
    path: "/",
  },
  {
    icon: <LogIn />,
    name: "تسجيل دخول",
    path: "/signin",
  },
  {
    icon: <LogOut />,
    name: "تسجيل خروج",
    path: "/signup",
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();

  const [openSubmenu, setOpenSubmenu] = useState<{ type: "main" | "others"; index: number } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>({});
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isActive = useCallback((path: string) => location.pathname === path, [location.pathname]);

  useEffect(() => {
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : othersItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({ type: menuType as "main" | "others", index });
              submenuMatched = true;
            }
          });
        }
      });
    });

    if (!submenuMatched) setOpenSubmenu(null);
  }, [location, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prev) => ({
          ...prev,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prev) =>
      prev && prev.type === menuType && prev.index === index ? null : { type: menuType, index }
    );
  };

  const renderMenuItems = (items: any[], menuType: "main" | "others") => (
    <ul className="flex flex-col gap-4">
      {items.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer ${!isExpanded && !isHovered ? "lg:justify-center" : "lg:justify-start"}`}
            >
              <span
                className={`menu-item-icon-size ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && <span className="menu-item-text">{nav.name}</span>}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDown
                  className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                    openSubmenu?.type === menuType && openSubmenu?.index === index
                      ? "rotate-180 text-brand-500"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                to={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}
              >
                <span
                  className={`menu-item-icon-size ${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && <span className="menu-item-text">{nav.name}</span>}
              </Link>
            )
          )}

          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 mr-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      to={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed top-0 right-0 mt-16 flex flex-col lg:mt-0 px-5 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-l border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "translate-x-full"} 
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}
      >
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg hover:scale-105 transition-transform duration-300">
          X-PRO
        </h1>
      </div>

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>{renderMenuItems(navItems, "main")}</div>
            <div>{renderMenuItems(othersItems, "others")}</div>
          </div>
        </nav>
        {isExpanded || isHovered || isMobileOpen ? <SidebarWidget /> : null}
      </div>
    </aside>
  );
};

export default AppSidebar;
