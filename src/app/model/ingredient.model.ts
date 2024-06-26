import { guid } from "../app.component";

export class Ingredient {
    id: string;
    name: string; // Nom de l'ingrédient (par exemple, "Tomate")
    isMeat: boolean; // Indique si l'ingrédient est de la viande
    isSideDish: boolean; // Indique si l'ingrédient peut être utilisé comme accompagnement
    shopCategory: string;
    isDessert: boolean;

    constructor(data: any = {}) {
        this.id = data.id || guid();
        this.name = data.name ?? "";
        this.isMeat = data.isMeat ?? false;
        this.isSideDish = data.isSideDish ?? false;
        this.isDessert = data.isDessert ?? false;
        this.shopCategory = data.shopCategory || 'Divers'
    }

    toJson() {
        return {
            id: this.id,
            name: this.name,
            isMeat: this.isMeat,
            isSideDish: this.isSideDish,
            shopCategory: this.shopCategory
        };
    }
}