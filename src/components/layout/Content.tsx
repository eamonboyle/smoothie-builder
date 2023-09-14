import { Container } from "react-bootstrap";

type ContentProps = {
    children: React.ReactNode;
};

export const Content: React.FC<ContentProps> = ({ children }) => {
    return (
        <main className="flex-grow-1 mt-3">
            <Container>
                {children}
            </Container>
        </main>
    );
}