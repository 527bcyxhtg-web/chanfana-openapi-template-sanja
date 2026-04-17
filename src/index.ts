import { ApiException, fromHono } from "chanfana";
import { Hono } from "hono";
import { productsRouter } from "./endpoints/tasks/router";
import { ContentfulStatusCode } from "hono/utils/http-status";
import { ProductsByCategory } from "./endpoints/dummyEndpoint";

// Start a Hono app
const app = new Hono<{ Bindings: Env }>();

app.onError((err, c) => {
	if (err instanceof ApiException) {
		// If it's a Chanfana ApiException, let Chanfana handle the response
		return c.json(
			{ success: false, errors: err.buildResponse() },
			err.status as ContentfulStatusCode,
		);
	}
	console.error("Global error handler caught:", err);
	// For other errors, return a generic 500 response
	return c.json(
		{
			success: false,
			errors: [{ code: 7000, message: "Internal Server Error" }],
		},
		500,
	);
});

// Setup OpenAPI registry
const openapi = fromHono(app, {
	docs_url: "/",
	schema: {
		info: {
			title: "Sanja API",
			version: "2.0.0",
			description: "This is the documentation for Sanja API.",
		},
	},
});

// Register Products router
openapi.route("/products", productsRouter);

// Register search endpoint
openapi.get("/products/kategorija/:kategorija", ProductsByCategory);

// Export the Hono app
export default app;
