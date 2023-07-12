function methCramer() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let d = document.getElementById("d").value;
    let e = document.getElementById("e").value;
    let f = document.getElementById("f").value;
    let g = document.getElementById("g").value;
    let h = document.getElementById("h").value;
    let i = document.getElementById("i").value;
    let j = document.getElementById("j").value;
    let k = document.getElementById("k").value;
    let l = document.getElementById("l").value;

    // calculer de  determinant principal
    let detA = a * ((e * i) - (f * h)) - b * ((d * i) - (f * g)) + c * ((d * h) - (e * g));

    if (a == "" || b == "" || c == "" || d == "" ||
        e == "" || f == "" || g == "" || h == "" ||
        i == "" || j == "" || k == "" || l == "") {
        document.getElementById("msg-error").style.display = "block";
        document.getElementById("no-solution").style.display = "none";
        document.getElementById("solution").style.display = "none";
        return;
    }

    if (detA == 0) {
        document.getElementById("no-solution").style.display = "block";
        document.getElementById("msg-error").style.display = "none";
        document.getElementById("solution").style.display = "none";
    }

    else {
        let detX = j * ((e * i) - (f * h)) - b * ((k * i) - (f * l)) + c * ((k * h) - (e * l));
        let detY = a * ((k * i) - (f * l)) - j * ((d * i) - (f * g)) + c * ((d * l) - (k * g));
        let detZ = a * ((e * l) - (k * h)) - b * ((d * l) - (k * g)) + j * ((d * h) - (e * g));

        let solX = detX / detA;
        let solY = detY / detA;
        let solZ = detZ / detA;
        document.getElementById("detA").value = detA;
        document.getElementById("detX").value = detX;
        document.getElementById("detY").value = detY;
        document.getElementById("detZ").value = detZ;
        document.getElementById("solX").value = solX;
        document.getElementById("solY").value = solY;
        document.getElementById("solZ").value = solZ;
        document.getElementById("solution").style.display = "block";
        document.getElementById("no-solution").style.display = "none";
        document.getElementById("msg-error").style.display = "none";
    }

}
function cancel() {
    document.getElementById("solution").style.display = "none";
    document.getElementById("no-solution").style.display = "none";
    document.getElementById("msg-error").style.display = "none";
}