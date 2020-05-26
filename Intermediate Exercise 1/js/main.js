let studentGrades = [
	["Martin", 76],
	["Thomas", 85],
	["Klaus", 65],
	["Maria", 93],
	["David", 81],
];

for (let student of studentGrades) {
	if (student[1] < 60) {
		document.write(`${student[0]}: F`);
	} else if (student[1] < 70) {
		document.write(`${student[0]}: D`);
	} else if (student[1] < 80) {
		document.write(`${student[0]}: C`);
	} else if (student[1] < 90) {
		document.write(`${student[0]}: B`);
	} else if (student[1] < 100) {
		document.write(`${student[0]}: A`);
	}

	document.write("<br>");
}
