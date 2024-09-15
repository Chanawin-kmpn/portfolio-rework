import Image from 'next/image';
import React from 'react';

const RecommandTag = () => {
	return (
		<div className="group absolute right-[-0.65rem] top-[-0.7rem] size-[170px] overflow-hidden">
			<div
				className=" absolute right-0 top-0 
            size-[170px] overflow-hidden before:absolute before:left-0 before:top-0 before:border-[5px] before:border-[hsl(325deg,60%,48%)] before:border-r-transparent  
            before:border-t-transparent before:duration-1000 before:content-[''] after:absolute after:bottom-0 after:right-0 
          
            after:border-[5px] after:border-[hsl(260deg,60%,55%)]  
            after:border-r-transparent after:border-t-transparent after:duration-1100 after:content-[''] group-hover:before:border-[hsl(260deg,60%,55%)] group-hover:after:border-[hsl(230deg,60%,45%)]"
			>
				<span className="absolute -left-8 top-[60px] z-20 flex w-[270px] rotate-45 items-center justify-center gap-2 bg-gradient-to-r from-[hsl(325deg,100%,48%)] via-[hsl(260deg,100%,55%)] to-[hsl(230deg,100%,45%)] bg-[length:200%_100%] py-1 text-center text-lg font-bold uppercase text-white shadow-md transition-all duration-700 group-hover:bg-[100%_0] group-hover:shadow-lg">
					<span className="relative z-10">Recommended</span>
					<span className="relative z-10">
						<Image
							src={'/assets/icons/hand-thumb-up.webp'}
							width={24}
							height={24}
							alt="recommanded hand thumb up"
						/>
					</span>
				</span>
			</div>
		</div>
	);
};

export default RecommandTag;
