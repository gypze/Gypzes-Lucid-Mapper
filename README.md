
📒 Gypze's PWA Text Editor

## Table of Contents  

1. [Description](#description)  

2. [Deployed Application](#deployed-application)  

3. [Installation](#installation)  

4. [Usage](#usage)  

5. [Technologies Used](#technologies-used)  

6. [Features](#features)  

7. [Screenshots](#screenshots)  

8. [License](#license)  

9. [Questions](#questions)  


## Description

Gypze's Progressive Web Application (PWA) Text Editor is a single-page application that enables developers to create notes or code snippets, even offline. The app uses multiple data persistence techniques with IndexedDB to ensure reliability. Packaged with Webpack and deployed on Render, it meets all PWA criteria, including service workers and offline functionality.

This project demonstrates an advanced application of concepts like client-server integration, data storage with IndexedDB, service worker registration, and modern JavaScript usage.



## Deployed Application

You can view the live project here:  
🔗 [Gypze's PWA Text Editor](https://gypzes-pwa.onrender.com)

## GitHub Repository

🔗 [GitHub Repo](https://github.com/gypze/Gypzes-PWA.git)



## User Story

AS A developer  
I WANT to create notes or code snippets with or without an internet connection  
SO THAT I can reliably retrieve them for later use  

## Acceptance Criteria

* GIVEN a text editor web application:
    
    * WHEN I open my application in my editor
        -  I see a client-server folder structure.
    
    * WHEN I run npm run start from the root directory
        -  The backend starts and serves the client application.
    
    * WHEN I run the text editor application
        -  The JavaScript files are bundled with Webpack.
    
    * WHEN I run my Webpack plugins
        -  I have a generated HTML file, service worker, and manifest file.
    
    * WHEN I use next-gen JavaScript
        -  The app runs in the browser without errors.
    
    * WHEN I open the text editor
        -  IndexedDB immediately creates a database for content storage.
    
    * WHEN I enter content and click off the DOM window
        -  The content is saved in IndexedDB.
    
    * WHEN I reopen the text editor
        -  The content is retrieved from IndexedDB.
    
    * WHEN I click the Install button
        -  The application downloads as an icon on my desktop.
    
    * WHEN I load the application
        -  A service worker registers and precaches static assets.
    
    * WHEN I deploy the app to Render
        -  Proper build scripts ensure the app functions flawlessly.

    
## Installation

1. Clone the Repository

git clone https://github.com/gypze/Gypzes-PWA.git

cd Gypzes-PWA

2. Install Dependencies:

npm install

3. Run the Application

npm run dev

The app will start the server and bundle the client-side code using Webpack. Open http://localhost:3000 in your browser.


## Usage

* Add Content: Type notes or code snippets in the text editor.
* Offline Support: The app works offline thanks to IndexedDB and service workers.
* Install the App: Click the Install button to add the app to your desktop.
*  Data Persistence: Content is saved in the browser and retrieved upon reopening.
    
    
## Technologies Used
* JavaScript
* Webpack
* IndexedDB (via idb package)
* Service Workers
* Workbox
* Node.js
* Express.js
* PWA Principles
* Render Deployment


## Features
* Offline functionality using IndexedDB and service workers.
* Simple and intuitive user interface.
* Installable as a desktop application.
* Bundled and optimized using Webpack.
* Deployed seamlessly to Render.

## License

This project is licensed under the MIT License.


## Questions
* For questions or collaboration, connect with me here:

GitHub: @gypze
Live App: Gypze's PWA
