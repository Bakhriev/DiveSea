import { useEffect, useState } from "react"
import Logo from "../../assets/img/logo.svg"
import SearchIcon from "../../assets/img/search.svg"

import "./style.scss"

export const Header = () => {
	const [isMenuOpened, setIsMenuOpened] = useState(false)

	return (
		<>
			<div
				onClick={() => setIsMenuOpened(!isMenuOpened)}
				className={`overlay ${isMenuOpened && "active"}`}
			></div>
			<header className="header header-position header-border">
				<div className="container header__container">
					<a href="#" className="header__logo">
						<img src={Logo} alt="main logo" />
					</a>
					<div
						className={`header__wrapper ${isMenuOpened && "opened"}`}
						data-mobile-menu
					>
						<nav className="nav header__nav">
							<ul className="menu header__menu">
								<li>
									<a href="#" className="menu__link">
										Discover
									</a>
								</li>
								<li>
									<a href="#" className="menu__link">
										creators
									</a>
								</li>
								<li>
									<a href="#" className="menu__link">
										Sell
									</a>
								</li>
								<li>
									<a href="#" className="menu__link">
										stats
									</a>
								</li>
							</ul>
						</nav>

						<div className="header__actions">
							<div className="search-wrapper">
								<img src={SearchIcon} alt="" />
								<input
									className="search-field"
									type="text"
									placeholder="Search Art Work / Creator"
								/>
							</div>
							<button className="btn header__btn">Connect Wallet</button>
						</div>
					</div>
					<button
						onClick={() => setIsMenuOpened(!isMenuOpened)}
						className="burger"
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</header>
		</>
	)
}
