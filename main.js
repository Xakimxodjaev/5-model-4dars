let name = prompt("ismingizni kiriting ")
let xarf = prompt("harf kiriting ")


if (name.includes(xarf)) {
    alert(name + " ismida " + xarf + " harfi mavjud");
}
else {
    alert(name + " ismida " + xarf + " harfi mavjud emas");
}