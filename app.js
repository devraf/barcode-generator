var app = {
  start: function () {
    console.log('hello');
  }
}

var barcodeTextInput = document.querySelector('.barcodeTextList');

function test() {
  if (barcodeTextInput.value === '') {
    console.log('empty');
  } else console.log('notEmpty');
}

JsBarcode('.barcode', 'hello');
