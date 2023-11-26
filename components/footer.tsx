// this is a client component
"use client";

/*
  External dependencies
*/
import clsx from "clsx";
import dynamic from "next/dynamic";
import Link from "next/link";

/*
Internal dependencies
*/
import { lora } from "../app/fonts";

const Clock = dynamic(() => import("./clock"), { ssr: false });

export default function Footer() {
	return (
		<footer className='max-w-7xl mx-auto | flex flex-col lg:flex-row justify-start items-start self-stretch flex-grow-0 flex-shrink-0 px-3 lg:px-0 gap-12 pt-12 pb-14 | sticky bottom-0'>
			<div className='flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-1/2 lg:w-[245px] relative gap-6 lg:pr-9'>
				<p
					className={clsx(
						lora.className,
						"flex-grow-0 flex-shrink-0 text-2xl text-left text-black",
					)}
				>
					Connect
				</p>
				<div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-full gap-1.5'>
					<div className='flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[3px] py-1.5 rounded-lg'>
						<p className='flex-grow-0 flex-shrink-0 text-base text-left text-[#555]'>
							Email
						</p>
						<p className='flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]'>
							faizichsanj@gmail.com
						</p>
					</div>
					<div className='flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[3px] py-1.5 rounded-lg'>
						<p className='flex-grow-0 flex-shrink-0 text-base text-left text-[#555]'>
							VSCO
						</p>
						<p className='flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]'>
							@fukuo
						</p>
					</div>
					<div className='flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[3px] py-1.5 rounded-lg'>
						<p className='flex-grow-0 flex-shrink-0 text-base text-left text-[#555]'>
							Github
						</p>
						<p className='flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]'>
							@fukou
						</p>
					</div>
					<div className='flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[3px] py-1.5 rounded-lg'>
						<p className='flex-grow-0 flex-shrink-0 text-base text-left text-[#555]'>
							Read.CV
						</p>
						<p className='flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]'>
							@fukuo
						</p>
					</div>
				</div>
			</div>
			<div className='flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-1/2 lg:w-[245px] relative gap-6 lg:pr-9'>
				<p
					className={clsx(
						lora.className,
						"flex-grow-0 flex-shrink-0 text-2xl text-left text-black",
					)}
				>
					Explore
				</p>
				<div className='flex justify-start items-start flex-grow-0 flex-shrink-0 w-full'>
					<div className='flex flex-col justify-start items-start flex-grow'>
						<div className='flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[3px] py-1.5 rounded-lg'>
							<p className='flex-grow-0 flex-shrink-0 text-base text-left text-[#555]'>
								Home
							</p>
							<p className='flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]'>
								/home
							</p>
						</div>
						<div className='flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[3px] py-1.5 rounded-lg'>
							<p className='flex-grow-0 flex-shrink-0 text-base text-left text-[#555]'>
								About
							</p>
							<p className='flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]'>
								/about
							</p>
						</div>
						<div className='flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[3px] py-1.5 rounded-lg'>
							<p className='flex-grow-0 flex-shrink-0 text-base text-left text-[#555]'>
								Projects
							</p>
							<p className='flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]'>
								/projects
							</p>
						</div>
					</div>
					<div className='flex flex-col justify-start items-start flex-grow'>
						<div className='flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[3px] py-1.5 rounded-lg'>
							<p className='flex-grow-0 flex-shrink-0 text-base text-left text-[#555]'>
								Resume
							</p>
							<p className='flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]'>
								/resume
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col lg:justify-end lg:items-end self-stretch flex-grow relative gap-6'>
				<div className='flex flex-col lg:justify-end lg:items-end self-stretch flex-grow-0 flex-shrink-0 relative'>
					<p className='flex-grow-0 flex-shrink-0 text-[64px] font-medium text-left text-black'>
						🌏
					</p>
					<div className='self-stretch flex-grow-0 flex-shrink-0 w-full h-8 relative overflow-hidden' />
					<p className='flex-grow-0 flex-shrink-0'>
						<Clock />
					</p>
					<p
						className={clsx(
							lora.className,
							"flex-grow-0 flex-shrink-0 text-4xl text-left text-black",
						)}
					>
						<span className='flex items-center gap-3'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								shapeRendering='geometricPrecision'
								textRendering='geometricPrecision'
								imageRendering='optimizeQuality'
								fillRule='evenodd'
								clipRule='evenodd'
								viewBox='0 0 46.35 32.3'
								className='w-11 h-11 mt-1.5'
							>
								<g fillRule='nonzero'>
									<path
										fill='#fff'
										stroke='#aaa'
										strokeWidth='1'
										strokeMiterlimit='2.613'
										d='M2.63.09h41.09c1.39 0 2.53 1.15 2.53 2.54v27.04c0 1.39-1.13 2.53-2.52 2.54H2.61a2.553 2.553 0 0 1-2.52-2.54V2.63C.09 1.24 1.24.09 2.63.09z'
									/>
									<path
										fill='red'
										d='M2.72.18h40.91c1.44-.04 2.53 1.1 2.53 2.54v13.43H.18V2.72C.18 1.28 1.27.14 2.72.18z'
									/>
								</g>
							</svg>
							Yogyakarta, Indonesia
						</span>
					</p>
				</div>
				<p className='flex-grow-0 flex-shrink-0 text-base text-left text-black'>
					© 2023 Faiz Ichsan Jaya
				</p>
			</div>
		</footer>
	);
}
