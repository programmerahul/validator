Let say we want to validate these two rules against an html file:  

rule 1: there should be a paragraph element with id = welcome  
tule 2: there should be an h1 element inside the paragraph element with class=profile  

Solution :   
1. npm i //it installs all required dependencies  
2. node app.js //it starts the backend server  
3. Open inputRule.html file using live server tool: //this provide web based interface to enter validation rules  
  <img width="958" alt="image" src="https://github.com/programmerahul/validator/assets/84563516/5e540d1d-f716-4076-9448-6dcde9f49022">
  click on ADD button to add a new rule:
  add rules :
   rule 1) -1 , p, id , welcome, there should be a paragraph element with id = welcome
   rule 2) 0  , h1,class , profile, there should be an h1 element inside the paragraph element with class=profile
  click on submit.

4. Open inputHtmlCss.html file using live server tool: //this provide web based interface to enter html , css files see validation results
    <img width="960" alt="image" src="https://github.com/programmerahul/validator/assets/84563516/b1a4d141-4d2a-4905-9381-4897b065f576">
    Enter html and css:  
   <img width="960" alt="image" src="https://github.com/programmerahul/validator/assets/84563516/e095d728-1768-4d60-909e-8f26b4762b0d">
   Click on submit to see the validation result.
   (First rule that gets violated is shown[description] , if code passes validation ,then it shows ALL CLEAR! )


 
