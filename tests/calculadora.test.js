test('Nome do teste', callbackFunction);

function callbackFunction() {
  console.log('está sendo salva');
}

test('Nome do teste 1', function () {
  console.log('e assim funciona?');
});

test('Nome do teste 2', () => {
  console.log('e assim funciona também?');
});

test('espero que 1 seja 1', () => {
  expect(1).toBe(1);
});
