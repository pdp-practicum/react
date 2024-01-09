import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

export default function Raa() {
	const background: BannerLayer = {
		image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg",
		translateY: [0, 50],
		opacity: [1, 0.3],
		scale: [1.05, 1, "easeOutCubic"],
		shouldAlwaysCompleteAnimation: true,
	};

	const headline: BannerLayer = {
		translateY: [0, 30],
		scale: [1, 1.05, "easeOutCubic"],
		shouldAlwaysCompleteAnimation: true,
		expanded: false,
		children: (
			<div
				data-aos="fade-up"
				data-aos-anchor-placement="bottom-bottom"
				className="inset center p-5"
				id="about"
			>
				<br />
				<br />
				<br />
				<br />
				<h1 className="about text-white">About</h1>
				<div className=" flex items-center w-[80%] pt-4 gap-1 justify-between flex-wrap">
					<div>
						<h1 className="headline mt-2 text-white">
							Hello, my name is Muhammad, <br /> I am currently a Frontend Developer at <br /> Pdp
							Academy . I'm learning programming, <br /> I like html, css, sass, bootstrap,
							javascript. <br />
							I know react, typescript and tailwind <br /> languages. I also want to learn backend{" "}
							<br /> in future
						</h1>
					</div>
					<div>
						<h1 className="headline  flex flex-col gap-2 mt-2 text-white">
							Surname: Rasuljanov <br />
							Name: Muhammad <br />
							Age: 22 <br />
							Date of birth: 2002.02.10 <br />
							Hobby: Programmer <br />
							Address: Tashkent
						</h1>
					</div>
				</div>
			</div>
		),
	};

	return (
		<ParallaxBanner layers={[background, headline]} className="full" />
	);
}
