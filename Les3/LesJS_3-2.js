for (var i = 2; i <= 20; i++) {

for (var j = 2; ((j < i) && (i % j)); j++) {}

if (i == j) {
console.log(i);
}

}