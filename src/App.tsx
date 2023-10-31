import {useRef} from 'react';
import {ArrowDownIcon, ArrowUpIcon, GithubIcon, EmailIcon, LinkedinIcon} from './icons';
import {ApprenticeDesc, CutResearchDesc, GameLabDesc, InmoDesc, MadaDesc} from './descriptions';

export default function App() {
	const refDown = useRef<HTMLDivElement>(null);
	const refUp = useRef<HTMLDivElement>(null);

	const handleScrollDown = () => {
		refDown.current!.scrollIntoView({behavior: 'smooth'});
	};

	const handleScrollUp = () => {
		refUp.current!.scrollIntoView({behavior: 'smooth'});
	};

	return (
		<div>
			<div className="flex flex-col h-screen" ref={refUp}>
				<div className="mx-40 m-auto space-y-10">
					<h1 className="text-6xl font-bold text-left leading-normal">
						sophearah builds user-centric products designed to solve real problems
					</h1>
					<div className="flex flex-row justify-between">
						<div className="flex flex-row space-x-4">
							<a target="_blank" href="https://www.linkedin.com/in/sophearah-suy-puth/" >
								<LinkedinIcon/>
							</a>
							<a target="_blank" href="https://github.com/sophearahsp/" >
								<GithubIcon/>
							</a>
							<a target="_blank" href="mailto:sophearahspsp@gmail.com" >
								<EmailIcon/>
							</a>
						</div>
						<h1 className="text-3xl font-bold">
							<button onClick={handleScrollDown}>
								works
							</button>
						</h1>
					</div>
				</div>
				<div className="flex flex-row justify-center my-16">
					<button onClick={handleScrollDown}>
						<ArrowDownIcon/>
					</button>
				</div>
			</div>
			<div className="flex flex-col h-screen">
				<div className="mx-40 space-y-8 py-20">
					<div className="space-y-4">
						<h1 className="text-2xl font-bold text-left text-gray-400 tracking-widest" ref={refDown}>
							works
						</h1>
					</div>
					<div className="flex flex-col space-y-4">
						<ApprenticeDesc/>
						<MadaDesc/>
						<InmoDesc/>
						<CutResearchDesc/>
						<GameLabDesc/>
					</div>
				</div>

				<div className="flex flex-row justify-center">
					<button onClick={handleScrollUp}>
						<ArrowUpIcon/>
					</button>
				</div>
			</div>
		</div>
	)
}