// this is a client component
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
	const currentRoute = usePathname();

	// styles for all links
	const linkStyle =
		"flex items-center inline-flex items-center mr-2 p-3 h-full rounded-md no-underline hover:text-white hover:bg-gray-900 duration-300 | text-sm";

	// styles for active and non-active links
	const activeStyle = linkStyle + " text-white bg-gray-900";
	const nonActiveStyle = linkStyle + " text-black";
	
	return (
		<header className='flex items-center justify-between | max-w-7xl p-4 pr-2 | bg-white shadow-lg border border-gray-200 lg:rounded-lg | mt-12 mx-auto z-10'>
			<span className='hidden lg:block font-bold px-2'>⁂</span>
			<nav className='flex items-center'>
				<Link
					href='/'
					className={
						currentRoute === "/" ? activeStyle : nonActiveStyle
					}
				>
					Home
				</Link>
				<Link
					href='/about'
					className={
						currentRoute === "/about" ? activeStyle : nonActiveStyle
					}
				>
					About
				</Link>
				<Link
					href='/projects'
					className={
						currentRoute === "/projects"
							? activeStyle
							: nonActiveStyle
					}
				>
					Projects
				</Link>
				<a href="/resume" className={linkStyle}>
					Resume
				</a>
			</nav>
		</header>
	);
}
