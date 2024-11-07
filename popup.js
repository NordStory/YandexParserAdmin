// Функция для копирования текста в буфер обмена
function copyToClipboard(text) {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			console.log('Таблица успешно скопирована в буфер обмена.')
		})
		.catch(err => {
			console.error('Ошибка при копировании в буфер обмена:', err)
		})
}

// Функция для отображения данных в таблице и подготовки данных для копирования
function displayData(data) {
	const tableBody = document.querySelector('#data-table tbody')
	tableBody.innerHTML = ''

	let textToCopy = 'Логин\tФИО\tДолжность\n' // Заголовки для копирования

	data.forEach(row => {
		const tr = document.createElement('tr')
		tr.innerHTML = `
					<td>${row.login}</td>
					<td>${row.name}</td>
					<td>${row.position}</td>
			`
		tableBody.appendChild(tr)

		// Добавляем данные строки в текст для копирования
		textToCopy += `${row.login}\t${row.name}\t${row.position}\n`
	})

	// Копируем таблицу в буфер обмена после ее создания
	copyToClipboard(textToCopy)
}

// Отправляем сообщение контентному скрипту для получения данных
chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
	chrome.tabs.sendMessage(tabs[0].id, { action: 'getData' }, response => {
		if (response && response.data) {
			displayData(response.data)
		} else {
			console.error('Ошибка при получении данных.')
		}
	})
})
