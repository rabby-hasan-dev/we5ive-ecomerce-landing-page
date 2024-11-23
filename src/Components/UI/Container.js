

const Container = ({ children }) => {
    return (
        <div className="container mx-auto max-w-7xl px-6 flex-grow">
            {children}
        </div>
    );
};

export default Container;