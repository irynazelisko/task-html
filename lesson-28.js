

/*Завдання №1*/

const image = document.getElementById("image");

image.addEventListener("click", function () {
  image.classList.toggle("image-enlarged");
  image.style.transform = image.classList.contains("image-enlarged") ? "scale(1.2)" : "scale(1)";
});

/* Завдання №2 */

const sections = document.querySelectorAll('.central-title');
let letters = ["a", "b", "c", "d"]

for (let i = 0; i < sections.length; i++) {
  const title = sections[i];
  const letter = letters[i].toUpperCase();
  title.innerHTML = `<span class="title-letter">${letter}</span>${title.innerHTML}`;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    document.getElementById("sectionA").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  } else if (event.key === "b") {
    document.getElementById("sectionB").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  } else if (event.key === "c") {
    document.getElementById("sectionC").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  } else if (event.key === "d") {
    document.getElementById("sectionD").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
});
