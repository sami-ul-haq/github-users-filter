const filterValue = document.getElementById('filterValue');
const result = document.getElementById('result');

// Fetching Data
async function fetchData(){
	let response = await fetch('https://api.github.com/users');
	let resData = await response.json();
	filterCards(resData);	
}
fetchData();

// fetch('https://api.github.com/users')
// .then(response => response.json())
// .then(data => console.log(data))


// Making Cards
const filterCards = data =>{
	data.forEach(item => {
		const divElement = document.createElement('div');
		divElement.classList = 'user card';
		const output = `
		<div>
			<h1 class="card-title">${item.login}</h1>
		</div>
		<div>
			<img class="img-fluid rounded-circle" src="${item.avatar_url}" alt="" width="150px" />
		</div>`
		divElement.innerHTML = output;
		result.appendChild(divElement);
	});
};


// Filter Users
const filterUsers = (e) =>{
	let filterTargetValues = e.target.value.toUpperCase();
	let users = document.querySelectorAll('.user');
	users.forEach( user => {
		user.textContent.toUpperCase().includes(filterTargetValues) ?
		user.style.display = 'block' :
		user.style.display = 'none';

	})
}


filterValue.addEventListener('input' , filterUsers);