const botonAzul = document.getElementById("azul");
const botonVerde = document.getElementById("verde");
const botonReset = document.getElementById("reset");

botonAzul.addEventListener("click", () => {
    document.body.className = "bg-indigo-800 text-indigo-200 transition duration-500 ease-in-out h-screen flex items-center justify-center";
});

botonVerde.addEventListener("click", () => {
    document.body.className = "bg-emerald-800 text-emerald-200 transition duration-500 ease-in-out h-screen flex items-center justify-center";
});

botonReset.addEventListener("click", () => {
    document.body.className = "bg-neutral-900 text-slate-50 transition duration-500 ease-in-out h-screen flex items-center justify-center";
});