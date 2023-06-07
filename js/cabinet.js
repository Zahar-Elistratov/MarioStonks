const tabButtons = document.querySelectorAll('.tabs__button')
const tabs = document.querySelectorAll('.tabs__table')

tabButtons.forEach(item => {
	item.addEventListener('click', () => {
		let currentBtn = item
		let tabId = currentBtn.getAttribute('data-tab')
		let currentTab = document.querySelector(tabId)

		if (!currentBtn.classList.contains('tabs__button_active')) {
			tabButtons.forEach(item => {
				item.classList.remove('tabs__button_active')
			})

			tabs.forEach(item => {
				item.classList.remove('tabs__table_active')
			})

			currentBtn.classList.add('tabs__button_active')
			currentTab.classList.add('tabs__table_active')
		}
	})
})
