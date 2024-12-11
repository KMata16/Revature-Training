function getAuthor() {
    const ul = document.getElementById("myList")
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let authors = data;

            authors.map(function (author) {
                let name = document.createElement('h2');
                let email = document.createElement('li');

                name.innerHTML = `${author.name}`;
                email.innerHTML = `${author.email}`;

                ul.appendChild(name);
                ul.appendChild(email);
            })
        })
}