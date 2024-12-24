// Get elements
const card = document.querySelector('.card');
const toSignup = document.getElementById('to-signup');
const toLogin = document.getElementById('to-login');

// Add event listeners for flipping the card
toSignup.addEventListener('click', () => card.classList.add('flip'));
toLogin.addEventListener('click', () => card.classList.remove('flip'));
// Handle Signup
document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    fullName: e.target[0].value,
    email: e.target[1].value,
    phone: e.target[2].value,
    password: e.target[3].value,
    confirmPassword: e.target[4].value,
  };

  const response = await fetch("/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  alert(result.message);
});

// Handle Login
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    email: e.target[0].value,
    password: e.target[1].value,
  };

  const response = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  if (result.success) {
    alert("Login successful!");
  } else {
    alert("Invalid credentials");
  }
});
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    email: e.target[0].value,
    password: e.target[1].value,
  };

  const response = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  if (result.success) {
    // Redirect to the dashboard
    window.location.href = "/dashboard";
  } else {
    alert("Invalid credentials");
  }
});
document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    fullName: e.target[0].value,
    email: e.target[1].value,
    phone: e.target[2].value,
    password: e.target[3].value,
    confirmPassword: e.target[4].value,
  };

  const response = await fetch("/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  if (result.success) {
    // Redirect to the dashboard
    window.location.href = "/dashboard";
  } else {
    alert(result.message);
  }
});
const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})
