How it works:    
1. User enter validation rules using form interface (inputform.html).      
2. Rule are stored as 2d array in backend.      
3. User enters html, css code using web interface (inputHtmlCSS.html).    
4. Backend uses jsdom to parse html and verify rules.    
5. Rules that are not satisfied are shown to user.  
  
Let say we want to validate these two rules against an html file:  
  
rule 1: there should be a paragraph element with id = welcome       
rule 2: there should be an h1 element with any class      
  
Solution :     
1. npm i //it installs all required dependencies    
2. node app.js //it starts the backend server    
3. Open inputRule.html file using live server tool: //this provide web based interface to enter validation rules        
  <img width="960" alt="image" src="https://github.com/programmerahul/validator/assets/84563516/3b679030-8a18-4cb8-8b5b-64893d4bbffc">
    
  click on ADD button to add a new rule:      
  add rules :      
   rule 1) -1 , p, id , welcome, there should be a paragraph element with id = welcome    
   rule 2) -1  , h1, class , , there should be an h1 element inside the paragraph element with class=profile    
  click on submit. // it sends all rules to backend      
  
4. Open inputHtmlCss.html file using live server tool: //this provide web based interface to enter html , css files see validation results  
    <img width="960" alt="image" src="https://github.com/programmerahul/validator/assets/84563516/b1a4d141-4d2a-4905-9381-4897b065f576">  
    Enter html and css:     
   Click on submit to see the validation result.  
   (First rule that gets violated is shown[description] , if code passes validation ,then it shows ALL CLEAR! )  

When I enter this code and submit:    
<img width="960" alt="image" src="https://github.com/programmerahul/validator/assets/84563516/25676266-4fe3-46bc-b130-7ab8291d926b">
It shows that the first rule is not statisfied!.  

<img width="960" alt="image" src="https://github.com/programmerahul/validator/assets/84563516/29fd4a80-eaf8-4689-a8ce-525938f7de9f">  
It shows that second rule is not satified. This is because we have created a paragraph element with id = welcome , but we do not have h1.  

<img width="960" alt="image" src="https://github.com/programmerahul/validator/assets/84563516/eb3b192b-a786-4327-9d8e-4cb39976ef2c">  
it shows all clear, meaning above 2 rules are satisfied.  




 
