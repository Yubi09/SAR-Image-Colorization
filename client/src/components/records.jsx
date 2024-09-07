const Records = ({ date, input_image, output_image }) => {
	console.log(input_image);
	return (
		<div className="max-w-5xl mb-6 rounded-lg shadow-lg overflow-hidden bg-purple-400">
			<div className="p-6 bg-indigo-100">
				<h2 className="text-2xl font-bold text-gray-800 mb-2">
					Date: {date.toString().slice(0, 10)}
				</h2>
				<img
					src={input_image}
					alt="Input_image"
					className="w-full h-auto object-cover mb-4"
				/>
				<img
					src={output_image}
					alt="Output_image"
					className="w-full h-auto object-cover"
				/>
			</div>
		</div>
	);
};

export default Records;
