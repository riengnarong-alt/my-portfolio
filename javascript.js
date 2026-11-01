const $ = (s) => document.querySelector(s);
const khmerText = {
  "nav.home": "ទំព័រដើម",
  "nav.about": "អំពីខ្ញុំ",
  "nav.skills": "ជំនាញ",
  "nav.education": "ដំណើររបស់ខ្ញុំ",
  "nav.projects": "គម្រោង",
  "nav.goals": "គោលដៅ",
  "nav.certificates": "វិញ្ញាបនបត្រ",
  "nav.contact": "ទំនាក់ទំនង",
  "projects.documentClose": "បិទ",
  "menu.toggle": "បើកឬបិទម៉ឺនុយ",
  "nav.main": "ម៉ឺនុយចម្បង",
  "language.label": "ជ្រើសរើសភាសា",
  "hero.hello": "សួស្តី ខ្ញុំឈ្មោះ",
  "hero.role": "និស្សិតគ្រប់គ្រងប្រព័ន្ធបណ្តាញ និងសន្តិសុខសាយប័រ",
  "hero.intro":
    "ខ្ញុំជានិស្សិតឆ្នាំទី១ នៅអង្គការ Passerelles Numériques Cambodia ដែលកំពុងសិក្សាផ្នែកគ្រប់គ្រងប្រព័ន្ធបណ្តាញ និងសន្តិសុខសាយប័រ។ ខ្ញុំចាប់អារម្មណ៍លើបណ្តាញកុំព្យូទ័រ Linux ម៉ាស៊ីនមេ សន្តិសុខសាយប័រ កុំព្យូទ័រពពក និងការបង្ហោះគេហទំព័រ។",
  "hero.projects": "មើលគម្រោងរបស់ខ្ញុំ",
  "hero.contact": "ទាក់ទងមកខ្ញុំ",
  "about.title": "អំពីខ្ញុំ",
  "about.intro":
    "ខ្ញុំជានិស្សិតដែលកំពុងសាងសង់ចំណេះដឹង និងជំនាញអនុវត្តក្នុងវិស័យព័ត៌មានវិទ្យា។ ខ្ញុំចូលចិត្តស្វែងយល់អំពីបណ្តាញកុំព្យូទ័រ ម៉ាស៊ីនមេ ប្រព័ន្ធប្រតិបត្តិការ មូលដ្ឋានទិន្នន័យ សេវាកម្មពពក និងសន្តិសុខសាយប័រ។ គោលដៅរបស់ខ្ញុំគឺបន្តរៀន ទទួលបានបទពិសោធន៍ និងក្លាយជាអ្នកជំនាញ IT។",
  "about.student": "និស្សិត",
  "about.learner": "អ្នកសិក្សា IT",
  "about.network": "អ្នកចូលចិត្តបណ្តាញកុំព្យូទ័រ",
  "about.security": "អ្នកសិក្សាសន្តិសុខសាយប័រ",
  "skills.title": "ជំនាញ",
  "skills.intro":
    "ខ្ញុំទើបតែចាប់ផ្តើមដំណើរនេះ។ របារទាំងនេះបង្ហាញពីកម្រិតជំនាញបច្ចុប្បន្នរបស់ខ្ញុំដោយស្មោះត្រង់។",
  "skills.softTitle": "ជំនាញទន់",
  "skills.communication": "ការប្រាស្រ័យទាក់ទង",
  "skills.teamwork": "ការធ្វើការជាក្រុម",
  "skills.problemSolving": "ការដោះស្រាយបញ្ហា",
  "skills.adaptability": "ភាពបត់បែន",
  "education.title": "ដំណើររបស់ខ្ញុំ",
  "education.present": "២០២៦ – បច្ចុប្បន្ន",
  "education.program":
    "គ្រប់គ្រងប្រព័ន្ធបណ្តាញ និងសន្តិសុខសាយប័រ<br />និស្សិតឆ្នាំទី១",
  "education.general": "ចំណេះដឹងទូទៅ",
  "projects.title": "គម្រោង",
  "projects.intro": "គម្រោងសិក្សា និងការអនុវត្តក្នុងឆ្នាំទី១ របស់ខ្ញុំ។",
  "projects.viewDocument": "មើលឯកសារ",
  "projects.documentTitle": "ឯកសារគម្រោង",
  "projects.documentTools": "ឧបករណ៍ និងបច្ចេកវិទ្យា",
  "projects.documentClose": "បិទ",
  "projects.hosting": "ការបង្ហោះគេហទំព័រ",
  "projects.hostingDescription":
    "គេហទំព័រសិក្សាដែលពន្យល់អំពីវិធីបង្ហោះគេហទំព័រផ្សេងៗ រួមមានការបង្ហោះក្នុងម៉ាស៊ីនផ្ទាល់ខ្លួន GitHub Netlify Vercel VPS និងសេវាកម្មពពក។",
  "projects.linux": "ការអនុវត្តម៉ាស៊ីនមេ Ubuntu",
  "projects.linuxDescription":
    "ការរៀន និងអនុវត្តពាក្យបញ្ជា Ubuntu អ្នកប្រើប្រាស់ សិទ្ធិប្រើប្រាស់ សេវាកម្ម បណ្តាញ និងការគ្រប់គ្រងម៉ាស៊ីនមេ។",
  "projects.network": "ការអនុវត្តបណ្តាញកុំព្យូទ័រ",
  "projects.networkDescription":
    "ការអនុវត្តបណ្តាញដោយប្រើ Cisco Packet Tracer ការកំណត់អាសយដ្ឋាន IP, DHCP, ការបញ្ជូនទិន្នន័យ ការប្តូរបណ្តាញ និង SSH។",
  "projects.cloud": "ការសិក្សា Cloud និង AWS",
  "projects.cloudDescription":
    "សិក្សាអំពីដំណើរការម៉ាស៊ីនមេពពក និងរបៀបបង្ហោះគេហទំព័រ និងកម្មវិធីលើហេដ្ឋារចនាសម្ព័ន្ធពពក។",
  "projects.database": "មូលដ្ឋានគ្រឹះទិន្នន័យ",
  "projects.databaseDescription":
    "អនុវត្តមូលដ្ឋានគ្រឹះទិន្នន័យ រួមមានការរៀបចំព័ត៌មានជាតារាង និងការប្រើសំណួរមូលដ្ឋានដើម្បីធ្វើការជាមួយទិន្នន័យ។",
  "chips.system": "ការគ្រប់គ្រងប្រព័ន្ធ",
  "chips.network": "ស្ថាបត្យកម្មបណ្តាញឡូជីខល",
  "chips.cloud": "កុំព្យូទ័រពពក",
  "goals.title": "គោលដៅអាជីពរបស់ខ្ញុំ",
  "goals.intro": "គោលដៅដែលខ្ញុំចង់សម្រេច និងផ្លូវដែលខ្ញុំគ្រោងនឹងដើរ។",
  "goals.learn": "រៀន",
  "goals.practice": "អនុវត្ត",
  "goals.build": "បង្កើតគម្រោង",
  "goals.experience": "ទទួលបទពិសោធន៍",
  "goals.professional": "ក្លាយជាអ្នកជំនាញ IT",
  "goals.roadmap": "ផែនទីផ្លូវអាជីព",
  "certificates.eyebrow": "វិញ្ញាបនបត្រ",
  "certificates.title": "វិញ្ញាបនបត្រ និងវគ្គសិក្សា។",
  "certificates.redhat": "ការចាប់ផ្តើមជាមួយមូលដ្ឋានគ្រឹះ Linux",
  "certificates.redhatDetails": "Red Hat · ថ្ងៃទី ៣០ ខែកញ្ញា ឆ្នាំ ២០២៦",
  "certificates.cisco": "CCNA៖ ការណែនាំអំពីបណ្តាញ",
  "certificates.ciscoDetails":
    "Cisco Networking Academy · ថ្ងៃទី ៦ ខែកញ្ញា ឆ្នាំ ២០២៦",
  "certificates.view": "មើលវិញ្ញាបនបត្រ",
  "contact.title": "តោះភ្ជាប់ទំនាក់ទំនង",
  "contact.intro":
    "ខ្ញុំតែងតែចាប់អារម្មណ៍ក្នុងការរៀនសូត្រ ភ្ជាប់ទំនាក់ទំនងជាមួយនិស្សិត និងអ្នកជំនាញ IT ផ្សេងទៀត ព្រមទាំងស្វែងរកឱកាសថ្មីៗ។",
  "contact.name": "ឈ្មោះ",
  "contact.email": "អ៊ីមែល",
  "contact.message": "សារ",
  "contact.send": "ផ្ញើសារ",
  "contact.linkedin": "LinkedIn",
  "contact.telegram": "តេឡេក្រាម",
  "footer.role": "និស្សិតគ្រប់គ្រងប្រព័ន្ធបណ្តាញ និងសន្តិសុខសាយប័រ",
};
const originalText = new Map();
const languageButtons = [...document.querySelectorAll("[data-language]")];
let currentLanguage = "en";

const setLanguage = (language) => {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title =
    language === "km"
      ? "រៀង ណារ៉ុង | និស្សិតគ្រប់គ្រងប្រព័ន្ធបណ្តាញ និងសន្តិសុខសាយប័រ"
      : "RIENG Narong | System Network Administration & Cybersecurity Student";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (!originalText.has(element)) originalText.set(element, element.innerHTML);
    const key = element.dataset.i18n;
    element.innerHTML =
      language === "km" && khmerText[key] ? khmerText[key] : originalText.get(element);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    const englishLabels = {
      "menu.toggle": "Toggle menu",
      "goals.roadmap": "Roadmap",
      "nav.main": "Main navigation",
      "language.label": "Choose language",
      "nav.home": "Home",
      "projects.documentClose": "Close",
    };
    element.setAttribute(
      "aria-label",
      language === "km" ? khmerText[key] || key : englishLabels[key] || key,
    );
  });
  languageButtons.forEach((button) => {
    const selected = button.dataset.language === language;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  const lightMode = document.body.classList.contains("light-mode");
  $("#theme-toggle").setAttribute(
    "aria-label",
    language === "km"
      ? lightMode
        ? "ប្តូរទៅរបៀបងងឹត"
        : "ប្តូរទៅរបៀបភ្លឺ"
      : `Switch to ${lightMode ? "dark" : "light"} mode`,
  );
  renderSkills();
  renderGoals();
};

const S = [
  ["Computer Networking", "net", "Developing", 55],
  ["CCNA Fundamentals", "ccna", "Learning", 40],
  ["Linux", "term", "Developing", 50],
  ["Windows Server", "srv", "Beginner", 30],
  ["System Administration", "cog", "Developing", 45],
  ["Cybersecurity Fundamentals", "shd", "Learning", 20],
  ["Database Fundamentals", "db", "Beginner", 30],
  ["Cloud Computing", "cld", "Learning", 30],
  ["Web Hosting", "web", "Developing", 50],
  ["GitHub", "git", "Developing", 45],
  ["AWS", "cld", "Beginner", 25],
  ["Server Management", "srv", "Learning", 35],
];
const skillNamesKm = [
  "បណ្តាញកុំព្យូទ័រ",
  "មូលដ្ឋាន CCNA",
  "លីនុច",
  "វីនដូសឺវើរ",
  "ការគ្រប់គ្រងប្រព័ន្ធ",
  "មូលដ្ឋានសន្តិសុខសាយប័រ",
  "មូលដ្ឋានទិន្នន័យ",
  "កុំព្យូទ័រពពក",
  "ការបង្ហោះគេហទំព័រ",
  "GitHub",
  "AWS",
  "ការគ្រប់គ្រងម៉ាស៊ីនមេ",
];
const skillStatusKm = { Developing: "កំពុងអភិវឌ្ឍ", Learning: "កំពុងរៀន", Beginner: "កម្រិតដំបូង" };
function renderSkills() {
  $("#sk").innerHTML = S.map((s, index) => {
    const name = currentLanguage === "km" ? skillNamesKm[index] : s[0];
    const status = currentLanguage === "km" ? skillStatusKm[s[2]] : s[2];
    return `<div class="card skill"><div class="top"><div class="ic${s[1] === "ccna" ? " ccna-icon" : ""}" style="margin:0;width:40px;height:40px"><svg class="i"><use href="#${s[1]}"/></svg></div><span class="tag">${status}</span></div><h3>${name}</h3><div class="bar" role="progressbar" aria-label="${name}: ${status}" aria-valuenow="${s[3]}" aria-valuemin="0" aria-valuemax="100"><i data-w="${s[3]}"${$("#sk").closest(".rv").classList.contains("in") ? ` style="width:${s[3]}%"` : ""}></i></div></div>`;
  }).join("");
}
const goalsEnglish = [
  "Become a skilled IT professional",
  "Improve my networking skills",
  "Improve Linux and system administration skills",
  "Learn more about cybersecurity",
  "Gain real-world IT experience",
  "Learn cloud technologies",
  "Build useful IT projects",
  "Get a good job and support my family",
];
const goalsKhmer = [
  "ក្លាយជាអ្នកជំនាញ IT ដែលមានសមត្ថភាព",
  "ពង្រឹងជំនាញបណ្តាញកុំព្យូទ័រ",
  "ពង្រឹងជំនាញ Linux និងការគ្រប់គ្រងប្រព័ន្ធ",
  "សិក្សាបន្ថែមអំពីសន្តិសុខសាយប័រ",
  "ទទួលបានបទពិសោធន៍ការងារ IT ជាក់ស្តែង",
  "សិក្សាបច្ចេកវិទ្យាកុំព្យូទ័រពពក",
  "បង្កើតគម្រោង IT ដែលមានប្រយោជន៍",
  "ទទួលបានការងារល្អ និងជួយគ្រួសារ",
];
function renderGoals() {
  const goals = currentLanguage === "km" ? goalsKhmer : goalsEnglish;
  $("#gl").innerHTML = goals
    .map((text) => `<li><svg class="i"><use href="#ck"/></svg>${text}</li>`)
    .join("");
}
languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.language;
    setLanguage(language);
    try {
      localStorage.setItem("portfolio-language", language);
    } catch (error) {
      console.warn("Could not save the language preference.", error);
    }
  });
});
try {
  setLanguage(localStorage.getItem("portfolio-language") === "km" ? "km" : "en");
} catch (error) {
  console.warn("Could not load the saved language preference.", error);
  setLanguage("en");
}
// reveal
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        e.target
          .querySelectorAll(".bar i")
          .forEach((b) => (b.style.width = b.dataset.w + "%"));
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".rv").forEach((x) => io.observe(x));
const projectDocumentDialog = $("#project-document-dialog");
document.querySelectorAll("button.project-document-link").forEach((button) => {
  button.addEventListener("click", () => {
    const project = button.closest(".proj");
    $("#project-document-name").textContent = project.querySelector("h3").textContent;
    $("#project-document-description").textContent =
      project.querySelector("p").textContent.trim();
    $("#project-document-tools").replaceChildren(
      ...[...project.querySelectorAll(".chips span")].map((chip) => {
        const item = document.createElement("li");
        item.textContent = chip.textContent;
        return item;
      }),
    );
    projectDocumentDialog.showModal();
  });
});
$(".project-document-close").addEventListener("click", () => {
  projectDocumentDialog.close();
});
// nav
const nav = $("nav"),
  mb = $("#menu"),
  ul = $("#links");
mb.onclick = () => {
  const o = ul.classList.toggle("open");
  mb.setAttribute("aria-expanded", o);
};
const themeToggle = $("#theme-toggle");
const applyTheme = (theme) => {
  const light = theme === "light";
  document.body.classList.toggle("light-mode", light);
  themeToggle.setAttribute("aria-pressed", String(light));
  themeToggle.setAttribute(
    "aria-label",
    currentLanguage === "km"
      ? light
        ? "ប្តូរទៅរបៀបងងឹត"
        : "ប្តូរទៅរបៀបភ្លឺ"
      : `Switch to ${light ? "dark" : "light"} mode`,
  );
  themeToggle.querySelector("use").setAttribute("href", light ? "#moon" : "#sun");
};
try {
  applyTheme(localStorage.getItem("portfolio-theme") || "dark");
} catch (error) {
  console.warn("Could not load the saved theme preference.", error);
  applyTheme("dark");
}
themeToggle.onclick = () => {
  const theme = document.body.classList.contains("light-mode") ? "dark" : "light";
  applyTheme(theme);
  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch (error) {
    console.warn("Could not save the theme preference.", error);
  }
};
ul.onclick = (e) => {
  if (e.target.tagName === "A") ul.classList.remove("open");
};
const secs = [...document.querySelectorAll("header,section")],
  as = [...ul.querySelectorAll("a")];
let lastScrollY = window.scrollY;
addEventListener(
  "scroll",
  () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY <= 80 || nav.contains(document.activeElement) || ul.classList.contains("open")) {
      nav.classList.remove("nav-hidden");
    } else if (currentScrollY > lastScrollY + 5) {
      nav.classList.add("nav-hidden");
    } else if (currentScrollY < lastScrollY - 5) {
      nav.classList.remove("nav-hidden");
    }
    lastScrollY = currentScrollY;

    let c = secs[0].id;
    secs.forEach((s) => {
      if (s.getBoundingClientRect().top < 120) c = s.id;
    });
    as.forEach((a) => a.classList.toggle("on", a.hash === "#" + c));
  },
  { passive: true },
);
// form (no backend: opens the visitor's email app)
$("#f").onsubmit = (e) => {
  e.preventDefault();
  const n = $("#n").value.trim(),
    m = $("#m").value.trim(),
    em = $("#e");
  if (!n || !m || !em.checkValidity() || !em.value) {
    $("#fs").style.color = "#2f80ed";
    $("#fs").textContent =
      currentLanguage === "km"
        ? "សូមបញ្ចូលឈ្មោះ អាសយដ្ឋានអ៊ីមែលត្រឹមត្រូវ និងសាររបស់អ្នក។"
        : "Please fill in your name, a valid email, and a message.";
    return;
  }
  $("#fs").style.color = "#2f80ed";
  $("#fs").textContent =
    currentLanguage === "km"
      ? "កំពុងបើកកម្មវិធីអ៊ីមែលរបស់អ្នក…"
      : "Opening your email app…";
  location.href =
    "mailto:your-email@example.com?subject=" +
    encodeURIComponent("Portfolio message from " + n) +
    "&body=" +
    encodeURIComponent(m + "\n\n" + n + " (" + em.value + ")");
};
// Hero sky canvas
(() => {
  const canvas = $("#network-canvas");
  const ctx = canvas.getContext("2d");
  const motionPreference = matchMedia("(prefers-reduced-motion: reduce)");
  const frameInterval = 1000 / 30;
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let networkNodes = [];
  let stars = [];
  let meteors = [];
  let sparks = [];
  let nextMeteorAt = 500;
  let lastFrameAt = 0;
  let frameId = 0;
  let heroVisible = false;

  const resize = () => {
    const bounds = canvas.getBoundingClientRect();
    pixelRatio = Math.min(devicePixelRatio || 1, 1.5);
    width = bounds.width;
    height = bounds.height;
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const nodeCount = Math.min(48, Math.floor((width * height) / 26000));
    networkNodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 9,
      vy: (Math.random() - 0.5) * 9,
    }));
    const starCount = Math.min(120, Math.max(28, Math.floor((width * height) / 12500)));
    stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.3,
      phase: Math.random() * Math.PI * 2,
      glow: Math.random() * 0.35 + 0.15,
    }));
    meteors = [];
    sparks = [];
    nextMeteorAt = 500 + Math.random() * 1200;

    if (motionPreference.matches) draw(0, 0);
    else if (heroVisible) start();
  };

  const addMeteor = () => {
    if (meteors.length >= 3) return;
    const speed = 430 + Math.random() * 430;
    const angle = 0.38 + Math.random() * 0.32;
    meteors.push({
      x: width * (0.62 + Math.random() * 0.42),
      y: -30 + Math.random() * height * 0.38,
      vx: -Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      length: 130 + Math.random() * 190,
      radius: 1.2 + Math.random() * 1.5,
      hue: [188, 205, 218, 278][Math.floor(Math.random() * 4)],
      life: 0,
      duration: 1.7 + Math.random() * 1.2,
      sparkAt: 0,
    });
  };

  const drawStarsAndNetwork = (delta, time) => {
    const lightMode = document.body.classList.contains("light-mode");
    for (const star of stars) {
      const twinkle = 0.72 + Math.sin(time * 0.0012 + star.phase) * 0.28;
      ctx.beginPath();
      ctx.fillStyle = `rgba(${lightMode ? "95,155,220" : "205,229,255"},${star.glow * twinkle})`;
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < networkNodes.length; i++) {
      const node = networkNodes[i];
      node.x += node.vx * delta;
      node.y += node.vy * delta;
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;
      for (let j = i + 1; j < networkNodes.length; j++) {
        const other = networkNodes[j];
        const distance = Math.hypot(node.x - other.x, node.y - other.y);
        if (distance < 140) {
          ctx.strokeStyle = `rgba(109,179,255,${0.16 * (1 - distance / 140)})`;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      }
      ctx.fillStyle = lightMode ? "rgba(57,124,246,.38)" : "rgba(109,179,255,.65)";
      ctx.beginPath();
      ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const drawMeteors = (delta) => {
    for (let index = meteors.length - 1; index >= 0; index--) {
      const meteor = meteors[index];
      meteor.life += delta;
      meteor.x += meteor.vx * delta;
      meteor.y += meteor.vy * delta;
      const progress = meteor.life / meteor.duration;
      const fade = Math.min(1, progress * 5, (1 - progress) * 4);
      const tailX = meteor.x - meteor.vx * (meteor.length / Math.hypot(meteor.vx, meteor.vy));
      const tailY = meteor.y - meteor.vy * (meteor.length / Math.hypot(meteor.vx, meteor.vy));
      const gradient = ctx.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
      gradient.addColorStop(0, `hsla(${meteor.hue},100%,72%,0)`);
      gradient.addColorStop(0.72, `hsla(${meteor.hue},100%,72%,${0.48 * fade})`);
      gradient.addColorStop(1, `hsla(${meteor.hue},100%,94%,${0.96 * fade})`);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = meteor.radius;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(meteor.x, meteor.y);
      ctx.stroke();

      const headGlow = ctx.createRadialGradient(
        meteor.x, meteor.y, 0, meteor.x, meteor.y, 13 * meteor.radius,
      );
      headGlow.addColorStop(0, `hsla(${meteor.hue},100%,96%,${0.95 * fade})`);
      headGlow.addColorStop(0.18, `hsla(${meteor.hue},100%,70%,${0.45 * fade})`);
      headGlow.addColorStop(1, `hsla(${meteor.hue},100%,60%,0)`);
      ctx.fillStyle = headGlow;
      ctx.beginPath();
      ctx.arc(meteor.x, meteor.y, 13 * meteor.radius, 0, Math.PI * 2);
      ctx.fill();

      if (meteor.life >= meteor.sparkAt) {
        meteor.sparkAt = meteor.life + 0.08;
        for (let spark = 0; spark < 2; spark++) {
          const offset = Math.random() * meteor.length;
          sparks.push({
            x: meteor.x - meteor.vx * (offset / Math.hypot(meteor.vx, meteor.vy)),
            y: meteor.y - meteor.vy * (offset / Math.hypot(meteor.vx, meteor.vy)),
            vx: meteor.vx * 0.08 + (Math.random() - 0.5) * 55,
            vy: meteor.vy * 0.08 + (Math.random() - 0.5) * 55,
            life: 0,
            duration: 0.25 + Math.random() * 0.4,
            radius: Math.random() * 1.5 + 0.5,
            hue: meteor.hue,
          });
        }
      }

      if (progress >= 1 || meteor.x < -meteor.length || meteor.y > height + meteor.length) {
        meteors.splice(index, 1);
      }
    }

    for (let index = sparks.length - 1; index >= 0; index--) {
      const spark = sparks[index];
      spark.life += delta;
      spark.x += spark.vx * delta;
      spark.y += spark.vy * delta;
      const alpha = Math.max(0, 1 - spark.life / spark.duration);
      ctx.fillStyle = `hsla(${spark.hue},100%,78%,${alpha})`;
      ctx.beginPath();
      ctx.arc(spark.x, spark.y, spark.radius * alpha, 0, Math.PI * 2);
      ctx.fill();
      if (alpha <= 0) sparks.splice(index, 1);
    }
  };

  const draw = (time, delta) => {
    ctx.clearRect(0, 0, width, height);
    drawStarsAndNetwork(delta, time);
    if (!motionPreference.matches) {
      if (time >= nextMeteorAt) {
        addMeteor();
        nextMeteorAt = time + 1200 + Math.random() * 1900;
      }
      drawMeteors(delta);
    }
  };

  const stop = () => {
    if (frameId) cancelAnimationFrame(frameId);
    frameId = 0;
    lastFrameAt = 0;
  };

  const animate = (time) => {
    frameId = 0;
    if (!heroVisible || document.hidden || motionPreference.matches) return;
    if (time - lastFrameAt >= frameInterval) {
      const delta = lastFrameAt ? Math.min((time - lastFrameAt) / 1000, 0.05) : 0;
      lastFrameAt = time;
      draw(time, delta);
    }
    frameId = requestAnimationFrame(animate);
  };

  const start = () => {
    if (!frameId && heroVisible && !document.hidden && !motionPreference.matches) {
      frameId = requestAnimationFrame(animate);
    }
  };

  const observer = new IntersectionObserver(([entry]) => {
    heroVisible = entry.isIntersecting;
    if (heroVisible) start();
    else stop();
  });
  observer.observe($("#home"));

  addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else if (heroVisible) start();
  });
  motionPreference.addEventListener("change", () => {
    stop();
    if (motionPreference.matches) draw(0, 0);
    else start();
  });
  resize();
})();
