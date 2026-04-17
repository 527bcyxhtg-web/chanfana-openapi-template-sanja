import { z } from "zod";

export const product = z.object({
	id: z.number().int(),
	name: z.string(),
	slug: z.string(),
	description: z.string(),
	cijena: z.number(),
	materijal: z.string(),
	boja: z.string(),
	kategorija: z.string(),
	dostupna_kolicina: z.number().int(),
	slika_url: z.string().optional(),
});

export const ProductModel = {
	tableName: "products",
	primaryKeys: ["id"],
	schema: product,
	serializer: (obj: Record<string, string | number | boolean>) => {
		return {
			...obj,
		};
	},
	serializerObject: product,
};
