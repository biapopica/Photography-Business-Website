import { useRef } from 'react'
import { register } from 'swiper/element/bundle'

import Img1 from '../assets/dark_mountain.webp'
import Img2 from '../assets/dark_blue_mont.webp'
import Img3 from '../assets/dark_steep_mont_sm.webp'

register()

function LandingSlider() {
	const swiperElRef = useRef(null)

	return (
		<div className="pointer-events-none absolute inset-0 -z-30 min-h-screen w-full">
			<swiper-container
				ref={swiperElRef}
				centered-slides="true"
				autoplay-delay="2500"
				speed="1000"
				loop="true"
				effect="fade"
				crossFade="true"
				parallax="true"
				allow-touch-move="false"
				autoplay-disable-on-interaction="false"
			>
				<swiper-slide className="h-screen">
					<Slide img={Img1.src} title="Muntii Himalaya" />
				</swiper-slide>
				<swiper-slide className="h-screen">
					<Slide img={Img2.src} title="Muntii Caucazieni" />
				</swiper-slide>
				<swiper-slide className="h-screen">
					<Slide img={Img3.src} title="Muntii Alpi" />
				</swiper-slide>
			</swiper-container>
		</div>
	)
}

function Slide({ img, title }) {
	return (
		<>
			{/* <div className="absolute bottom-8 left-6 mr-6 md:left-8 md:mr-8">
				<p data-swiper-parallax="40" className="w-min text-xl tracking-widest sm:text-2xl">
					{title}
				</p>
			</div> */}
			<div className="absolute inset-0 h-screen w-full bg-neutral-800 bg-opacity-20"></div>
			<img
				src={img}
				decoding="async"
				className="h-screen w-full object-cover object-center"
				alt=""
			/>
		</>
	)
}

export default LandingSlider
