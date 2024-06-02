document.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll(".btn-filter");
    const items = document.querySelectorAll(".menu-item");

    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const category = e.currentTarget.dataset.id;

            items.forEach((item) => {
                if (category === "all") {
                    item.style.display = "block";
                } else {
                    if (item.querySelector("img").classList.contains(category)) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                }
            });
        });
    });
});