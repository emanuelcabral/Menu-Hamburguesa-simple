    const card = document.getElementById("card");
    const row = card; // usamos el mismo elemento para aria-expanded
    let isExpanded = false;

    function handleClick() {
      isExpanded = row.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        card.classList.remove("active");
      } else {
        card.classList.add("active");
      }
      // Aquí podrías añadir animaciones si lo deseas
      isExpanded = !isExpanded;
      row.setAttribute("aria-expanded", isExpanded);
      row.setAttribute("aria-label", isExpanded ? "Close Menu" : "Open Menu");
    }