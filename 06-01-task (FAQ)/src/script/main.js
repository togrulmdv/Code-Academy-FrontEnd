const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item) => {
  const header = item.querySelector("header");

  header.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    closeAllAccordionItems();

    if (!isOpen) {
      openAccordionItem(item);
    }
  });
});

function closeAllAccordionItems() {
  accordionContent.forEach((item) => {
    item.classList.remove("open");
    item.querySelector(".description").style.height = "0px";
    item.querySelector("i").classList.replace("fa-minus", "fa-plus");
  });
}

function openAccordionItem(item) {
  item.classList.add("open");
  const description = item.querySelector(".description");
  description.style.height = `${description.scrollHeight}px`;
  item.querySelector("i").classList.replace("fa-plus", "fa-minus");
}