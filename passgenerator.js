 (function () {
    const genpass = document.getElementById('genpass');


    genpass.addEventListener('click', function (allsymbols) {

       const symbolsLower = ('abcdefghijklmnopqrstuvwxyz').split('');
       const symbolsUpper = ('abcdefghijklmnopqrstuvwxyz').toUpperCase().split('');
       const symbolsNumbersAnd = ('0123456789%_$@*+!^').split('');
       const symbolsSpecial = ('%(_$@&?*+!^)').split('');
       allsymbols = symbolsLower.concat(symbolsUpper, symbolsSpecial, symbolsNumbersAnd);
       const intoHtml = document.querySelector('.password');

       let newPass = '';
       let pass;
       for (var i = 0; i < 12; i++) {
          pass = Math.floor(Math.random() * allsymbols.length);
          newPass += allsymbols[pass];
       }
       //intoHtml.style.display = 'block';
       intoHtml.textContent = newPass;
    });
 }());

 const clipboard = new Clipboard('.btn');

 clipboard.on('success', function (e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
 });


 clipboard.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
 });
