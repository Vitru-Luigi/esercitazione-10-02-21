// const tvGenres = [
// 	{
// 		id: 10759,
// 		name: 'Action & Adventure',
// 	},
// 	{
// 		id: 16,
// 		name: 'Animazione',
// 	},
// 	{
// 		id: 35,
// 		name: 'Commedia',
// 	},
// 	{
// 		id: 80,
// 		name: 'Crime',
// 	},
// 	{
// 		id: 99,
// 		name: 'Documentario',
// 	},
// 	{
// 		id: 18,
// 		name: 'Dramma',
// 	},
// 	{
// 		id: 10751,
// 		name: 'Famiglia',
// 	},
// 	{
// 		id: 10762,
// 		name: 'Kids',
// 	},
// 	{
// 		id: 9648,
// 		name: 'Mistero',
// 	},
// 	{
// 		id: 10763,
// 		name: 'News',
// 	},
// 	{
// 		id: 10764,
// 		name: 'Reality',
// 	},
// 	{
// 		id: 10765,
// 		name: 'Sci-Fi & Fantasy',
// 	},
// 	{
// 		id: 10766,
// 		name: 'Soap',
// 	},
// 	{
// 		id: 10767,
// 		name: 'Talk',
// 	},
// 	{
// 		id: 10768,
// 		name: 'War & Politics',
// 	},
// 	{
// 		id: 37,
// 		name: 'Western',
// 	},
// ]

// const movieGenres = [
// 	{
// 		id: 28,
// 		name: 'Azione',
// 	},
// 	{
// 		id: 12,
// 		name: 'Avventura',
// 	},
// 	{
// 		id: 16,
// 		name: 'Animazione',
// 	},
// 	{
// 		id: 35,
// 		name: 'Commedia',
// 	},
// 	{
// 		id: 80,
// 		name: 'Crime',
// 	},
// 	{
// 		id: 99,
// 		name: 'Documentario',
// 	},
// 	{
// 		id: 18,
// 		name: 'Dramma',
// 	},
// 	{
// 		id: 10751,
// 		name: 'Famiglia',
// 	},
// 	{
// 		id: 14,
// 		name: 'Fantasy',
// 	},
// 	{
// 		id: 36,
// 		name: 'Storia',
// 	},
// 	{
// 		id: 27,
// 		name: 'Horror',
// 	},
// 	{
// 		id: 10402,
// 		name: 'Musica',
// 	},
// 	{
// 		id: 9648,
// 		name: 'Mistero',
// 	},
// 	{
// 		id: 10749,
// 		name: 'Romance',
// 	},
// 	{
// 		id: 878,
// 		name: 'Fantascienza',
// 	},
// 	{
// 		id: 10770,
// 		name: 'televisione film',
// 	},
// 	{
// 		id: 53,
// 		name: 'Thriller',
// 	},
// 	{
// 		id: 10752,
// 		name: 'Guerra',
// 	},
// 	{
// 		id: 37,
// 		name: 'Western',
// 	},
// ]

// // IMAGE ARRAY URL

// // backdrop_sizes (4) ["w300", "w780", "w1280", "original"]
// // logo_size (7) ["w45", "w92", "w154", "w185", "w300", "w500", "original"]
// // poster_sizes (7) ["w92", "w154", "w185", "w342", "w500", "w780", "original"]
// // profile_sizes (4) ["w45", "w185", "h632", "original"]
// // still_sizes (4) ["w92", "w185", "w300", "original"]

// let requestToken = null,
// 	sessionId = null,
// 	accountId = null,
// 	userName = null,
// 	userNick = null,
// 	userImg = null,
// 	carouselWrapper = null,
// 	carWrapperCardWrapper = null,
// 	// loadMovieTr = false,
// 	// loadMoviePop = false,
// 	// loadtvTr = false,
// 	// loadtvPop = false,
// 	ID = 0

// const API_KEY = '184ac615bbddb56006c71f577cc1b1b1',
// 	BASE_API_URL = 'https://api.themoviedb.org/3/',
// 	POSTER_BASE_URL = 'https://image.tmdb.org/t/p',
// 	MOVIE_TOP_RATED_API_URL = `${BASE_API_URL}discover/movie?api_key=${API_KEY}&language=it-IT&sort_by=vote_average.desc&include_adult=false&include_video=false&vote_count.gte=150&vote_average.gte=7`,
// 	MOVIE_POPULAR_API_URL = `${BASE_API_URL}discover/movie?api_key=${API_KEY}&language=it-IT&sort_by=popularity.desc&include_adult=false&include_video=false&vote_count.gte=150&vote_average.gte=7`,
// 	TV_TOP_RATED_API_URL = `${BASE_API_URL}discover/tv?api_key=${API_KEY}&language=it-IT&sort_by=vote_average.desc&include_adult=false&include_veo=false&vote_count.gte=150&vote_average.gte=7`,
// 	TV_POPULAR_API_URL = `${BASE_API_URL}discover/tv?api_key=${API_KEY}&language=it-IT&sort_by=popularity.desc&include_adult=false&include_veo=false&vote_count.gte=150&vote_average.gte=7`,
// 	MOVIE_WATCHLIST_API_URL = `${BASE_API_URL}account/10072776/watchlist/movies?api_key=${API_KEY}&language=it-IT&sort_by=created_at.asc`,
// 	TV_WATCHLIST_API_URL = `${BASE_API_URL}account/10072776/watchlist/tv?api_key=${API_KEY}&language=it-IT&sort_by=created_at.asc`

// let API_URL_ARRAY = [
// 	MOVIE_TOP_RATED_API_URL,
// 	MOVIE_POPULAR_API_URL,
// 	TV_TOP_RATED_API_URL,
// 	TV_POPULAR_API_URL,
// 	MOVIE_WATCHLIST_API_URL,
// 	TV_WATCHLIST_API_URL,
// ]

// let sectionName = [
// 	'MOVIES TOP RATED',
// 	'MOVIES POPULAR',
// 	'TV SHOWS TOP RATED',
// 	'TV SHOWS POPULAR',
// 	'MOVIES WATCHLIST',
// 	'TV WATCHLIST',
// ]

// let stringState = [
// 	'movieTrState',
// 	'moviePopState',
// 	'tvTrState',
// 	'tvPopState',
// 	'movieWatchListState',
// 	'tvWatchListState',
// ]
// let state = [
// 	{ movieTrState: [] },
// 	{ moviePopState: [] },
// 	{ tvTrState: [] },
// 	{ tvPopState: [] },
// 	{ movieWatchListState: [] },
// 	{ tvWatchListState: [] },
// ]

// let stringLoad = [
// 	'movieTrLoad',
// 	'moviePopLoad',
// 	'tvTrLoad',
// 	'tvPopLoad',
// 	'movieWatchListLoad',
// 	'tvWatchListLoad',
// ]
// let loading = [
// 	{ movieTrLoad: true },
// 	{ moviePopLoad: true },
// 	{ tvTrLoad: true },
// 	{ tvPopLoad: true },
// 	{ movieWatchListLoad: true },
// 	{ tvWatchListLoad: true },
// ]

// // var configuration;
// // console.log(configuration);
// // function getConfig() {
// // 	console.log('getConfig');
// // 	fetch(`https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`)
// // 		.then((res) => {
// // 			// loading[sectionId][stringLoad[sectionId]] = !res.ok;
// // 			return res.json();
// // 		})
// // 		.then((dataJson) => {
// // 			console.log(dataJson.images);
// // 			configuration = dataJson.images;
// // 			console.log(configuration);

// // 			// state[sectionId][stringState[sectionId]] = dataJson.results;
// // 			// state[sectionId][stringState[sectionId]] && createCaroseul(state[sectionId][stringState[sectionId]]);
// // 			// createPagination(dataJson.total_pages);
// // 		});
// // }

// // getConfig();
// // setTimeout(() => {
// // 	console.log(configuration);
// // 	console.log(configuration.base_url);
// // 	console.log(configuration.secure_base_url);
// // 	console.log(configuration.backdrop_sizes);
// // 	console.log(configuration.logo_sizes);
// // 	console.log(configuration.poster_sizes);
// // 	console.log(configuration.profile_sizes);
// // 	console.log(configuration.still_sizes);

// // 	console.log(`${configuration.secure_base_url}${configuration.poster_sizes}`);
// // }, 200);
// // function getUrl () {

// // }

// // function handleHTMLMounted() {
// // 	getConfig()
// // }

// // async function getData(url) {
// // 		try {
// // 		const response = await fetch(popularUrl)
// // 		const rawResponse = await response.json()

// // 		if (!response.ok) {
// // 			throw rawResponse
// // 		}

// // 		state.movies = rawResponse.results
// // 	} catch (errorMessage) {
// // 		console.log(errorMessage);
// // 	}
// // }

// // function getPopularMovieUrl() {
// // 	const popularUrl = getUrl('/movie/popular')

// // 	try {
// // 		const response = await fetch(popularUrl)
// // 		const rawResponse = await response.json()

// // 		if (!response.ok) {
// // 			throw rawResponse
// // 		}

// // 		state.movies = rawResponse.results
// // 	} catch (errorMessage) {
// // 		console.log(errorMessage);
// // 	}
// // }

// const authBlock = document.querySelector('.auth-block'),
// 	main = document.querySelector('main'),
// 	getTokenBtn = authBlock.querySelector('.auth-block__get-token'),
// 	linkAnchor = authBlock.querySelector('.auth-block__link'),
// 	getSessionBtn = authBlock.querySelector('.auth-block__get-session'),
// 	movieForm = document.querySelector('.movie-form'),
// 	movieList = document.querySelector('.movie-list'),
// 	movieNoResults = document.querySelector('.movie-no-results'),
// 	movieListBtn = document.querySelector('.btn-movieList')

// function createActionBar(movie) {
// 	let actionWrapper = document.createElement('div')
// 	actionWrapper.classList.add('action__wrapper')

// 	let progressContainer = document.createElement('div')
// 	progressContainer.classList.add('progress__container')

// 	let percent = movie.vote_average
// 	let percentOf100 = parseFloat(percent * 10)
// 	// console.log(percent.replace('.', ''));
// 	// console.log(parseFloat(percent * 10));
// 	// console.log(percentOf100);

// 	let progress = document.createElement('div')
// 	progress.classList.add(
// 		'c100',
// 		'progress',
// 		`p${percentOf100}`,
// 		'small',
// 		'center'
// 	)

// 	let btnList = document.createElement('button')
// 	btnList.classList.add('btn-list')
// 	let iconList = document.createElement('i')
// 	iconList.classList.add('fa', 'fa-list')

// 	let btnLike = document.createElement('button')
// 	btnLike.classList.add('btn-like')
// 	btnLike.dataset.movieId = movie.id
// 	btnLike.dataset.sectionId = ID
// 	btnLike.dataset.actionId = 'favorite'
// 	btnLike.dataset.movieTitle =
// 		movie.title || movie.name || movie.original_title || movie.original_name
// 	btnLike.addEventListener('click', onAddToActionClick)
// 	let iconLike = document.createElement('i')
// 	iconLike.classList.add('fa', 'fa-heart')
// 	iconLike.dataset.movieId = movie.id
// 	iconLike.dataset.sectionId = ID
// 	iconLike.dataset.actionId = 'favorite'
// 	iconLike.dataset.movieTitle =
// 		movie.title || movie.name || movie.original_title || movie.original_name

// 	let btnWatchList = document.createElement('button')
// 	btnWatchList.classList.add('btn-watchList')
// 	btnWatchList.dataset.movieId = movie.id
// 	btnWatchList.dataset.sectionId = ID
// 	btnWatchList.dataset.actionId = 'watchlist'
// 	btnWatchList.dataset.movieTitle =
// 		movie.title || movie.name || movie.original_title || movie.original_name
// 	btnWatchList.addEventListener('click', onAddToActionClick)
// 	let iconWatchList = document.createElement('i')
// 	iconWatchList.classList.add('fa', 'fa-ticket')
// 	iconWatchList.dataset.movieId = movie.id
// 	iconWatchList.dataset.sectionId = ID
// 	iconWatchList.dataset.actionId = 'watchlist'
// 	iconWatchList.dataset.movieTitle =
// 		movie.title || movie.name || movie.original_title || movie.original_name

// 	let btnVote = document.createElement('button')
// 	btnVote.classList.add('btn-vote')
// 	let iconVote = document.createElement('i')
// 	iconVote.classList.add('fa', 'fa-star')

// 	let span = document.createElement('span')
// 	span.textContent = `${percentOf100}%`

// 	let slice = document.createElement('div')
// 	slice.classList.add('slice')

// 	let bar = document.createElement('div')
// 	bar.classList.add('bar')

// 	let fill = document.createElement('div')
// 	fill.classList.add('fill')

// 	btnList.appendChild(iconList)
// 	btnLike.appendChild(iconLike)
// 	btnWatchList.appendChild(iconWatchList)
// 	btnVote.appendChild(iconVote)

// 	slice.append(bar, fill)
// 	progress.append(span, slice)
// 	progressContainer.appendChild(progress)
// 	actionWrapper.append(
// 		progressContainer,
// 		btnList,
// 		btnLike,
// 		btnWatchList,
// 		btnVote
// 	)
// 	// console.log('DENTRO CREATE ACTION MOVIE', movie.poster_path);
// 	return actionWrapper
// }

// function createSection(sectionTypology) {
// 	let carouselWrapper = document.createElement('section')
// 	carouselWrapper.classList.add('carousel__wrapper')
// 	carouselWrapper.id = `section_${ID}`

// 	carouselWrapper.dataset.sectionType = sectionTypology

// 	const carWrapperCardWrapper = document.createElement('div')
// 	carWrapperCardWrapper.classList.add('carousel__wrapper-card-wrapper')

// 	// const blurLeftContainer = document.createElement('div');
// 	// blurLeftContainer.classList.add('blur-left');
// 	// const blurRightContainer = document.createElement('div');
// 	// blurRightContainer.classList.add('blur-right');
// 	const section_title = document.createElement('h3')
// 	section_title.textContent = `${sectionName[ID]}`
// 	section_title.classList.add('section-title')
// 	carouselWrapper.appendChild(carWrapperCardWrapper)
// 	carouselWrapper.appendChild(section_title)

// 	// carWrapperCardWrapper.append(section_title);
// 	// console.log('section created');
// 	main.appendChild(carouselWrapper)
// }

// function createPagination(pages) {
// 	// create wrapper pagination
// 	// carouselWrapper = document.querySelector('.carousel__wrapper');
// 	let carouselWrapper = document.getElementById(`section_${ID}`)
// 	// console.log(carouselWrapper);
// 	// carouselWrapper = document.querySelector('.carousel__wrapper');
// 	let paginationWrapper = document.createElement('div')
// 	paginationWrapper.classList.add('carousel__wrapper--pagination')
// 	// create ul
// 	let pageUl = document.createElement('ul')
// 	// forEach pages create li and append inside a ul
// 	for (let i = 0; i < pages; i++) {
// 		let pageLi = document.createElement('li')
// 		pageLi.textContent = `${i + 1}`
// 		pageLi.dataset.sectionId = ID
// 		// pageLi.dataset.movieTitle = movie.original_title;
// 		pageLi.onclick = (evt) => {
// 			const sectionId = evt.target.dataset.sectionId
// 			// const movieTitle = evt.target.dataset.movieTitle;
// 			// console.log(sectionId);
// 			//TODO RESET ROW BASE ON INDEX & ineerhtml = ''
// 			;`${createNewPageRow(sectionId, i + 1)}`
// 		}
// 		pageUl.appendChild(pageLi)
// 	}

// 	paginationWrapper.appendChild(pageUl)
// 	carouselWrapper.appendChild(paginationWrapper)
// 	// console.log('create pagination wrpaeer');
// 	// create a function when clik on li  call api passing page
// 	// implement page on funzion LOAD
// 	ID++
// }

// function createCaroseul(state) {
// 	createSection()
// 	state.map((movie) => {
// 		createMovieCard(movie)
// 		// renderMovie(movie);
// 		//TODO AGGIUNGERE CAMPI ALLA CARD
// 	})
// }

// function createNewPageRow(sectionId, page) {
// 	let session = sectionId >= 4
// 	const URL = !session
// 		? `${API_URL_ARRAY[sectionId]}&page=${page}`
// 		: `${API_URL_ARRAY[sectionId]}&page=${page}${`&session_id=${sessionId}`}`
// 	loading[sectionId][stringLoad[sectionId]] = true
// 	fetch(URL)
// 		.then((res) => {
// 			loading[sectionId][stringLoad[sectionId]] = !res.ok
// 			return res.json()
// 		})
// 		.then((dataJson) => {
// 			state[sectionId][stringState[sectionId]] = dataJson.results
// 			const carWrapperCardWrapper = document.getElementById(
// 				`section_${sectionId}`
// 			).firstChild
// 			carWrapperCardWrapper.innerHTML = ''
// 			state[sectionId][stringState[sectionId]].map((movie) => {
// 				createNewMovieCard(movie, carWrapperCardWrapper)
// 			})
// 		})
// 	function createNewMovieCard(movie, node) {
// 		const carWrapCard = createCard(movie)
// 		node.appendChild(carWrapCard)
// 	}
// }

// function createMovieCard(movie) {
// 	const carWrapperCardWrapper = document.getElementById(`section_${ID}`)
// 		.firstChild
// 	const carWrapCard = createCard(movie)
// 	carWrapperCardWrapper.appendChild(carWrapCard)
// }

// function createCard(movie) {
// 	const carWrapCard = document.createElement('div')
// 	carWrapCard.classList.add('carousel__wrapper-card')
// 	const flipCardContainer = document.createElement('div')
// 	flipCardContainer.classList.add('flip-card-container')
// 	const flipCard = document.createElement('div')
// 	flipCard.classList.add('flip-card')
// 	const carImgInBg = document.createElement('div')
// 	carImgInBg.style.backgroundImage = `url(${POSTER_BASE_URL}/w185${movie.poster_path})`
// 	carImgInBg.classList.add('card-img')
// 	const flipCardFront = document.createElement('div')
// 	flipCardFront.classList.add('flip-card-front')
// 	const flipCardBack = document.createElement('div')
// 	flipCardBack.classList.add('flip-card-back')
// 	const description = document.createElement('p')
// 	description.textContent = movie.overview
// 	const title = document.createElement('h6')
// 	title.textContent =
// 		movie.title || movie.name || movie.original_title || movie.original_name

// 	// console.log(movie.vote_count, movie.vote_average, movie.popularity, movie.genre_ids, movie.original_language, movie.backdrop_path, movie.video);

// 	// let genresId = 0;
// 	// movie.genre_ids.forEach((genre_id) => {
// 	// 	genresId = genre_id;
// 	// });

// 	// for (const genresId of tvGenres) {
// 	// 	console.log(genresId.name);
// 	// }

// 	let actionWrapper = createActionBar(movie)

// 	// console.log(movie);
// 	flipCardBack.append(title, description)
// 	flipCardFront.appendChild(carImgInBg)
// 	flipCard.appendChild(flipCardFront)
// 	flipCard.appendChild(flipCardBack)
// 	flipCardContainer.appendChild(flipCard)
// 	carWrapCard.appendChild(flipCardContainer)
// 	carWrapCard.appendChild(actionWrapper)
// 	return carWrapCard
// }

// const loadInitialState = (sectionId, page) => {
// 	// var sessionCategory = '';

// 	// switch (sectionId) {
// 	// 	case sectionId === 0:
// 	// 		sessionCategory = 'movies';
// 	// 		break;
// 	// 	case sectionId === 1:
// 	// 		sessionCategory = 'movies';
// 	// 		break;
// 	// 	case sectionId === 2:
// 	// 		sessionCategory = 'tv';
// 	// 		break;
// 	// 	case sectionId === 3:
// 	// 		sessionCategory = 'tv';
// 	// 		break;
// 	// 	case sectionId === 4:
// 	// 		sessionCategory = 'movie';
// 	// 		break;
// 	// 	case sectionId === 5:
// 	// 		sessionCategory = 'tv';
// 	// 		break;
// 	// 	default:
// 	// 		break;
// 	// }

// 	// console.log(sessionCategory);

// 	let session = sectionId >= 4
// 	const URL = !session
// 		? `${API_URL_ARRAY[sectionId]}&page=${page}`
// 		: `${API_URL_ARRAY[sectionId]}&page=${page}${`&session_id=${sessionId}`}`
// 	console.log(URL)
// 	fetch(URL)
// 		.then((res) => {
// 			loading[sectionId][stringLoad[sectionId]] = !res.ok
// 			return res.json()
// 		})
// 		.then((dataJson) => {
// 			state[sectionId][stringState[sectionId]] = dataJson.results
// 			state[sectionId][stringState[sectionId]] &&
// 				createCaroseul(state[sectionId][stringState[sectionId]])
// 			createPagination(dataJson.total_pages)
// 		})
// }
// function onGetTokenBtnClick() {
// 	fetch(`${BASE_API_URL}authentication/token/new?api_key=${API_KEY}`)
// 		.then((r) => r.json())
// 		.then((data) => {
// 			// console.log(data);
// 			requestToken = data.request_token
// 			linkAnchor.href = `https://www.themoviedb.org/authenticate/${data.request_token}/allow`
// 			linkAnchor.classList.add('auth-block__link--is-visible')
// 			getSessionBtn.disabled = false
// 		})
// }

// function onGetSessionBtnClick() {
// 	fetch(`${BASE_API_URL}authentication/session/new?api_key=${API_KEY}`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json;charset=utf-8',
// 		},
// 		body: JSON.stringify({
// 			request_token: requestToken,
// 		}),
// 	})
// 		.then((r) => r.json())
// 		.then((data) => {
// 			// console.log(data);
// 			sessionId = data.session_id
// 			// sessionIdInput.value = sessionId;
// 			return fetch(
// 				`${BASE_API_URL}account?api_key=${API_KEY}&session_id=${sessionId}`
// 			)
// 		})
// 		.then((r) => r.json())
// 		.then((data) => {
// 			console.log(data)
// 			// console.log(data.name);
// 			// console.log(data.username);
// 			// console.log(data.avatar.tmdb.avatar_path);
// 			// console.log(data.id);
// 			// console.log(accountId);
// 			accountId = data.id
// 			accountName = data.name
// 			accountNick = data.username
// 			accountImg = data.avatar.tmdb.avatar_path
// 			createUserCard(
// 				accountName,
// 				accountNick,
// 				accountImg,
// 				accountId,
// 				sessionId,
// 				requestToken
// 			)
// 			// accountIdInput.value = accountId;
// 			movieForm.classList.add('movie-form--is-visible')
// 			// loadMovieTrState();
// 			/* £$%$%&/"£$" E' QUESTO?!??!? */
// 			API_URL_ARRAY.forEach((url, i) => {
// 				loadInitialState(i, 1)
// 			})
// 			// loadMoviePopState();
// 			// loadTvTrState();
// 			// loadTvPopState();
// 			// loadData(MOVIE_POPULAR_API_URL, moviePopState);
// 			// loadData(TV_TOP_RATED_API_URL, tvTrState);
// 			// loadData(TV_POPULAR_API_URL, tvPopState);
// 			// createCaroseul(movieTrState);
// 			// createCaroseul(movieTrState);
// 		})
// }

// function onAddToActionClick(evt) {
// 	if (!accountId || !sessionId) {
// 		alert('You need to authenticate!')
// 	}
// 	const movieId = evt.target.dataset.movieId
// 	const movieTitle = evt.target.dataset.movieTitle
// 	const sectionID = evt.target.dataset.sectionId
// 	const btnAction = evt.target.dataset.actionId
// 	const mediaType = sectionID <= 1 ? 'movie' : 'tv'
// 	const shouldAdd = window.confirm(
// 		`Are you sure you want to add the ${mediaType} show "${movieTitle}" to your ${btnAction}?`
// 	)

// 	let bodyWatchlist = JSON.stringify({
// 		media_type: mediaType,
// 		media_id: parseInt(movieId, 10),
// 		watchlist: true,
// 	})

// 	let bodyFavourite = JSON.stringify({
// 		media_type: mediaType,
// 		media_id: parseInt(movieId, 10),
// 		favorite: true,
// 	})

// 	let bodyAction = btnAction === 'favorite' ? bodyFavourite : bodyWatchlist

// 	// console.log(sectionID);
// 	if (shouldAdd) {
// 		// console.log(`${BASE_API_URL}account/${accountId}/${btnAction}?api_key=${API_KEY}&session_id=${sessionId}`);
// 		fetch(
// 			`${BASE_API_URL}account/${accountId}/${btnAction}?api_key=${API_KEY}&session_id=${sessionId}`,
// 			{
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json;charset=utf-8',
// 				},
// 				body: bodyAction,
// 			}
// 		)
// 			.then((r) => r.json())
// 			.then((data) => {
// 				console.log(data)
// 			})
// 	}
// }

// // DEPRECATED
// function getWatchListMovie() {
// 	if (!accountId || !sessionId) {
// 		alert('You need to authenticate!')
// 	}
// 	// console.log('Fn getWatchListMovie');
// 	fetch(
// 		`${BASE_API_URL}account/${accountId}/watchlist/movies?api_key=${API_KEY}&session_id=${sessionId}&language=it-IT&sort_by=created_at.asc&page=1`
// 	)
// 		.then((res) => {
// 			return res.json()
// 		})
// 		.then((dataJson) => {
// 			// console.log(dataJson.results);
// 			// console.log(dataJson);
// 			state.movieWatchListState = dataJson.results
// 			createCaroseul(state.movieWatchListState, 'My Movies WatchList')

// 			// tvTrState = dataJson.results;
// 			// console.log(tvTrState);
// 			// createCaroseul(tvTrState);
// 			dataJson.total_pages && createPagination(dataJson.total_pages)
// 		})
// 	//https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?api_key=<<api_key>>&language=it-IT&sort_by=created_at.asc&page=1
// 	//https://api.themoviedb.org/3/account/10072776/watchlist/movies?api_key=<<api_key>>&language=it-IT&session_id=86563c60097c6e8d6f33f920dc1e82ba9141d277&sort_by=created_at.asc&page=1
// }

// // DEPRECATED
// function renderMovie(movie) {
// 	const movieWrapper = document.createElement('li')
// 	movieWrapper.classList.add('movie-card')
// 	const src = movie.poster_path
// 		? `${POSTER_BASE_URL}/w185${movie.poster_path}`
// 		: 'https://via.placeholder.com/100x150'
// 	const image = document.createElement('img')
// 	image.src = src
// 	const content = document.createElement('div')
// 	const title = document.createElement('h3')
// 	title.textContent = movie.original_title
// 	const releaseDate = document.createElement('small')
// 	releaseDate.textContent = movie.release_date
// 	const overview = document.createElement('p')
// 	overview.textContent = movie.overview
// 	const addToWatchlist = document.createElement('button')
// 	addToWatchlist.type = 'button'
// 	addToWatchlist.textContent = '+'
// 	addToWatchlist.dataset.movieId = movie.id
// 	addToWatchlist.dataset.movieTitle = movie.original_title
// 	addToWatchlist.addEventListener('click', onAddToActionClick)
// 	movieWrapper.appendChild(image)
// 	movieWrapper.appendChild(content)
// 	content.appendChild(title)
// 	content.appendChild(releaseDate)
// 	content.appendChild(overview)
// 	content.appendChild(addToWatchlist)
// 	movieList.appendChild(movieWrapper)
// }

// function onSubmit(evt) {
// 	evt.preventDefault()
// 	const serchTitleInput = movieForm.querySelector('.movie-form__search-title')
// 	fetch(
// 		`${BASE_API_URL}search/movie?api_key=${API_KEY}&query=${serchTitleInput.value}`
// 	)
// 		.then((r) => r.json())
// 		.then((data) => {
// 			// console.log(data);
// 			movieList.innerHTML = ''
// 			if (data?.results?.length) {
// 				movieNoResults.classList.remove('movie-no-results--is-visible')
// 				data.results.forEach(renderMovie)
// 			} else {
// 				movieNoResults.classList.add('movie-no-results--is-visible')
// 			}
// 		})
// }

// function createUserCard(
// 	userName,
// 	userNick,
// 	userImg,
// 	userID,
// 	sessionID,
// 	reqToken
// ) {
// 	const userCardWrapper = document.createElement('div')
// 	const userContentWrapper = document.createElement('div')
// 	const userTitleWrapper = document.createElement('div')
// 	const timeLeftWrapper = document.createElement('div')
// 	timeLeftWrapper.classList.add('time-badge')
// 	userCardWrapper.classList.add('user-card')
// 	const image = document.createElement('img')
// 	image.src = `https://www.themoviedb.org/t/p/w32_and_h32_face${userImg}`
// 	const name = document.createElement('h2')
// 	name.textContent = userName
// 	const nickname = document.createElement('h4')
// 	nickname.textContent = userNick
// 	const id = document.createElement('p')
// 	id.textContent = `ID ${userID}`
// 	const sessionId = document.createElement('p')
// 	sessionId.textContent = `SESSION ID ${sessionID}`
// 	const token = document.createElement('p')
// 	token.textContent = `REQ TOKEN ${reqToken}`
// 	userTitleWrapper.appendChild(image)
// 	userTitleWrapper.appendChild(name)
// 	userContentWrapper.appendChild(nickname)
// 	userContentWrapper.appendChild(id)
// 	userContentWrapper.appendChild(sessionId)
// 	userContentWrapper.appendChild(token)
// 	userCardWrapper.appendChild(userTitleWrapper)
// 	userCardWrapper.appendChild(userContentWrapper)
// 	authBlock.appendChild(userCardWrapper)
// 	userCardWrapper.classList.add('movie-form--is-visible')

// 	let t = 60
// 	const countdown = (timer) => {
// 		if (timer === t) {
// 			timeLeftWrapper.innerHTML = `TIME LEFT : &nbsp <span>${t}</span> &nbsp mins`
// 		}
// 		setTimeout(() => {
// 			t--
// 			if (t <= 0) {
// 				return (timeLeftWrapper.textContent = `TIME OVER`)
// 			} else {
// 				countdown(t)
// 				// console.log(t);
// 				timeLeftWrapper.innerHTML = `TIME LEFT : &nbsp <span> ${t} </span> &nbsp mins`
// 				// timeLeftWrapper.textContent = `TIME LEFT ${t}`;
// 			}
// 		}, timer * 1000)
// 	}
// 	countdown(60)

// 	userCardWrapper.appendChild(timeLeftWrapper)
// }

// getTokenBtn.addEventListener('click', onGetTokenBtnClick)
// getSessionBtn.addEventListener('click', onGetSessionBtnClick)
// movieListBtn.addEventListener('click', getWatchListMovie)
// movieForm.addEventListener('submit', onSubmit)

const TOAST = document.querySelector('.toast');

const POPULAR_MOVIES = document.querySelector('#popular');
const TOP_RATED_MOVIES = document.querySelector('#top_rated');
const NOW_PLAYING_MOVIES = document.querySelector('#now_playing');
const UPCOMING_MOVIES = document.querySelector('#upcoming');

const nodeSectionId = [POPULAR_MOVIES, TOP_RATED_MOVIES, NOW_PLAYING_MOVIES, UPCOMING_MOVIES];

const sectionNameId = ['popular', 'top_rated', 'now_playing', 'upcoming'];

const state = {
	config: {
		api_key: '184ac615bbddb56006c71f577cc1b1b1',
		base_url: 'https://api.themoviedb.org/3',
	},
};

const stateImages = {
	popular: null,
	top_rated: null,
	now_playing: null,
	upcoming: null,
};

const stateMovies = {
	popular: null,
	top_rated: null,
	now_playing: null,
	upcoming: null,
};

/**
 * Utilities
 */
function getUrl(isConfig = false, isSession = false, pathName, path, mediaType = 'movie') {
	const { api_key, base_url } = state.config;

	let session = isSession;
	console.log(session);

	return isConfig ? `${base_url}/${pathName}?api_key=${api_key}` : `${base_url}/${pathName}/${path}?api_key=${api_key}`;
}

function getImageUrl(imgPath) {
	const secure_base_url = stateImages[sectionNameId[0]].secure_base_url;
	// const backdrop_sizes = stateImages[sectionNameId[0]].poster_sizes[2];
	const poster_sizes = stateImages[sectionNameId[0]].poster_sizes[3];
	// console.log(stateImages[sectionNameId[0]].secure_base_url);
	// console.log(stateImages[sectionNameId[0]].poster_sizes[2]);
	// console.log(stateImages);

	return `${secure_base_url}${poster_sizes}${imgPath}`;
	// return `${secure_base_url}${backdrop_sizes}${imgPath}`;
}

async function getData(url) {
	console.log(url);
	try {
		const response = await fetch(url);
		const result = await response.json();

		if (!response.ok) {
			throw result;
		}
		return result;
	} catch (errorMessage) {
		console.log(errorMessage);
	}
}

async function getGuestSession() {
	const guestSessionUrl = getUrl(false, false, 'authentication', 'guest_session/new');
	console.log(guestSessionUrl, 'guestSessionUrl');

	const result = await getData(guestSessionUrl);

	return result;
}

async function getConfiguration() {
	const configurationUrl = getUrl(true, false, 'configuration');
	console.log(configurationUrl, 'configurationUrl');
	const result = await getData(configurationUrl);
	stateImages[sectionNameId[0]] = result.images;

	return result;
}

async function getPopularMovies(isConfig, isSession, mediaType, ID) {
	const popularMoviesURL = getUrl(isConfig, isSession, mediaType, sectionNameId[ID]);
	console.log(popularMoviesURL, 'popularMoviesURL');
	const rawResponse = await getData(popularMoviesURL);
	stateMovies[sectionNameId[ID]] = rawResponse.results;
	return rawResponse;
}

async function getTop_ratedMovies(isConfig, isSession, mediaType, ID) {
	const topRatedMoviesURL = getUrl(isConfig, isSession, mediaType, sectionNameId[ID]);
	console.log(topRatedMoviesURL, 'topRatedMoviesURL');
	const rawResponse = await getData(topRatedMoviesURL);
	stateMovies[sectionNameId[ID]] = rawResponse.results;
	return rawResponse;
}

async function getNow_playingMovies(isConfig, isSession, mediaType, ID) {
	const now_playingMoviesURL = getUrl(isConfig, isSession, mediaType, sectionNameId[ID]);
	console.log(now_playingMoviesURL, 'Now_playingMoviesURL');
	const rawResponse = await getData(now_playingMoviesURL);
	stateMovies[sectionNameId[ID]] = rawResponse.results;
	return rawResponse;
}

// async function getLatestMovies(isConfig, isSession, mediaType, ID) {
// 	const latestMoviesURL = getUrl(isConfig, isSession, mediaType, sectionNameId[ID]);
// 	console.log(latestMoviesURL, 'latestMoviesURL');
// 	const rawResponse = await getData(latestMoviesURL);
// 	stateMovies[sectionNameId[ID]] = rawResponse.results;
// 	return rawResponse;
// }

async function getUpcomingMovies(isConfig, isSession, mediaType, ID) {
	const upcomingMoviesURL = getUrl(isConfig, isSession, mediaType, sectionNameId[ID]);
	console.log(upcomingMoviesURL, 'upcomingMoviesURL');
	const rawResponse = await getData(upcomingMoviesURL);
	stateMovies[sectionNameId[ID]] = rawResponse.results;
	console.log(stateMovies);
	return rawResponse;
}

/**
 * gestisce la sessione guest dell'utente
 */
async function handleSession() {
	// ottiene il dato da localStorage
	const sessionData = localStorage.getItem('mdb_session');

	// se sessionData è undefined
	if (!sessionData) {
		// crea una nuova sessione
		const newSessionData = await getGuestSession();

		console.log(newSessionData, 'newSessionData');

		// se la chiamata getGuestSession ritorna un valore
		if (newSessionData) {
			// trasforma in stringa l'oggetto (localStorage può avere solo stringhe)
			const sessionDataString = JSON.stringify(newSessionData);

			// aggiunge il valore nel localStorage
			localStorage.setItem('mdb_session', sessionDataString);

			// mostra il toastBaner per dare un feedback alll'utente
			showToast('Hey! Adesso sei registrato come guest');

			return true;
		}

		return false;
	} else {
		// se sessionData ha un valore

		// trasforma la stringa ottenuta da localSotarge in oggetto o variabile primitiva
		const parsedSessionData = JSON.parse(sessionData);

		/**
		 * controlliamo che la sessione non sia scacduta
		 *
		 * la data di scadenza della sessione è contenuta
		 * nell'oggetta della sessione sotto il nome "expires_at"
		 *
		 * utilizziamo Date per verificare se la data di scadenza è inferiore
		 * alla data attuale nel momento in cui sta eseguendo questo codice.
		 *
		 * trasformiamo le due date con getTime() in un numero che corrisponde
		 * ai millisecondi compresi tra la data usata e il 1 gennaio 1970
		 * (è uno standard per avere una costante di riferimento)
		 *
		 */
		const expiresDate = new Date(parsedSessionData.expires_at).getTime();
		const nowDate = new Date().getTime();

		// se expiresDate in millisecondi è inferiore
		// a nowDate in millisecondi allora la sessione è scaduta
		if (expiresDate < nowDate) {
			// rimuoviamo i dati della sessione del localStorage
			localStorage.removeItem('mdb_session');

			// chiamiamo la funzione stessa per gestire la
			// creazione di una nuova sessione e l'inserimento nel localStorage
			await handleSession();

			return true;
		}
		return true;
	}
}

/**
 * Mostra il toast banner per 4s con il messaggio
 * che gli viene passato come parametro
 */
function showToast(text) {
	TOAST.textContent = text;
	TOAST.classList.toggle('toast__is-hidden');

	setTimeout(() => {
		TOAST.classList.toggle('toast__is-hidden');
	}, 4000);
}

/**
 * Crea una card per i film / serie tv
 */

function createCard(movie, mediaType) {
	const carWrapCard = document.createElement('div');
	carWrapCard.classList.add('carousel__wrapper-card');
	// const flipCardContainer = document.createElement('div');
	// flipCardContainer.classList.add('flip-card-container');
	// const flipCard = document.createElement('div');
	// flipCard.classList.add('flip-card');
	// flipCard.dataset.movieId = movie.id;
	// flipCard.onclick = (evt) => {
	// 	evt.preventDefault();
	// 	onClickRenderOnJumbotron(movie.id);
	// };
	// onclick
	// addToWatchlist.dataset.movieId = movie.id;
	// addToWatchlist.dataset.movieTitle = movie.original_title;

	// const carImgInBg = document.createElement('div');
	// carImgInBg.style.backgroundImage = `url(${POSTER_BASE_URL}/w185${movie.poster_path})`;
	// carImgInBg.classList.add('card-img');
	// const flipCardFront = document.createElement('div');
	// flipCardFront.classList.add('flip-card-front');
	// const flipCardBack = document.createElement('div');
	// flipCardBack.classList.add('flip-card-back');
	// const description = document.createElement('p');
	// description.textContent = movie.overview;
	// const title = document.createElement('h6');
	// title.textContent = movie.title || movie.name || movie.original_title || movie.original_name;

	// console.log(movie.vote_count, movie.vote_average, movie.popularity, movie.genre_ids, movie.original_language, movie.backdrop_path, movie.video);

	// let genresId = 0;
	// movie.genre_ids.forEach((genre_id) => {
	// 	genresId = genre_id;
	// });

	// for (const genresId of tvGenres) {
	// 	console.log(genresId.name);
	// }

	// let actionWrapper = createActionBar(movie);

	// console.log(movie);
	// flipCardBack.append(title, description);
	// flipCardFront.appendChild(carImgInBg);
	// flipCard.appendChild(flipCardFront);
	// flipCard.appendChild(flipCardBack);
	// flipCardContainer.appendChild(flipCard);
	// carWrapCard.appendChild(flipCardContainer);
	// carWrapCard.appendChild(actionWrapper);
	// let posCarWrapCard = flipCard.getClientRects();
	// console.log(posCarWrapCard);
	return carWrapCard;
}

function getMovieCard(imgURL, movie) {
	// const carouselWrapperCard = document.createElement('div');
	// const flipCardContainer = document.createElement('div');
	// const flipCard = document.createElement('div');
	// const cardWrap = document.createElement('div');
	// const coverImg = document.createElement('img');

	// // const textWrap = document.createElement('div');
	// // const text = document.createElement('h3');

	// carouselWrapperCard.classList.add('carousel__wrapper-card');
	// flipCardContainer.classList.add('flip-card-container');
	// flipCard.classList.add('flip-card');
	// flipCard.dataset.movieId('flip-card');
	// cardWrap.classList.add('card');
	// // textWrap.classList.add('card__title_wrap');

	// // text.textContent = title;
	// coverImg.src = imgURL;

	// // textWrap.appendChild(text);
	// // cardWrap.append(coverImg, textWrap);
	// cardWrap.append(coverImg);

	const carWrapCard = document.createElement('div');
	carWrapCard.classList.add('carousel__wrapper-card');
	const flipCardContainer = document.createElement('div');
	flipCardContainer.classList.add('flip-card-container');
	const flipCard = document.createElement('div');
	flipCard.classList.add('flip-card');
	flipCard.dataset.movieId = movie.id;
	// flipCard.onclick = (evt) => {
	// 	evt.preventDefault();
	// 	onClickRenderOnJumbotron(movie.id);
	// };
	// onclick
	// addToWatchlist.dataset.movieId = movie.id;
	// addToWatchlist.dataset.movieTitle = movie.original_title;

	const carImgInBg = document.createElement('div');
	carImgInBg.style.backgroundImage = `url(${imgURL})`;
	carImgInBg.classList.add('card-img');
	const flipCardFront = document.createElement('div');
	flipCardFront.classList.add('flip-card-front');
	const flipCardBack = document.createElement('div');
	flipCardBack.classList.add('flip-card-back');
	const description = document.createElement('p');
	description.textContent = movie.overview;
	const title = document.createElement('h6');
	title.textContent = movie.title || movie.name || movie.original_title || movie.original_name;

	// let actionWrapper = createActionBar(movie);

	// console.log(movie);
	flipCardBack.append(title, description);
	flipCardFront.appendChild(carImgInBg);
	flipCard.appendChild(flipCardFront);
	flipCard.appendChild(flipCardBack);
	flipCardContainer.appendChild(flipCard);
	carWrapCard.appendChild(flipCardContainer);
	// carWrapCard.appendChild(actionWrapper);

	return carWrapCard;
}

/**
 * genera le card per i film presenti nel parametro "list"
 * e li appende dentro il nodo parent passato come secondo parametro
 * "sectionNode"
 */
function renderCarousel(list, sectionNode) {
	list.forEach((item) => {
		// ottiene la url dell'immagine completa
		const imgURL = getImageUrl(item.poster_path);

		const movieCard = getMovieCard(imgURL, item);

		sectionNode.appendChild(movieCard);
	});
}

/**
 * funzione che ottiene i dati dall'eseterno,
 * e quando li ha ottenuti renderizza il carosello dei film popolari
 */
function handleHTMLMounted() {
	Promise.all([handleSession(), getConfiguration(), getPopularMovies(false, false, 'movie', 0), getTop_ratedMovies(false, false, 'movie', 1), getNow_playingMovies(false, false, 'movie', 2), getUpcomingMovies(false, false, 'movie', 3)]).then(() => {
		// ci permette di lavorare con i dati ottenuti dall'esterno
		renderCarousel(stateMovies[sectionNameId[0]], nodeSectionId[0]);
		renderCarousel(stateMovies[sectionNameId[1]], nodeSectionId[1]);
		renderCarousel(stateMovies[sectionNameId[2]], nodeSectionId[2]);
		renderCarousel(stateMovies[sectionNameId[3]], nodeSectionId[3]);
	});
}

/**
 * listener sul lifecycle "DOMContentLoaded"
 *
 * esegue la funzione handleHTMLMounted appena l'html del nostro
 * index.html è stato stampato a video
 *
 * rimuove il listenr una volta terminata l'operazione con {once: true}
 */
document.addEventListener('DOMContentLoaded', handleHTMLMounted, {
	once: true,
});
