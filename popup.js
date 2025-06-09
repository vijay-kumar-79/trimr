const backendUrl = "https://trimr.onrender.com";

// Get current tab URL when popup loads
document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (tabs[0]) {
      document.getElementById('url').value = tabs[0].url;
    }
  });
});

document.getElementById("url-form").addEventListener("submit", myfunction);

async function myfunction(event) {
  event.preventDefault();
  
  const form = event.target;
  const url = form.url.value;
  const alias = form.choice.value;
  
  if (!url) {
    alert("URL must be filled out");
    return;
  }

  try {
    const response = await fetch(`${backendUrl}/url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
        alias: alias,
      }),
    });

    const json = await response.json();
    const res = document.getElementById("result");
    const det = document.getElementById("details");
    
    res.innerText = `${backendUrl}/${json.id}`;
    
    if (alias) {
      det.innerText = json.aliasFound ? "Sorry, alias already exists\n" : "";
    } else {
      det.innerText = "";
    }
    det.classList.add("result1")

    // Copy to clipboard automatically
    navigator.clipboard.writeText(`${backendUrl}/${json.id}`)
      .then(() => {
        det.innerText += "Copied new URL to clipboard!";
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });

  } catch (error) {
    console.error("Error:", error);
    document.getElementById("details").innerText = "Error shortening URL";
  }
}