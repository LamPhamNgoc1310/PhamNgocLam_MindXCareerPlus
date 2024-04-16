let colorInput = document.querySelector('#color');
let hexInput = document.querySelector('#hex');
let colorDisplay = document.querySelector('#color-display');

colorInput.addEventListener('input', () => {
    let color = colorInput.value;
    hexInput.value = color;
    colorDisplay.style.backgroundColor = color;
});

function copy() {
    
    hexInput.select();
    navigator.clipboard.writeText(hexInput.value);
    alert("Copied the hex:" + hexInput.value);
}

