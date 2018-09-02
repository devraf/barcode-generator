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
    JsBarcode('.a11', this.barcodeList[0]);
  },
  //TODO limit the class list to 300
  //Unique classes for the first paramater of JS Barcode
  classList: [],
  //TODO Make unique classes based on the barcodeList length
  createClasses: function() {
    var uniqueClass = 'a';
    for (let i = 10; i < this.barcodeList.length + 10; i++) {
      console.log(i);
    };
  }
  //TODO Create SVG element
  //Add unique class to svg element
};

function test() {
  if (barcodeTextInput.value === '') {
    console.log('empty');
  } else console.log('notEmpty');
};
