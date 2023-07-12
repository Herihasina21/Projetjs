function secondDegree() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let delta = (b * b) - (4 * a * c);
    let rac = Math.sqrt(delta)

    if (a == "" || b == "" || c == "") {
        document.getElementById("msg-error").style.display = "block";
        document.getElementById("msg-error-x2").style.display = "none";
        document.getElementById("no-solution").style.display = "none";
        document.getElementById("one-solution").style.display = "none";
        document.getElementById("double-solution").style.display = "none";
        return;
    }

    if (a == 0) {
        document.getElementById("msg-error-x2").style.display = "block";
        document.getElementById("msg-error").style.display = "none";
        document.getElementById("no-solution").style.display = "none";
        document.getElementById("one-solution").style.display = "none";
        document.getElementById("double-solution").style.display = "none";
        return
    }

    if (a != 0) {
        document.getElementById("msg-error").style.display = "none";
        document.getElementById("msg-error-x2").style.display = "none";
        if (delta < 0) {
            document.getElementById("no-solution").style.display = "block";
            document.getElementById("one-solution").style.display = "none";
            document.getElementById("double-solution").style.display = "none";
        }
        else if (delta == 0) {
            let X = -b / (2 * a);
            document.getElementById("sol").value = X;
            document.getElementById("one-solution").style.display = "block";
            document.getElementById("no-solution").style.display = "none";
            document.getElementById("double-solution").style.display = "none";

        }
        else {
            let X1 = (-b - rac) / (2 * a);
            let X2 = (-b + rac) / (2 * a);
            document.getElementById("sol1").value = X1;
            document.getElementById("sol2").value = X2;
            document.getElementById("double-solution").style.display = "block";
            document.getElementById("no-solution").style.display = "none";
            document.getElementById("one-solution").style.display = "none";
        }
    }

}
function cancel() {
    document.getElementById("msg-error-x2").style.display = "none";
    document.getElementById("msg-error").style.display = "none";
    document.getElementById("no-solution").style.display = "none";
    document.getElementById("one-solution").style.display = "none";
    document.getElementById("double-solution").style.display = "none";
}