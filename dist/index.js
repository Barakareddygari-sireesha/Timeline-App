var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchEvents } from "./fetcher.js";
import { renderTimeline } from "./renderer.js";
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const events = yield fetchEvents();
    renderTimeline(events);
}));
const themeToggle = document.getElementById("theme-toggle");
const themeLink = document.getElementById("theme-link");
themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
        themeLink.setAttribute("href", "css/dark.css");
    }
    else {
        themeLink.setAttribute("href", "css/light.css");
    }
});
//# sourceMappingURL=index.js.map