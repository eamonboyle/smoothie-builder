type FooterProps = {
    title: string;
};

export const Footer: React.FC<FooterProps> = ({ title }) => {
    return (
        <footer className="footer fixed-bottom bg-body-tertiary text-center text-lg-start">
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {title} {new Date().getFullYear()}
            </div>
        </footer>
    );
}