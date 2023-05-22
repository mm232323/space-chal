
let home = document.getElementById("home")
let dest = document.getElementById("dest");
let crew = document.getElementById("crew");
let tech = document.getElementById("tech");
let select = document.getElementById("select")
let moon = document.getElementById("moon")
let mars = document.getElementById("mars")
let europe = document.getElementById("europe")
let titan = document.getElementById("titan")
let selmo = document.getElementById("selmo")
let pigMoon = document.getElementById("pigMoon")
let pigMars = document.getElementById("pigMars");
let pigEurope = document.getElementById("pigEurope");
let pigTitan = document.getElementById("pigTitan");
let moonP = document.getElementById("moonP")
let marsP = document.getElementById("marsP");
let europeP = document.getElementById("europeP");
let titanP = document.getElementById("titanP");
let moonDest = document.getElementById("moonDest")
let moonTrav = document.getElementById("moonTrav");
let marsDest = document.getElementById("marsDest");
let marsTrav = document.getElementById("marsTrav");
let europeDest = document.getElementById("europeDest");
let europeTrav = document.getElementById("europeTrav");
let titanDest = document.getElementById("titanDest");
let titanTrav = document.getElementById("titanTrav");
let moonI = document.getElementById("moonI");
let marsI = document.getElementById("marsI");
let europeI = document.getElementById("europeI");
let titanI = document.getElementById("titanI");
let sel1 = document.getElementById("sel1")
let sel2 = document.getElementById("sel2");
let sel3 = document.getElementById("sel3");
let sel4 = document.getElementById("sel4")
let car1 = document.getElementById("car1")
let car2 = document.getElementById("car2");
let car3 = document.getElementById("car3");
let car4 = document.getElementById("car4");
let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let name3 = document.getElementById("name3");
let name4 = document.getElementById("name4");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let pers1 = document.getElementById("pers1")
let pers2 = document.getElementById("pers2");
let pers3 = document.getElementById("pers3");
let pers4 = document.getElementById("pers4");
let techBut1 = document.getElementById("techBut1")
let techBut2 = document.getElementById("techBut2")
let techBut3 = document.getElementById("techBut3");
let techTit1 = document.getElementById("techTit1")
let techTit2 = document.getElementById("techTit2")
let techTit3 = document.getElementById("techTit3");
let techP1 = document.getElementById("techP1")
let techP2 = document.getElementById("techP2")
let techP3 = document.getElementById("techP3");
let techI1 = document.getElementById("techI1")
let techI2 = document.getElementById("techI2")
let techI3 = document.getElementById("techI3");
let icon = document.getElementById("icon")
home.onclick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    select.style.cssText = "  background-color:rgba(255, 255, 255, 0.856);position:absolute;width:100px;height:4px;top:94%;left:115px;transition-duration:.5s;transition-timing-function: cubic-bezier(0.5, 0, 0.25, 1);transform:scaleX(1)";
}
if (window.scrollY < 780) {
  select.style.cssText =
    "  background-color:rgba(255, 255, 255, 0.856);position:absolute;width:100px;height:4px;top:94%;left:115px;transition-duration:.5s;transition-timing-function: cubic-bezier(0.5, 0, 0.25, 1);transform:scaleX(1)";
}
dest.onclick = () => {
  window.scrollTo({
    top: 790,
    left: 0,
    behavior:"smooth"
  })
  select.style.cssText = "left:269px;transform:scaleX(1.66)";
}
moon.onclick = () => {
  selmo.style.cssText =
    "left:797px";
  pigMoon.style.cssText =
    "opacity:100%;filter:blur(0);transition-duration:.5s;"
  pigMars.style.cssText =
    "opacity:0%;filter:blur(10px);transition-duration:.5s;"
  pigEurope.style.cssText =
    "opacity:0%;filter:blur(10px);transition-duration:.5s;";
  pigTitan.style.cssText =
    "opacity:0%;filter:blur(10px);transition-duration:.5s;";
  moonP.style.cssText =
    "opacity:100%;filter:blur(0);transition-duration:.5s;"
  marsP.style.cssText =
    "opacity:0%;filter:blur(5px);transition-duration:.5s;";
  europeP.style.cssText =
    "opacity:0%;filter:blur(5px);transition-duration:.5s;";
  titanP.style.cssText =
    "opacity:0%;filter:blur(5px);transition-duration:.5s;";
  moonDest.style.cssText =
    "opacity:100%;filter:blur(0);transition-duration:.5s;";
  marsDest.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  europeDest.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  titanDest.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  moonTrav.style.cssText =
    "opacity:100%;filter:blur(0);transition-duration:.5s;";
  marsTrav.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  europeTrav.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  titanTrav.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  moonI.style.cssText =
    'opacity:100%;filter:blur(0);transition-duration:.5s;filter: contrast(1.25) brightness(1.2);'
  marsI.style.cssText =
    "opacity:0%;filter:blur(12px);transition-duration:.5s;";
  europeI.style.cssText =
    "opacity:0%;filter:blur(12px);transition-duration:.5s;";
  titanI.style.cssText =
    "opacity:0%;filter:blur(12px);transition-duration:.5s;";

};
mars.onclick = () => {
  selmo.style.cssText =
    'left:896px'
  pigMoon.style.cssText =
    "opacity:0%;filter:blur(10px);transition-duration:.5s;";
  pigMars.style.cssText =
    "opacity:100%;filter:blur(0);transition-duration:.5s;";
  pigEurope.style.cssText =
    "opacity:0%;filter:blur(10px);transition-duration:.5s;";
  pigTitan.style.cssText =
    "opacity:0%;filter:blur(10px);transition-duration:.5s;";
  moonP.style.cssText =
    "opacity:0%;filter:blur(5px);transition-duration:.5s;";
  marsP.style.cssText =
    "opacity:100%;filter:blur(0);transition-duration:.5s;";
  europeP.style.cssText =
    "opacity:0%;filter:blur(5px);transition-duration:.5s;";
  titanP.style.cssText =
  "opacity:0%;filter:blur(5px);transition-duration:.5s;";
  moonDest.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  marsDest.style.cssText =
    "opacity:100%;filter:blur(0);transition-duration:.5s;";
  europeDest.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  titanDest.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  moonTrav.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  marsTrav.style.cssText =
    "opacity:100%;filter:blur(0);transition-duration:.5s;";
  europeTrav.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  titanTrav.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  moonI.style.cssText =
    "opacity:0%;filter:blur(12px);transition-duration:.5s;filter: contrast(1.25) brightness(1.2);";
  marsI.style.cssText =
    "opacity:100%;filter:blur(0);transition-duration:.5s;";
  europeI.style.cssText =
    "opacity:0%;filter:blur(12px);transition-duration:.5s;";
  titanI.style.cssText =
    "opacity:0%;filter:blur(12px);transition-duration:.5s;";
}
europe.onclick = () => {
  selmo.style.cssText =
    'left:998.5px;width:90px'
  pigMoon.style.cssText =
    "opacity:0%;filter:blur(10px);transition-duration:.5s;";
  pigMars.style.cssText =
    "opacity:0%;filter:blur(10px);transition-duration:.5s;";
  pigEurope.style.cssText =
    "opacity:100%;filter:blur(0);transition-duration:.5s;";
  pigTitan.style.cssText =
    "opacity:0%;filter:blur(10px);transition-duration:.5s;";
  moonP.style.cssText =
    "opacity:0%;filter:blur(5px);transition-duration:.5s;";
  marsP.style.cssText =
    "opacity:0%;filter:blur(5px);transition-duration:.5s;";
  europeP.style.cssText =
    "opacity:100%;filter:blur(0);transition-duration:.5s;";
  titanP.style.cssText =
  "opacity:0%;filter:blur(5px);transition-duration:.5s;";
  moonDest.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  marsDest.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  europeDest.style.cssText =
    "opacity:100%;filter:blur(0);transition-duration:.5s;";
  titanDest.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  moonTrav.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  marsTrav.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  europeTrav.style.cssText =
    "opacity:100%;filter:blur(0);transition-duration:.5s;";
  titanTrav.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  moonI.style.cssText =
    "opacity:0%;filter:blur(12px);transition-duration:.5s;filter: contrast(1.25) brightness(1.2);";
  marsI.style.cssText =
    "opacity:0%;filter:blur(12px);transition-duration:.5s;";
  europeI.style.cssText =
    "opacity:100%;filter:blur(0);transition-duration:.5s;";
  titanI.style.cssText =
    "opacity:0%;filter:blur(12px);transition-duration:.5s;";
}
titan.onclick = () => {
  selmo.style.cssText =
    "left:1128px;width:73px";
  pigMoon.style.cssText =
    "opacity:0%;filter:blur(10px);transition-duration:.5s;";
  pigMars.style.cssText =
    "opacity:0%;filter:blur(10px);transition-duration:.5s;";
  pigEurope.style.cssText =
    "opacity:0%;filter:blur(10px);transition-duration:.5s;";
  pigTitan.style.cssText =
    "opacity:100%;filter:blur(0);transition-duration:.5s;";
  moonP.style.cssText =
    "opacity:0%;filter:blur(5px);transition-duration:.5s;";
  marsP.style.cssText =
    "opacity:0%;filter:blur(5px);transition-duration:.5s;";
  europeP.style.cssText =
    "opacity:0%;filter:blur(5px);transition-duration:.5s;";
  titanP.style.cssText =
  "opacity:100%;filter:blur(0);transition-duration:.5s;";
  moonDest.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  marsDest.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  europeDest.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  titanDest.style.cssText =
    "opacity:100%;filter:blur(0);transition-duration:.5s;";
  moonTrav.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  marsTrav.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  europeTrav.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.5s;";
  titanTrav.style.cssText =
    "opacity:100%;filter:blur(0);transition-duration:.5s;";
  moonI.style.cssText =
    "opacity:0%;filter:blur(12px);transition-duration:.5s;filter: contrast(1.25) brightness(1.2);";
  marsI.style.cssText =
    "opacity:0%;filter:blur(12px);transition-duration:.5s;";
  europeI.style.cssText =
    "opacity:0%;filter:blur(12px);transition-duration:.5s;";
  titanI.style.cssText =
    "opacity:100%;filter:blur(0);transition-duration:.5s;";
};

crew.onclick = () => {
  window.scrollTo({
    top: 1690,
    left: 0,
    behavior:"smooth"
  })
  select.style.cssText = '  background-color: rgba(255, 255, 255, 0.856);position: absolute;width: 100px;height: 4px;top: 94%;left: 422px;transition-duration: .5s;transition-timing-function: cubic-bezier(0.5, 0, 0.25, 1);transform:scaleX(0.9)'
}
if (window.scrollY > 1650) {
  select.style.cssText =
    'background-color: rgba(255, 255, 255, 0.856);position: absolute;width: 100px;height: 4px;top: 94%;left: 422px;transition-duration: .5s;transition-timing-function: cubic-bezier(0.5, 0, 0.25, 1);transform:scaleX(1)';
}
sel1.onclick = () => {
  car1.style.cssText =
    'opacity:50%;filter:blur(0);transform:translateY(0)'
  car2.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  car3.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  car4.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  name1.style.cssText =
  "opacity:100%;filter:blur(0);transform:translateY(0)";
  name2.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  name3.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  name4.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  p1.style.cssText =
    "opacity:100%;filter:blur(0);transform:translateY(0)";
  p2.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  p3.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  p4.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  sel1.style.cssText = 'opacity:100%'
  sel2.style.cssText = "opacity:50%";
  sel3.style.cssText = "opacity:50%";
  sel4.style.cssText = "opacity:50%";
  pers1.style.cssText =
    'opacity:100%;transform:translateY(0);filter:blur(0);transition-duration:.5s;'
  pers2.style.cssText =
    "opacity:0%;transform:translateY(20px);filter:blur(8px);transition-duration:.5s;";
  pers3.style.cssText =
    "opacity:0%;transform:translateY(20px);filter:blur(8px);transition-duration:.5s;";
  pers4.style.cssText =
    "opacity:0%;transform:translateY(20px);filter:blur(8px);transition-duration:.5s;";
}
sel2.onclick = () => {
  car1.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  car2.style.cssText =
    "opacity:50%;filter:blur(0);transform:translateY(0)";
  car3.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  car4.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  name1.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  name2.style.cssText =
    "opacity:100%;filter:blur(0);transform:translateY(0)";
  name3.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  name4.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  p1.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  p2.style.cssText =
    "opacity:100%;filter:blur(0);transform:translateY(0)";
  p3.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  p4.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
    sel1.style.cssText = "opacity:50%";
    sel2.style.cssText = "opacity:100%";
    sel3.style.cssText = "opacity:50%";
  sel4.style.cssText = "opacity:50%";
  pers1.style.cssText =
    "opacity:0%;transform:translateY(20px);filter:blur(8px);transition-duration:.5s;";
  pers2.style.cssText =
    "opacity:100%;transform:translateY(0);filter:blur(0);transition-duration:.5s;";
  pers3.style.cssText =
    "opacity:0%;transform:translateY(20px);filter:blur(8px);transition-duration:.5s;";
  pers4.style.cssText =
    "opacity:0%;transform:translateY(20px);filter:blur(8px);transition-duration:.5s;";
};
sel3.onclick = () => {
  car1.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  car2.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  car3.style.cssText =
    "opacity:50%;filter:blur(0);transform:translateY(0)";
  car4.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  name1.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  name2.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  name3.style.cssText =
    "opacity:100%;filter:blur(0);transform:translateY(0)";
  name4.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  p1.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  p2.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  p3.style.cssText =
    "opacity:100%;filter:blur(0);transform:translateY(0)";
  p4.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  sel1.style.cssText = "opacity:50%";
  sel2.style.cssText = "opacity:50%";
  sel3.style.cssText = "opacity:100%";
  sel4.style.cssText = "opacity:50%";
  pers1.style.cssText =
    "opacity:0%;transform:translateY(20px);filter:blur(8px);transition-duration:.5s;";
  pers2.style.cssText =
    "opacity:0%;transform:translateY(20px);filter:blur(8px);transition-duration:.5s;";
  pers3.style.cssText =
    "opacity:100%;transform:translateY(0);filter:blur(0);transition-duration:.5s;";
  pers4.style.cssText =
    "opacity:0%;transform:translateY(20px);filter:blur(8px);transition-duration:.5s;";
};
sel4.onclick = () => {
  car1.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  car2.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  car3.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  car4.style.cssText =
    "opacity:50%;filter:blur(0);transform:translateY(0)";
  name1.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  name2.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  name3.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  name4.style.cssText =
    "opacity:100%;filter:blur(0);transform:translateY(0)";
  p1.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  p2.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  p3.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px)";
  p4.style.cssText =
    "opacity:100%;filter:blur(0);transform:translateY(0)";
  sel1.style.cssText = "opacity:50%";
  sel2.style.cssText = "opacity:50%";
  sel3.style.cssText = "opacity:50%";
  sel4.style.cssText = "opacity:100%";
  pers1.style.cssText =
    "opacity:0%;transform:translateY(20px);filter:blur(8px);transition-duration:.5s;";
  pers2.style.cssText =
    "opacity:0%;transform:translateY(20px);filter:blur(8px);transition-duration:.5s;";
  pers3.style.cssText =
    "opacity:0%;transform:translateY(20px);filter:blur(8px);transition-duration:.5s;";
  pers4.style.cssText =
    "opacity:100%;transform:translateY(0);filter:blur(0);transition-duration:.5s;";
};
sel1.click()
tech.onclick = () => {
  window.scrollTo({
    top: 2500,
    left: 0,
    behavior:"smooth"
  })
  select.style.cssText =
    "background-color: rgba(255, 255, 255, 0.856);position: absolute;width: 190px;height: 4px;top: 94%;left: 535px;transition-duration: .5s;transition-timing-function: cubic-bezier(0.5, 0, 0.25, 1);transform:scaleX(0.9)";
}
techBut1.onclick = () => {
  techBut1.style.cssText =
    "background-color: rgba(255, 255, 255, 0.897);color: rgb(0, 0, 59);";
  techBut2.style.cssText =
    "background-color: transparent ;color: white";
  techBut3.style.cssText =
    "background-color: transparent;color: white";
  techTit1.style.cssText =
    "opacity:100%;filter:blur(0);transform:translateY(0);transition-duration:.4s;  font-family: 'Bellefair', serif !important;"
  techTit2.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px);transition-duration:.4s;    font-family: 'Bellefair', serif !important;";
  techTit3.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px);transition-duration:.4s;    font-family: 'Bellefair', serif !important;";
  techP1.style.cssText =
    'opacity:100%;filter:blur(0);transform:translateY(0);transition-duration:.4s;'
  techP2.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px);transition-duration:.4s;";
  techP3.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px);transition-duration:.4s;";
  techI1.style.cssText =
    "opacity:100%;filter:blur(0);transform:translateY(0);transition-duration:.4s;";
  techI2.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px);transition-duration:.4s;";
  techI3.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px);transition-duration:.4s;";
}
techBut2.onclick = () => {
  techBut1.style.cssText =
    "background-color: transparent;color: white;";
  techBut2.style.cssText =
    "background-color: rgba(255, 255, 255, 0.897);color: rgb(0, 0, 59);";
  techBut3.style.cssText =
    "background-color: transparent;color: white";
  techTit1.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px);transition-duration:.4s;    font-family: 'Bellefair', serif !important;";
  techTit2.style.cssText =
    "opacity:100%;filter:blur(0);transform:translateY(0);transition-duration:.4s;    font-family: 'Bellefair', serif !important;";
  techTit3.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px);transition-duration:.4s;    font-family: 'Bellefair', serif !important;";
  techP1.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px);transition-duration:.4s;";
  techP2.style.cssText =
    "opacity:100%;filter:blur(0);transform:translateY(0);transition-duration:.4s;";
  techP3.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px);transition-duration:.4s;";
  techI1.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px);transition-duration:.4s;";
  techI2.style.cssText =
    "opacity:100%;filter:blur(0);transform:translateY(0);transition-duration:.4s;";
  techI3.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px);transition-duration:.4s;";
};
techBut3.onclick = () => {
  techBut1.style.cssText =
    "background-color: transparent;color: white";
  techBut2.style.cssText =
    "background-color: transparent;color: white";
  techBut3.style.cssText =
    "background-color: rgba(255, 255, 255, 0.897);color: rgb(0, 0, 59);";
  techTit1.style.cssText =
    "opacity:0%;filter:blur(8);transform:translateY(20px);transition-duration:.4s;    font-family: 'Bellefair', serif !important;";
  techTit2.style.cssText =
    "opacity:0%;filter:blur(8);transform:translateY(20px);transition-duration:.4s;    font-family: 'Bellefair', serif !important;";
  techTit3.style.cssText =
    "opacity:100%;filter:blur(0);transform:translateY(0);transition-duration:.4s;    font-family: 'Bellefair', serif !important;";
  techP1.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px);transition-duration:.4s;";
  techP2.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px);transition-duration:.4s;";
  techP3.style.cssText =
    "opacity:100%;filter:blur(0);transform:translateY(0);transition-duration:.4s;";
  techI1.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px);transition-duration:.4s;";
  techI2.style.cssText =
    "opacity:0%;filter:blur(8px);transform:translateY(20px);transition-duration:.4s;";
  techI3.style.cssText =
    "opacity:100%;filter:blur(0);transform:translateY(0);transition-duration:.4s;";
};
techBut1.click()
icon.onclick = () => {
  console.log("hello");
  window.open("challenge.html","_self");
}