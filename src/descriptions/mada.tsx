const MadaDesc = () => {    
    return (
		<div className="grid grid-cols-2 py-4">
			<div className="space-y-2">
				<h1 className="text-2xl font-bold">
					{"Mada"}
				</h1>
				<p className="text-base font-semibold text-gray-400 tracking-widest">
					{"2022 - PRESENT"}
				</p>
			</div>
			<div>
				<p className="text-base font-medium text-gray-500">
					{"Platform facilitating management of local free meal delivery service for elderly and disabled individuals. Collaboration between "}
					<a href="https://mcgill.hack4impact.org/">Hack4Impact McGill</a> and <a href="https://www.madacentre.com/">Mada Community Centre</a>.
				</p>
			</div>
		</div>
	)
}

export default MadaDesc;