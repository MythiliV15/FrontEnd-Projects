const submitBtn = document.getElementById('submitBtn');
const textInput = document.getElementById('textInput');
const displayArea = document.getElementById('display-text');
const speedInput = document.getElementById('speedControl');

let typingTimer = null;
let currentIndex = 0;
let currentText = "";
const MAX_LOOPS = 20;
let loopCount = 0;

function startTyping() {

    clearInterval(typingTimer);

    let speedSeconds = parseInt(speedInput.value);
    if (speedSeconds < 1) speedSeconds = 1;
    if (speedSeconds > 10) speedSeconds = 10;
    const intervalTime = 500/speedSeconds; 

    typingTimer = setInterval(() => {
        const fullText = textInput.value;

        if (currentIndex < fullText.length) {
            displayArea.textContent += fullText[currentIndex];
            currentIndex++;
        } 
        else {
            loopCount++;
            
            if (loopCount < MAX_LOOPS) {
                currentIndex = 0; 
                displayArea.textContent= ""; 
            } else {
                clearInterval(typingTimer);
            }
        }
    }, intervalTime);
}

speedInput.addEventListener('input', () => {
    startTyping();
});
submitBtn.addEventListener('click', () => {
    currentText = textInput.value;
    currentIndex = 0; 
    displayArea.textContent = ""; 
    startTyping();
});