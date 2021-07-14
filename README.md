# Travelscape
### Accomodation Help Tool 🏘️

## Overview 🔍
Travelscape is an online accomodation helper tool, it takes in a range of information supplied by the user and outputs the best possible results on a single page application. This project is in hand with Tourism New Zealand and closely follows along their consistent style & vision across their website and brand. This was thorougly researched and outlined in the proposal created with this project. 

### Goal ✨
The goal of this project was to supply the user with a simple and easy to use application that would allow them to select how many people and for how long they were staying to meet a small handful of accomodation options available to them, while this project is in alpha development these are generic generated options but in future expansions they would be location based & fully detailed. 

### 📔
*Please Note: This project is entirely for education purposes at this uploaded stage, all imagery & information is only used inside this application for show and assessment for Level 6 Web & UX at YooBee Colleges, in future if a public release was trialled all copyright images would be attributed or removed*

---

## Code Validation ✔️

### HTML - w3 Schools HTML Validator

Click to view screenshot ⬇️  
[HTML Validation](https://prnt.sc/1ay91vh)  
*Minor iFrame errors with MAP VIEW on Slide 3 but necessary as external pull*

### CSS - w3 Schools CSS Validator

Click to view screenshot ⬇️  
[CSS Validation](https://prnt.sc/1ayaixr)  
*No Errors within CSS*

### JS - Gulp Lint

Click to view screenshot ⬇️  
[JS Lint](https://prnt.sc/1ayb0b2)  
*The error listed is a syntax warning within the JS, however this Syntax is required for one of my plugin functions (Sweetalert) so raises no concern and no need for adjustment*

---

## Style Guide ✔️

#### Standard JS Rules 

##### I followed the below site for it's rules around style within a JS Project
[Standard JS Rules](https://standardjs.com/rules.html)

### Key Points 🔑

*Indent* - 
Use _2_ spaces or _1_ tab for indentation consistancy ✔️

*Quotes* - 
Use _one_ quotation rather than _two_ to avoid escaping within the project ✔️ ⬇️

*I had to use TWO for input choice on Lines 120 & 122 as that is required for the code to work*

*Variables* - JS Rules states there should be no unused or repeated variables, I have swept for all of these & all variables are used appropriately and only repeated within scopes.


There are many more that I have aimed to achieve throughout the project but these are some of the most relevant I have chosen to pinpoint for verification.

---

## Production Tools 🧰

#### Atom - Code

Atom was used to code the entirety of this project, I used packages such as beautify, emmet, end bracket locators and many more to ensure high quality code and efficiency of workflow.

#### Gulp - Live Server, Sass & Linting

Gulp has been used throughout the project to display the webpage on a live server so that on refresh I can easily view updates or errors quickly. Gulp also has inbuilt linting for errors which I used at all times to quickly sorce errors within my code and be able to correct them instantly. It was also used to watch my SCSS folder and convert my SCSS to a CSS.MIN file. This was extremely useful in terms of workflow.

#### Node.js & NPM - Open Source Plugins

I used Node.js to work closely with NPM installs to greatly reduce my time finding Plugins & resources, I could easily NPM install and then move the required files into my own project line. 

#### Terminal / GitBash - Push/Pull Repo & Linting/Gulp

Terminal/GitBash was open always during production to follow Gulp linting and server but also was used to upload and pull all work from the Repo to work at Campus or at home.

#### Sass - CSS Preprocessor 

Sass was used to input all my CSS and work closely in tie with popular SCSS resources available such as presets, variables for strict color following and such throughout the entire process. I used sass for imports (fonts) and presets for colors that I could easily reuse throughout the project without finding the specific HEX. Overall Sass was a huge help in terms of my style side of things.

---

## Libraries & Plugins 📖

### Libraries
- jQuery  
- FontAwesome  
- Bootstrap  

```html
<!-- Head -->
	<link rel='stylesheet' href='assets/font-awesome/css/all.css'>
	<link rel='stylesheet' type='text/css' href='css/bootstrap.css'>

<!-- Body -->
	<script src='js/jquery.min.js'></script>
  <script src='js/bootstrap.bundle.js'></script>
```

### Plugins

- Daterangepicker (Including Moment)  
- Fullpage JS  
- Parsley (Validation)  
- Sweetalert (Final Booking Alert)  

```html
<!-- Head -->
	<link rel='stylesheet' href='css/sweetalert2.min.css'>
	<link rel='stylesheet' type='text/css' href='assets/daterangepicker/daterangepicker.css'>
	<link rel='stylesheet' type='text/css' href='css/jquery.fullpage.css'>

<!-- Body -->
	<script src='assets/daterangepicker/moment.min.js'></script>
	<script src='assets/daterangepicker/daterangepicker.js'></script>
	<script src='js/jquery.fullpage.js'></script>
	<script src='js/parsley.js'></script>
	<script src='js/sweetalert2.all.min.js'></script>
```

All of these plugins were used, optimized & perfected throughout the process of the project.

---

## Evaluation & Reflection

#### General Thoughts 🤔

Overall, I really enjoyed this project, it threw alot of twists and turns at me and at times really challenged me to a point I felt like giving up but I pushed through to the end and I have created a product application I am extremely proud of and I am so proud I was able to get to that point. It was alot of work, and definitely taught me alot of things including debugging my own work and being able to pinpoint problems and the best ways to fix them. I can take all of this knowledge into future assignments and possible job opportunities. 

#### Future Changes 🔧

There are a few things on my "Nice to have list" I would put in in the future if this project was more expanded past Alpha.

- Different choices for each "Location Selection"   
- Non-Generic designs, currently all cards are generically designed for the purpose of this project  
- Mapbox - The map would be able to be used to show where each location is, for now we have a placeholder Map.  
- Small CSS Errors - There are some small alignment issues, boxes and such that could be moved around but this project focus point was functionality within Javascript so that was what I ensured was done by hand in.   
- A visual cue if you input data outside of the required amounts for the generic accomodation choices - For now it would show a blank page if you chose outside of 16 days accomodation as my daterangepicker was not able to close a span outside of my choice so users are able to pick higher than 16. I would liked to have put a card that would show no options are available but that was not a neccessity in my opinion as it was a visual problem not a coding/conditional problem.  

Overall, I challenged myself alot with my tasks (Especially my meal options) and it was very time consuming and difficult, but I was however able to push past that and produce a product that works in most scenarios. The overall application is functional and very visually appealing. 

#### Note From The Creator 📔

I am open to suggestions for this project and possible future work on it as it is very promising in terms of a viable product outside of an eduction purpose.

Thanks 💚

### Bee Currie
#### Web & UX Student
