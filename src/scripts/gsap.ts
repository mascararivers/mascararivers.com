import { gsap } from 'gsap'

if(typeof window !== 'undefined') {
    console.log("AAAAAAAAAAAAAA")
    let tl = gsap.timeline({})

    tl.set('#title', {y: -100, opacity: 0})
    .set('#mini-title', {y: 200, opacity: 0})
    
    tl.to('#title', {y: 0, opacity: 1, duration: 1}, 0)
    .to('#mini-title', {y: 0, opacity: 1, duration: 1}, 0)
}
