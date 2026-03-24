document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const query = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();
  if (!query) return;

  // Sahifa nomlari va ularning URL manzillari
  const pages = {
    aa: "aa.html",
    abdugani: "abdugani.html",
    abdumannop: "abdumannop.html",
    adolatmuborak: "adolatmuborak.html",
    adolatona: "adolatona.html",
    ahmadjon: "ahmadjon.html",
    anvarbirlik: "anvarbirlik.html",
    aql: "aql.html",
    ashirmat: "ashirmat.html",
    asomiddin: "asomiddin.html",
    asosi2: "asosi2.html",
    asosiy: "asosiy.html",
    asror: "asror.html",
    azizabirlik: "azizabirlik.html",
    azizashomuxtor: "azizashomuxtor.html",
    badal: "badal.html",
    bahrom: "bahrom.html",
    bahtiyor: "bahtiyor.html",
    bahtiyornasiba: "bahtiyornasiba.html",
    baxri: "baxri.html",
    baxrinisa: "baxrinisa.html",
    beknazar: "beknazar.html",
    bekzod: "bekzod.html",
    bikach: "bikach.html",
    bilol: "bilol.html",
    botirbek: "botirbek.html",
    dilafruz: "dilafruz.html",
    dildora: "dildora.html",
    dilfuza: "dilfuza.html",
    dilfuzamuqum: "dilfuzamuqum.html",
    dilmurod: "dilmurod.html",
    dilnoza: "dilnoza.html",
    dilora: "dilora.html",
    doniyor: "doniyor.html",
    doniyormuqum: "doniyormuqum.html",
    ergashali: "ergashali.html",
    farangiz: "farangiz.html",
    farhod: "farhod.html",
    farida: "farida.html",
    faridabirlik: "faridabirlik.html",
    feruza: "feruza.html",
    feruzamuqum: "feruzamuqum.html",
    fotimanisa: "fotimanisa.html",
    fotimashoabror: "fotimashoabror.html",
    fotimashoabror2: "fotimashoabror2.html",
    ibrohim: "ibrohim.html",
    ilyos: "ilyos.html",
    imron: "imron.html",
    inoqqori: "inoqqori.html",
    iroda: "iroda.html",
    iskandar: "iskandar.html",
    islom: "islom.html",
    ismoil: "ismoil.html",
    jafar: "jafar.html",
    jahongir: "jahongir.html",
    jalil: "jalil.html",
    jamol: "jamol.html",
    jamshid: "jamshid.html",
    jamshidbirlik: "jamshidbirlik.html",
    karim: "karim.html",
    komil: "komil.html",
    komol: "komol.html",
    komola: "komola.html",
    komolbek: "komolbek.html",
    komolbuva: "komolbuva.html",
    latofat: "latofat.html",
    lobar: "lobar.html",
    madina: "madina.html",
    mafura: "mafura.html",
    mahina: "mahina.html",
    mahmud: "mahmud.html",
    maktuba: "maktuba.html",
    malika: "malika.html",
    manzura: "manzura.html",
    marhabo: "marhabo.html",
    marifat: "marifat.html",
    maryam: "maryam.html",
    mavjuda: "mavjuda.html",
    maxbubaona: "maxbubaona.html",
    maxfuza: "maxfuza.html",
    maxinaopa: "maxinaopa.html",
    maxmud: "maxmud.html",
    maxmuda: "maxmuda.html",
    maxsuma: "maxsuma.html",
    maxsuna: "maxsuna.html",
    mirabbos: "mirabbos.html",
    miraxmad: "miraxmad.html",
    mirazam: "mirazam.html",
    miraziz: "miraziz.html",
    mirbuva: "mirbuva.html",
    miribrohim: "miribrohim.html",
    mirjalil: "mirjalil.html",
    mirjalol: "mirjalol.html",
    mirjalolota: "mirjalolota.html",
    mirjamol: "mirjamol.html",
    mirkamol: "mirkamol.html",
    mirmuhammad: "mirmuhammad.html",
    mirniyoz: "mirniyoz.html",
    mirodil: "mirodil.html",
    mirsaid: "mirsaid.html",
    mirsalim: "mirsalim.html",
    mirsolix: "mirsolix.html",
    mirsulton: "mirsulton.html",
    mirtoxir: "mirtoxir.html",
    mirvaqqos: "mirvaqqos.html",
    mirxalil: "mirxalil.html",
    mirxalilota: "mirxalilota.html",
    mirxaydar: "mirxaydar.html",
    mirxoliq: "mirxoliq.html",
    mirzohidota: "mirzohidota.html",
    mohira: "mohira.html",
    muallo: "muallo.html",
    muazzam: "muazzam.html",
    muborak: "muborak.html",
    muborakbirlik: "muborakbirlik.html",
    muhammadali: "muhammadali.html",
    muharram: "muharram.html",
    muhlisa: "muhlisa.html",
    mukarram: "mukarram.html",
    muqaddas: "muqaddas.html",
    musabek: "musabek.html",
    musharraf: "musharraf.html",
    muslima: "muslima.html",
    muxtabar: "muxtabar.html",
    muxtorbirlik: "muxtorbirlik.html",
    muyassar: "muyassar.html",
    muzaffar: "muzaffar.html",
    nabijon: "nabijon.html",
    nafisa: "nafisa.html",
    naima: "naima.html",
    nargiza: "nargiza.html",
    nargizabirlik: "nargizabirlik.html",
    nasiba: "nasiba.html",
    nezom: "nezom.html",
    nigmat: "nigmat.html",
    nigora: "nigora.html",
    nodir: "nodir.html",
    nodira: "nodira.html",
    norposhsha: "norposhsha.html",
    nozim: "nozim.html",
    nozima: "nozima.html",
    nozimashoabror: "nozimashoabror.html",
    obid: "obid.html",
    odil: "odil.html",
    odilbek: "odilbek.html",
    odilmuborak: "odilmuborak.html",
    olmasmuborak: "olmasmuborak.html",
    omil: "omil.html",
    omina: "omina.html",
    orifbek: "orifbek.html",
    osiyo: "osiyo.html",
    polat: "polat.html",
    rahima: "rahima.html",
    rahmonberdi: "rahmonberdi.html",
    rano: "rano.html",
    ravshan: "ravshan.html",
    raxbar: "raxbar.html",
    raxbarnisa: "raxbarnisa.html",
    raximjon: "raximjon.html",
    risolat: "risolat.html",
    robiya: "robiya.html",
    robiyaona: "robiyaona.html",
    roqiya: "roqiya.html",
    rustam: "rustam.html",
    sabixa: "sabixa.html",
    saboxat: "saboxat.html",
    sadiya: "sadiya.html",
    saidmurod: "saidmurod.html",
    salima: "salima.html",
    saodat: "saodat.html",
    saodatbirlik: "saodatbirlik.html",
    saodatona: "saodatona.html",
    savri: "savri.html",
    savrinisa: "savrinisa.html",
    sayfiddin: "sayfiddin.html",
    sayyora: "sayyora.html",
    shahodat: "shahodat.html",
    shahzoda: "shahzoda.html",
    sharofat: "sharofat.html",
    shoabror: "shoabror.html",
    shoakbar: "shoakbar.html",
    shoakmal: "shoakmal.html",
    shoalam: "shoalam.html",
    shoanvar: "shoanvar.html",
    shoasror: "shoasror.html",
    shoasrorshoabror: "shoasrorshoabror.html",
    shogofur: "shogofur.html",
    shogulom: "shogulom.html",
    shohista: "shohista.html",
    shoinogom: "shoinogom.html",
    shoira: "shoira.html",
    shoismoil: "shoismoil.html",
    shoisroil: "shoisroil.html",
    shoista: "shoista.html",
    shoistanodir: "shoistanodir.html",
    shomatsho: "shomatsho.html",
    shomuqum: "shomuqum.html",
    shomuxtor: "shomuxtor.html",
    shopolat: "shopolat.html",
    shousmon: "shousmon.html",
    shoxida: "shoxida.html",
    shoxiddin: "shoxiddin.html",
    shoyoldosh: "shoyo'ldosh.html",
    sidiqnazar: "sidiqnazar.html",
    sobir: "sobir.html",
    sobit: "sobit.html",
    somi: "somi.html",
    soxiba: "soxiba.html",
    tohtahon: "tohtahon.html",
    tolibek: "tolibek.html",
    umida: "umida.html",
    umidashoakmal: "umidashoakmal.html",
    umidjon: "umidjon.html",
    vali: "vali.html",
    xalima: "xalima.html",
    xalimaxaqiqat: "xalimaxaqiqat.html",
    xamro: "xamro.html",
    xaqiqat: "xaqiqat.html",
    xasan: "xasan.html",
    xatima: "xatima.html",
    xayitqul: "xayitqul.html",
    xayri: "xayri.html",
    xayrinisa: "xayrinisa.html",
    xoldorali: "xoldorali.html",
    xonsulu: "xonsulu.html",
    xurshid: "xurshid.html",
    xusan: "xusan.html",
    zafar: "zafar.html",
    zahro: "zahro.html",
    zarofat: "zarofat.html",
    zaynab: "zaynab.html",
    zebo: "zebo.html",
    zilola: "zilola.html",
    ziyodilla: "ziyodilla.html",
    ziyovuddin: "ziyovuddin.html",
    zokir: "zokir.html",
    zokirmuborak: "zokirmuborak.html",
    zubayda: "zubayda.html",
    zufar: "zufar.html",
    zufarota: "zufarota.html",
    zuhra: "zuhra.html",
    zuhrashoabror: "zuhrashoabror.html",
    zulfiya: "zulfiya.html",
    zulhumor: "zulhumor.html",
    zulhumoropa: "zulhumoropa.html",
    zumrad: "zumrad.html",
    // Yana boshqa sahifalarni qo‘shing
  };

  if (pages[query]) {
    window.location.href = pages[query];
  } else {
    alert("Sahifa topilmadi.");
  }
});

// Kirillga o‘giruvchi funksiya (sizning avvalgi kod)
const toCyrillic = (text) => {
  const dictionary = {
    A: "А",
    B: "Б",
    D: "Д",
    E: "Э",
    F: "Ф",
    G: "Г",
    H: "Ҳ",
    I: "И",
    J: "Ж",
    K: "К",
    L: "Л",
    M: "М",
    N: "Н",
    O: "О",
    P: "П",
    Q: "Қ",
    R: "Р",
    S: "С",
    T: "Т",
    U: "У",
    V: "В",
    X: "Х",
    Y: "Й",
    Z: "З",
    a: "а",
    b: "б",
    d: "д",
    e: "э",
    f: "ф",
    g: "г",
    h: "ҳ",
    i: "и",
    j: "ж",
    k: "к",
    l: "л",
    m: "м",
    n: "н",
    o: "о",
    p: "п",
    q: "қ",
    r: "р",
    s: "с",
    t: "т",
    u: "у",
    v: "в",
    x: "х",
    y: "й",
    z: "з",
  };
  const replacements = [
    [/Sh/g, "Ш"],
    [/sh/g, "ш"],
    [/Ch/g, "Ч"],
    [/ch/g, "ч"],
    [/Ya/g, "Я"],
    [/ya/g, "я"],
    [/Yu/g, "Ю"],
    [/yu/g, "ю"],
    [/Yo/g, "Ё"],
    [/yo/g, "ё"],
    [/Ye/g, "Е"],
    [/ye/g, "е"],
    [/Ng/g, "Нг"],
    [/ng/g, "нг"],
    [/Oʻ/g, "О"],
    [/oʻ/g, "о"],
    [/Gʻ/g, "Г"],
    [/gʻ/g, "г"],
    [/O‘/g, "О"],
    [/o‘/g, "о"],
    [/G‘/g, "Г"],
    [/g‘/g, "г"],
    [/O'/g, "О"],
    [/o'/g, "о"],
    [/G'/g, "Г"],
    [/g'/g, "г"],
  ];
  for (const [regex, rep] of replacements) {
    text = text.replace(regex, rep);
  }
  return text.replace(/./g, (char) => dictionary[char] || char);
};

const walkAndTransform = (node, transformFn) => {
  if (node.nodeType === 3) {
    node.nodeValue = transformFn(node.nodeValue);
  } else if (
    node.nodeType === 1 &&
    node.nodeName !== "SCRIPT" &&
    node.nodeName !== "STYLE"
  ) {
    for (let i = 0; i < node.childNodes.length; i++) {
      walkAndTransform(node.childNodes[i], transformFn);
    }
  }
};

const createLangButtons = () => {
  const header = document.querySelector("header");
  if (!header) return;

  // Agar tugmalar oldin yaratilgan bo'lsa olib tashlash
  const existingLangDiv = document.getElementById("lang-div");
  if (existingLangDiv) existingLangDiv.remove();

  const langDiv = document.createElement("div");
  langDiv.id = "lang-div";
  langDiv.style.textAlign = "right";
  langDiv.style.marginBottom = "0.5rem";

  const btnUz = document.createElement("button");
  btnUz.textContent = "UZ";
  btnUz.style.marginRight = "5px";

  const btnRu = document.createElement("button");
  btnRu.textContent = "RU";

  langDiv.appendChild(btnUz);
  langDiv.appendChild(btnRu);
  header.insertBefore(langDiv, header.firstChild);

  btnUz.onclick = () => {
    localStorage.setItem("lang", "uz");
    location.reload();
  };
  btnRu.onclick = () => {
    localStorage.setItem("lang", "ru");
    walkAndTransform(document.body, toCyrillic);
  };
};

const setupInternalLinks = () => {
  document.querySelectorAll('a[href^="/"], a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      // Kichik kechikish bilan til tugmalarini qayta yaratish va o‘zgartirish
      setTimeout(() => {
        createLangButtons();
        if (localStorage.getItem("lang") === "ru") {
          walkAndTransform(document.body, toCyrillic);
        }
      }, 50);
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  createLangButtons();

  if (localStorage.getItem("lang") === "ru") {
    walkAndTransform(document.body, toCyrillic);
  }

  setupInternalLinks();
});

// script.js

// 1. CSS animatsiya va uslublarni JS yordamida sahifaga qo'shish
const style = document.createElement("style");
style.textContent = `
  @keyframes flicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
      opacity: 1;
      text-shadow:
        0 0 5px #ffbb33,
        0 0 10px #ffbb33,
        0 0 20px #ffbb33,
        0 0 30px #ff6600,
        0 0 40px #ff6600,
        0 0 50px #ff6600,
        0 0 60px #ff6600;
    }
    20%, 22%, 24%, 55% {
      opacity: 0.8;
      text-shadow: none;
    }
  }
  #darkModeToggle.flicker {
    animation: flicker 1.5s infinite alternate;
    color: #ff6600;
    font-weight: bold;
    border: none;
    background: transparent;
  }
  body.dark-mode {
    background-color: #121212 !important;
    color: #e0e0e0 !important;
    transition: background-color 0.5s ease, color 0.5s ease;
  }
  body.dark-mode header,
  body.dark-mode nav,
  body.dark-mode main,
  body.dark-mode footer {
    background-color: #1e1e1e !important;
    color: #e0e0e0 !important;
  }
  body.dark-mode a {
    color: #a8d0ff !important;
  }
`;
document.head.appendChild(style);

// 2. Toggle tugmasini yaratish va qo'shish
const toggleBtn = document.createElement("button");
toggleBtn.id = "darkModeToggle";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.padding = "5px 10px";
toggleBtn.style.marginLeft = "10px";

// Headerga tugmani qo'shamiz
const header = document.querySelector("header");
if (header) header.appendChild(toggleBtn);

// 3. Dark mode funksiyalari
function enableDarkMode() {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️ Light Mode";
  toggleBtn.classList.add("flicker"); // Yonib turadigan effekt
  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  toggleBtn.textContent = "🌙 Dark Mode";
  toggleBtn.classList.remove("flicker");
  localStorage.setItem("darkMode", "disabled");
}

// 4. Holatni tekshirish va toggle tugmasini sozlash
function checkDarkMode() {
  const darkMode = localStorage.getItem("darkMode");

  if (darkMode === "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

// 5. Toggle tugmasini bosish hodisasi
toggleBtn.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

// 6. Sahifa yuklanganda holatni tekshirish
checkDarkMode();

const form = document.getElementById("commentForm");
const commentsList = document.getElementById("commentsList");

let comments = JSON.parse(localStorage.getItem("comments")) || [];

function renderComments() {
  commentsList.innerHTML = "";
  comments.forEach((comment, index) => {
    const commentDiv = document.createElement("div");
    commentDiv.className = "comment";

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = `${comment.name} | ${new Date(
      comment.time
    ).toLocaleString()}`;
    commentDiv.appendChild(meta);

    const text = document.createElement("div");
    text.className = "text";
    text.textContent = comment.text;
    commentDiv.appendChild(text);

    const actions = document.createElement("div");
    actions.className = "actions";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.onclick = () => {
      comments.splice(index, 1);
      updateComments();
    };

    const editBtn = document.createElement("button");
    editBtn.innerHTML = "✏️";
    editBtn.onclick = () => {
      const newText = prompt("Kommentni o‘zgartiring:", comment.text);
      if (newText !== null && newText.trim() !== "") {
        comments[index].text = newText.trim();
        updateComments();
      }
    };

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    commentDiv.appendChild(actions);

    commentsList.appendChild(commentDiv);
  });
}

function updateComments() {
  localStorage.setItem("comments", JSON.stringify(comments));
  renderComments();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && message) {
    comments.push({ name, text: message, time: new Date().toISOString() });
    updateComments();
    form.reset();
  }
});

// Init
renderComments();

document
  .getElementById("sticker-panel")
  .addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
      const textarea = document.getElementById("message");
      textarea.value += e.target.textContent;
      textarea.focus();
    }
  });

document.getElementById("openMap").addEventListener("click", function () {
  document.getElementById("mapModal").style.display = "flex";
});
