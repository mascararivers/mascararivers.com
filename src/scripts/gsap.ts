import { gsap } from 'gsap'

if(typeof window !== 'undefined') {
    let tl = gsap.timeline({})

    tl.set('#title', {y: -100, opacity: 0})
    .set('#mini-title', {y: 200, opacity: 0})
    .set('#pfp', {x: -100, opacity: 0})
    .set('#quote', {y: 50, opacity: 0})
    .set('#abtme-title', {x: 100, opacity: 0})
    .set('#abtme', {x: -100, opacity: 0})
    .set('#tools-title', {y: -75, opacity: 0})
    .set('#tools-desc', {x: -100, opacity: 0})
    .set('#card', {y: -100, opacity: 0})
    
    tl.to('#title', {y: 0, opacity: 1, duration: 1}, 0)
    .to('#mini-title', {y: 0, opacity: 1, duration: 1}, 0)
    .to('#pfp', {x: 0, opacity: 1, duration: 1.5, ease: 'sine.out'}, 0)
    .to('#quote', {y: 0, opacity: 1, duration: 2}, 0)
    .to('#abtme-title', {x: 0, opacity: 1, duration: 0.7}, 0)
    .to('#abtme', {x: 0, opacity: 1, duration: 1.5}, 0)
    .to('#tools-title', {y: 0, opacity: 1, duration: 2}, 0)
    .to('#tools-desc', {x: 0, opacity: 1, duration: 1}, 0)
    .to('#card', {y: 0, opacity: 1, duration: 0.5, ease: 'back.out'}, 0)

    const tools = document.querySelectorAll("#tool")
    tools.forEach((tool, index) => {
        gsap.set(tool, {y: 50, opacity: 0})
        gsap.to(tool, {
            duration: 1,
            y: 0,
            opacity: 1,
            delay: index * 0.5 + 1,
            ease: 'sine.inOut'
        })
    })

    let floatingTL = gsap.timeline({repeat: -1, delay: 2, yoyo: true})
    floatingTL.to('#pfp', {y: -5, duration: 1, ease: 'sine.inOut'})
    .to('#pfp', {y: 5, duration: 1, ease: 'sine.inOut'})
}
