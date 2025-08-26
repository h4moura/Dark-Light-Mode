const toggleContainer = document.querySelector(".toggle-container")
const backgroundContainer = document.querySelector(".background-container")
toggleContainer.addEventListener("click", () => {
  toggleContainer.classList.toggle("dark");
  backgroundContainer.classList.toggle("dark");
})

const cursor = document.querySelector(".cursor");

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    // Captura posição real do mouse
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Loop de animação suave
    function animate() {
      cursorX += (mouseX - cursorX) * 0.15; // suaviza movimento
      cursorY += (mouseY - cursorY) * 0.15;

      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";

      requestAnimationFrame(animate);
    }

    animate();

    animate();