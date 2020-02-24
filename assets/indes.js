const generateButton = document.getElementById('generate');

generateButton.addEventListener('click', () => {
    const borderElement = document.getElementById('border');
    let borderTopLeftRadius = document.getElementById('border-top-left').value;
    let borderTopRightRadius = document.getElementById('border-top-right').value;
    let borderBottomLeftRadius = document.getElementById('border-botton-left').value;
    let borderBottomRightRadius = document.getElementById('border-botton-right').value;

    let paramsBorder = document.getElementById('params-border');
    if (borderBottomLeftRadius == borderBottomRightRadius && borderBottomLeftRadius == borderTopRightRadius && borderBottomLeftRadius == borderTopLeftRadius) {
        paramsBorder.innerHTML = 'border-radius: ' + borderBottomLeftRadius + 'px;';
    }
    else {
        paramsBorder.innerHTML = 'border-top-left-radius: ' + borderTopLeftRadius + 'px;\n' +
            'border-top-right-radius: ' + borderTopRightRadius + 'px;\n' +
            'border-bottom-left-radius: ' + borderBottomLeftRadius + 'px;\n' +
            'border-bottom-rigth-radius: ' + borderBottomRightRadius + 'px;';
    }
    borderElement.style.borderBottomLeftRadius = borderBottomLeftRadius + 'px';
    borderElement.style.borderBottomRightRadius = borderBottomRightRadius + 'px';
    borderElement.style.borderTopLeftRadius = borderTopLeftRadius + 'px';
    borderElement.style.borderTopRightRadius = borderTopRightRadius + 'px';
});

const copyButton = document.getElementById('copy');

copyButton.addEventListener('click', () => {
    let textarea = document.getElementById('params-border');
    textarea.select();
    document.execCommand("copy");
});