import axios from "axios";
import { SmoothieCarousel } from "../recipe/SmoothCarousel";
import React from "react";
import Smoothie from "../../types/smoothie";
import { parseSmoothieData } from "../../utils";

type HomeProps = {
}

export const Home: React.FC<HomeProps> = () => {
    const [smoothies, setSmoothies] = React.useState<Smoothie[]>([]);

    React.useEffect(() => {
        axios.get('https://api.edamam.com/api/recipes/v2?app_id=5f35e939&app_key=112e51e1332278e89201e73bf3f357ad&type=public&q=smoothie')
            .then((response: any) => {
                setSmoothies(parseSmoothieData(response.data.hits));
            })
            .catch((error: any) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <SmoothieCarousel smoothies={smoothies} />
        </>
    );
}
