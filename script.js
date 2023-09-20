function checkText() {
    const textInput = document.getElementById('textInput').value;
    const message = document.getElementById('message');

    if (textInput.toLowerCase() === 'joão') {
        // If the text is "joão", display the message
        message.style.display = 'block';
    } else {
        // Otherwise, hide the message
        message.style.display = 'none';
    }
}
