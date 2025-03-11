document.querySelector('.js-search-button').addEventListener('click', () => {
  serachVideos()
})

document.querySelector('.js-search-bar').addEventListener('keydown', (event) => {
  if (event.key === 'Enter')
   serachVideos()
})

function serachVideos() {
  let searchResult = document.querySelector('.js-search-bar').value.trim().toLowerCase()
  
  document.querySelectorAll('.video-preview').forEach((video) => {
    let videoTitle = video.querySelector('.video-title').innerHTML.toLowerCase()
   
    if (videoTitle.includes(searchResult) || searchResult === '') {
      video.style.display = 'block'
    }
    else {
      video.style.display = 'none'
    }
  })

}
