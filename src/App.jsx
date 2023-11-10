import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './Routes/Home'
import NotFound from './Routes/NotFound'
import Form from './Routes/Form'


// layouts
import RootLayout from './layouts/RootLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/form" element={<Form />} />

      <Route path='*' element={<NotFound />} />
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
