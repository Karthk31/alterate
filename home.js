document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.querySelector(".greeting");

  if (sessionStorage.name) {
    greeting.innerHTML = `Hello ${sessionStorage.name}`;
  } else {
    // If the user is not logged in or the session data is missing, you can handle it here.
  }

  // Logout button click event
  document.querySelector(".logout").addEventListener("click", () => {
    // Clear session data
    sessionStorage.clear();
    // Redirect to the login page
    window.location.href = "login.html";
  });
});
