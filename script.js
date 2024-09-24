function navigateTo(page) {
  const contentDiv = document.getElementById("content");

  if (page === "home") {
    contentDiv.innerHTML = `
            <h1>Welcome to My Portfolio</h1>
            <p>This is the home page. Click the links above to navigate.</p>
        `;
  } else if (page === "about") {
    contentDiv.innerHTML = `
            <h1>About Me</h1>
            <p>I'm a web developer with a passion for creating beautiful and functional websites.</p>
        `;
  } else if (page === "projects") {
    contentDiv.innerHTML = `
            <h1>My Projects</h1>
            <p>Here are some of my recent projects:</p>
            <ul>
                <li>Project One</li>
                <li>Project Two</li>
                <li>Project Three</li>
            </ul>
        `;
  } else if (page === "contact") {
    contentDiv.innerHTML = `
            <h1>Contact Me</h1>
            <p>You can reach me at: myemail@example.com</p>
        `;
  }
}

// Load home content by default
navigateTo("home");
