var xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);




xhr.onload = function () {
	if (xhr.status === 200) {
		var responseData = JSON.parse(xhr.responseText);
		responseData.sort(function (a, b) {
			return b.name - a.name;  //score
		});
		// responseData.sort(function (a, b) {
		// 	return a.name.localeCompare(b.name);
		// });

		for (var i = 0; i < responseData.length; i++) {
			var item = responseData[i];

			var div = document.createElement("div");
			div.classList.add('board__player')

			var nameElement = document.createElement("p");
			nameElement.classList.add("board__text");
			nameElement.classList.add("board__name");
			nameElement.textContent = item.name;

			var scoreElement = document.createElement("p");
			scoreElement.classList.add("board__text");
			scoreElement.classList.add("board__score");
			scoreElement.textContent = item.id; //score

			div.appendChild(nameElement);
			div.appendChild(scoreElement);

			document.getElementById("container").appendChild(div);
		}
	}
};




xhr.onerror = function () {
	console.error("Ошибка получения данных");
};

xhr.send();
