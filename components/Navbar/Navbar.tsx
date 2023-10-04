"use client";
import { CgClose } from "react-icons/cg";
import { CgMenuLeftAlt } from "react-icons/cg";
import React, { useEffect, useRef, useState } from "react";
import NavLink from "./NavLink";
import { FaQuran } from "react-icons/fa";
import Button from "../UI/Button";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [navLinksHeight, setNavLinksHeight] = useState(0);
	const linksRef = useRef<HTMLUListElement>(null);

	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

	useEffect(() => {
		if (linksRef.current != undefined) {
			setNavLinksHeight(linksRef.current?.offsetHeight);
		}
	}, [linksRef.current?.offsetHeight]);

	return (
		<>
			<nav className="relative  container mx-auto h-[70px] flex justify-between items-center rounded-md px-[1rem] md:px-[5rem] z-10 text-white">
				<Link href="/" className="font-CinzelDecorative">
					
				<Button text="Qaaru Xiraa"  icon={<FaQuran size={25} />} />

				</Link>

				<Button
					text=""
					icon={
						isMenuOpen ? <CgClose size={25} /> : <CgMenuLeftAlt size={25} />
					}
					onclick={() => setIsMenuOpen(!isMenuOpen)}
					customStyles="visible md:hidden"
				/>
				<ul
					ref={linksRef}
					className={`flex  items-center gap-4 ${
						isMenuOpen
							? `absolute w-full h-[${navLinksHeight}] left-0 top-[70px] flex-col  items-center [&>a]:w-full bg-white text-primary   rounded-md z-0`
							: "hidden"
					} md:flex transition`}
				>
					<NavLink
						linkName="Home"
						link="/"
						
					/>
					<NavLink
						linkName="About"
						link="about"
						
					/>
					<NavLink
						linkName="Contact Us"
						link="ContactUs"
					/>
					<Button
					text="Sign in"
					customStyles="bg-Secondary !text-white   shadow-sm"
					
				/>
				</ul>
				
			</nav>
		</>
	);
};

export default Navbar;
