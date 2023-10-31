const ApprenticeDesc = () => {    
    return (
		<div className="grid grid-cols-2 py-4">
			<div className="space-y-2">
				<h1 className="text-2xl font-bold">
					{"Apprentice"}
				</h1>
				<p className="text-base font-semibold text-gray-400 tracking-widest">
					{"2023 - PRESENT"}
				</p>
			</div>
			<div>
				<p className="text-base font-medium text-gray-500">
					{"LLM-assisted instructional writing platform focused on programming tutorials. Developing tool as a case study to analyze design guidelines for LLM and user interaction at the "}
					<a style={{textDecoration: 'underline'}} href="https://www.cs.mcgill.ca/~jguo/lab.html">McGill Software Technology Lab</a>.
				</p>
			</div>
		</div>
	)
}

export default ApprenticeDesc;