import Smoothie from "../../types/smoothie";
import createRandomId from "../tools/createRandomId";

// function to parse smoothie data from API
export default function parseSmoothieData(smoothieData: any): Smoothie[] {
    let smoothies: Smoothie[] = [];
    for (const element of smoothieData) {
        let recipe = element.recipe;
        let smoothie: Smoothie = {
            id: createRandomId(),
            title: recipe.label,
            description: "",
            image: recipe.image
        }

        smoothies.push(smoothie);
    }
    return smoothies;
}