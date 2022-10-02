var linebox = document.querySelector(".linebox");
var nav_content = document.querySelector(".nav_content");
var contents = document.querySelectorAll(".nav_content li")

linebox.addEventListener("click", function () {
    this.classList.toggle("active");
    nav_content.classList.toggle("open");
    contents.forEach((item, index) => {

        if (item.style.animation) {
            item.style.animation = "";
            item.classList.add("slidout");

        } else {
            item.classList.remove("slidout");
            item.style.animation = `slidinto 0.3s ease-in forwards ${index * 0.1 + 0.3}s`
        }
    })

})