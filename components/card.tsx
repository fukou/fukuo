/*
  External dependencies
*/
import Image from "next/image";
import Link from "next/link";
import clsx from 'clsx';

/*
Internal dependencies
*/
import { ptSerif } from "../app/fonts";

interface Props {
	title: string;
	imageSrc: string;
	imageAlt: string;
	summary: string;
	description: string;
	year: string;
	status: string;
	link: string;
}

/*
    @see https://felixgerschau.com/react-typescript-components/
*/
const Card: React.FC<Props> = ({
	title,
	imageSrc,
	imageAlt,
	summary,
	description,
	year,
	status,
	link,
}) => {
	return (
		<div className='flex flex-col lg:flex-row justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-9 pb-6 lg:pb-12 mb-12 border-t-0 border-r-0 border-b border-l-0 border-black'>
			<div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4'>
				<time
					className={clsx(
						ptSerif.className,
						"flex-grow-0 flex-shrink-0 w-100 lg:w-[200px] text-2xl text-left text-black",
					)}
				>
					{year}
				</time>
				<p className='flex-grow-0 flex-shrink-0 w-100 lg:w-[250px] text-sm text-left text-[#444]'>
					{summary}
				</p>
			</div>
			<div className='flex flex-col justify-end items-start flex-grow w-full h-[350px] relative overflow-hidden gap-4 py-4 rounded-lg bg-[#ddd] border border-black/20'>
				<div className='flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2 px-4'>
					<div className='flex flex-col lg:flex-row justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-6'>
						<svg
							width='36'
							height='38'
							viewBox='0 0 36 38'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='flex-grow-0 flex-shrink-0'
							preserveAspectRatio='none'
						>
							<path
								d='M18 0L20.234 12.0978L29.1246 3.62868L23.8486 14.7342L36 13.1287L25.2292 19L36 24.8713L23.8486 23.2658L29.1246 34.3713L20.234 25.9022L18 38L15.7661 25.9022L6.87539 34.3713L12.1514 23.2658L0 24.8713L10.7708 19L0 13.1287L12.1514 14.7342L6.87539 3.62868L15.7661 12.0978L18 0Z'
								fill='#ACE0F9'
							></path>
						</svg>
						<div className='flex flex-col justify-center items-start self-stretch flex-grow relative gap-1'>
							<div className='flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5'>
								<p className='flex-grow w-full text-xl font-medium text-left text-white'>
									{title}
								</p>
							</div>
							<p className='self-stretch flex-grow-0 flex-shrink-0 w-full text-[13px] text-left text-white'>
								{description}
							</p>
						</div>
					</div>
				</div>
				<div className='flex justify-start items-start flex-grow-0 flex-shrink-0 absolute left-4 top-[15px] gap-2.5 px-3 py-[6px] rounded-lg bg-[#444]'>
					<p className='flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white text-[12px]'>
						{status}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
