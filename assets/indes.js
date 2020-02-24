const generateButton = document.querySelector('button');

generateButton.addEventListener('click', () => {
    const borderElement = document.getElementById('border');
    let borderTopLeftRadius = document.getElementById('border-top-left').value;
    let borderTopRightRadius = document.getElementById('border-top-right').value;
    let borderBottomLeftRadius = document.getElementById('border-botton-left').value;
    let borderBottomRightRadius = document.getElementById('border-botton-right').value;

    let paramsBorder = document.getElementById('params-border');
    paramsBorder.innerHTML = 'border-radius: ' + borderBottomLeftRadius + 'px;';

    borderElement.style.borderBottomLeftRadius = borderBottomLeftRadius + 'px';
    borderElement.style.borderBottomRightRadius = borderBottomRightRadius + 'px';
    borderElement.style.borderTopLeftRadius = borderTopLeftRadius + 'px';
    borderElement.style.borderTopRightRadius = borderTopRightRadius + 'px';
});
