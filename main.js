function hollowtriangle(n) {
  for (let i=1; i<= n;i++) {
    if (i==1||i== n) {
      for (let j=1;j<=i;j++) {
        document.write("*");
      }
    } 
	else {
      for (let j=0;j<i;j++) {
        if (j==0||j==i-1) {
          document.write("*");
        } else {
          document.write("&nbsp &nbsp");
        }
      }
    }
    document.write("<br>");
  }
}
hollowtriangle(5);