import AOS from 'aos'
// import 'aos/dist/aos.css'

export default ({ app }) => {
  app.AOS = new AOS.init({ 
    once: true,
    offset: 25
  }) // eslint-disable-line new-cap
}
