const $ = (s) => document.querySelector(s);
const khmerText = {
  "nav.home": "ទំព័រដើម",
  "nav.about": "អំពីខ្ញុំ",
  "nav.skills": "ជំនាញ",
  "nav.education": "ការសិក្សា",
  "nav.projects": "គម្រោង",
  "nav.goals": "គោលដៅ",
  "nav.contact": "ទំនាក់ទំនង",
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
  "education.title": "ការអប់រំ",
  "education.present": "២០២៦ – បច្ចុប្បន្ន",
  "education.program":
    "គ្រប់គ្រងប្រព័ន្ធបណ្តាញ និងសន្តិសុខសាយប័រ<br />និស្សិតឆ្នាំទី១",
  "education.general": "ចំណេះដឹងទូទៅ",
  "projects.title": "គម្រោង",
  "projects.intro": "គម្រោងសិក្សា និងការអនុវត្តក្នុងឆ្នាំទី១ របស់ខ្ញុំ។",
  "projects.hosting": "ការបង្ហោះគេហទំព័រ",
  "projects.hostingDescription":
    "គេហទំព័រសិក្សាដែលពន្យល់អំពីវិធីបង្ហោះគេហទំព័រផ្សេងៗ រួមមានការបង្ហោះក្នុងម៉ាស៊ីនផ្ទាល់ខ្លួន GitHub Netlify Vercel VPS និងសេវាកម្មពពក។",
  "projects.linux": "ការអនុវត្តម៉ាស៊ីនមេ Linux",
  "projects.linuxDescription":
    "ការរៀន និងអនុវត្តពាក្យបញ្ជា Linux អ្នកប្រើប្រាស់ សិទ្ធិប្រើប្រាស់ សេវាកម្ម បណ្តាញ និងការគ្រប់គ្រងម៉ាស៊ីនមេ។",
  "projects.network": "ការអនុវត្តបណ្តាញកុំព្យូទ័រ",
  "projects.networkDescription":
    "ការអនុវត្តបណ្តាញដោយប្រើ Cisco Packet Tracer ការកំណត់អាសយដ្ឋាន IP, DHCP, ការបញ្ជូនទិន្នន័យ ការប្តូរបណ្តាញ និង SSH។",
  "projects.cloud": "ការសិក្សា Cloud និង AWS",
  "projects.cloudDescription":
    "សិក្សាអំពីដំណើរការម៉ាស៊ីនមេពពក និងរបៀបបង្ហោះគេហទំព័រ និងកម្មវិធីលើហេដ្ឋារចនាសម្ព័ន្ធពពក។",
  "chips.system": "ការគ្រប់គ្រងប្រព័ន្ធ",
  "chips.network": "បណ្តាញកុំព្យូទ័រ",
  "chips.cloud": "កុំព្យូទ័រពពក",
  "goals.title": "គោលដៅអាជីពរបស់ខ្ញុំ",
  "goals.intro": "គោលដៅដែលខ្ញុំចង់សម្រេច និងផ្លូវដែលខ្ញុំគ្រោងនឹងដើរ។",
  "goals.learn": "រៀន",
  "goals.practice": "អនុវត្ត",
  "goals.build": "បង្កើតគម្រោង",
  "goals.experience": "ទទួលបទពិសោធន៍",
  "goals.professional": "ក្លាយជាអ្នកជំនាញ IT",
  "goals.roadmap": "ផែនទីផ្លូវអាជីព",
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
  ["CCNA Fundamentals", "net", "Learning", 40],
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
    return `<div class="card skill"><div class="top"><div class="ic" style="margin:0;width:40px;height:40px"><svg class="i"><use href="#${s[1]}"/></svg></div><span class="tag">${status}</span></div><h3>${name}</h3><div class="bar" role="progressbar" aria-label="${name}: ${status}" aria-valuenow="${s[3]}" aria-valuemin="0" aria-valuemax="100"><i data-w="${s[3]}"${$("#sk").closest(".rv").classList.contains("in") ? ` style="width:${s[3]}%"` : ""}></i></div></div>`;
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
// nav
const mb = $("#menu"),
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
addEventListener(
  "scroll",
  () => {
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
// network canvas
(() => {
  const c = $("#net"),
    x = c.getContext("2d");
  let w,
    h,
    P = [];
  const rs = () => {
    w = c.width = c.offsetWidth;
    h = c.height = c.offsetHeight;
    const n = Math.min(60, Math.floor((w * h) / 22000));
    P = Array.from({ length: n }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));
  };
  const dr = () => {
    x.clearRect(0, 0, w, h);
    P.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    });
    for (let i = 0; i < P.length; i++) {
      for (let j = i + 1; j < P.length; j++) {
        const d = Math.hypot(P[i].x - P[j].x, P[i].y - P[j].y);
        if (d < 140) {
          x.strokeStyle = `rgba(109,179,255,${0.25 * (1 - d / 140)})`;
          x.beginPath();
          x.moveTo(P[i].x, P[i].y);
          x.lineTo(P[j].x, P[j].y);
          x.stroke();
        }
      }
      x.fillStyle = "rgba(109,179,255,.7)";
      x.beginPath();
      x.arc(P[i].x, P[i].y, 2, 0, 7);
      x.fill();
    }
  };
  rs();
  addEventListener("resize", rs);
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) dr();
  else
    (function l() {
      dr();
      requestAnimationFrame(l);
    })();
})();
