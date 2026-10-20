export interface IRecipe {
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    rating: number;
    image: string;
}