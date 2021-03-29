import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Splash = () => {
	const count = 7568;

	return (
		<div className="splash">
			<div className="splash__content">
				<div className="splash__content__screenshot">
					<img className="splash__content__screenshot__img" src="/splash-1.png" />
				</div>
				<div className="splash__content__count">
					<h1>
						{count}<span>명</span>
					</h1>
					<h3>10000까지만 올라갑니다.</h3>
					<div className="splash__content__count__invite-only">INVITE ONLY</div>
				</div>
				<div className="splash__content__screenshot">
					<img className="splash__content__screenshot__img" src="/splash-2.png" />
				</div>
			</div>
		</div>
	);
};

export default Splash;
