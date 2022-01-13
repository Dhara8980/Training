str = "";
var n = 5;
for (i = -n + 1; i <= n - 1; i++) {
    if (i == 0) {
        continue;
    }
    for (j = -n + 1; j <= n - 1; j++) {
        if (j == 0) {
            continue;
        }
        if (Math.abs(i) + Math.abs(j) <= n) {
            str += "@"
        }
        else {
            str += "-";
        }

    }
    str += "\n";
}
console.log(str);