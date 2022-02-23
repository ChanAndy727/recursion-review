// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className
) {
  // your code here
  var myArr = [];
  var doc = document.body;

  //traverse through all the elements in the parent doc
  var myFunc = function (parent) {
    //get the classList of all document elements
    var parentClassList = parent.classList;
    //get the children of the current element (parent)
    var currChild = parent.childNodes;

    //check to see if classList contains parameter className and push into return array if true
    if (_(parentClassList).contains(className)) {
      myArr.push(parent);
    }

    //call myFunc recursively to add each child of parent to return array
    _(currChild).forEach( function(child) {
      myFunc(child);
    });
  };


  // console.log(doc.childNodes);

  myFunc(doc);
  // myArr[0] is a DOM which contains pointers that point to children/s
  // and could have variables saved in it as class= or id=
  // myArr is just a array of those DOMs
  // console.log(myArr[0]);
  return myArr;
};



// var func = function (parent) {
//   var parentClassList = parent.classList;
//   var currChilds = parent.




// func(document.body);

// arr = [drgdsrg,354,sfee]
// arrARR = [35345,63636]
// newARR = [...arr]