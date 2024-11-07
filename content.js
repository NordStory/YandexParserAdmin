// Создадим функцию для извлечения данных
function parseData() {
	const rows = document.querySelectorAll('tr.\\_4MDANNcq75dbgFRyvxl1lw\\=\\=')
	const data = []
		rows.forEach(row => {
			const name =
				row.querySelector('span[data-test-id="user-name"]')?.innerText || row.querySelector('span.UserName')?.innerText ||
				'Не найдено'
			// const login =
			// 	row.querySelector('div.Y-8DnREPIujoZt3kfwgoHw\\=\\= > span')?.innerText ||
			// 	'Не найдено'
			// Находим все элементы с указанным селектором внутри row
			const elements = row.querySelectorAll(
				'div.Y-8DnREPIujoZt3kfwgoHw\\=\\= > span'
			)
			// Проверяем, что элемент существует, и берем второй по счету (индекс 1)
			const login = elements[1]?.innerText || 'Не найдено'
			const position =
				row.querySelector('span.rwGJTYxnyRIpO3T9g2R82Q\\=\\=')?.innerText ||
				'Не найдено'
	
			data.push({ login, name, position })
		})
		return data
	}

// Отправляем данные в popup через сообщения
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === 'getData') {
		const data = parseData()
		sendResponse({ data })
	}
})
