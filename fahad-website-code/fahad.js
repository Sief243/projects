const menu = document.getElementById("menu")
const action = document.getElementById("action")
menu.addEventListener("click", () =>
{
    HM()
})
function HM() {
    menu.classList.toggle("is-active")
    action.classList.toggle("is-active")
}
