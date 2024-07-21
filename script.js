//PASSAR DO INICO PRO FIM COM O ENTER
document.getElementById("txti").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.getElementById("txtf").focus();
  }
});

//PASSAR DO FIM PROS PASSOS COM O ENTER
document.getElementById("txtf").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.getElementById("txtp").focus();
  }
});

//EXECUTAR A CONTAGEM DOS PASSOS DIRETO COM O ENTER
document.getElementById("txtp").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    calcular();
  }
});

function calcular() {
  let inicio = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passos = document.getElementById("txtp");
  let res = document.getElementById("res");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passos.value.length == 0
  ) {
    res.innerHTML = "Impossível contar!";
    //alert("[ERRO] Faltam dados!");
  } else {
    res.innerHTML = `Contando de <strong>${inicio.value}</strong> até <strong>${fim.value}</strong> de <strong><spam style="color: red;">${passos.value}</spam></strong> em <strong><spam style="color: red;">${passos.value}</spam></strong>:<br>
    <spam> -----------------------------------------------------</spam><br>`;
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passos.value);
    if (p <= 0) {
      alert("Passo inválido! Considerando os PASSOS 1");
      p = 1;
    }

    if (i < f) {
      // CONTAGEM CRESCENTE
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c}`;
        if (c + p <= f) {
          res.innerHTML += `\u{1F449}`;
        }
      }
    } else if (i > f) {
      //CONTRAGEM REGRESSIVA
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c}`;
        if (c - p >= f) {
          res.innerHTML += `\u{1F449}`;
        }
      }
    }
    res.innerHTML += `\u{1F3c1}`;

    document.getElementById("txti").value = "";
    document.getElementById("txtf").value = "";
    document.getElementById("txtp").value = "";

    document.getElementById("txti").focus();
  }
}
