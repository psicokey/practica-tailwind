window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    const progressBar = document.getElementById("progress-bar");
    progressBar.style.width = scrollPercent + "%";
});