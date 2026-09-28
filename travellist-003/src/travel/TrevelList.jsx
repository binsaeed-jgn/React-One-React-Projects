import Logo from "./components/Logo"
import Form from "./components/Form"
import PackageList from "./components/PackageList"
import Stats from "./components/Stats"
import "./TravelList.css"

export default function TravelList(){

  return(
    <div className="app">
      <Logo />
      <Form/>
      <PackageList/>
      <Stats/>

    </div>
  )
}
