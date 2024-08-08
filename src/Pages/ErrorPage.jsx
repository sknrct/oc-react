import Error from "../Components/Error/Error";

const ErrorPage = () => {
    document.title = "Kasa - Page introuvable"

    return (
        <>
        <main>
            <Error />
        </main>
        </>
    )
}

export default ErrorPage;