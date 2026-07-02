# Assignment-06

## Project Overview
Yeh ek simple Node.js web server hai jo Node.js ke HTTP module ka use karke bana gaya hai. Isme alag-alag HTML pages serve kiye jaate hain jaise Home, About, aur Contact.

## Project Structure

```
assignment-6/
├── server.js              # Main HTTP server file
├── package.json           # Project dependencies aur scripts
├── pages/                 # HTML pages
│   ├── home.html          # Home page
│   ├── about.html         # About page
│   ├── contact.html       # Contact page
│   └── 404.html           # 404 Not Found page
└── public/                # Static files
    └── css/
        └── style.css      # CSS styling
```

## Features

- **Multi-page Website**: Home, About, aur Contact pages
- **Custom 404 Page**: Agar koi galat URL type kare to 404 page dikhai dega
- **CSS Styling**: External CSS file se styling
- **Node.js HTTP Module**: Pure Node.js HTTP server, koi framework nahi

## How to Run

### Prerequisites
- Node.js installed hona chahiye

### Installation Steps

1. Start the server:
```bash
node server.js
```

2. Browser mein open karein:
```
http://localhost:3000
```

## Available Routes

- `/` ya `/home` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/css/style.css` - CSS file
- Koi bhi aur URL - 404 page

## Code Explanation

### server.js
- Yeh main server file hai jo HTTP server create karta hai
- Port 3000 par server run hota hai
- Alag-alag URLs ke liye alag HTML pages serve hoti hain using fs.readFile
- Agar URL match nahi karta to 404 page serve hota hai

### pages/
- Saari HTML pages navigation bar ke saath hain
- Home, About, Contact pages similar structure follow karte hain
- Footer mein copyright information hai

## Technologies Used

- **Node.js** - JavaScript runtime
- **HTTP Module** - Built-in Node.js module for web server
- **File System (fs)** - Built-in Node.js module for file operations
- **HTML5** - Markup
- **CSS3** - Styling

## Author
Akash Kumar