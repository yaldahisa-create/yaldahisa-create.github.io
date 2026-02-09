const form = document.getElementById("innerCircleForm");
const statusEl = document.getElementById("status");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  statusEl.textContent = "";
  submitBtn.disabled = true;
  submitBtn.textContent = "SENDING...";

  try {
    const formData = new FormData(form);

    const res = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
    });

    if (res.ok) {
      statusEl.textContent = "Welcome to the Inner Circle. Check your email soon ✨";
      form.reset();
    } else {
      statusEl.textContent = "Something went wrong. Please try again.";
    }
  } catch (err) {
    statusEl.textContent = "Network error. Please try again.";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "JOIN NOW*";
  }
});
