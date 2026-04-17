import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { ProductModel } from "./base";

export class ProductCreate extends D1CreateEndpoint<HandleArgs> {
	_meta = {
		model: ProductModel,
		fields: ProductModel.schema.pick({
			// id se ne unosi rucno, generira ga baza
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
