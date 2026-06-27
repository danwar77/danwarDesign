const languageButtons = document.querySelectorAll("[data-set-lang]");
    const year = document.getElementById("year");

    year.textContent = new Date().getFullYear();

    languageButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const lang = button.dataset.setLang;
        document.body.dataset.activeLang = lang;
        document.documentElement.lang = lang;
        languageButtons.forEach((item) => {
          item.setAttribute("aria-pressed", String(item === button));
        });
      });
    });

