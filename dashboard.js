const $ = (selector, root = document) => root.querySelector(selector);
const SVG_NS = "http://www.w3.org/2000/svg";
const languageButtons = [...document.querySelectorAll("[data-language]")];
const content = $("#dashboard-content");
const loadStatus = $("#load-status");
const appShell = $(".app-shell");
const sidebarToggle = $("#sidebar-toggle");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const colorSchemePreference = window.matchMedia("(prefers-color-scheme: light)");

let dashboardData;
let currentLanguage = "en";
let observer;
let navObserver;
let savedTheme = null;

try {
  const theme = localStorage.getItem("portfolio-theme");
  if (theme === "light" || theme === "dark") savedTheme = theme;
} catch (error) {
  console.warn("Unable to read the saved theme preference.", error);
}

const updateTheme = () => {
  document.documentElement.dataset.theme =
    savedTheme || (colorSchemePreference.matches ? "light" : "dark");
};

updateTheme();
colorSchemePreference.addEventListener("change", () => {
  if (!savedTheme) updateTheme();
});
window.addEventListener("storage", (event) => {
  if (event.key !== "portfolio-theme") return;
  savedTheme =
    event.newValue === "light" || event.newValue === "dark"
      ? event.newValue
      : null;
  updateTheme();
});

try {
  currentLanguage =
    localStorage.getItem("portfolio-language") === "km" ? "km" : "en";
} catch (error) {
  console.warn("Unable to read the saved language preference.", error);
}

const localized = (value) => {
  if (value && typeof value === "object") {
    return value[currentLanguage] || value.en || "";
  }
  return value == null ? "" : String(value);
};

const makeElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = localized(text);
  return element;
};

const updateSidebarToggle = () => {
  const collapsed = appShell.classList.contains("is-collapsed");
  const labelKey = collapsed ? "expandSidebar" : "collapseSidebar";
  const fallbackLabel = collapsed ? "Expand sidebar" : "Collapse sidebar";
  const label = dashboardData
    ? localized(dashboardData.ui[labelKey])
    : fallbackLabel;
  sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
  sidebarToggle.setAttribute("aria-label", label);
  sidebarToggle.title = label;
};

const makeSvgElement = (tag, attributes = {}) => {
  const element = document.createElementNS(SVG_NS, tag);
  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, String(value));
  });
  return element;
};

const setUiText = () => {
  document.title = localized(dashboardData.pageTitle);
  const description = localized(dashboardData.metaDescription);
  document.querySelector('meta[name="description"]').content = description;
  document.querySelector('meta[property="og:title"]').content =
    localized(dashboardData.pageTitle);
  document.querySelector('meta[property="og:description"]').content = description;
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-ui]").forEach((element) => {
    const key = element.dataset.ui;
    const value = dashboardData.ui[key];
    element.textContent = localized(value);
  });
  document.querySelectorAll("[data-ui-aria]").forEach((element) => {
    const key = element.dataset.uiAria;
    element.setAttribute("aria-label", localized(dashboardData.ui[key]));
  });
  document.querySelectorAll(".nav-link").forEach((link) => {
    const label = link.querySelector("span").textContent.trim();
    link.dataset.tooltip = label;
    link.setAttribute("aria-label", label);
  });
  document.querySelectorAll("[data-heading]").forEach((element) => {
    const key = element.dataset.heading;
    element.textContent = localized(dashboardData.sections[key]);
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.language === currentLanguage),
    );
  });
  $("#page-title").textContent = localized(dashboardData.ui.title);
  $("#load-status").textContent = localized(dashboardData.ui.loaded);
  updateSidebarToggle();
};

const animateCounter = (element, target) => {
  if (reducedMotion.matches || target === 0) {
    element.textContent = String(target);
    return;
  }
  const start = performance.now();
  const duration = 650;
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    element.textContent = String(Math.round(target * progress));
    if (progress < 1) window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
};

const renderKpis = () => {
  const grid = $("#kpi-grid");
  grid.replaceChildren();
  grid.setAttribute("aria-label", localized(dashboardData.sections.kpiLabel));
  dashboardData.metrics.forEach((metric) => {
    const card = makeElement("article", "kpi-card reveal");
    const label = makeElement("p", "kpi-label", metric.label);
    const value = makeElement("p", "kpi-value", "");
    const detail = makeElement("p", "kpi-detail", metric.detail);
    value.setAttribute("aria-label", localized(metric.valueLabel));
    if (typeof metric.value === "number") {
      value.dataset.count = String(metric.value);
      value.textContent = "0";
    } else {
      value.classList.add("is-text");
      value.textContent = localized(metric.value);
    }
    card.append(label, value, detail);
    grid.append(card);
  });
};

const renderSkills = () => {
  const list = $("#skills-list");
  list.replaceChildren();
  dashboardData.skills.forEach((skill) => {
    const row = makeElement("div", "skill-row reveal");
    const labelRow = makeElement("div", "skill-label-row");
    const name = makeElement("span", "", skill.name);
    const level = makeElement("span", "skill-level", `${skill.level}%`);
    const meter = makeElement("progress", "skill-progress");
    meter.max = 100;
    meter.value = 0;
    meter.setAttribute("aria-label", localized(skill.ariaLabel));
    meter.setAttribute("aria-valuetext", localized(skill.levelText));
    meter.dataset.level = String(skill.level);
    labelRow.append(name, level);
    row.append(labelRow, meter);
    list.append(row);
  });
};

const renderCertificates = () => {
  const list = $("#certificates-list");
  list.replaceChildren();
  dashboardData.certificates.forEach((certificate) => {
    const item = makeElement("li", "timeline-item reveal");
    item.append(
      makeElement("h3", "timeline-title", certificate.name),
      makeElement("p", "timeline-meta", certificate.issuer),
    );
    list.append(item);
  });
};

const renderProjects = () => {
  const grid = $("#projects-grid");
  grid.replaceChildren();
  dashboardData.projects.forEach((project) => {
    const card = makeElement("article", "project-card reveal");
    card.append(
      makeElement("h3", "", project.name),
      makeElement("span", "status-pill", project.status),
    );
    grid.append(card);
  });
};

const renderRoadmap = () => {
  const list = $("#roadmap-list");
  list.replaceChildren();
  dashboardData.roadmap.stages.forEach((stage, index) => {
    const item = makeElement("li", "roadmap-step reveal");
    const number = makeElement("span", "roadmap-number", String(index + 1));
    number.setAttribute("aria-hidden", "true");
    item.append(number, makeElement("span", "", stage.name));
    if (stage.current) {
      item.setAttribute("aria-current", "step");
      item.setAttribute("aria-label", localized(stage.currentLabel));
    }
    list.append(item);
  });
};

const renderTopology = () => {
  const figure = $("#topology-figure");
  figure.replaceChildren();
  const svg = makeSvgElement("svg", {
    class: "topology-svg",
    viewBox: "0 0 680 250",
    role: "img",
    "aria-labelledby": "topology-svg-title topology-svg-desc",
  });
  const title = makeSvgElement("title", { id: "topology-svg-title" });
  title.textContent = localized(dashboardData.topology.title);
  const description = makeSvgElement("desc", { id: "topology-svg-desc" });
  description.textContent = localized(dashboardData.topology.description);
  svg.append(title, description);
  svg.append(
    makeSvgElement("line", { class: "topology-link", x1: 160, y1: 125, x2: 220, y2: 125 }),
    makeSvgElement("line", { class: "topology-link", x1: 440, y1: 125, x2: 500, y2: 125 }),
  );
  dashboardData.topology.nodes.forEach((node) => {
    const group = makeSvgElement("g");
    group.append(
      makeSvgElement("rect", {
        class: "topology-node",
        x: node.x,
        y: node.y,
        width: node.width,
        height: node.height,
        rx: 15,
      }),
    );
    node.lines.forEach((line, index) => {
      const text = makeSvgElement("text", {
        class: index === 0 ? "topology-node-title" : "topology-node-detail",
        x: node.x + node.width / 2,
        y: node.y + 35 + index * 21,
      });
      text.textContent = localized(line);
      group.append(text);
    });
    svg.append(group);
  });
  const caption = makeElement("figcaption", "topology-caption", dashboardData.topology.caption);
  figure.append(svg, caption);
};

const renderHardening = () => {
  const list = $("#hardening-list");
  list.replaceChildren();
  dashboardData.hardening.items.forEach((entry) => {
    const item = makeElement("li", "checklist-item reveal");
    const icon = makeElement("span", "check-icon", "•");
    icon.setAttribute("aria-hidden", "true");
    item.append(
      icon,
      makeElement("span", "checklist-text", entry.name),
      makeElement("span", "practice-label", dashboardData.hardening.practiceLabel),
    );
    list.append(item);
  });
};

const observeNavigation = () => {
  if (navObserver) navObserver.disconnect();
  if (!("IntersectionObserver" in window)) return;
  const links = [...document.querySelectorAll(".nav-link")];
  navObserver = new IntersectionObserver(
    (entries) => {
      const current = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)[0];
      if (!current) return;
      links.forEach((link) => {
        if (link.hash === `#${current.target.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    { rootMargin: "-12% 0px -70% 0px", threshold: 0 },
  );
  links.forEach((link) => {
    const section = document.querySelector(link.hash);
    if (section) navObserver.observe(section);
  });
};

const renderDashboard = () => {
  setUiText();
  $("#topology-copy").textContent = localized(dashboardData.topology.copy);
  $("#hardening-copy").textContent = localized(dashboardData.hardening.copy);
  renderKpis();
  renderSkills();
  renderCertificates();
  renderProjects();
  renderRoadmap();
  renderTopology();
  renderHardening();
  loadStatus.hidden = true;
  content.hidden = false;
  observeAnimations();
  observeNavigation();
};

const observeAnimations = () => {
  if (observer) observer.disconnect();
  const revealItems = document.querySelectorAll(".reveal");
  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => {
      item.classList.add("is-visible");
      const count = $("[data-count]", item);
      if (count) count.textContent = count.dataset.count;
      const meter = $("progress[data-level]", item);
      if (meter) meter.value = Number(meter.dataset.level);
    });
    return;
  }
  observer = new IntersectionObserver(
    (entries, activeObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const item = entry.target;
        item.classList.add("is-visible");
        const count = $("[data-count]", item);
        if (count) animateCounter(count, Number(count.dataset.count));
        const meter = $("progress[data-level]", item);
        if (meter) meter.value = Number(meter.dataset.level);
        activeObserver.unobserve(item);
      });
    },
    { threshold: 0.18 },
  );
  revealItems.forEach((item) => observer.observe(item));
};

const setLanguage = (language) => {
  currentLanguage = language;
  try {
    localStorage.setItem("portfolio-language", language);
  } catch (error) {
    console.warn("Unable to save the language preference.", error);
  }
  if (dashboardData) renderDashboard();
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

sidebarToggle.addEventListener("click", () => {
  appShell.classList.toggle("is-collapsed");
  updateSidebarToggle();
});

fetch("./data.json", { credentials: "same-origin" })
  .then((response) => {
    if (!response.ok) throw new Error(`Dashboard data request failed: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    dashboardData = data;
    renderDashboard();
  })
  .catch((error) => {
    console.error("Unable to load dashboard data.", error);
    loadStatus.textContent =
      currentLanguage === "km"
        ? "មិនអាចផ្ទុកទិន្នន័យផ្ទាំងគ្រប់គ្រងបានទេ។ សូមផ្ទុកទំព័រឡើងវិញ។"
        : "Unable to load dashboard data. Please reload the page.";
  });
