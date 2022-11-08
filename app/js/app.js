const video = document.getElementById('video')
const video_height = document.getElementById('video').offsetHeight
const btnText = document.getElementById('btn_text')
const btnIcon = document.getElementById('btn_icon')

let scrl_start = (window.innerHeight - video_height) / 2
let scrl_end = (window.innerHeight - video_height) / 2 + video_height

function scrollVideo() {

    let section_scroll = window.scrollY % window.innerHeight
    
    for (let i = 0; i < length; i++) {
        if (section_scroll >= scrl_start && section_scroll <= scrl_end) {
            // video[i].style.position = "fixed"
            // var videoPerc= video.innerHTML = `${((section_scroll - scrl_start) / video_height * 100).toFixed(0)}%`
            gsap.from('.section__cta--icon', { x: 50, autoAlpha: 0, ease: Power1.out })
        } else {
            // video.innerHTML = `no scroll`
            // video[i].style.position = "absolute"
        }
    }

    console.log('section_scroll = ' + section_scroll)
    console.log('start = ' + scrl_start)
    console.log('end = ' + scrl_end)
    // console.log('percent = ' + videoPerc)
}

scrollVideo()

window.addEventListener("scroll", scrollVideo)