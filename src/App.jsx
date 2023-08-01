import { Header } from "./components/Header"
import heroBg from "./assets/img/heroAll.png"
import heroLogo from "./assets/img/heroMobile.svg"
import heroStars from "./assets/img/stars.svg"

import "./scss/main.scss"

function App() {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<section className="hero">
					<div className="container hero__container">
						<div className="hero__info">
							<h1 className="hero__title title">Discover And Create NFTs</h1>
							<p className="hero__text">
								Discover, Create and Sell NFTs On&nbsp;Our NFT Marketplace With
								Over Thousands Of&nbsp;NFTs And Get a&nbsp;
								<span>$20&nbsp;bonus.</span>
							</p>
							<div className="hero__buttons">
								<a href="#" className="hero__btn btn hero__btn--filled">
									Explore More
								</a>
								<a href="#" className="hero__btn btn-secondary">
									create NFT
								</a>
							</div>
							<ul className="hero__list">
								<li className="hero__item">
									<div className="hero__count">430K+</div>
									<div className="hero__work">Art Works</div>
								</li>
								<li className="hero__item">
									<div className="hero__count">159K+</div>
									<div className="hero__work">Creators</div>
								</li>
								<li className="hero__item">
									<div className="hero__count">87K+</div>
									<div className="hero__work">Collections</div>
								</li>
							</ul>
							<div className="hero__mobile-content">
								<div className="hero__logo">
									<img src={heroLogo} alt="" />
								</div>
								<div className="hero__stars">
									<img src={heroStars} alt="" />
								</div>
								<div className="hero__mobile-text">4900+</div>
							</div>
						</div>
						<div className="hero__img">
							<img src={heroBg} alt="" />
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default App
