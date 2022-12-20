import StyledComp from "./StyledComp";


const Header = () => {

    return(
        <div className="header">
            <div className="header__content">
                <div className="header__item">
                    <h3>Demo</h3>
                </div>
                <div className="header__item">
                    <h3>Blog</h3>
                </div>
                <div className="header__item">
                    <h3>Contact</h3>
                </div>
                <div className="header__item">
                    <StyledComp/>
                </div>
            </div>
        </div>
    );
}


export default Header