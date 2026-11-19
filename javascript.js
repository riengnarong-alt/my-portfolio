const SPEED = 40;
const GAP = 20;
const RESUME_DELAY = 1500;
const DIRECTION = 1;

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
    "ខ្ញុំជានិស្សិតឆ្នាំទី២ នៅអង្គការ Passerelles Numériques Cambodia ដែលកំពុងសិក្សាផ្នែកគ្រប់គ្រងប្រព័ន្ធបណ្តាញ និងសន្តិសុខសាយប័រ។ ខ្ញុំចាប់អារម្មណ៍លើបណ្តាញកុំព្យូទ័រ Linux ម៉ាស៊ីនមេ សន្តិសុខសាយប័រ កុំព្យូទ័រពពក និងការបង្ហោះគេហទំព័រ។",
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
    "គ្រប់គ្រងប្រព័ន្ធបណ្តាញ និងសន្តិសុខសាយប័រ<br />និស្សិតឆ្នាំទី២",
  "education.general": "ចំណេះដឹងទូទៅ",
  "education.highSchool": "ចំណេះដឹងទូទៅ<br />រៀនពីភាពជាអ្នកដឹកនាំ",
  "projects.title": "គម្រោង",
  "projects.intro": "គម្រោងសិក្សា និងការអនុវត្តក្នុងឆ្នាំទី២ របស់ខ្ញុំ។",
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
  "certificates.cybersecurity": "សន្តិសុខសាយប័រ៖ ការណែនាំអំពីសន្តិសុខសាយប័រ",
  "certificates.view": "មើលវិញ្ញាបនបត្រ",
  "contact.title": "តោះភ្ជាប់ទំនាក់ទំនង",
  "contact.bloom": "ឱ្យផ្ការីក",
  "contact.namePlaceholder": "បញ្ចូលឈ្មោះរបស់អ្នក",
  "contact.emailPlaceholder": "បញ្ចូលអ៊ីមែលរបស់អ្នក",
  "contact.messagePlaceholder": "សរសេរសារដើម្បីទាក់ទង ឬផ្តល់មតិយោបល់មកខ្ញុំ",
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

const renderTranslation = (element, text) => {
  const fragment = document.createDocumentFragment();
  text.split(/<br\s*\/?>/i).forEach((part, index) => {
    if (index) fragment.append(document.createElement("br"));
    fragment.append(document.createTextNode(part));
  });
  element.replaceChildren(fragment);
};

const setLanguage = (language) => {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title =
    language === "km"
      ? "រៀង ណារ៉ុង | និស្សិតគ្រប់គ្រងប្រព័ន្ធបណ្តាញ និងសន្តិសុខសាយប័រ"
      : "RIENG Narong | System Network Administration & Cybersecurity Student";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (!originalText.has(element)) {
      originalText.set(
        element,
        [...element.childNodes].map((node) => node.cloneNode(true)),
      );
    }
    const key = element.dataset.i18n;
    const translation = language === "km" ? khmerText[key] : "";
    if (translation) {
      renderTranslation(element, translation);
    } else {
      element.replaceChildren(
        ...originalText.get(element).map((node) => node.cloneNode(true)),
      );
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const englishPlaceholders = {
      "contact.namePlaceholder": "Enter Name",
      "contact.emailPlaceholder": "Enter G-Mail",
      "contact.messagePlaceholder": "Enter Your Message",
    };
    element.setAttribute(
      "placeholder",
      language === "km"
        ? khmerText[key] || englishPlaceholders[key]
        : englishPlaceholders[key],
    );
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
  ["CCNA Fundamentals", "ccna", "Learning", 40, "Image/ccna-logo-transparent.png", "CCNA logo"],
  ["Linux", "term", "Developing", 50, "Image/linux-logo-transparent.png", "Linux Tux logo"],
  ["Windows Server", "srv", "Beginner", 30, "Image/image%20copy%207.png", "Windows logo"],
  ["System Administration", "cog", "Developing", 45],
  ["Cybersecurity Fundamentals", "shd", "Learning", 20, "Image/linux-logo-transparent.png", "Linux Tux logo"],
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
const skillStatusKm = {
  Developing: "កំពុងអភិវឌ្ឍ",
  Learning: "កំពុងរៀន",
  Beginner: "កម្រិតដំបូង",
};
function renderSkills() {
  const container = $("#sk");
  const revealed = container.closest(".rv").classList.contains("in");
  const fragment = document.createDocumentFragment();
  S.forEach((s, index) => {
    const name = currentLanguage === "km" ? skillNamesKm[index] : s[0];
    const status = currentLanguage === "km" ? skillStatusKm[s[2]] : s[2];
    const iconSize = s[0] === "CCNA Fundamentals" ? 48 : s[4] ? 56 : 40;
    const icon = document.createElement("div");
    const iconClass = s[4]
      ? `skill-logo-icon${s[0] === "Windows Server" ? " windows-server-icon" : ""}`
      : s[1] === "ccna"
        ? "ccna-icon"
        : "";
    icon.className = `ic${iconClass ? ` ${iconClass}` : ""}`;
    icon.style.margin = "0";
    icon.style.width = `${iconSize}px`;
    icon.style.height = `${iconSize}px`;

    if (s[4]) {
      const image = document.createElement("img");
      image.src = s[4];
      image.alt = s[5];
      image.width = iconSize;
      image.height = iconSize;
      image.loading = "lazy";
      image.decoding = "async";
      icon.append(image);
    } else {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      svg.classList.add("i");
      svg.setAttribute("aria-hidden", "true");
      use.setAttribute("href", `#${s[1]}`);
      svg.append(use);
      icon.append(svg);
    }

    const card = document.createElement("div");
    card.className = "card skill";
    const top = document.createElement("div");
    top.className = "top";
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = status;
    top.append(icon, tag);

    const heading = document.createElement("h3");
    heading.textContent = name;
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.setAttribute("role", "progressbar");
    bar.setAttribute("aria-label", `${name}: ${status}`);
    bar.setAttribute("aria-valuenow", String(s[3]));
    bar.setAttribute("aria-valuemin", "0");
    bar.setAttribute("aria-valuemax", "100");
    const progress = document.createElement("i");
    progress.dataset.w = String(s[3]);
    if (revealed) progress.style.width = `${s[3]}%`;
    bar.append(progress);
    card.append(top, heading, bar);
    fragment.append(card);
  });
  container.replaceChildren(fragment);
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
  const fragment = document.createDocumentFragment();
  goals.forEach((text) => {
    const item = document.createElement("li");
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    svg.classList.add("i");
    svg.setAttribute("aria-hidden", "true");
    use.setAttribute("href", "#ck");
    svg.append(use);
    item.append(svg, document.createTextNode(text));
    fragment.append(item);
  });
  $("#gl").replaceChildren(fragment);
}
languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.language;
    setLanguage(language);
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {}
  });
});
try {
  setLanguage(
    localStorage.getItem("portfolio-language") === "km" ? "km" : "en",
  );
} catch {
  setLanguage("en");
}
document.querySelectorAll("img").forEach((image) => {
  const removeBrokenImage = () => image.remove();
  if (image.complete && image.naturalWidth === 0) {
    removeBrokenImage();
  } else {
    image.addEventListener("error", removeBrokenImage, { once: true });
  }
});
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
document.querySelectorAll(".contact-bloom-button").forEach((button) => {
  button.addEventListener("click", () => {
    const flower = button
      .closest(".contact-bloom-control")
      .querySelector(".contact-bloom");
    flower.classList.remove("is-blooming");
    void flower.getBoundingClientRect();
    flower.classList.add("is-blooming");
  });
});
const projectDocumentDialog = $("#project-document-dialog");
document.querySelectorAll("button.project-document-link").forEach((button) => {
  button.addEventListener("click", () => {
    const project = button.closest(".proj");
    $("#project-document-name").textContent =
      project.querySelector("h3").textContent;
    $("#project-document-description").textContent = project
      .querySelector("p")
      .textContent.trim();
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
const nav = $("nav");
const mb = $("#menu");
const ul = $("#links");
mb.addEventListener("click", () => {
  const o = ul.classList.toggle("open");
  mb.setAttribute("aria-expanded", String(o));
});
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
  themeToggle
    .querySelector("use")
    .setAttribute("href", light ? "#moon" : "#sun");
};
let hasSavedTheme = false;
try {
  const savedTheme = localStorage.getItem("portfolio-theme");
  hasSavedTheme = savedTheme === "light" || savedTheme === "dark";
  applyTheme(
    hasSavedTheme
      ? savedTheme
      : matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark",
  );
} catch {
  applyTheme(matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
}
const colorSchemePreference = matchMedia("(prefers-color-scheme: light)");
colorSchemePreference.addEventListener("change", (event) => {
  if (!hasSavedTheme) applyTheme(event.matches ? "light" : "dark");
});
themeToggle.addEventListener("click", () => {
  const theme = document.body.classList.contains("light-mode")
    ? "dark"
    : "light";
  applyTheme(theme);
  hasSavedTheme = true;
  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch {}
});
ul.addEventListener("click", (event) => {
  const target = event.target;
  const link = target instanceof Element ? target.closest("a") : null;
  if (link) {
    ul.classList.remove("open");
    mb.setAttribute("aria-expanded", "false");
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && ul.classList.contains("open")) {
    ul.classList.remove("open");
    mb.setAttribute("aria-expanded", "false");
    mb.focus();
  }
});
const sections = [...document.querySelectorAll("main > header[id], main > section[id]")];
const navLinks = [...ul.querySelectorAll("a")];
const updateActiveSection = () => {
  const center = window.innerHeight / 2;
  const activeSection = sections.reduce((nearest, section) => {
    const bounds = section.getBoundingClientRect();
    const distance =
      center < bounds.top
        ? bounds.top - center
        : center > bounds.bottom
          ? center - bounds.bottom
          : 0;
    return distance < nearest.distance ? { section, distance } : nearest;
  }, { section: sections[0], distance: Infinity }).section;

  document.body.dataset.theme = activeSection.id;
  navLinks.forEach((link) => {
    const active = link.hash === `#${activeSection.id}`;
    link.classList.toggle("on", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
};
let activeSectionObserver;
const observeActiveSections = () => {
  if (activeSectionObserver) activeSectionObserver.disconnect();
  const topInset = Math.round(window.innerHeight * 0.42);
  const bottomInset = Math.round(window.innerHeight * 0.48);
  activeSectionObserver = new IntersectionObserver(updateActiveSection, {
    rootMargin: `-${topInset}px 0px -${bottomInset}px 0px`,
    threshold: 0,
  });
  sections.forEach((section) => activeSectionObserver.observe(section));
};
observeActiveSections();
window.addEventListener("resize", observeActiveSections, { passive: true });
let lastScrollY = window.scrollY;
let navUpdateFrame = 0;
const updateNavVisibility = () => {
  navUpdateFrame = 0;
  const currentScrollY = window.scrollY;
  if (
    currentScrollY <= 80 ||
    nav.contains(document.activeElement) ||
    ul.classList.contains("open")
  ) {
    nav.classList.remove("nav-hidden");
  } else if (currentScrollY > lastScrollY + 5) {
    nav.classList.add("nav-hidden");
  } else if (currentScrollY < lastScrollY - 5) {
    nav.classList.remove("nav-hidden");
  }
  lastScrollY = currentScrollY;
};
window.addEventListener("scroll", () => {
  if (!navUpdateFrame) navUpdateFrame = requestAnimationFrame(updateNavVisibility);
}, { passive: true });
// Open a prefilled Gmail compose window; sending still requires the visitor's confirmation.
$("#f").addEventListener("submit", (e) => {
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
      ? "កំពុងបើក Gmail…"
      : "Opening Gmail…";
  const gmailCompose = new URL("https://mail.google.com/mail/");
  gmailCompose.search = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: "riengnarong@gmail.com",
    su: "Portfolio message from " + n,
    body: m + "\n\n" + n + " (" + em.value + ")",
  }).toString();
  location.href = gmailCompose.toString();
});
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
    const starCount = Math.min(
      120,
      Math.max(28, Math.floor((width * height) / 12500)),
    );
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
      ctx.fillStyle = lightMode
        ? "rgba(57,124,246,.38)"
        : "rgba(109,179,255,.65)";
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
      const tailX =
        meteor.x -
        meteor.vx * (meteor.length / Math.hypot(meteor.vx, meteor.vy));
      const tailY =
        meteor.y -
        meteor.vy * (meteor.length / Math.hypot(meteor.vx, meteor.vy));
      const gradient = ctx.createLinearGradient(
        tailX,
        tailY,
        meteor.x,
        meteor.y,
      );
      gradient.addColorStop(0, `hsla(${meteor.hue},100%,72%,0)`);
      gradient.addColorStop(
        0.72,
        `hsla(${meteor.hue},100%,72%,${0.48 * fade})`,
      );
      gradient.addColorStop(1, `hsla(${meteor.hue},100%,94%,${0.96 * fade})`);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = meteor.radius;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(meteor.x, meteor.y);
      ctx.stroke();

      const headGlow = ctx.createRadialGradient(
        meteor.x,
        meteor.y,
        0,
        meteor.x,
        meteor.y,
        13 * meteor.radius,
      );
      headGlow.addColorStop(0, `hsla(${meteor.hue},100%,96%,${0.95 * fade})`);
      headGlow.addColorStop(
        0.18,
        `hsla(${meteor.hue},100%,70%,${0.45 * fade})`,
      );
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
            x:
              meteor.x -
              meteor.vx * (offset / Math.hypot(meteor.vx, meteor.vy)),
            y:
              meteor.y -
              meteor.vy * (offset / Math.hypot(meteor.vx, meteor.vy)),
            vx: meteor.vx * 0.08 + (Math.random() - 0.5) * 55,
            vy: meteor.vy * 0.08 + (Math.random() - 0.5) * 55,
            life: 0,
            duration: 0.25 + Math.random() * 0.4,
            radius: Math.random() * 1.5 + 0.5,
            hue: meteor.hue,
          });
        }
      }

      if (
        progress >= 1 ||
        meteor.x < -meteor.length ||
        meteor.y > height + meteor.length
      ) {
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
      const delta = lastFrameAt
        ? Math.min((time - lastFrameAt) / 1000, 0.05)
        : 0;
      lastFrameAt = time;
      draw(time, delta);
    }
    frameId = requestAnimationFrame(animate);
  };

  const start = () => {
    if (
      !frameId &&
      heroVisible &&
      !document.hidden &&
      !motionPreference.matches
    ) {
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

(() => {
  const carousel = $("#series-carousel");
  const track = $("#series-track");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const courses = [
    {
      avatar: "⌘",
      title: "The JavaScript Workshop",
      author: "With Alex Morgan",
      episodes: "24 Episodes",
      level: "Beginner",
      category: "Programming",
    },
    {
      avatar: "🐍",
      title: "Python for Practical Projects",
      author: "With Taylor Kim",
      episodes: "18 Episodes",
      level: "Beginner",
      category: "Development",
    },
    {
      avatar: "⚛",
      title: "React: Build Real Interfaces",
      author: "With Jordan Lee",
      episodes: "32 Episodes",
      level: "Intermediate",
      category: "Web Apps",
    },
    {
      avatar: "☕",
      title: "Java Fundamentals",
      author: "With Sam Rivera",
      episodes: "21 Episodes",
      level: "Beginner",
      category: "Programming",
    },
    {
      avatar: "🐘",
      title: "SQL and Database Design",
      author: "With Casey Patel",
      episodes: "16 Episodes",
      level: "Intermediate",
      category: "Databases",
    },
    {
      avatar: "⌁",
      title: "CSS Layouts from Scratch",
      author: "With Morgan Chen",
      episodes: "14 Episodes",
      level: "Beginner",
      category: "Web Design",
    },
    {
      avatar: "🔧",
      title: "Git: Everyday Workflows",
      author: "With Jamie Park",
      episodes: "12 Episodes",
      level: "Intermediate",
      category: "Tooling",
    },
    {
      avatar: "▣",
      title: "TypeScript in Depth",
      author: "With Drew Wilson",
      episodes: "28 Episodes",
      level: "Advanced",
      category: "Programming",
    },
  ];

  const createMetaRow = (iconText, label) => {
    const row = document.createElement("li");
    const icon = document.createElement("span");
    icon.className = "series-meta-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = iconText;

    const text = document.createElement("span");
    text.textContent = label;
    row.append(icon, text);
    return row;
  };

  const createCourseCard = (course) => {
    const item = document.createElement("li");
    item.className = "series-item";

    const card = document.createElement("article");
    card.className = "series-card";

    const avatar = document.createElement("span");
    avatar.className = "series-avatar";
    avatar.setAttribute("aria-hidden", "true");
    avatar.textContent = course.avatar;

    const title = document.createElement("h3");
    title.className = "series-title";
    title.textContent = course.title;

    const author = document.createElement("p");
    author.className = "series-author";
    author.textContent = course.author;

    const divider = document.createElement("div");
    divider.className = "series-divider";
    divider.setAttribute("aria-hidden", "true");

    const meta = document.createElement("ul");
    meta.className = "series-meta";
    meta.append(
      createMetaRow("▤", course.episodes),
      createMetaRow("◈", course.level),
      createMetaRow("▣", course.category),
    );

    card.append(avatar, title, author, divider, meta);
    item.append(card);
    return item;
  };

  const originalItems = courses.map(createCourseCard);
  track.replaceChildren(...originalItems);
  track.style.setProperty("--series-gap", `${GAP}px`);

  let loopWidth = 0;
  let hovering = false;
  let pointerDown = false;
  let touching = false;
  let touchResumeTimer = 0;
  let interactionTimer = 0;
  let animationFrame = 0;
  let previousFrameTime = 0;

  const clearInteractionTimer = () => {
    if (!interactionTimer) return;
    clearTimeout(interactionTimer);
    interactionTimer = 0;
  };

  const isPaused = () =>
    reducedMotion.matches ||
    document.hidden ||
    hovering ||
    pointerDown ||
    touching ||
    touchResumeTimer !== 0 ||
    interactionTimer !== 0;

  const updateAnimation = () => {
    if (isPaused()) {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      previousFrameTime = 0;
    } else if (!animationFrame) {
      animationFrame = requestAnimationFrame(animate);
    }
  };

  const normalizeScrollPosition = () => {
    if (!loopWidth) return;

    if (DIRECTION > 0 && carousel.scrollLeft >= loopWidth) {
      carousel.scrollLeft %= loopWidth;
    } else if (DIRECTION < 0 && carousel.scrollLeft <= 0) {
      carousel.scrollLeft =
        loopWidth - ((-carousel.scrollLeft) % loopWidth);
    }
  };

  function animate(time) {
    animationFrame = 0;
    if (isPaused()) {
      previousFrameTime = 0;
      return;
    }

    if (previousFrameTime) {
      const deltaSeconds = (time - previousFrameTime) / 1000;
      carousel.scrollLeft += SPEED * DIRECTION * deltaSeconds;
      normalizeScrollPosition();
    }
    previousFrameTime = time;
    animationFrame = requestAnimationFrame(animate);
  }

  const refreshClones = () => {
    const oldProgress = loopWidth
      ? (((carousel.scrollLeft % loopWidth) + loopWidth) % loopWidth) /
        loopWidth
      : 0;

    track
      .querySelectorAll("[data-series-clone]")
      .forEach((clone) => clone.remove());

    const firstItem = originalItems[0];
    const lastItem = originalItems[originalItems.length - 1];
    loopWidth =
      lastItem.offsetLeft -
      firstItem.offsetLeft +
      lastItem.getBoundingClientRect().width;

    const totalSets = Math.ceil(carousel.clientWidth / loopWidth) + 1;
    for (let set = 1; set < totalSets; set += 1) {
      originalItems.forEach((original) => {
        const clone = original.cloneNode(true);
        clone.dataset.seriesClone = "true";
        clone.setAttribute("aria-hidden", "true");
        clone.inert = true;
        track.append(clone);
      });
    }

    carousel.scrollLeft =
      DIRECTION < 0 ? (oldProgress || 1) * loopWidth : oldProgress * loopWidth;
    normalizeScrollPosition();
  };

  const scheduleInteractionResume = () => {
    clearInteractionTimer();
    interactionTimer = window.setTimeout(() => {
      interactionTimer = 0;
      updateAnimation();
    }, RESUME_DELAY);
    updateAnimation();
  };

  refreshClones();
  new ResizeObserver(refreshClones).observe(carousel);

  carousel.addEventListener("scroll", normalizeScrollPosition, {
    passive: true,
  });
  carousel.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "touch") return;
    hovering = true;
    updateAnimation();
  });
  carousel.addEventListener("pointerleave", (event) => {
    if (event.pointerType === "touch") return;
    hovering = false;
    clearInteractionTimer();
    updateAnimation();
  });
  carousel.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") return;
    pointerDown = true;
    updateAnimation();
  });
  window.addEventListener("pointerup", () => {
    pointerDown = false;
    updateAnimation();
  });
  window.addEventListener("pointercancel", () => {
    pointerDown = false;
    updateAnimation();
  });

  carousel.addEventListener(
    "touchstart",
    () => {
      if (touchResumeTimer) clearTimeout(touchResumeTimer);
      touchResumeTimer = 0;
      touching = true;
      updateAnimation();
    },
    { passive: true },
  );
  const finishTouch = () => {
    touching = false;
    if (touchResumeTimer) clearTimeout(touchResumeTimer);
    touchResumeTimer = window.setTimeout(() => {
      touchResumeTimer = 0;
      updateAnimation();
    }, RESUME_DELAY);
    updateAnimation();
  };
  carousel.addEventListener("touchend", finishTouch, { passive: true });
  carousel.addEventListener("touchcancel", finishTouch, { passive: true });

  carousel.addEventListener(
    "wheel",
    (event) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        carousel.scrollLeft += event.deltaY;
        event.preventDefault();
      }
      scheduleInteractionResume();
    },
    { passive: false },
  );
  carousel.addEventListener("keydown", scheduleInteractionResume);
  document.addEventListener("visibilitychange", updateAnimation);
  reducedMotion.addEventListener("change", updateAnimation);
  updateAnimation();
})();
