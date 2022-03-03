fetch('./assets/components/nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("nav");
    newelem.className = "nav";
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
});