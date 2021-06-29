const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}

function dragstart(e) {
  e.target.classList.add("hold");
  setTimeout(() => e.target.classList.add("hide"), 0);
  console.log(e.target);
  item.style.backgroundColor = "rgb(87,236,76)";
}

function dragend(e) {
  e.target.classList.remove("hold");
  e.target.classList.remove("hide");
  // e.target.className='item';// то же самое(затёрли все классы и присвоили item )
}

function dragover(e) {
  e.preventDefault();
}

function dragenter(e) {
  e.target.classList.add("hovered");
  console.log(e.target);
}

function dragleave(e) {
  e.target.classList.remove("hovered");
}

function dragdrop(e) {
  e.target.append(item);
  e.target.classList.remove("hovered");

  for (let i = 0; i < placeholders.length; i++) {
    if (e.target === placeholders[1])
      e.target.childNodes[0].style.backgroundColor = "rgb(56,110,217)";
    if (e.target === placeholders[2])
      e.target.childNodes[0].style.backgroundColor = "rgb(251,63,180)";
  }
}
