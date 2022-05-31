import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

//components
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import UpdateProfile from "./components/UpdateProfile";
import ForgetPassword from "./components/ForgotPassword";
import CategoryComponent from "./components/Category";
import ProductComponent from "./components/Product";
import Cart from "./components/Cart";
import { NavigationHeader } from "./components/NavigationHeader";

function App() {
	return (
		<Container>
			<div>
				<Router>
					<NavigationHeader />
					<AuthProvider>
						<Routes>
							<Route
								exact
								path="/"
								element={
									<PrivateRoute>
										<Dashboard />
									</PrivateRoute>
								}
							/>
							<Route
								path="/update-profile"
								element={
									<PrivateRoute>
										<UpdateProfile />
									</PrivateRoute>
								}
							/>
							<Route path="/signup" element={<Signup />} />
							<Route path="/login" element={<Login />} />
							<Route path="/forgot-password" element={<ForgetPassword />} />
							<Route
								path="/categories"
								element={
									<PrivateRoute>
										<CategoryComponent />
									</PrivateRoute>
								}
							/>
							<Route
								path="/product/:category"
								element={
									<PrivateRoute>
										<ProductComponent />
									</PrivateRoute>
								}
							/>
							<Route
								path="/cart"
								element={
									<PrivateRoute>
										<Cart />
									</PrivateRoute>
								}
							/>
						</Routes>
					</AuthProvider>
				</Router>
			</div>
		</Container>
	);
}

export default App;
