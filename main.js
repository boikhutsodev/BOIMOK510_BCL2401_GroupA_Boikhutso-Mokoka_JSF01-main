import api from "./src/data/api";
import "./style.css";
import Alpine from "alpinejs";
window.Alpine = Alpine;

document.addEventListener("alpine:init", () => {
  Alpine.data("facts", api);
});

Alpine.start();
