/* 0 = false 1 = true */
answerIsShown = 0;
currentLine = null;
lineNumber = 1; // Set the desired line number here

document.getElementById('card').addEventListener('click', () => {
    getSpecificLine();
});

function getSpecificLine() {
    fetch('words.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('HAH skill issue');
            }
            return response.text();
        })
        .then(data => {
            // Split the file into an array of lines
            const lines = data.split(/\r?\n/).filter(line => line.trim() !== '');

            // Ensure the line number is within range
            if (lineNumber < 1 || lineNumber > lines.length) {
                console.log('Line number out of range!');
                return;
            }

            // Get the specific line (adjust for zero-based indexing)
            const specificLine = lines[lineNumber - 1];

            // Display the specific line in the button text
            document.getElementById('card').innerText = specificLine;

            // Update `currentLine` variable
            currentLine = specificLine;

            // Optionally toggle `answerIsShown` if you need to
            answerIsShown = 1;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
