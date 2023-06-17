var xhr = new XMLHttpRequest();

xhr.open("GET", "https://648de73d2de8d0ea11e85d28.mockapi.io/users", true);




xhr.onload = function () {
	if (xhr.status === 200) {
		var responseData = JSON.parse(xhr.responseText);
		responseData.sort(function (a, b) {
			return b.score - a.score;
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
			scoreElement.textContent = item.score;

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
