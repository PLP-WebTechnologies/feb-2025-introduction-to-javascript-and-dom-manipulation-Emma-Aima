// Function to change the text content of an element
function changeDynamicText(newText) {
    const textElement = document.getElementById('dynamicText');
    if (textElement) {
        textElement.textContent = newText;
    }
}

// Function to toggle a CSS class on an element
function toggleHighlight() {
    const textElement = document.getElementById('dynamicText');
    if (textElement) {
        textElement.classList.toggle('highlight');
    }
}

// Function to add a new paragraph element to the container
function addParagraph() {
    const container = document.getElementById('container');
    if (container) {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'This is a dynamically added paragraph.';
        container.appendChild(newParagraph);
    }
}

// Function to remove the last paragraph element from the container
function removeParagraph() {
    const container = document.getElementById('container');
    if (container && container.lastElementChild && container.lastElementChild.tagName === 'P') {
        container.removeChild(container.lastElementChild);
    } else if (container) {
        alert('No paragraphs to remove!');
    }
}

// Get references to the buttons
const changeTextBtn = document.getElementById('changeTextBtn');
const styleBtn = document.getElementById('styleBtn');
const addElementBtn = document.getElementById('addElementBtn');

// Add event listeners to the buttons
if (changeTextBtn) {
    changeTextBtn.addEventListener('click', function() {
        changeDynamicText('The text has been updated!');
    });
}

if (styleBtn) {
    styleBtn.addEventListener('click', toggleHighlight);
}

if (addElementBtn) {
    addElementBtn.addEventListener('click', addParagraph);
}

// Add a button to remove an element dynamically
const removeElementBtn = document.createElement('button');
removeElementBtn.textContent = 'Remove Paragraph';
document.querySelector('main').appendChild(removeElementBtn);

removeElementBtn.addEventListener('click', removeParagraph);