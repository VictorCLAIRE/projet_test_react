import '../styles/Banner.css'
import logo from '../assets/leaf.png'

function Banner(){
    const title = "Application React"
    return  <div className={"banner"}>
        <img className={"logoBanner"} src={logo} alt={"img"}/>
        <div className={"titreBanner"}>
            <h1>{title}</h1>
        </div>
    </div>
}

export default Banner