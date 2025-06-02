const sidebar = document.querySelector('.sidebar')
const openSidebar = document.querySelector('.header__burger')
const closeSidebar = document.querySelector('.sidebar__close-icons')
const openSidebarButtons = document.querySelectorAll('.header__burger')
const sidebarLinks = document.querySelectorAll('.sidebar__menu-link')

openSidebarButtons.forEach(button => {
	button.addEventListener('click', function () {
		sidebar.classList.remove('sidebar-close')
		sidebar.classList.add('sidebar-open')
	})
})

closeSidebar.addEventListener('click', function () {
	sidebar.classList.remove('sidebar-open')
	sidebar.classList.add('sidebar-close')
})

sidebarLinks.forEach(link => {
	link.addEventListener('click', function () {
		sidebar.classList.remove('sidebar-open')
		sidebar.classList.add('sidebar-close')
	})
})

//slider

function initSwiperIfNeeded() {
	const container = document.querySelector('.products-container')

	if (window.innerWidth <= 992) {
		if (!container.classList.contains('swiper-initialized')) {
			// Сохраняем оригинальные элементы
			const products = Array.from(container.querySelectorAll('.product'))

			// Создаем новую структуру Swiper
			const wrapper = document.createElement('div')
			wrapper.className = 'swiper-wrapper'

			products.forEach(product => {
				const slide = document.createElement('div')
				slide.className = 'swiper-slide'
				slide.innerHTML = product.innerHTML
				wrapper.appendChild(slide)
			})

			// Очищаем контейнер и добавляем новую структуру
			container.innerHTML = ''
			container.appendChild(wrapper)
			container.classList.add('swiper')

			// Создаем элементы пагинации и навигации
			const pagination = document.createElement('div')
			pagination.className = 'swiper-pagination'
			container.appendChild(pagination)

			// Инициализируем Swiper
			new Swiper(container, {
				slidesPerView: 1,
				spaceBetween: 20,
				loop: true,
				loopedSlides: products.length, // Количество слайдов для дублирования
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				navigation: {
					nextEl: '.goods-button-next',
					prevEl: '.goods-button-prev',
				},
				breakpoints: {
					768: {
						slidesPerView: 2.15,
						spaceBetween: 30,
						loopedSlides: products.length,
					},
				},
			})

			// Отмечаем, что слайдер инициализирован
			container.classList.add('swiper-initialized')
		}
	} else {
		// Если это ПК (>992px) и слайдер был инициализирован
		if (container.classList.contains('swiper-initialized')) {
			// Уничтожаем Swiper
			const swiperInstance = container.swiper
			if (swiperInstance) {
				swiperInstance.destroy(true, true)
			}

			// Восстанавливаем исходный HTML с <li> и классом goods__content-item
			const slides = container.querySelectorAll('.swiper-slide')
			container.innerHTML = ''
			slides.forEach(slide => {
				const listItem = document.createElement('li') // Создаем <li>
				listItem.className = 'goods__content-item product' // Добавляем оба класса
				listItem.innerHTML = slide.innerHTML // Копируем содержимое слайда
				container.appendChild(listItem) // Добавляем в контейнер
			})

			// Удаляем классы Swiper
			container.classList.remove(
				'swiper',
				'swiper-initialized',
				'swiper-horizontal',
				'swiper-autoheight',
				'swiper-backface-hidden'
			)
		}
	}
	rebindModalAndPanelEvents()
	function rebindModalAndPanelEvents() {
		const openButtons = document.querySelectorAll('.open-panel')
		const panelPopup = document.getElementById('panelPopup')
		const overlay = document.getElementById('overlay')

		openButtons.forEach(button => {
			button.addEventListener('click', () => {
				panelPopup.classList.add('show')
				overlay.classList.add('show')
			})
		})

		overlay.addEventListener('click', () => {
			panelPopup.classList.remove('show')
			overlay.classList.remove('show')
		})

		const modalOverlay = document.getElementById('modalOverlay')
		const openModalButtons = document.querySelectorAll('.open-modal')

		openModalButtons.forEach(button => {
			button.addEventListener('click', () => {
				modalOverlay.classList.add('active')
			})
		})

		modalOverlay.addEventListener('click', e => {
			if (e.target === modalOverlay) {
				modalOverlay.classList.remove('active')
			}
		})
	}
}

window.addEventListener('load', initSwiperIfNeeded)
window.addEventListener('resize', initSwiperIfNeeded)

const swiperDesign = new Swiper('.design-swiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,

	navigation: {
		nextEl: '.design-next',
		prevEl: '.design-prev',
	},
})

const swiperReviews = new Swiper('.reviews .swiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.reviews__button-next',
		prevEl: '.reviews__button-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
})
ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
		center: [45.050583, 38.961802], // координаты филиала
		zoom: 16,
	})

	var myPlacemark = new ymaps.Placemark([45.050583, 38.961802], {
		hintContent: 'Наш филиал',
		balloonContent:
			'г. Краснодар, ул. Красных Партизан, 483 (работаем по г. Краснодар)',
	})

	myMap.geoObjects.add(myPlacemark)
})

const modalOverlay = document.getElementById('modalOverlay')
const openModalButtons = document.querySelectorAll('.open-modal')

openModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		modalOverlay.classList.add('active')
	})
})

modalOverlay.addEventListener('click', e => {
	if (e.target === modalOverlay) {
		modalOverlay.classList.remove('active')
	}
})

document.addEventListener('DOMContentLoaded', function () {
	const openButtons = document.querySelectorAll('.open-panel')
	const panelPopup = document.getElementById('panelPopup')
	const overlay = document.getElementById('overlay')

	// Открытие панели
	openButtons.forEach(button => {
		button.addEventListener('click', () => {
			panelPopup.classList.add('show')
			overlay.classList.add('show')
		})
	})

	// Закрытие по клику на оверлей
	overlay.addEventListener('click', () => {
		panelPopup.classList.remove('show')
		overlay.classList.remove('show')
	})
})

document.addEventListener('DOMContentLoaded', function () {
	const sticky = document.querySelector('.sticky-header')
	const header = document.querySelector('.header')

	window.addEventListener('scroll', () => {
		if (window.scrollY > header.offsetHeight) {
			sticky.classList.add('visible')
		} else {
			sticky.classList.remove('visible')
		}
	})
})

document.addEventListener('DOMContentLoaded', function () {
	const phoneInputs = document.querySelectorAll('.phone-mask') // используем общий класс

	phoneInputs.forEach(input => {
		input.addEventListener('input', onPhoneInput)
		input.addEventListener('focus', onPhoneInput)
		input.addEventListener('blur', onPhoneBlur)
	})

	function onPhoneInput(e) {
		let input = e.target
		let value = input.value.replace(/\D/g, '')

		if (value.startsWith('8')) value = value.slice(1)
		if (value.startsWith('7')) value = value.slice(1)

		let result = '+7 ('
		if (value.length > 0) result += value.substring(0, 3)
		if (value.length >= 4) result += ') ' + value.substring(3, 5)
		if (value.length >= 6) result += '-' + value.substring(5, 7)
		if (value.length >= 8) result += '-' + value.substring(7, 9)

		input.value = result
	}

	function onPhoneBlur(e) {
		const input = e.target
		const digits = input.value.replace(/\D/g, '')
		if (digits.length < 10) {
			input.value = ''
		}
	}
})

/////////////////////////////////////////////////////////////

const textEl = document.querySelector('.header__logo-text')
const text = textEl.textContent

textEl.innerHTML = text
	.split('')
	.map(letter => {
		return letter === ' '
			? `<span class="letter">&nbsp;</span>`
			: `<span class="letter">${letter}</span>`
	})
	.join('')

gsap.fromTo(
	'.letter',
	{ opacity: 0, y: 20 },
	{
		opacity: 1,
		y: 0,
		stagger: 0.05,
		duration: 0.5,
		delay: 2,
		ease: 'power2.out',
	}
)

gsap.from('.header', {
	opacity: 0,
	y: -50,
	duration: 1,
	delay: 1,
	ease: 'power2.out',
})

gsap.from('.header__inner > div', {
	opacity: 0,
	y: 30,
	duration: 0.8,
	stagger: 0.2, // задержка между блоками
	delay: 1.5,
	ease: 'power2.out',
})

gsap.from('.header__menu-item', {
	opacity: 0,
	y: 20,
	stagger: 0.1,
	duration: 0.6,
	delay: 3,
	ease: 'back.out(1.7)',
})

gsap.from('.jump-form', {
	scale: 0,
	opacity: 0,
	delay: 4,
	duration: 0.5,
	ease: 'back.out(1.7)',
})
gsap.registerPlugin(ScrollTrigger)

gsap.from('.banner__title', {
	y: 50,
	opacity: 0,
	duration: 1,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.banner__content',
		start: 'top 80%',
	},
})

gsap.from('.banner__item', {
	y: 30,
	opacity: 0,
	duration: 0.8,
	ease: 'power2.out',
	stagger: 0.2,
	scrollTrigger: {
		trigger: '.banner__content',
		start: 'top 80%',
	},
})

gsap.from('.banner__icon', {
	scale: 1.8,
	opacity: 0,
	duration: 1.6,
	ease: 'back.out(1.7)',
	stagger: 0.15,
	scrollTrigger: {
		trigger: '.banner__content',
		start: 'top 80%',
	},
})

gsap.registerPlugin(ScrollTrigger)

gsap.from('.leadership__lest', {
	y: 40,
	opacity: 0,
	duration: 0.8,
	stagger: 0.3,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.leadership__inner',
		start: 'top bottom-=200',
		toggleActions: 'play none none none',
	},
})

gsap.registerPlugin(ScrollTrigger)

gsap.utils.toArray('.main__title').forEach(title => {
	gsap.fromTo(
		title,
		{ opacity: 0, y: 100 },
		{
			opacity: 1,
			y: 0,
			duration: 0.8,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: title,
				start: 'top bottom-=200',
				toggleActions: 'play none none none',
			},
		}
	)
})

gsap.registerPlugin(ScrollTrigger)

const items = document.querySelectorAll('.goods__content-item')

const rows = {}

items.forEach(item => {
	const top = item.offsetTop
	if (!rows[top]) {
		rows[top] = []
	}
	rows[top].push(item)
})

// Анимируем каждую строку, когда она попадает в видимую область
Object.values(rows).forEach(rowItems => {
	gsap.from(rowItems, {
		scrollTrigger: {
			trigger: rowItems[0], // первая карточка строки
			start: 'top bottom-=500', // точка входа строки
			toggleActions: 'play none none none',
		},
		opacity: 0,
		y: 50,
		duration: 1.3,
		stagger: 0.4,
		ease: 'power2.out',
	})
})

gsap.fromTo(
	'.highlight',
	{
		y: 0,
		scale: 1,
	},
	{
		scrollTrigger: {
			trigger: '.highlight',
			start: 'top 80%', // запускается, когда блок в зоне видимости
		},
		y: -20,
		scale: 1.6,
		duration: 0.4,
		ease: 'power2.out',
		yoyo: true,
		repeat: 1,
	}
)

gsap.from('.model__box:nth-child(1)', {
	x: -100,
	opacity: 0,
	duration: 1,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.model__inner',
		start: 'top 45%',
	},
})

gsap.from('.model__box:nth-child(2)', {
	scale: 0.8,
	opacity: 0,
	duration: 1,
	ease: 'back.out(1.7)',
	scrollTrigger: {
		trigger: '.model__inner',
		start: 'top 45%',
	},
})

gsap.from('.model__box:nth-child(3)', {
	x: 100,
	opacity: 0,
	duration: 1,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.model__inner',
		start: 'top 45%',
	},
})

gsap.registerPlugin(ScrollTrigger)

// Основная анимация появления боксов
gsap.from('.additional__box', {
	y: 80,
	opacity: 0,
	scale: 0.8,
	rotate: -10,
	duration: 1.1,
	ease: 'bounce.out',
	stagger: 0.25,
	scrollTrigger: {
		trigger: '.additional__inner',
		start: 'top 80%',
		toggleActions: 'play none none none',
	},
})

// Анимация изображений внутри боксов
gsap.from('.additional__box-img', {
	scale: 0.7,
	rotate: 30,
	opacity: 0,
	duration: 1.2,
	ease: 'elastic.out(1, 0.6)',
	stagger: 0.25,
	scrollTrigger: {
		trigger: '.additional__inner',
		start: 'top 80%',
	},
})

gsap.fromTo(
	'.additional-letter',
	{ opacity: 0, y: 20 },
	{
		opacity: 1,
		y: 0,
		stagger: 0.04,
		duration: 0.4,
		delay: 0.5,
		ease: 'power2.out',
		scrollTrigger: {
			trigger: '.additional__inner',
			start: 'top 80%',
		},
	}
)

document.querySelectorAll('.additional__box').forEach(box => {
	const img = box.querySelector('.additional__box-img')
	const btn = box.querySelector('.additional__box-btn')
	box.addEventListener('mouseenter', () => {
		gsap.to(img, { scale: 1.01, duration: 0.4, ease: 'power2.out' })
		gsap.to(btn, { boxShadow: '0 0 20pxrgb(210, 210, 210)', duration: 0.3 })
	})
	box.addEventListener('mouseleave', () => {
		gsap.to(img, { rotate: 0, scale: 1, duration: 0.4, ease: 'power2.out' })
		gsap.to(btn, { boxShadow: 'none', duration: 0.3 })
	})
})
gsap.registerPlugin(ScrollTrigger)

gsap.from('.kitchens__box', {
	opacity: 0,
	y: 80,
	rotateY: 60,
	scale: 0.8,
	duration: 1.1,
	ease: 'back.out(1.7)',
	stagger: 0.18,
	scrollTrigger: {
		trigger: '.kitchens__inner',
		start: 'top 80%',
		toggleActions: 'play none none none',
	},
})

gsap.from('.kitchens__box-img', {
	scale: 0.7,
	rotate: 20,
	opacity: 0,
	duration: 1.2,
	ease: 'elastic.out(1, 0.6)',
	stagger: 0.18,
	scrollTrigger: {
		trigger: '.kitchens__inner',
		start: 'top 80%',
	},
})

gsap.fromTo(
	'.kitchens-letter',
	{ opacity: 0, y: 20 },
	{
		opacity: 1,
		y: 0,
		stagger: 0.03,
		duration: 0.4,
		delay: 0.3,
		ease: 'power2.out',
		scrollTrigger: {
			trigger: '.kitchens__inner',
			start: 'top 80%',
		},
	}
)

gsap.fromTo(
	'.kitchens__box-text span',
	{ scale: 1, color: '#e3010f' },
	{
		scale: 1.25,
		color: '#ffb800',
		repeat: 1,
		yoyo: true,
		duration: 0.4,
		stagger: 0.2,
		scrollTrigger: {
			trigger: '.kitchens__inner',
			start: 'top 80%',
		},
	}
)

const stepsTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: '.steps__inner--wrap',
		start: 'bottom-=300 bottom', // Анимация запускается за 300px от низа экрана
		toggleActions: 'play none none none',
	},
})

stepsTimeline

	.from('.steps__box', {
		duration: 1,
		x: i => (i % 2 === 0 ? -100 : 100), // чередование движения влево/вправо
		opacity: 0,
		rotationY: 90,
		transformPerspective: 800,
		ease: 'power3.out',
		stagger: 0.2,
	})

	.from(
		'.steps__box-wrapper',
		{
			duration: 0.8,
			opacity: 0,
			y: 30,
			ease: 'power2.out',
			stagger: 0.15,
		},
		'-=0.5'
	)

	.to(
		'.steps__box-items.circle',
		{
			scale: 1.2,
			duration: 0.3,
			ease: 'power1.inOut',
			yoyo: true,
			repeat: 1,
			stagger: 0.1,
		},
		'-=0.3'
	)

	.from(
		'.kitchens__box-button',
		{
			duration: 0.8,
			y: 50,
			opacity: 0,
			scale: 0.8,
			ease: 'back.out(1.7)',
		},
		'-=0.3'
	)

const reviewsTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: '.reviews__inner',
		start: 'top 80%',
		toggleActions: 'play none none none',
	},
})

reviewsTimeline

	.from('.reviews__inner', {
		duration: 1.2,
		scale: 0.8,
		rotate: -10,
		opacity: 0,
		ease: 'power3.out',
	})

	.from(
		'.reviews__box',
		{
			duration: 1,
			opacity: 0,
			y: 100,
			scale: 0.9,
			ease: 'back.out(1.7)',
			stagger: 0.2,
		},
		'-=0.8'
	)

	.from(
		'.reviews__box-img img',
		{
			duration: 1.2,
			scale: 0.7,
			rotate: 15,
			opacity: 0,
			ease: 'elastic.out(1, 0.6)',
			stagger: 0.15,
		},
		'-=1'
	)
reviewsTimeline
	.fromTo(
		'.reviews__star',
		{ scale: 0, opacity: 0 },
		{
			scale: 1.5,
			opacity: 1,
			duration: 0.5,
			ease: 'back.out(2)',
			stagger: 0.1, // Задержка между звездами
		},
		'-=0.5'
	)
	.to(
		'.reviews__star',
		{
			scale: 1,
			duration: 0.3,
			ease: 'power2.out',
		},
		'-=0.3' // Плавное возвращение к обычному размеру
	)

// Анимация для блока вопросов
gsap
	.timeline({
		scrollTrigger: {
			trigger: '.questions__inner',
			start: 'top 80%',
			toggleActions: 'play none none none',
		},
	})
	// Плавное появление секций слева-направо
	.from('.questions__box-information', {
		x: -40,
		opacity: 0,
		duration: 0.7,
		ease: 'power2.out',
	})
	.from(
		'.questions__box-consultant',
		{
			y: 40,
			opacity: 0,
			duration: 0.7,
			ease: 'power2.out',
		},
		'-=0.5'
	)
	.from(
		'.questions__box-telephone',
		{
			x: 40,
			opacity: 0,
			duration: 0.7,
			ease: 'power2.out',
		},
		'-=0.5'
	)
	// Лёгкий bounce-эффект для иконок
	.from(
		'.questions__box-img',
		{
			scale: 0.7,
			opacity: 0,
			rotate: 15,
			duration: 0.5,
			ease: 'back.out(1.7)',
			stagger: 0.15,
		},
		'-=0.5'
	)
	// Плавное появление текста и ссылок
	.from(
		'.questions__box-text, .questions__box-consultant-title, .questions__box-link',
		{
			opacity: 1,
			y: 0,
			duration: 0.5,
			stagger: 0.1,
			ease: 'power2.out',
		},
		'-=0.4'
	)

// 2. Основная анимация блока
gsap
	.timeline({
		scrollTrigger: {
			trigger: '.schedule__inner',
			start: 'top 80%',
			toggleActions: 'play none none none',
		},
	})
	// Взрывной эффект букв
	.fromTo(
		'.schedule-letter',
		{
			opacity: 0,
			y: 80,
			scale: 2.5,
			rotate: () => gsap.utils.random(-90, 90),
			textShadow: '0 0 40px #fff, 0 0 80px #e3010f',
			color: '#e3010f',
			filter: 'blur(8px)',
		},
		{
			opacity: 1,
			y: 0,
			scale: 1,
			rotate: 0,
			textShadow: '0 0 0px #fff',
			color: '#222',
			filter: 'blur(0px)',
			duration: 1.1,
			stagger: 0.04,
			ease: 'expo.out',
		}
	)
	// Вылет формы с подпрыгиванием и легкой вибрацией
	.from(
		'.schedule__form',
		{
			y: 120,
			scale: 0.7,
			opacity: 0,
			rotate: 8,
			filter: 'blur(10px)',
			duration: 0.8,
			ease: 'back.out(2.5)',
		},
		'-=0.5'
	)
	// Вспышка кнопки и пульсация
	.fromTo(
		'.schedule__form-btn',
		{
			scale: 0.7,
			boxShadow: '0 0 0px #fff',
			background: 'linear-gradient(90deg, #e3010f 0%, #e3010f 100%)',
			opacity: 0,
		},
		{
			scale: 1.15,
			boxShadow: '0 0 40px #e3010f, 0 0 80px #e3010f',
			opacity: 1,
			duration: 0.3,
			ease: 'power4.out',
			onComplete: () => {
				gsap.to('.schedule__form-btn', {
					scale: 1,
					boxShadow: '0 0 0px #fff',
					duration: 0.3,
					repeat: 2,
					yoyo: true,
					ease: 'power1.inOut',
				})
			},
		},
		'-=0.4'
	)
