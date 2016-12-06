var loggin = prompt('Enter loggin');

if (loggin=='admin') {
  
  var password = prompt('Enter password');
	if (password==='passw0rd') {
      alert('Welcome home!');
    } else if (password===null){
      alert('Canceled');
    } else {
      alert('Wrong password');
    }

} else if (loggin==null) {
   alert('Canceled');
} else {
   alert('Access denied');
}



