// Object to store command functions
var commands = {
    'whois': function() {
        // Code to display 'whois' information
    },
    'socials': function() {
        // Code to display social media links
    },
    'projects': function() {
        // Code to display project information
    }
};

// Function to handle user input
function handleInput(input) {
    // Split the input into command and arguments
    var parts = input.split(' ');
    var command = parts[0];
    var args = parts.slice(1);

    // Check if the command exists in the commands object
    if (commands.hasOwnProperty(command)) {
        // If it does, execute the command function with the arguments
        commands[command].apply(null, args);
    } else {
        // If it doesn't, display an error message
        console.log('Command not found: ' + command);
    }
}

// Event listener for user input
document.getElementById('input').addEventListener('keydown', function(e) {
    // Check if the key pressed was the Enter key
    if (e.keyCode === 13) {
        // If it was, handle the input
        handleInput(this.value);

        // Clear the input field
        this.value = '';
    }
});