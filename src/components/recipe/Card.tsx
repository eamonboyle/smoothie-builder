import { Button } from "react-bootstrap";

type CardProps = {
    title: string;
    description?: string;
    image: string;
};

export const Card: React.FC<CardProps> = ({ title, description, image }) => {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {description && <p className="card-text">{description}</p>}
                <Button variant="primary">View Recipe</Button>
            </div>
        </div>
    );
}