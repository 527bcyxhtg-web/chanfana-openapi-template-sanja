import { D1UpdateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { ProductModel } from "./base";

export class ProductUpdate extends D1UpdateEndpoint<HandleArgs> {
	_meta = {
		model: ProductModel,
		fields: ProductModel.schema.pick({
			name: true,
			slug: true,
			description: true,
			cijena: true,
			materijal: true,
			boja: true,
			kategorija: true,
			dostupna_kolicina: true,
			slika_url: true,
		}),
	};
}
