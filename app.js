//TODO Create more descriptive names for each function
var app = {
  //The list of barcodes to be created
  barcodeList: [],
  //Separates the list. Trims the whitespace. Adds the list in array format
  //to barcode list array
  createBarcodeList: function() {
    var barcodeTextInput = document.querySelector('.barcodeTextList');
    //Separate the list into an array
    var textList = barcodeTextInput.value.split('\n');

    //Trim whitespace of each list time and add to new array
    for (let i = 0; i < textList.length; i++) {
      this.barcodeList.push(textList[i].trim());
    };
  },
  //Makes the actual barcode
  createBarcodes: function() {
    for(let i = 0; i < this.barcodeList.length; i++) {
      JsBarcode(`.${this.classList[i]}`, `${this.barcodeList[i]}`);
    };
  },
  //TODO limit the class list to 300
  //Unique classes for the first paramater of JS Barcode
  classList: [],
  //Makes unique classes based on the barcodeList array length
  createClasses: function() {
    var uniqueClass = 'a';
    for (let i = 10; i < this.barcodeList.length + 10; i++) {
      this.classList.push(uniqueClass + i.toString());
    };
  },
  imgElements: function() {
     return document.querySelector('.barcodeList').children;
  },
  //TODO Create SVG element
  //Add unique class to svg element
  createImgElement: function() {
    //Update this name to avoid confusion with barcodeList array
    var barcodeList = document.querySelector('.barcodeList');
    var newImg = document.createElement('img');

    barcodeList.appendChild(newImg);
  },
  //Add svg elements based on the length of the barcode list array
  addAllImgElements: function() {
    for(let i = 0; i < this.barcodeList.length; i++) {
      this.createImgElement();
    }
  },
  //TODO add unique classes to each svg element
  addClassToImg: function() {
    var barcodeListChildren = document.querySelector('.barcodeList').children;
    for(let i = 0; i < this.barcodeList.length; i++) {
      barcodeListChildren[i].classList.add(this.classList[i]);
    }
  }
};

function test() {
  app.createBarcodeList();
  console.log(app.barcodeList);
  app.createClasses();
  console.log(app.classList);
  app.addAllImgElements();
  app.addClassToImg();
  app.imgElements();
};
