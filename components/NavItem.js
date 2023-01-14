import React from "react";

export default function NavItem({ children }) {
  return (
    <li>
      <a className="text-white text-lg text-opacity-50 font-semibold">
        {children}
      </a>
    </li>
  );
}
