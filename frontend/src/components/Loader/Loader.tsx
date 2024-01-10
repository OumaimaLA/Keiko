import LoaderLogo  from 'svg/loader.svg';
export const Loader = () => {
    return(
        <div className="loader-container">
            <img src={LoaderLogo} alt="Loading..."/>
        </div>
    ) 
}
