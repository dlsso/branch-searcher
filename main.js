// Create a test tree with a few branches
var tree = {
	color: "orange",
	branches: [
		{ color: "red", branches: [] },
		{ color: "orange", branches: [] },
		{ color: "yellow", branches: [] },
		{ color: "orange", branches: [
			{color: "orange", branches: []},
			{color: "yellow", branches: []}
		]}
	]
}



var findOrange = function(branch, depth){
	depth = depth || 0	// Set depth to 0 if not provided
	// Check if this branch is orange, print message and depth if so
	if(branch.color === "orange") {
		console.log("Found orange branch at depth " + depth + "." )
	}

	// increment depth so next search uses correct depth
	depth++

	// Loop through the next set of branches and call findOrange on each one
	for (var i = 0; i < branch.branches.length; i++) {
		findOrange(branch.branches[i], depth)
	}
}

findOrange(tree)