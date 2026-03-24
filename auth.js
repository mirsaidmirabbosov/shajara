document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const user = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        age: document.getElementById("age").value,
        role: document.getElementById("role").value,
      };
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "asosiy.html";
    });
  }

  const user = JSON.parse(localStorage.getItem("user"));
  if (user && document.getElementById("userName")) {
    document.getElementById(
      "userName"
    ).textContent = `${user.name} (${user.role})`;
  }
});
