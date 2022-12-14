
Array.from(document.querySelectorAll(".lab-wrapper")).forEach(item => {
    item.addEventListener('click', function (e) {
        const box = e.target.nextElementSibling
        const icon = e.target.lastElementChild
        box.classList.toggle("show")
        icon.classList.remove("fa-chevron-down")
        icon.classList.add("fa-chevron-up")
        if (!box.classList.contains('show')) {
            icon.classList.add("fa-chevron-down")
            icon.classList.remove("fa-chevron-up")
        }
    })
})