# The Mercury Store

## Utilizing The Mercury Store

**The Mercury Store is a JavaScript-powered front-end repo built with 4 foundational components of an industry-standard e-commerce web page.**

The Mercury Store repo ensures that users are able to dynamically render a web page with the following **4 components: _Product Overview, Related Products, Questions & Answers, and Ratings & Reviews_.**

# Getting Started
## Checking Prerequisites
Ensure you have the following prerequisites to run The Mercury Store:
* [Install node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* Access to the API base URL

  _**Note**: To obtain the API Base URL, you need to be enrolled in the Hack Reactor Program._

* [Generate a GitHub Personal Access Token to access the API](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

## Installing The Mercury Project
Once you have completed the prerequisite requirements, follow these steps to run the repo:
1. Fork and clone the repo.
2. Run **npm install** to install dependencies within the **_frontendcapstone_** directory in your terminal.
3. Create a `config.js` file with the following format and export it to the `apiConfig.js` file:

       const secretConfig = {
        BASE_URL: 'Insert API base URL here',
        API_KEY: 'Insert Generated GitHub Personal Access Token here'
       };

4. Create an `apiConfig.js` file in the **_/src/apis_** folder.

5. Run the following scripts in your terminal:
   1. **npm start**
   2. **npm run dev**
   3. **npm run build**

6. Open your browser and type http://localhost:3000 into the URL bar, or [click here](http://localhost:3000) to render the Mercury Project.

At this point, your cloned repo of The Mercury Project should be functioning and rendering on your local host network.

# Exploring the Components
At a glance, the 4 components ensure users are able to see a Product Overview, Related Products, Questions & Answers, and Ratings & Reviews.

Below are the detailed specifications and functionality of each component.

## Product Overview
The Product Overview module is crafted to catch the user's attention and provide a smooth scrolling experience for reviewing the product's images. It maintains high-resolution images and offers expansion and magnification features, allowing users to confidently select their preferred size, color, and style.

The module consists of the following features:
* Image gallery
* Product information
* Style selector
* Add to cart

### Product Overview Demo:
![Product Overview Demo](https://i.imgur.com/oAbYTwZ.gif)

## Related Products
The Related Products module displays two sets of related products. The first set is a list of internally determined products that are related to the currently viewed product. The second set is a custom list created by the user, consisting of products grouped with the current product into an 'outfit'.

The module consists of the following features:
* Related products with main image and star ratings
* Product comparison modal
* Personal outfit closet

### Related Products Demo:
![Related Products Demo](https://i.imgur.com/VzQxh5I.gif)

## Questions & Answers
The Questions & Answers module allows users to ask and answer questions about the selected product. This module's functionality can be divided into several pieces.

The module consists of the following features:
* View questions
* Search for a question
* Ask a question
* Answer a question

### Questions & Answers Demo:
![Questions & Answers Demo](https://i.imgur.com/9r2OVaW.gif)

## Ratings & Reviews
The Ratings & Reviews module allows users to view and submit reviews for the selected product. This module's functionality can be divided into several pieces.

The module consists of the following features:
* Write a new review
* Reviews list
* Sorting
* Rating breakdown
* Product breakdown

### Ratings & Reviews Demo:
![Ratings & Reviews Demo](https://i.imgur.com/PM7417U.gif)

# Running Tests
Now that you've read about each component, you can start testing with the following terminal command:
1. **npm test**

This will open a new terminal window, and you will see a test coverage of the total component and unit tests.

# Building The Mercury Store
The following libraries and frameworks are installed to build the fully functioning and stylistic web page:

### Language/Library
![Javascript](https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145)
![React](https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Environment
![Axios](https://camo.githubusercontent.com/4ec639c45b6c784bb739c844d003cab04876229a58250f80ea637f5ac9623236/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4178696f732d3637316464663f6c6f676f3d6178696f73266c6f676f436f6c6f723d626c61636b267374796c653d666f722d7468652d6261646765)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642)

### Bundler Pack
![Babel](https://camo.githubusercontent.com/a8b1da67e08c2cb950a978c27d56b7a966427a4f911fe142843b8cc2aa6a1db5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f426162656c2d4639444333653f7374796c653d666f722d7468652d6261646765266c6f676f3d626162656c266c6f676f436f6c6f723d626c61636b)
![Webpack](https://camo.githubusercontent.com/cfb221c05f485331b66bcf123878fc7de981faffc16fe430ff53bb1ad4f41aad/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7765627061636b2d2532333844443646392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7765627061636b266c6f676f436f6c6f723d626c61636b)

### Test Environment
![Jest](https://camo.githubusercontent.com/38eb294a1bdc730fae415015ecac4d6c009e39d2a9c8f8631f1d16bf3f918189/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d6a6573742d2532334332313332353f7374796c653d666f722d7468652d6261646765266c6f676f3d6a657374266c6f676f436f6c6f723d7768697465)
![TestingLibrary](https://camo.githubusercontent.com/75aae47c314f4e0e3c2729c983bbc8bd0f3e6e2728d71936ab1aa3c0251929bc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d54657374696e674c6962726172792d2532334533333333323f7374796c653d666f722d7468652d6261646765266c6f676f3d74657374696e672d6c696272617279266c6f676f436f6c6f723d7768697465)

# Introducing Team Mercury
## Software Developers
 * [@Caroline Robbins - Product Overview](https://github.com/carolinerobbins)
 * [@Ahu Su - Related Products](https://github.com/ahusu)
 * [@Andy Moc - Questions & Answers](https://github.com/andymoch)
 * [@Patrick Daly - Ratings & Reviews](https://github.com/pdaly91)
