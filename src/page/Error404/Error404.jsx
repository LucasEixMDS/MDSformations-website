

const Error404 = () => {
    return (
        <div className="error-container">
            <h1>404</h1>
            <h2>Oups ! Page non trouvée</h2>
            <p>La page que vous tentez d'afficher n'existe pas ou une autre erreur s'est produite, vous pouvez revenir à la page d'accueil</p>
            <button>page d'accueil</button>
        </div>
    );
};

export default Error404;