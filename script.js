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
  } else if (page === "blog"){
    window.location.href = "/pages/blog.html"
  } else if (page === "contact") {
    window.location.href = "/pages/contact.html";
  } else {
    console.error("Invalid page:", page);
  }
}

document.getElementById("toggle-button").addEventListener("click", function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active"); // Toggle the 'active' class
});

async function loadRSSFeed() {
  const rssUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://dougmcgillivray.wordpress.com/feed/';
  const rssContainer = document.getElementById('rss-feed');

  try {
      const response = await fetch(rssUrl);
      const data = await response.json();

      if (data.status === 'ok') {
          let html = '';
          data.items.slice(0, 5).forEach(item => {
              let content = item.content || item.description || 'No content available.';

              // Safely render embeds (e.g., YouTube iframes, Spotify embeds)
              const tempDiv = document.createElement('div');
              tempDiv.innerHTML = content;

              // Extract and keep iframe embeds
              const iframes = tempDiv.querySelectorAll('iframe');
              let iframeHTML = '';
              iframes.forEach(iframe => {
                  iframeHTML += iframe.outerHTML;
              });

              html += `
                  <div class="rss-item">
                      <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
                      <p><strong>Published:</strong> ${new Date(item.pubDate).toLocaleDateString()}</p>
                      ${item.author ? `<p><strong>Author:</strong> ${item.author}</p>` : ''}
                      <p>${tempDiv.textContent || 'No description available.'}</p>
                      ${item.thumbnail ? `<img src="${item.thumbnail}" alt="${item.title}">` : ''}
                      ${iframeHTML}
                  </div>
              `;
          });
          rssContainer.innerHTML = html;
      } else {
          rssContainer.innerHTML = 'Failed to load RSS feed.';
      }
  } catch (error) {
      console.error('Error fetching RSS feed:', error);
      rssContainer.innerHTML = 'Failed to load RSS feed.';
  }
}

loadRSSFeed();