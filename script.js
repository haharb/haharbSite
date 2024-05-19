
function loadPage(page) {
    
    fetch(page)
        .then(response => response.text())
        .then(data => {
            console.log(document.getElementById('content'));
            document.getElementById('content').innerHTML = data;
            console.log(data);
        })
        .catch(error => console.error('Error loading page:', error));
        
}

function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

loadHeader();