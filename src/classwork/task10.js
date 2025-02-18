document.write("<h2>Multiplication Table (1-10)</h2>");
document.write("<table border='1' cellspacing='0' cellpadding='5'>");

for (let i = 1; i <= 10; i++) {
    document.write("<tr>");
    for (let j = 1; j <= 10; j++) {
        document.write(`<td>${i} × ${j} = ${i * j}</td>`);
    }
    document.write("</tr>");
}

document.write("</table>");