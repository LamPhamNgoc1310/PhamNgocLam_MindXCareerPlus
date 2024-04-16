document.getElementById('generate').addEventListener('click', function () {
    let inputA = parseInt(document.getElementById('a').value);
    let inputB = parseInt(document.getElementById('b').value);
    let results = document.getElementById('results');

    // Clear the results
    results.innerHTML = '';

    for (let i = inputA; i <= inputB; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            // create a new result element
            let resItem = document.createElement('p');
            // dom the content of the element
            resItem.textContent = i;

            results.appendChild(resItem);
        }
    }
});