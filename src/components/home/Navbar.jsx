import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "./../ui/Button";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../actions/userAction";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./../ui/Dropdown-menu";
import { ChevronDown, Menu, X, User, LogIn } from "lucide-react";

export default function Navbar() {
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, user, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const NavItem = ({ label, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isActiveItem = items.some((item) => isActive(item.path));

    return (
      <div className="relative">
        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full justify-between ${
            isActiveItem ? "border-b-2 border-primary" : ""
          }`}
        >
          {label}{" "}
          <ChevronDown
            className={`ml-1 h-4 w-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
        {isOpen && (
          <div className="mt-2 space-y-2 pl-4 overflow-hidden">
            {items.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Button
                  variant="ghost"
                  className={`w-full text-left ${
                    isActive(item.path) ? "bg-gray-100" : ""
                  }`}
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const menuItems = [
    {
      label: "Festivals",
      items: [
        { label: "Diwali", path: "/festivals/diwali" },
        { label: "Eid", path: "/festivals/eid" },
        { label: "Christmas", path: "/festivals/christmas" },
        { label: "Holi", path: "/festivals/holi" },
        { label: "Navratri", path: "/festivals/navratri" },
        { label: "Durga Puja", path: "/festivals/durga-puja" },
      ],
    },
    {
      label: "Special Days",
      items: [
        { label: "Friendship Day", path: "/special-days/friendship-day" },
        { label: "Father's Day", path: "/special-days/fathers-day" },
        { label: "Mother's Day", path: "/special-days/mothers-day" },
        { label: "Valentine's Day", path: "/special-days/valentines-day" },
        { label: "Teacher's Day", path: "/special-days/teachers-day" },
        { label: "Children's Day", path: "/special-days/childrens-day" },
      ],
    },
    {
      label: "Anniversaries",
      items: [
        { label: "Wedding Anniversary", path: "/anniversaries/wedding" },
        { label: "Work Anniversary", path: "/anniversaries/work" },
        {
          label: "Relationship Milestones",
          path: "/anniversaries/relationship",
        },
        { label: "Business Anniversary", path: "/anniversaries/business" },
      ],
    },
    {
      label: "More",
      items: [
        { label: "Birthdays", path: "/more/birthdays" },
        { label: "Graduations", path: "/more/graduations" },
        { label: "Baby Showers", path: "/more/baby-showers" },
        { label: "Retirements", path: "/more/retirements" },
        { label: "New Job", path: "/more/new-job" },
      ],
    },
  ];

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">
              Badhai Bazaar
            </span>
          </div>
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => handleNavigation("/")}
                className={`${
                  isActive("/") ? "border-b-2 border-gray-500" : ""
                }`}
              >
                Home
              </Button>

              {menuItems.map((item) => (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`${
                        item.items.some((subItem) => isActive(subItem.path))
                          ? "border-b-2 border-gray-500"
                          : ""
                      }`}
                    >
                      {item.label} <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.items.map((subItem) => (
                      <DropdownMenuItem
                        key={subItem.label}
                        onSelect={() => handleNavigation(subItem.path)}
                        className={`${
                          isActive(subItem.path) ? "bg-gray-100" : ""
                        }`}
                      >
                        {subItem.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}

              {user ? (
                <Button
                  variant="ghost"
                  onClick={() => handleNavigation("/profile")}
                  className="p-0 h-auto"
                >
                  <img
                    src={user.image}
                    alt={user.displayName}
                    className="w-8 h-8 rounded-full"
                  />
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  onClick={() => handleNavigation("/login")}
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Button
            variant="ghost"
            className={`block w-full text-left ${
              isActive("/") ? "bg-gray-100" : ""
            }`}
            onClick={() => handleNavigation("/")}
          >
            Home
          </Button>
          {menuItems.map((item) => (
            <NavItem key={item.label} label={item.label} items={item.items} />
          ))}
          {user ? (
            <Button
              variant="ghost"
              className={`w-full justify-start ${
                isActive("/profile") ? "bg-gray-100" : ""
              }`}
              onClick={() => handleNavigation("/profile")}
            >
              <img
              title={user.displayName}
                src="https://avatars.githubusercontent.com/u/124631079?s=400&u=9d174f8ab39805774cea363de04b35536c1c063d&v=4"
                alt="Profile"
                className="w-8 h-8 rounded-full mr-2"
              />
              Profile
            </Button>
          ) : (
            <Button
              variant="ghost"
              className={`w-full justify-start ${
                isActive("/login") ? "bg-gray-500" : ""
              }`}
              onClick={() => handleNavigation("/login")}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          )}
        </div>
      </motion.div>
    </nav>
  );
}
