import { contentJson, OpenAPIRoute } from "chanfana";
import { AppContext } from "../types";
import { z } from "zod";

export class ProductsByCategory extends OpenAPIRoute {
	public schema = {
		tags: ["Pretraga"],
		summary: "Dohvati proizvode po kategoriji",
		operationId: "get-products-by-category",
		request: {
			params: z.object({
				kategorija: z.string().describe("Naziv kategorije (npr. medvjedici, zecevi, ribe)"),
			}),
		},
		responses: {
			"200": {
				description: "Lista proizvoda u odabranoj kategoriji",
				...contentJson(
					z.object({
						success: z.boolean(),
						kategorija: z.string(),
						result: z.array(
							z.object({
								id: z.number(),
								name: z.string(),
								cijena: z.number(),
								boja: z.string(),
								materijal: z.string(),
								dostupna_kolicina: z.number(),
							})
						),
					})
				),
			},
		},
	};

	async handle(c: AppContext) {
		const data = await this.getValidatedData<typeof this.schema>();
		const { kategorija } = data.params;

		const { results } = await c.env.DB.prepare(
			"SELECT id, name, cijena, boja, materijal, dostupna_kolicina FROM products WHERE kategorija = ? ORDER BY name ASC"
		)
			.bind(kategorija)
			.all();

		return c.json({
			success: true,
			kategorija,
			result: results,
		});
	}
}
