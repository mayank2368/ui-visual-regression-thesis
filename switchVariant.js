window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const variant = params.get("variant");

  if (variant && variant !== "baseline") {
    document.getElementById("variant").href = `variants/${variant}.css`;
  }
});
