
const stockSW = "/uv/sw.js";
const swAllowedHostnames = ["localhost", "127.0.0.1"];
addEventListener("DOMContentLoaded", async (event) => {
    registerSW()
});

//to whoever used the register sw from ultraviolet v3
//what were you thinking lmao

async function registerSW() {
    if (!navigator.serviceWorker) {
    if (
      location.protocol !== "https:" &&
      !swAllowedHostnames.includes(location.hostname)
    )
      throw new Error("Service workers cannot be registered without https.");
    
    throw new Error("Your browser doesn't support service workers.");
    }
    
    await navigator.serviceWorker.register(stockSW);
    }