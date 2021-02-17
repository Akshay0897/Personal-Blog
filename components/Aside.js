import Logo from './Logo';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Signup from './Signup';

const Aside = () => {
	const router = useRouter();
	const isIndex = router.pathname === '/';

	return (
		<aside>
			{!isIndex && (
				<>
					<Signup />
					<div className="mb-7">
						<Logo />
					</div>
				</>
			)}
			<div className="flex mb-14 items-center text-lg">
				<Image
					src="/assets/author/akshay.jpg"
					alt="AKshay Patel"
					width={56}
					height={56}
					className=" rounded-full"
				/>
				<p className="ml-3.5 max-w-xs">
					Personal blog by{' '}
					<a
						className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
						href="https://twitter.com/Akshayaghera1"
						target="_blank"
						rel="noopener"
					>
						Akshay Aghera
					</a>
					.<span className="block">I explain with words and code.</span>
				</p>
			</div>
		</aside>
	);
};

export default Aside;
