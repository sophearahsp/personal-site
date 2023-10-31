const GameLabDesc = () => {    
    return (
		<div className="grid grid-cols-2 py-4">
			<div className="space-y-2">
				<h1 className="text-2xl font-bold">
					{"The Third Law"}
				</h1>
				<p className="text-base font-semibold text-gray-400 tracking-widest">
					{"2021"}
				</p>
			</div>
			<div>
				<p className="text-base font-medium text-gray-500">
					{"Multiplayer co-op puzzle game that challenges players to maneuver asteroids through the environment using gravitational forces to sling themselves across the galaxy. Entry for the "}
					<a href="https://montreal.ubisoft.com/en/our-commitments/education/game-lab-competition/">Ubisoft Game Lab Competition 2021</a>.
				</p>
			</div>
		</div>
	)
}

export default GameLabDesc;