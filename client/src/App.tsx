import { Toaster } from "react-hot-toast"
import Router from "./routes"
import { GlobalStyle } from "./styles/global"

const App = () => {
  return (
    <>
      <Toaster />
      <GlobalStyle />
      <Router />
    </>
  )
}

export default App
