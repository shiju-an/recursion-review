// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var body = document.body;
  var array = [];

  var hasClass = function (element) {
    // for (var i = 0; i < element.childNodes.length; i++) {
    //   if (element.childNodes[i].classList && element.childNodes[i].classList.contains(className)) {
    //     console.log('passed');
    //     array.push(element);
    //     console.log('classnamefound', array);
    //   }

    if (element.classList && element.classList.contains(className)) {
      array.push(element);
    }

    if (element.childNodes) {
      for (let i = 0; i < element.childNodes.length; i++) {
        hasClass(element.childNodes[i]);
      }
    }
    // console.log(element.childNodes[i].hasChildNodes());
    // if (element.childNodes[i].hasChildNodes()) {
    //   console.log('recursion');
    //   hasClass(element.childNodes[i]);
    // }
  };

  hasClass(body);
  console.log('end output', array);
  return array;
};

// declare array variable
// for loop to loop through every row of the body
// if element has childnodes do a recursion
// if element.classlist === className shove it into array





// '<div class="targetClassName"></div>',
// '<div class="otherClassName targetClassName"></div>',
// '<div><div class="targetClassName"></div></div>',

// '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',

// '<div><div></div><div><div class="targetClassName"></div></div></div>',
// '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
// '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'