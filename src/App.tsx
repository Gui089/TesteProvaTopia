import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { HomePage } from "./pages/HomePage/HomePage"
import { ListQuestions } from "./Components/ListQuestions/ListQuestions"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomePage />}>
        <Route index element={<ListQuestions />}/>
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App;
