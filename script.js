function navigateTo(page) {
  if (page === "home") {
    window.location.href = "../index.html";
  } else if (page === "about") {
    window.location.href = "/pages/about.html";
  } else if (page === "projects") {
    window.location.href = "/pages/projects.html";
  } else if (page === "services") {
    window.location.href = "/pages/services.html";
  } else if (page === "content") {
    window.location.href = "/pages/content.html";
  } else if (page === "contact") {
    window.location.href = "/pages/contact.html";
  } else {
    console.error("Invalid page:", page);
  }
}
