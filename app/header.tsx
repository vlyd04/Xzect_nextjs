import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/images/logo.webp";

import "./globals.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <Image src={logo} alt="logo pic" />
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about" passHref>
              About
            </Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/blog">News</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
