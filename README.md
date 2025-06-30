# Trimr - URL Shortener Extension  

[Demo Video](https://drive.google.com/file/d/1lUZyXMsSRE2FsEVL20uqNLAW0moyTOCS/view?usp=sharing)  

A lightweight Chromium-based browser extension that shortens long URLs with custom alias support.

## Features ✨  
- Generate concise, shareable URLs instantly  
- Custom alias support for personalized short links  
- Fast redirection with minimal overhead  
- Clean, intuitive popup interface  
- Manifest V3 compliant  

## Installation  

### Method 1: Load Unpacked Extension  
1. Download the [latest release](https://github.com/vijay-kumar-79/trimr/releases/tag/trimr_v1)  
2. Unzip the downloaded file  
3. Load in Chrome/Edge:  
   - Navigate to `chrome://extensions`  
   - Enable **Developer Mode** (top-right toggle)  
   - Click **Load Unpacked** and select the unzipped folder  

4. Pin the extension:  
   - Click the Extensions puzzle icon (toolbar)  
   - Find Trimr and click the pin icon  

## Technology Stack  
- **Frontend**: JavaScript, HTML5, CSS3  
- **Browser API**: Chrome Extensions (Manifest V3)  
- **Backend**: Node.js, Express  
- **Database**: MongoDB  
- **Hosting**: Render  

## Development  

```bash
# Clone repository
git clone https://github.com/vijay-kumar-79/trimr.git
cd trimr

# Install dependencies
npm install

# Build extension
npm run build
