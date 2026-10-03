import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import "./Navbar.css";
import { navbarHomePageData } from "../data/navbar-homepage";

export default function Navbar() {
  const navbarData = navbarHomePageData;
  const [activeDropdownKey, setActiveDropdownKey] = useState(null);

  // Create ref to refernce to <nav>
  const navRef = useRef(null);
  // Close dropdown when click outside navRef
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdownKey(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    // Clean event listener when component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = (e, key) => {
    e.preventDefault(); // Prevent the browser reloading page due to the <a> tag
    setActiveDropdownKey((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <nav className="navbar" ref={navRef}>
      <ul className="nav-links">
        {Object.entries(navbarData).map(([key, value]) => {
          const hasChild = value.dropChild && value.dropChild.length > 0;
          const isOpen = activeDropdownKey === key;
          return (
            <li className="nav-item-container" key={key}>
              <a
                href=""
                className="nav-item"
                onClick={(e) => handleToggleDropdown(e, key)}
              >
                <span>{value.name}</span>
                {hasChild && (
                  <ChevronDown
                    className={`icon-chevron ${isOpen ? "open" : ""}`}
                  />
                )}
                <span className="divider"> </span>
              </a>
              {/* Render menu dropdown when isOpen = true */}
              {hasChild && (
                <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                  {value.dropChild.map((subItem, index) => (
                    <li key={index} className="dropdown-item">
                      <a href="">{subItem}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
