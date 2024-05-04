import {Route, Routes} from "react-router";
import Register from "./registerPage/component.tsx";
import {BrowserRouter} from "react-router-dom";
import App from "./landingPage/component.tsx";
import Login from "./loginPage/component.tsx";
import Home from "./homePage/component.tsx";
import withAuth from "./withAuth.tsx";
import TodoLists from "./homePage/todoLists/component.tsx";
import Feedback from "./homePage/feedback/component.tsx";
import Todos from "./homePage/todos/component.tsx";

function AppRoutes() {
    const AuthHome = withAuth(Home);

    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App /> }>
                  <Route index element={<Login /> } />
                  <Route path="/register" element={<Register /> } />
                  <Route path="/login" element={<Login /> } />
                  <Route path="/home" element={ <AuthHome /> }>
                      <Route path="todoLists/:id" element={ <Todos /> } />
                      <Route path="todoLists" element={ <TodoLists /> } />
                      <Route path="feedback" element={ <Feedback /> } />
                  </Route>
              </Route>
          </Routes>
      </BrowserRouter>
    );
}

export default AppRoutes;
