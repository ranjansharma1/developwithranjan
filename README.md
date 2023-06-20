# Getting Started with Create React App

Live URL: https://dwr-portfolio.netlify.app/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Use Google Map for your Location
Link: https://embed-map.com
Enter your location and generate html for it


## Email Service from email.js Website:
1. Create email service - https://dashboard.emailjs.com/admin
2. Create Email tempalate
3. Use this link for your template [https://www.emailjs.com/docs/examples/reactjs/]
3. Set Credential 
4. make sure you have same massage name in your react as in dashbord"

## Adding `npm i react-toastify` for massage
- install `npm i react-toastify` use link: https://www.npmjs.com/package/react-toastify
- https://fkhadra.github.io/react-toastify/introduction/

## Added FontAwesome for button design
Check what you can access with free plan: https://fontawesome.com/docs/web/add-icons/how-to
Update Index.html: 
    <script src="https://kit.fontawesome.com/03cfaf9c5d.js" crossorigin="anonymous"></script>
Added External css for Footer: 
            import "./Footer.css";



## Added Framer Motion effect to look UI impressive
- install motion library
    npm i framer-motion
-- wherever we need to use motion effect , import the library and bind the tag with motion
    eg: <motion.div whileInView={{ x: [-100, -50, 0], opacity: [0, 0.5, 1] }} transition={{type:"spring",  stiffness:20 }} whileTap={{scale:0.9}} />
-- Use this link for more details: https://www.framer.com/motion/examples/