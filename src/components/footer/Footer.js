import React from 'react'
import './footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="copyright">
                <p>© 2021 All Copyrights reserved. Fmovies</p>
            </div>
            <section className="menu__footer">
                <div className="content__menu"> 
                    <p>Privacy and Policy</p>
                </div>
                <div className="content__menu">
                    <p>Terms and Conditions</p>
                </div>
            </section>
        </footer>
    )
}
