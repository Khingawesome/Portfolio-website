    const encodeMessage = document.querySelector('textarea');
    const loadingDiv = document.querySelector('.loading');
    const loadingText = document.querySelector('.loading-text');
    const instructionDiv = document.querySelector('.result');
    const messageEncrypter = document.querySelector('.message-encrypter');
    const encryptedText = document.querySelector('.encrypted-text');
    const keyGenerated = document.querySelector('.key-generated');
    const encryptedForm = document.querySelector('#faculty');
    const keyGenerator = Math.ceil(Math.random() * 2000);
    // const keyGenerator = 1000;
    const letters = "bcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ a.,:'";
    let decodeMessage = '';

document.querySelector('#task-form').addEventListener('submit',function(e){
    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    let encodeMessageText = encodeMessage.value;
    if(firstName.value == '' || lastName.value =='' || encodeMessage.value == ''){
        document.querySelector('.error-message').style.transform = 'scale(1)';
        setTimeout(errorMessageErrase, 2000);
    }else{
        for(let c in encodeMessageText){
            let newText = letters.indexOf(encodeMessageText[c]);
            newText = newText - keyGenerator;
            while(newText < 0){
                newText = newText + 57;
            }
            const usedText = letters.charAt(newText);
            decodeMessage = decodeMessage + usedText;
        encryptedForm.style.display = 'none';
        loadingDiv.style.display = 'block';
        loadingText.innerText = 'Dear ' + firstName + ' '+ lastName + ', please kindly wait while the message encrypt...'

        encryptedText.innerText = decodeMessage;
        keyGenerated.innerText = keyGenerator;
        messageEncrypter.innerText = 'Dear ' + firstName + ' '+ lastName + ', your encrypted message is:'
        setTimeout(loadingComplete, 3000);
        }
    }
    e.preventDefault();
})

function errorMessageErrase(){
    document.querySelector('.error-message').style.transform = 'scale(0)';
}

function loadingComplete(){
    loadingDiv.style.display = 'none';
    instructionDiv.style.display = 'block';
}