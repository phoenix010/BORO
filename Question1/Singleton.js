let fs = require('fs')
let yaml = require('js-yaml')
let convert = require('xml-js');

let data = fs.readFileSync('Sample.json','utf-8')
let obj = JSON.parse(data)

let xml = fs.readFileSync('./Sample2.xml', {encoding: 'utf-8'}); 
let xmlData = convert.xml2json(xml, {compact: true, spaces: 4});
let xmlObj = JSON.parse(xmlData);

let yamlObj = yaml.load(fs.readFileSync("Sample3.yaml", {encoding: 'utf-8'}));


let mySingleton = (function () {
  // Instance stores a reference to the Singleton
  let instance;
  function init() {
    return {
      // Public methods and variables
      publicMethod: function () {
        console.log( "This is a public method" );
      },
      publicProperty: "I am also public",
      getRandomNumber: function(obj) {
        return obj;
      }
    };
  };
  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
      if ( !instance ) {
        instance = init();
      }
      return instance;
    }
  };
})();

let s1 = mySingleton.getInstance();
let s2 = mySingleton.getInstance();
let s3 = mySingleton.getInstance();


console.log("JSON DATA:")
console.log()
console.log(s1.getRandomNumber(obj))
console.log("*********************************************************")
console.log("XML DATA:")
console.log()
console.log(s2.getRandomNumber(xmlObj))
console.log("*********************************************************")
console.log("YAML DATA:")
console.log()
console.log(s3.getRandomNumber(yamlObj));


