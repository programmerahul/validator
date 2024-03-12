const express = require('express');
const bodyParser = require('body-parser');
const { JSDOM } = require('jsdom');


const app = express();

app.use(bodyParser.json());
var cors = require('cors');
app.use(cors());

let rules ;
// = [
//     [-1, "section", "id", "welcome-section","there should be a section with id=welcom-section"],
//     [0, "nav", "class", "","0th element i.e section should contain a nav with some class"],
//     [0, "", "id", "profile-link","0th elemnt i.e section should contian some elment with id=profile-link"]
// ];
let ruleObj =[]
function elementMatchesRule(element, rule) {
    let [index, tagName, attribute, value] = rule;
    if(attribute=="")return true;
    if (attribute === 'id' && ( value=="" || (element.id === value))) {
        return true;
    }
    if (attribute === 'class' && ( value=="" || (element.classList.contains(value)))) {
        return true;
    }
    return false;
}
function matchRules(document, rules) {
    for (let i = 0; i < rules.length; i++) {
        let [index, tagName, attribute, value] = rules[i];
        let doc=document;
        if(index)doc=ruleObj[index];
        let elements=[];
        if(tagName)
         elements = doc.querySelectorAll(tagName);
        else{
            if(attribute=="class")
                elements=doc.querySelectorAll("."+value);
            else if(attribute=="id")
                elements=doc.querySelectorAll("#"+value);
        }
        let found=0;
        for (let j = 0; j < elements.length; j++) {
            if (elementMatchesRule(elements[j], rules[i])) {
                found =1;
                ruleObj.push(elements[j]);
                break;
            }
        }
        if(!found){
            return i;
        }
    }
    return -1;
}
app.post('/validate', (req, res) => {
    const htmlContent = req.body.html;
    const cssContent = req.body.css;
    console.log(req.body)
    function validateHTML(document) {
        let matched= matchRules(document,rules)
        return matched;
    }

    // Function to validate CSS content
    function validateCSS(css) {
        const usesMediaQuery = css.includes('@media');
        const navbarFixedTop = css.includes('#navbar { position: fixed; top: 0; }');
        const result = {
            rule1: usesMediaQuery,
            rule2: navbarFixedTop,
        };
        return -1;
    }

    // Call the validation functions
    const dom = new JSDOM(htmlContent);
    const window = dom.window;
    const document = window.document;
    const htmlValidationResult = validateHTML(document);
    if(htmlValidationResult!=-1){
        res.json({"status":rules[htmlValidationResult][4]});
    }else{
        res.json({"status":"All Clear!"});
    //     const cssValidationResult = validateCSS(cssContent);
    //     if(cssValidationResult!=-1){
    //         res.json({"index":cssValidationResult});
    //     }else{
    //         res.json({"index":-1});
    //     }
    }
});

app.post('/rules', (req, res) => {
    // Assuming the request body contains an array of arrays
    const inputData = req.body;
    rules=inputData
    console.log(inputData)
});
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
