import { Carousel } from "react-bootstrap";
import { Card } from "./Card";

type SmoothieCarouselProps = {
    smoothies: any;
};

export const SmoothieCarousel: React.FC<SmoothieCarouselProps> = ({ smoothies }) => {
    return (
        <Carousel>
            {smoothies.map((smoothie: any) => (
                <Carousel.Item key={smoothie.id}>
                    <Card title={smoothie.title} image={smoothie.image} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}