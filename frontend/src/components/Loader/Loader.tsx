import LoaderLogo  from './img/loader.svg';
export const Loader = () => {
    return(
        <div className="loader-container">
            <img src={LoaderLogo} alt="Loading..."/>
        </div>
    ) 
}
