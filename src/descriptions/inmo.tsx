const InmoDesc = () => {    
    return (
		<div className="grid grid-cols-2 py-4">
			<div className="space-y-2">
				<h1 className="text-2xl font-bold">
					{"Inmo AI"}
				</h1>
				<p className="text-base font-semibold text-gray-400 tracking-widest">
					{"2023"}
				</p>
			</div>
			<div>
				<p className="text-base font-medium text-gray-500">
					{"Long-form content generation platform emphasizing generation precision, flexibility, and accuracy to combat AI "}
					<a style={{textDecoration: 'underline'}} href="https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)">hallucinations</a>
					{" which limit the use of LLMs in corporate settings."}
				</p>
			</div>
		</div>
	)
}

export default InmoDesc;