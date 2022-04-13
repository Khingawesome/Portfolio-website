const encryptedForm = document.querySelector('#faculty');
const errorMessage = document.querySelector('.error-message');
const loadingDiv = document.querySelector('.loading');
const loadingText = document.querySelector('.loading-text');
const instructionDiv = document.querySelector('.result');
const messageDecrypter = document.querySelector('.message-decrypter');
const encryptedText = document.querySelector('.encrypted-text');
const keyUsed = document.querySelector('.key-used');


document.querySelector('#task-form').addEventListener('submit', function(e){
const fullName = document.querySelector('#full-name').value;
const decryptionKey = Number(document.querySelector('#decryption-key').value);
const decryptedMessage = document.querySelector('textarea').value;
const letters = "bcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ a.,:'";
let encodeMessage = '';
    if(fullName === '' || decryptionKey === 0 || decryptedMessage === ''){
        errorMessage.style.transform = 'scale(1)';
        setTimeout(errorMessageErrase, 2000);
    }else{
        for(let c in decryptedMessage){
            let newText = letters.indexOf(decryptedMessage[c]);
            newText = newText + decryptionKey;
            while(newText >= 57){
                newText = newText - 57;
            }
            const usedText = letters.charAt(newText);
            encodeMessage = encodeMessage + usedText;
            console.log(encodeMessage);

            encryptedForm.style.display = 'none';
            loadingDiv.style.display = 'block';
            loadingText.innerText = 'Dear ' + fullName + ', please kindly wait while the message decrypt...';
    
            messageDecrypter.innerText = 'Dear ' + fullName + ', your decrypted message is:';
            encryptedText.innerText = encodeMessage;
            keyUsed.innerText = decryptionKey;
        }

    }
   
    

    setTimeout(loadingComplete, 3000);
    e.preventDefault();
})

function errorMessageErrase(){
    errorMessage.style.transform = 'scale(0)'
}

function loadingComplete(){
    loadingDiv.style.display = 'none';
    instructionDiv.style.display = 'block';
}
