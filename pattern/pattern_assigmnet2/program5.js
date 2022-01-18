var str = "";
var n = 5;

for (i = -6; i <= 6; i++) {
    for (j = -6; j <= 6; j++) {
        if ((Math.abs(i) == 6 || Math.abs(j) == 6)) {
            str += "o";
        }
        else if (Math.abs(i) - Math.abs(j) >= 0) {
            if ((i < 0 && j > 0) || (i > 0 && j < 0)) {
                str += Math.abs(i)-Math.abs(j)+1;
            }
            else{
                // str += "*";
                str+=String.fromCharCode(Math.abs(i)-Math.abs(j)+97)

            }
        }

        else {
            str += "-";
        }
    }
    str += "\n";
}
console.log(str);
