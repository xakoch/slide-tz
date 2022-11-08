// vars video
const video = document.getElementById('video')
const video_height = document.getElementById('video').offsetHeight
let scrl_start = (window.innerHeight - video_height) / 2
let scrl_end = (window.innerHeight - video_height) / 2 + video_height

// on scroll video animation
function scrollVideo() {

    let section_scroll = window.scrollY % window.innerHeight
    
    for (let i = 0; i < length; i++) {
        if (section_scroll >= scrl_start && section_scroll <= scrl_end) {
            // video[i].style.position = "fixed"
            // var videoPerc= video.innerHTML = `${((section_scroll - scrl_start) / video_height * 100).toFixed(0)}%`
        } else {
            // video.innerHTML = `no scroll`
            // video[i].style.position = "absolute"
        }
    }

}

scrollVideo()
window.addEventListener("scroll", scrollVideo)



// on scroll animation buttons
window.addEventListener('scroll', function() {
    let scrollY = window.scrollY

    const sections = document.querySelectorAll('.section')
    for (var i = 0; i < sections.length; i++) {
        
        if ( scrollY > sections[i].offsetTop && scrollY < sections[i].offsetTop + sections[i].offsetHeight ) {
            sections[i].classList.add("is-active");
        }
    }

})