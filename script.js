// Get the form and input elements
let form = document.querySelector('#libform');
let nounInput = document.querySelector('#noun');
let adjectiveInput = document.querySelector('#adjective');
let personInput = document.querySelector('#person');
let verbInput = document.querySelector('#verb');
let placeInput = document.querySelector('#place');
let story = document.querySelector('#story');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input values
    let noun = nounInput.value;
    let adjective = adjectiveInput.value;
    let person = personInput.value;
    let verb = verbInput.value;
    let place = placeInput.value;

    // Make sure the input values are not empty
    if (noun === '' || adjective === '' || person === '' || verb === '' || place === '') {
        alert('Please fill out all the input fields');
        return;
    }

    // Generate the story using the input values
    const storyText = `One day, ${person} was walking through the ${place} when they stumbled upon a ${adjective} ${noun}. They couldn't resist the temptation to ${verb} it, and as a result, they had a great time.`;

    // Display the story in the story element
    story.textContent = storyText;
});
let