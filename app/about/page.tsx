/*
  External dependencies
*/
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

/*
Internal dependencies
*/
import { lora } from "../fonts";
import Card from "@/components/card";

export const metadata: Metadata = {
	title: "About",
	description: "Frontend Developer and UI Designer.",
};

export default function AboutPage() {
	return (
		<>
			<div className='relative w-full min-h-screen bg-white z-10'>
				<section className='py-24 lg:pt-44 lg:pb-28 | max-w-7xl mx-auto'>
					<div className='grid lg:grid-cols-[1fr_200px] gap-12'>
						<div className='text-black prose'>
							<h1 className='text-3xl'>
								<span
									className={clsx(
										lora.className,
										"font-normal",
									)}
								>
									Hello! My name is
								</span>{" "}
								Faiz Ichsan Jaya
							</h1>
							<h2
								className={clsx(
									lora.className,
									"text-2xl lg:text-3xl mb-3 font-normal",
								)}
							>
								A{" "}
								<strong className='underline'>
									front-end web developer
								</strong>
								, passionate about building{" "}
								<span className='underline text-green-600'>
									good designs
								</span>{" "}
								and apps that is accessible to everyone.
							</h2>
							<p className='text-gray-700'>
								As a developer & design enthusiast, I'm all
								about crafting remarkable, high-quality designs.
								I truly believe that design can transform and
								enhance our surroundings. I'm currently diving
								deeper into UX design and accessibility.
							</p>
							<p className='text-gray-700'>
								The name Fukuo comes from Fukuoka — Japan's 6th
								largest city. I decided to choose this username
								because it’s short and rather easy to remember
								and it's been a part of my identity on the
								internet.
							</p>
							<p className='text-sm text-gray-700'>
								I currently work at SoftwareSeni as a Front End
								Developer and I code (for fun), read, and draw
								in my free time to relieve my stress. My career
								started when I discovered the Tumblr theme
								community where I make free pre-build Tumblr
								themes for public use when I was 13 years old so
								it’s been a while since I’ve been into web
								design and development.
							</p>
						</div>
						<div className='text-black prose'>
							<h3>Areas of expertise</h3>
							<ul className='m-0 p-0 pl-3 text-sm text-gray-600'>
								<li className='m-0'>UI/UX Design</li>
								<li className='m-0'>HTML, CSS, JavaScript</li>
							</ul>
						</div>
					</div>
					<div className='mt-24 flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8'>
						<p className='flex-grow-0 flex-shrink-0 text-[32px] text-left'>
							Work Experience
						</p>

						<div className='min-h-[700px] flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded bg-white border border-[#b9b9b9]'>
							<div className='grid grid-cols-[repeat(16,minmax(0,1fr))] self-stretch flex-grow overflow-hidden bg-white/0'>
								<div className='row-span-full  flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 bg-black/[0.06] border-t border-r-0 border-b-0 border-l border-[#b9b9b9]'>
									<div className='flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2.5'>
										<p className='flex-grow w-[34px] text-[15px] font-medium text-center text-black'>
											2012
										</p>
									</div>
								</div>
								<div className='row-span-full  flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 bg-black/[0.06] border-t border-r-0 border-b-0 border-l border-[#b9b9b9]'>
									<div className='flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2.5'>
										<p className='flex-grow w-[45px] text-[15px] text-center text-black'>
											2013
										</p>
									</div>
								</div>
								<div className='row-span-full  flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 bg-black/[0.06] border-t border-r-0 border-b-0 border-l border-[#b9b9b9]'>
									<div className='flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2.5'>
										<p className='flex-grow w-[46px] text-[15px] font-medium text-center text-black'>
											2014
										</p>
									</div>
								</div>
								<div className='row-span-full  flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 bg-black/[0.06] border-t border-r-0 border-b-0 border-l border-[#b9b9b9]'>
									<div className='flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2.5'>
										<p className='flex-grow w-[46px] text-[15px] font-medium text-center text-black'>
											2015
										</p>
									</div>
								</div>
								<div className='row-span-full  flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 bg-black/[0.06] border-t border-r-0 border-b-0 border-l border-[#b9b9b9]'>
									<div className='flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2.5'>
										<p className='flex-grow w-[46px] text-[15px] font-medium text-center text-black'>
											2016
										</p>
									</div>
								</div>
								<div className='row-span-full  flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 bg-black/[0.06] border-t border-r-0 border-b-0 border-l border-[#b9b9b9]'>
									<div className='flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2.5'>
										<p className='flex-grow w-[45px] text-[15px] font-medium text-center text-black'>
											2017
										</p>
									</div>
								</div>
								<div className='row-span-full  flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0  bg-black/[0.06] border-t border-r-0 border-b-0 border-l border-[#b9b9b9]'>
									<div className='flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2.5'>
										<p className='flex-grow w-[46px] text-[15px] font-medium text-center text-black'>
											2018
										</p>
									</div>
								</div>
								<div className='row-span-full col-span-5 flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 bg-black/[0.06] border-t border-r-0 border-b-0 border-l border-[#b9b9b9]'>
									<div className='flex justify-start items-start self-stretch flex-grow relative overflow-hidden px-3 py-2.5'>
										<p className='flex-grow w-[194px] text-[15px] font-medium text-center text-black'>
											2019
										</p>
									</div>
								</div>
								<div className='row-span-full  flex flex-col justify-start items-start self-stretch flex-grow bg-black/[0.06] border-t border-r-0 border-b-0 border-l border-[#b9b9b9]'>
									<div className='flex justify-start items-start self-stretch flex-grow relative overflow-hidden px-3 py-2.5'>
										<p className='flex-grow w-[132.5px] text-[15px] font-medium text-center text-black'>
											2020
										</p>
									</div>
								</div>
								<div className='row-span-full  flex flex-col justify-start items-start self-stretch flex-grow bg-black/[0.06] border-t border-r-0 border-b-0 border-l border-[#b9b9b9]'>
									<div className='flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2.5'>
										<p className='flex-grow w-[132.5px] text-[15px] font-medium text-center text-black'>
											2021
										</p>
									</div>
								</div>
								<div className='row-span-full  flex flex-col justify-start items-start self-stretch flex-grow bg-black/[0.06] border-t border-r-0 border-b-0 border-l border-[#b9b9b9]'>
									<div className='flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2.5'>
										<p className='flex-grow w-[132.5px] text-[15px] font-medium text-center text-black'>
											2022
										</p>
									</div>
								</div>
								<div className='row-span-full  flex flex-col justify-start items-start self-stretch flex-grow bg-black/[0.06] border-t border-r-0 border-b-0 border-l border-[#b9b9b9]'>
									<div className='flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2.5'>
										<p className='flex-grow w-[132.5px] text-[15px] font-medium text-center text-black'>
											Present
										</p>
									</div>
								</div>
							</div>

							<div className='grid grid-cols-[repeat(16,minmax(0,1fr))] gap-4 grid-rows-[repeat(16,minmax(0,1fr))] | absolute left-0 top-0 w-full h-full | p-5'>
								{/* Experience */}

								<div className='row-start-2 row-end-6 | col-span-full flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-3 rounded-lg bg-[#e2ffb6] border border-[#a2c869]'>
									<div className='flex justify-start items-start self-stretch flex-grow relative gap-2.5'>
										<div className='self-stretch flex-grow-0 flex-shrink-0 w-[5px] h-full relative overflow-hidden rounded-[40px] bg-[#a2c869]' />
										<div className='flex flex-col justify-start items-start flex-grow relative gap-1.5'>
											<p className='flex-grow-0 flex-shrink-0  text-[13px] font-medium text-left text-[#111118]/[0.65]'>
												Web Developer, Freelance
											</p>
											<p className='flex-grow-0 flex-shrink-0  text-[13px] font-medium text-left text-[#111118]'>
												Self-employed
											</p>
											<p className='self-stretch flex-grow-0 flex-shrink-0  w-full text-[13px] text-left text-[#333]'>
												<span className='self-stretch flex-grow-0 flex-shrink-0  w-full  text-[13px] text-left text-[#333]'>
													Design and build layouts
													using HTML, CSS, JavaScript,
													and Tumblr-specific blocks
													and variables
												</span>
												<br />
												<span className='self-stretch flex-grow-0 flex-shrink-0  w-full  text-[13px] text-left text-[#333]'>
													Use provided briefs to guide
													the design process, ensuring
													that the final product meets
													the client's needs and
													specifications
												</span>
												<br />
												<span className='self-stretch flex-grow-0 flex-shrink-0  w-full  text-[13px] text-left text-[#333]'>
													Perform maintenance and
													provide support to clients
												</span>
											</p>
										</div>
									</div>
								</div>

								<div className='row-start-6 row-end-[9] | col-start-8 col-end-13 flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-3 rounded-lg bg-[#ffdac9] border border-[#f5812c]'>
									<div className='flex justify-start items-start self-stretch flex-grow relative gap-2.5'>
										<div className='self-stretch flex-grow-0 flex-shrink-0 w-[5px] h-full relative overflow-hidden rounded-[40px] bg-[#f5812c]' />
										<div className='flex flex-col justify-start items-start flex-grow relative gap-1.5'>
											<p className='self-stretch flex-grow-0 flex-shrink-0  w-full text-sm font-medium text-left text-[#111118]/[0.65]'>
												Frontend Developer &amp; UI
												Designer, Contract
											</p>
											<p className='self-stretch flex-grow-0 flex-shrink-0  w-full text-[13px] font-medium text-left text-[#111118]'>
												GMOOC (Gamified Massive Open
												Courses){" "}
											</p>
											<p className='self-stretch flex-grow-0 flex-shrink-0  w-full  text-[13px] text-left text-[#222]'>
												Designed and built raw HTML,
												JavaScript (JS) and CSS &amp;
												implemented UI/UX
											</p>
										</div>
									</div>
								</div>

								<div className='row-start-[9] row-end-[14] | col-start-9 col-end-[-1] flex justify-start items-start flex-grow-0 flex-shrink-0 w-full overflow-hidden gap-2.5 p-3 rounded-lg bg-[#ace0f9] border border-[#00b8ff]'>
									<div className='flex justify-start items-start self-stretch flex-grow relative gap-2.5'>
										<div className='self-stretch flex-grow-0 flex-shrink-0 w-[5px] h-full relative overflow-hidden rounded-[40px] bg-[#00b8ff]' />
										<div className='flex flex-col justify-start items-start flex-grow relative gap-1.5'>
											<p className='flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#111118]/[0.65]'>
												Front End Developer, Full-time
											</p>
											<p className='flex-grow-0 flex-shrink-0  text-[13px] font-medium text-left text-[#111118]'>
												SoftwareSeni
											</p>
											<p className='self-stretch flex-grow-0 flex-shrink-0  w-full  text-[13px] text-left text-[#222]'>
												<span className='self-stretch flex-grow-0 flex-shrink-0  w-full  text-[13px] text-left text-[#222]'>
													Build the client-side code
													for polished web
													applications using HTML,
													CSS/SCSS, PHP, and
													JavaScript (primarily
													WordPress and hybrid
													websites)
												</span>
												<br />
												<span className='self-stretch flex-grow-0 flex-shrink-0  w-full  text-[13px] text-left text-[#222]'>
													Manage the development and
													maintenance of applications,
													ensuring that they function
													smoothly and meet the needs
													of clients
												</span>
												<br />
												<span className='self-stretch flex-grow-0 flex-shrink-0  w-full  text-[13px] text-left text-[#222]'>
													Responsible for the core
													repository of a widely used
													WordPress plugin and themes,
													ensuring error-free
													functionality and optimal
													performance
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
