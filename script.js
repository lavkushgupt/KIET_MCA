script.js

const Url =

"https://jsonplaceholder.typicode.com/users"; tab += '<tr>

async function getapi(url) {

const response = await fetch(Url);

var data = await response.json();

console.log(data);

show(data);

}

</tr>';

}

1個

hanics of wong with one of the Top Corporates

function show(data) {

let tab = '<tr>

<th class="text-

center">ld</th>

<th class="text-

center">Name</th>

center">Email</th> <th class="text-

</tr>';

for (let r of data) {

<td>${r.id}</td>

<td>${r.name}</td>

<td>${r.email}</td>

2

document.getElementById("employees").inner HTML = tab;

}

getapi (Url);
