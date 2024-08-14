import "./styles.css";
// Menu data structure
var menuLinks = [
    { text: "about", href: "/about" },
    { text: "catalog", href: "/catalog" },
    { text: "orders", href: "/orders" },
    { text: "account", href: "/account" },
  ];
  
  //part1
  const mainEl = document.querySelector("main");
  mainEl.style.backgroundColor = "var(--main-bg)";
  mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
  mainEl.classList.add("flex-ctr");
  
  //part2
  const topMenuEl = document.getElementById("top-menu");
  topMenuEl.style.height = "100%";
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");
  
  //part 3
  menuLinks.forEach((link) => {
    const a = document.createElement("a");
    a.setAttribute("href", link.href);
    a.textContent = link.text;
    topMenuEl.appendChild(a);
  });
  
  //part 4