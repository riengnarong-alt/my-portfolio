const $ = (s) => document.querySelector(s);
const S = [
  ["Computer Networking", "net", "Developing", 55],
  ["CCNA Fundamentals", "net", "Learning", 40],
  ["Linux", "term", "Developing", 50],
  ["Windows Server", "srv", "Beginner", 30],
  ["System Administration", "cog", "Developing", 45],
  ["Cybersecurity Fundamentals", "shd", "Learning", 35],
  ["Database Fundamentals", "db", "Beginner", 30],
  ["Cloud Computing", "cld", "Learning", 30],
  ["Web Hosting", "web", "Developing", 50],
  ["GitHub", "git", "Developing", 45],
  ["AWS", "cld", "Beginner", 25],
  ["Server Management", "srv", "Learning", 35],
];
$("#sk").innerHTML = S.map(
  (s) =>
    `<div class="card skill"><div class="top"><div class="ic" style="margin:0;width:40px;height:40px"><svg class="i"><use href="#${s[1]}"/></svg></div><span class="tag">${s[2]}</span></div><h3>${s[0]}</h3><div class="bar" role="progressbar" aria-label="${s[0]}: ${s[2]}" aria-valuenow="${s[3]}" aria-valuemin="0" aria-valuemax="100"><i data-w="${s[3]}"></i></div></div>`,
).join("");
$("#gl").innerHTML = [
  "Become a skilled IT professional",
  "Improve my networking skills",
  "Improve Linux and system administration skills",
  "Learn more about cybersecurity",
  "Gain real-world IT experience",
  "Learn cloud technologies",
  "Build useful IT projects",
  "Get a good job and support my family",
]
  .map((t) => `<li><svg class="i"><use href="#ck"/></svg>${t}</li>`)
  .join("");
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
const bwToggle = $("#bw-toggle");
bwToggle.onclick = () => {
  const enabled = document.body.classList.toggle("bw-mode");
  bwToggle.setAttribute("aria-pressed", enabled);
  bwToggle.setAttribute(
    "aria-label",
    enabled ? "Switch back to color" : "Switch to black and white",
  );
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
      "Please fill in your name, a valid email, and a message.";
    return;
  }
  $("#fs").style.color = "#2f80ed";
  $("#fs").textContent = "Opening your email app…";
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
