let fizz = 3;
let buzz = 5;


for (i=1;i<=100;i++){
	if (i%fizz==0 && i%buzz==0){
		document.write("FizzBuzz");
	}else if (i%fizz==0){
		document.write("Fizz");
	}else if (i%buzz==0){
		document.write("Buzz");
	}else {
		document.write(i);
	}
		document.write("<br>");
}

