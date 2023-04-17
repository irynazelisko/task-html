

/*Завдання №1*/

const image = document.getElementById("image");

image.addEventListener("click", function () {
  image.classList.toggle("image-enlarged");
  image.style.transform = image.classList.contains("image-enlarged") ? "scale(1.2)" : "scale(1)";
});

/* Завдання №2 */

const sections = document.querySelectorAll('.central-title');
let letters = ["a", "b", "c", "d","e"]

for (let i = 0; i < sections.length; i++) {
  const title = sections[i];
  const letter = letters[i].toUpperCase();
  title.innerHTML = `<span class="title-letter">${letter}</span>${title.innerHTML}`;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
     const section = document.getElementById("sectionA")
     section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  } else if (event.key === "b") {
    const section = document.getElementById("sectionB")
    section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  } else if (event.key === "c") {
    const section = document.getElementById("sectionC")
    section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  } else if (event.key === "d") {
    const section = document.getElementById("sectionD")
    section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  } else if (event.key === "e") {
    const section = document.getElementById("sectionD")
    section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
});
