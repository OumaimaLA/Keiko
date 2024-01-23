import styles from 'pages/Home/Home.module.css';

interface NavigateButtonProps {
    page: Number | undefined
}

export const NavigateButton: React.FC<NavigateButtonProps> = ({ page }) => {
    const goToPreviousPage = () => {
        const previousPageIndex = Number(page) -1;
        if (!isNaN(previousPageIndex) && previousPageIndex >= 0) {
            window.location.href = `/pokedex/${previousPageIndex}`;
        }
    };
    
    const goToNextPage = () => {
        const nextPageIndex = Number(page) +1;
        if (!isNaN(nextPageIndex)) {
            window.location.href = `/pokedex/${nextPageIndex}`;
        }
    }

    return (
        <div className={styles.ButtonsContainer}>
            <div className={styles.leftButtonContainer}>
                    <button onClick={goToPreviousPage}>&lt;</button>
                </div>
                <div className={styles.rightButtonContainer}>
                    <button onClick={goToNextPage}>&gt;</button>
                </div>
        </div>
    )
}
