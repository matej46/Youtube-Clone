class Video {
  constructor(title, author, stats, thumbnail, time, picture) {
    this.title = title;
    this.author = author;
    this.stats = stats;
    this.thumbnail = thumbnail;
    this.time = time;
    this.picture = picture;
}
}

const videos = [
  new Video("Talking Tech and AI with Google CEO Sundar Pichai!", "Marques Brownlee", "3.4M views · 6 months ago", "thumbnails/thumbnail-1.webp", "14:20", "profile-pic/channel-1.jpeg"),
  new Video("Try Not To Laugh Challenge #9", "Markiplier", "19M views · 4 years ago", "thumbnails/thumbnail-2.webp", "8:22", "profile-pic/channel-2.jpeg"),
  new Video("Crazy Tik Toks Taken Moments Before DISASTER", "SSSniperWolf", "12M views · 1 year ago", "thumbnails/thumbnail-3.webp", "9:13", "profile-pic/channel-3.jpeg"),
  new Video("The Simplest Math Problem No One Can Solve - Collatz Conjecture", "Veritasium", "18M views · 4 months ago", "thumbnails/thumbnail-4.webp", "22:09", "profile-pic/channel-4.jpeg"),
  new Video("Kadane's Algorithm to Maximum Sum Subarray Problem", "CS Dojo", "519K views · 5 years ago", "thumbnails/thumbnail-5.webp", "11:17", "profile-pic/channel-5.jpeg"),
  new Video("Anything You Can Fit In The Circle I’ll Pay For", "MrBeast", "141M views · 1 year ago", "thumbnails/thumbnail-6.webp", "19:59", "profile-pic/channel-6.jpeg"),
  new Video("Why Planes Don't Fly Over Tibet", "RealLifeLore", "6.6M views · 1 year ago", "thumbnails/thumbnail-7.webp", "10:13", "profile-pic/channel-7.jpeg"),
  new Video("Inside The World's Biggest Passenger Plane", "Tech Vision", "3.7M views · 10 months ago", "thumbnails/thumbnail-8.webp", "7:12", "profile-pic/channel-8.jpeg"),
  new Video("The SECRET to Super Human STRENGTH", "ThenX", "20M views · 3 years ago", "thumbnails/thumbnail-9.webp", "13:17", "profile-pic/channel-9.jpeg"),
  new Video("How The World's Largest Cruise Ship Makes 30,000 Meals Every Day", "Business Insider", "14M views · 1 year ago", "thumbnails/thumbnail-10.webp", "7:53", "profile-pic/channel-10.jpeg"),
  new Video("Dubai's Crazy Underwater Train and Other Things #Only in Dubai", "Destination Tips", "3M views · 1 year ago", "thumbnails/thumbnail-11.webp", "4:10", "profile-pic/channel-11.jpeg"),
  new Video("What would happen if you didn’t drink water? - Mia Nacamulli", "TED-Ed", "12M views · 5 years ago", "thumbnails/thumbnail-12.webp", "4:51", "profile-pic/channel-12.jpeg")
];

function renderVideosGrid() {

  let videosHtml = ''

  videos.forEach((video) => {
    videosHtml += `
    <div class="video-preview">
    <div class="thumbnail-row">
        <img class="thumbnail" src="${video.thumbnail}">
        <div class="video-time">${video.time}</div>
    </div>
    <div class="video-info-grid">
        <div class="channel-picture">
            <img class="profile-picture" src="${video.picture}">
        </div>
        <div class="video-info">
            <p class="video-title">${video.title}</p>
            <p class="video-author">${video.author}</p>
            <p class="video-stats">${video.stats}</p>
        </div>
    </div>
</div>
`
  }) 

  document.querySelector('.video-grid').innerHTML=videosHtml
}

renderVideosGrid()