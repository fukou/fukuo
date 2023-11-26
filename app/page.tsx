/*
  External dependencies
*/
import Link from "next/link";
import Card from "@/components/card";
import clsx from "clsx";
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

/*
Internal dependencies
*/
import { ptSerif, lora } from "./fonts";

// Mockup data
const projectDummy = {
	projects: [
		{
			title: "Project 1",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			summary: "A brief summary of Project 1.",
			year: "2022", // Changed to a string
			status: "Active",
			image: "project1.jpg",
			imageAlt: "Project 1 Image",
		},
		{
			title: "Project 2",
			description:
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
			summary: "A brief summary of Project 2.",
			year: "2021", // Changed to a string
			status: "Inactive",
			image: "project2.jpg",
			imageAlt: "Project 2 Image",
		},
		{
			title: "Project 3",
			description:
				"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			summary: "A brief summary of Project 3.",
			year: "2023", // Changed to a string
			status: "Active",
			image: "project3.jpg",
			imageAlt: "Project 3 Image",
		},
		// Add more projects as needed
	],
};

export default function Home() {
	return (
		<>
			<div className='relative w-full min-h-screen bg-white z-10'>
				<main className='py-24 lg:pt-44 lg:pb-28 px-5 lg:px-24 | max-w-4xl mx-auto'>
					<h1 className='mb-1 text-sm'>Hey! My name is Faiz.</h1>
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
						<span className='text-green-600'>
							good designs
						</span>{" "}
						and apps that is accessible to everyone.
					</h2>
					<p className='text-sm text-gray-700 lg:text-base'>
						As a developer & design enthusiast, I'm all about
						crafting remarkable, high-quality designs. I truly
						believe that design can transform and enhance our
						surroundings. I'm currently diving deeper into UX design
						and accessibility.
					</p>
					<div className='flex items-center gap-2 mt-5 text-xs lg:text-sm text-gray-500'>
						<div className='w-4 h-4 bg-red-500 rounded-full'></div>{" "}
						Currently not available for freelance work
					</div>
				</main>

				<div className='relative max-w-7xl mx-3 lg:mx-auto | grid lg:grid-cols-[245px_1fr] gap-12 py-24 lg:pt-[45px] lg:pb-[65px] border-t border-r-0 border-b border-l-0 border-black'>
					<div className='sticky top-0 | flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6 lg:pr-9 border-t-0 lg:border-r border-b-0 border-l-0 border-black'>
						<h4
							className={clsx(
								lora.className,
								"flex-grow-0 flex-shrink-0 text-2xl text-left text-black",
							)}
						>
							Selected work
						</h4>
						<button className='flex flex-col lg:flex-row justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 py-[9px] rounded-lg border border-black'>
							<span className='flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black'>
								View all
							</span>
						</button>
					</div>

					<div className='flex flex-col justify-start items-start flex-grow w-full'>
						{projectDummy.projects.map((project, index) => (
							<Card
								key={index}
								title={project.title}
								imageSrc={`/`}
								imageAlt={project.imageAlt}
								description={project.description}
								year={project.year}
								link={`/projects/`}
								summary={project.summary}
								status={project.status}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
