import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { UserProvider } from "./contexts/User.jsx";
import { ProductsProvider } from "./contexts/Products.jsx";
import { CartProvider } from "./contexts/Cart.jsx";
import "./index.scss";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<UserProvider>
				<ProductsProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</ProductsProvider>
			</UserProvider>
		</BrowserRouter>
	</StrictMode>
);
