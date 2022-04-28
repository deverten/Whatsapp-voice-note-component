import React, { useEffect, useState } from 'react';
import './WhatsappVNFeature.css';
import mojs from 'mo-js';

// const initialState = {
// 	isClicked: false,
// };

const useVNAnimation = () => {
	const [animationTimeline, setAnimationTimeline] = useState(
		() => new mojs.Timeline({ repeat: 999 })
	);
	useEffect(() => {
		const tlDuration = 600;
		const padlockBtn = new mojs.Html({
			el: '#open-padlock',
			duration: tlDuration,

			y: { 0: -15 },

			speed: 0.3,
			// delay: 300,
		}).then({
			y: 0,
			speed: 0.3,
			// repeat: 999,
		});

		const ArrowUp = new mojs.Html({
			el: '#arrow-up',
			duration: tlDuration,
			y: { 0: -15 },
			// delay: 500,
			easing: 'ease.inout',
			// repeat: 999,

			speed: 0.3,
		}).then({
			y: 0,
			speed: 0.3,
		});
		const TextSlide = new mojs.Html({
			el: '#slide',
			duration: tlDuration,
			opacity: { 1: 0.3 },
			// delay: 500,
			x: { 0: -3 },
			// repeat: 999,

			speed: 0.3,
		}).then({
			opacity: { 0.3: 1 },
			speed: 0.1,
			x: 0,
		});
		const LeftIconAnim = new mojs.Html({
			el: '#left-icon',
			duration: tlDuration,
			opacity: { 1: 0.5 },
			// delay: 500,

			// repeat: 999,

			speed: 0.3,
		}).then({
			opacity: { 0.5: 1 },
			speed: 0.3,
		});
		const FilledMicAnim = new mojs.Html({
			el: '#filled-mic',
			duration: tlDuration,
			opacity: { 1: 0.2 },
			// delay: 500,

			// repeat: 999,

			speed: 0.3,
		}).then({
			opacity: { 0.2: 1 },
			speed: 0.3,
		});
		const newAnimationTimeline = animationTimeline.add(
			padlockBtn,
			ArrowUp,
			TextSlide,
			LeftIconAnim,
			FilledMicAnim
		);
		setAnimationTimeline(newAnimationTimeline);
	}, []);

	return animationTimeline;
};

const pad = num => {
	return num.toString().length > 1 ? num : '0' + num;
};
function WhatsappVNFeature() {
	const [seconds, setSeconds] = useState(0);
	// const [clickState, setClickState] = useState(initialState);
	// const { isClicked } = clickState;

	const animationTimeline = useVNAnimation();
	const handleVNClick = () => {
		animationTimeline.replay();
		setInterval(() => {
			setSeconds(seconds => seconds + 1);
		}, 1000);

		// setSeconds(seconds => seconds + 1);
		// setClickState(prevState => ({
		// 	isClicked: true,
		// }));
	};

	return (
		<>
			<button onClick={handleVNClick}>
				<div className='left-section'>
					<FilledMicrophone />
					<TimeCount seconds={seconds} className='timeClass' />

					<Text />
					<LeftIcon className='less' />
				</div>

				<div className='mic'>
					<MicIcon />
				</div>

				<div className='top-section'>
					<OpenpadlockIcon />
					<ArrowUpIcon />
				</div>
			</button>
		</>
	);
}

export default WhatsappVNFeature;

const MicIcon = ({ isClicked }) => {
	return (
		<svg
			id='click-mic'
			xmlns='http://www.w3.org/2000/svg'
			width='70'
			height='70'
			fill='green'
		>
			<rect width='100%' height='100%' fill='transparent'></rect>
			<rect
				width='70'
				height='70'
				x='-35'
				y='-35'
				fill='#fff'
				fillOpacity='0'
				rx='0'
				ry='0'
				transform='translate(35 35)'
				vectorEffect='non-scaling-stroke'
			></rect>
			<path
				d='M35 40.4c4.306 0 7.81-3.503 7.81-7.814l-.025-9.6c0-4.293-3.492-7.786-7.785-7.786s-7.785 3.493-7.785 7.781l-.025 9.61c0 4.306 3.503 7.809 7.81 7.809zm-4.185-17.414A4.19 4.19 0 0135 18.8a4.191 4.191 0 014.185 4.19l.025 9.6A4.215 4.215 0 0135 36.8a4.213 4.213 0 01-4.21-4.205l.025-9.61z'
				vectorEffect='non-scaling-stroke'
			></path>
			<path
				d='M48.81 33.795a1.8 1.8 0 00-3.6 0c0 5.608-4.545 10.173-10.145 10.208-.022 0-.043-.003-.065-.003-.022 0-.043.003-.065.003-5.6-.035-10.145-4.6-10.145-10.208a1.8 1.8 0 00-3.6 0c0 7.005 5.242 12.808 12.01 13.693V51.2h-3.96a1.8 1.8 0 000 3.6h11.52a1.8 1.8 0 000-3.6H36.8v-3.712c6.767-.885 12.01-6.688 12.01-13.693z'
				vectorEffect='non-scaling-stroke'
			></path>
		</svg>
	);
};

const Text = () => {
	return <h3 id='slide'>slide to cancel</h3>;
};
const TimeCount = ({ seconds }) => {
	return [pad(parseInt(seconds / 60)), pad(seconds % 60)].join(':');
};
const ArrowUpIcon = () => {
	return (
		<svg
			id='arrow-up'
			xmlns='http://www.w3.org/2000/svg'
			width='50'
			height='50'
		>
			<rect
				width='50'
				height='50'
				x='-25'
				y='-25'
				fill='#fff'
				fillOpacity='0'
				rx='0'
				ry='0'
				transform='translate(25 25)'
				vectorEffect='non-scaling-stroke'
			></rect>
			<path
				stroke='#000'
				strokeWidth='0'
				d='M25 19.44l-.546.522-9.5 9.5 1.093 1.093L25 21.6l8.954 8.955 1.092-1.093-9.5-9.5z'
				vectorEffect='non-scaling-stroke'
			></path>
		</svg>
	);
};
const LeftIcon = () => {
	return (
		<svg
			id='left-icon'
			xmlns='http://www.w3.org/2000/svg'
			width='50'
			height='50'
		>
			{/* <rect width='100%' height='100%' fill='transparent'></rect>
			<rect
				width='50'
				height='50'
				x='-25'
				y='-25'
				fill='#fff'
				fillOpacity='0'
				rx='0'
				ry='0'
				transform='translate(25 25)'
				vectorEffect='non-scaling-stroke'
			></rect> */}
			<path
				stroke='#000'
				strokeWidth='0'
				d='M35 15l-20 9.219v1.562L35 35v-2.156L18.469 25 35 17.156z'
				vectorEffect='non-scaling-stroke'
			></path>
		</svg>
	);
};
const OpenpadlockIcon = () => {
	return (
		<svg
			id='open-padlock'
			xmlns='http://www.w3.org/2000/svg'
			width='50'
			height='50'
		>
			<rect
				width='50'
				height='50'
				x='-25'
				y='-25'
				fill='none'
				rx='0'
				ry='0'
				transform='translate(25 25)'
				vectorEffect='non-scaling-stroke'
			></rect>
			<path
				d='M33.432 25H20.503v-5.621c0-1.242.44-2.302 1.317-3.18.879-.878 1.938-1.317 3.18-1.317 1.241 0 2.301.439 3.18 1.317s1.317 1.939 1.317 3.18c0 .304.11.568.334.79.222.223.486.334.79.334h1.124c.305 0 .568-.11.79-.334a1.08 1.08 0 00.334-.79c0-2.166-.77-4.02-2.31-5.56s-3.393-2.31-5.559-2.31c-2.167 0-4.02.77-5.56 2.31s-2.31 3.393-2.31 5.56v5.62h-.562c-.468 0-.867.165-1.194.493a1.625 1.625 0 00-.492 1.194v10.118c0 .47.164.867.492 1.195.327.328.725.492 1.194.492h16.864c.468 0 .866-.164 1.195-.492.327-.328.491-.726.491-1.195V26.686c0-.468-.164-.866-.491-1.194A1.627 1.627 0 0033.432 25zm-7.112 7.019v3.3c0 .664-.539 1.203-1.204 1.203h-.232c-.665 0-1.204-.539-1.204-1.204v-3.3a2.5 2.5 0 112.64 0z'
				vectorEffect='non-scaling-stroke'
			></path>
		</svg>
	);
};
const FilledMicrophone = () => {
	return (
		<svg
			id='filled-mic'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			width='300'
			height='300'
			fill='red'
		>
			<rect width='100%' height='100%' fill='transparent'></rect>
			<rect
				width='100'
				height='100'
				x='-150'
				y='-150'
				fill='#fff'
				fillOpacity='0'
				rx='0'
				ry='0'
				transform='translate(150 150)'
				vectorEffect='non-scaling-stroke'
			></rect>
			<image
				width='150'
				height='150'
				x='-75'
				y='-75'
				strokeWidth='0'
				transform='matrix(.28 0 0 .28 150 150)'
				vectorEffect='non-scaling-stroke'
				xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAAXNSR0IArs4c6QAAC9pJREFUeF7tXVuIHEUU3fgAo2JiiEICYkSE4CM+gqL4moiggvgAEQXRDYKJoCSiYMAPNx8igtFElISAOoKi/hgfHxqEOImIoBI1SiKIun5oiMa3UXzGc8g0jm131+2erblV1bfgMrvbt6punTp9+nZ19ey0MSuDCByMXy6AnQGbCzsSNhs2p/8zfb+C7YTt7v/8BT7fhm2C/WJw7kNgmgExNh0YXA67HnbJkHi8jPpPwJ4dsp3oq7eZWFSi22E3w2ZM8Ux+i/bWw1b1lW2Kmw+/uTYSKyPULZieQz1P0c9o/+E2EqxNxOIlbxnsTthMz4TKN/8d/nAf7CHYryPuW6W7thCLyfeTMCbmmoUJ/tWwbzSDGEXfbSDWmQDyORjJFUL5HEHwZuH9EILxFUPqxLqoTyouI4RUuCxxFYx3kUmWlInF5Hw1bP9AZ+4vxHUT7LFA4xsqrFSJdSlQ2QA7YCh0/Ff+E11QVZl7JVVSJNbpmKEtsIMimamfEOeFsLciiVcUZmrEYi7FCTpBNPpwnD5EKAthv4cT0nCRpEasdYBjyXCQqNVeg56Xq/U+xR2nRKzjgc02WKjJumvqmMwvgG13OcZwPCVivQLAmQjHXDYi+ItjHkAWeyrE6mBAr6UwIRjDIlgv9rGkQixOxPmxT0Y//iRUKwVi8ZHNm4mQisPYC+NGw3diHlMKxIr5TrCMO9HfIcZOrEMwM7tg/EypfI3BHAPbE+ugYifWFQCej25SLFdiUM/HOrDYicWHzNy8l2KJ+nIYO7HeBaNOSZFVGNNWGB/zRFliJtZ+QPwPGD9TLD9iULNgXJGPrsRMrPlAe0d0iNcLmAn8ZL0qYXjHTCzuuXopDBi9RcH3HPmoKroSM7GuAdpPR4d4vYCvhfsz9aqE4R0zsZYCwrVhwOgtCr5MywXg6ErMxFoBtO+NDvF6Ad8Gdy6pRFdiJhZfj78/OsTrBcwxPlCvShjeRqww5qEsCiOWwvyYYimALu3SFEuKlI6fKZYC7qZYCqBLuzTFkiKl42eKpYC7KZYC6NIuTbGkSOn4mWIp4G6KpQC6tEtTLClSOn6mWAq4m2IpgC7t0hRLipSOnymWAu6mWAqgS7s0xZIipeNniqWAuymWAujSLk2xpEjp+JliKeBuiqUAurRLUywpUjp+plgKuJtiKYAu7dIUS4qUjp8plgLuplgKoEu7NMWSIqXjZ4qlgLsplgLo0i5NsaRI6fiZYingboqlALq0S1MsKVI6fqZYCribYimALu3SFEuKlI6fKZYC7qZYCqBLuzTFkiKl42eKpYC7KZYC6NIuTbGkSOn4mWIp4G6KpQC6tEtTLClSOn6mWAq4m2IpgC7t0hRLipSOnymWAu6mWAqgS7s0xZIipeNniqWAuymWAujSLk2xpEjp+JliKeBuiqUAurRLUywpUjp+plgKuJtiKYAu7TIkxZqJoG+A8fMF2HuOQRix9gHE/zB7Oex72BP9T+n8e/MLiVj5f8O7CKPuVYzciDU21gE+rw1gxJPxVG9sqdFwKMTKA8QhULX4X+rLihFr33+5p1oNFtcJWYMezV1DIdYEhnB3bhib8TsJZ8Qqx6CHQ+fnDq/E78RTtRixVOF3du66KzRiOSA0xSoGyIjlPPeqHYxYRqwhKVRc3YhlxDJieUHAiOUFVlMsI5YRywsCRiwvsJpiGbGMWF4QMGJ5gdUUy4hlxPKCgBHLC6ymWEYsI5YXBIxYXmA1xTJieSHWcrT6YK5l2zYzNtbkIfRi4Nj1Mks1Gg1l20wHMQ/uhOQQXMRaCp+1NcYao+vNCHpdReA9HMvvx7KNfgOAFRGLe7gPrwD1Ghx7Oka21Ij5Wvg+U+G/t+CYEctBLB6uUtRLcfylGpMUo+slCPoVI1bzqStSLBex5sNhR/Muo6h5DKKcNGINN1dFss43TspeA9sfx36D8TPFsgeDOgz2d8ngmpyMI8MplOSdA2ZONSM38ivxO99EKSv5V8ZGBtwIOtqKPhZW9MM3mDbkjv+A3/lepnoJiVg9oFH3jZPVqLNMHUU/AaxBs1yGKSsTOFD3zSY/kRa0GhKxuoiPb0IPFte7hUVn7cjA89yRS62L3il0kdFzyP82HxKxxhHW47mRu5YcDoH/Lhg/Uyq7MZh5MOZZZaUoJw1icZQBh0QsAvlZAYpVCTzduYC4JCVWYSwu5enAJ7+gTAhcd5EjgykkYnHQk7Cjc6N3gcwvxWASn1JZgMF8UDGgotzyc/jz5AyihEasLlDJ51kkG8/EqtLDwXziHwTADYLYiDoXO+pR2fMk4jfNjDfoz0uV0IjVwSiLJN51OSyr5wU0z426Hsk0xchz2P9tPjRiMToqVP5yKDkb+ejjopGiN/WdSdSqi27zqh7UZZCwhEissrUpV2J6PMazDRbrSvxfiJ251fYKvvLyV3SD48pDp/4UcLQYIrGGAe9+jJd7mGIsqxD0HY7Ai9SKVVwn3cjxCJFYBKFo8Y9rWgSQn2XlQBzYBDtn5EgO1+EbqM7c6o+KZviohmqVf2QjSROGi65B7VCJ1cFYipJ4CYhHoO6bsGMb4KFR5RN0ehbs64Zq5Ur2NcYUZI6VAdHDD0VLCBIgSaotsLkqqMo7/RKu58I+dVQpO9E2ox6PBVdCVSwCVbbwKf0CVybCJGfVLlTNCeEl/TxY1UJoFl/ZLg7XMoza+EImFkHpwvK31vy79C7oNPi+CpulhnBxx3y+yUVQ11eOs3bZXbIUA5Whh04sJqqTsPw+LYLlevqfAXoifngR5lq9H9UEcM2JpPpI0GHZ7g3uu5oHq7qRETTvzyV0YnHkZeASVOZbkrP+UPjdA7sVpjVm7kZ4BLYCVrVrIZttpgK8gSnauCc9qfwxx9GyFsh1B9xFhaJLIklFcknPXCbKj8KOqxvAkP4fo/6NsNeF7ZBMJBXJlS+SO2NhN/7cYiEWgSaJ8o96iExdcrEO1Ys7T33v46IyMRe6q8YUVpGKl1GSTXoi1eh2al1jIRZHTUB7sKJ8qwm5ZqMtrtLzpdCiNodB+ltUXg/jajo37UlLFamYV3X6J5K0PTW/mIhFkMryLR5rQi7Wmw67DHYd7GxY0+WJ71CXK+hPwapeMi2b7CpSsY5k/U6NSPmOYyMW4x+H5bcwZ+Oqk9CXTcJROHAS7GQY18J4+Z0DO7Jf4St87oRxUZNrUHzw/T6Mi51NS1WizjYXw7pNG9eoFyOxXOTi8eUw5jYxFOZ6XKsqK9GRigOJlVgScj3fP9NDTXR56aPy8vKeFKliJ5aEXCTVRIDqRZViXEVrVBnJolSqLPiYFSsbQ9XdYubDxP42WE/52thB//wesKL1qSy0qO7+yvBMgVgcG898koYJd1UhwZjPcJFxlIWLu1SoeY5OeRNA8oV6+RZjlgqxsgFz8vKvnReBMYk/MgcjwUg2H4WqREIxh3IRiv2v7JPPRywjbzM1YhFATmgX5lKvDOyMZD38YfMQakHV5P6xTg0yMQb2OQ5jHMmUFImVTQ4nawJW9BioagJ5GaKK0bJLEkk3WEgeFpKJRKZVJeJF/fHxDOPrJsOmgYGkTKxsmJw8rmtN9WObpnxgcs6YqtaumrYdTL02ECsDe7xPMOklcqoniZc8qlOSCpUHq03EysbOyxZJxqS67mWyLtl4ueNNAsnk6yahbkwj8W8jsQaBJck6Azbs5ZKXud6AtYpMg8C2nVj5s3ce/kAj2ViyxDyvbFSiLMGnH8k02beRKELonRix3DM0AZf82lhSa05uCOp7GLHcmBmx3Bj9z8OI5QbNiOXGyIjVACMjVgPQTLHcoBmx3BiZYjXAyIjVADRTLDdoRiw3RqZYDTAyYjUAzRTLDZoRy42RKVYDjIxYDUAzxXKDZsRyY2SK1QAjI1YD0NqmWHyoXHcHwzjq0AZLF7/Q6hTufGjNboe2EKuDSeU/jay7fbgOcSS+3Oq8qA0Eawux+IUd2qTKiEdyNf3iEQl5g/BpC7GK/ref5gQkj3vyA+yzh7mN1l73PIH5UipzvaRLW4jFieRbMdr/eo4vVPCNoeST+H8A6HRMtZtHLQ8AAAAASUVORK5CYII='
			></image>
		</svg>
	);
};
