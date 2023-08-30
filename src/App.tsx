import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <>
      <img src="./tenji.png" className="logo" alt="Tenji logo" />
      <h1>Coming Soon&trade;</h1>
      <p className="subtitle">
        Tenji (展示) is an open-source project aimed at providing a reliable REST API for MyFigureCollection.net.
      </p>

      <p>
        <a href="https://github.com/Tenji-hin"><FontAwesomeIcon icon={faGithub} size="4x" /></a>   
      </p>

      <h3>
        <a href="https://api.tenji.moe/docs"><FontAwesomeIcon icon={faBook} /> API Documentation (Beta)</a>
      </h3>
    </>
  )
}

export default App
