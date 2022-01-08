function a() {
    function b() {
        console.log(myVar);
    }
	var myVar = 2;
	b();
}
a();
var myVar = 1;
