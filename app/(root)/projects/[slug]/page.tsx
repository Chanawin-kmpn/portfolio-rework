import Theme from '@/components/Navbar/Theme';
import ScreenShotCarousel from '@/components/ScreenShotCarousel';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectProp } from '@/types/types';

async function getProjects(): Promise<ProjectProp[]> {
	const { projects } = await import('@/data/projects');
	return projects;
}

export async function generateStaticParams() {
	const projects = await getProjects();

	return projects.map((project) => ({
		slug: project.slug,
	}));
}

async function getProject(slug: string): Promise<ProjectProp> {
	const projects = await getProjects();
	return projects.find((p) => p.slug === slug) || ({} as ProjectProp);
}

const ProjectDetail = async ({ params }: { params: { slug: string } }) => {
	const project = await getProject(params.slug);
	if (!project) return <div>Project not found</div>;

	return (
		<div className="flex-column section-container items-start justify-start gap-8 px-0 py-[22px] xl:size-full xl:gap-16 xl:p-16 ">
			<ScrollToTopButton />
			<div className="border-light800_dark200 flex w-full items-center justify-between border-b-2 ">
				<Link className="body-semibold" href="/">
					Back to main page
				</Link>
				<Theme />
			</div>
			<div>
				<h1 className="h1-bold text-dark200_light800">{project.name}</h1>
				<p className="paragraph-regular">{project.description}</p>
			</div>
			<div className="flex-column gap-8">
				<div className="flex items-baseline gap-2">
					<p className="body-semibold">Created at:</p>
					<p className="paragraph-regular">{project.createdAt}</p>
				</div>
				<div className="flex items-start gap-2">
					<p className="body-semibold">Stack:</p>
					<ul>
						{project.stack.map((tech, index) => (
							<li key={index} className="text-dark200_light800">
								-{' '}
								{(tech as string).charAt(0).toUpperCase() +
									(tech as string).slice(1)}
							</li>
						))}
					</ul>
				</div>
				<div className="flex items-baseline gap-2">
					<p className="body-semibold">Live Demo:</p>
					<Link
						href={project.liveDemo}
						className="paragraph-medium text-custom-pink dark:text-custom-pink"
						target="_blank"
					>
						View Site
					</Link>
				</div>
			</div>
			<div className="relative aspect-video w-full">
				<Image
					src={project.heroImage}
					alt="Project hero image"
					fill
					sizes="100%"
					className="object-contain"
					priority
				/>
			</div>

			<div className="flex-column w-full gap-4 xl:flex-row">
				<div className="flex-column flex-1 gap-8">
					<h2 className="h2-bold text-custom-pink dark:text-custom-pink">
						About Project
					</h2>
					<div className="space-y-16">
						<div className="space-y-4">
							<h3 className="h3-bold">Propose</h3>
							<p className="paragraph-regular">{project.purpose}</p>
						</div>
						<div className="space-y-4">
							<p className="paragraph-medium">Objectives</p>
							<ol className="space-y-2">
								{project.objectives.map((list, index) => (
									<li
										className="text-dark200_light800 ml-8 list-decimal text-sm xl:text-base"
										key={index}
									>
										{list}
									</li>
								))}
							</ol>
						</div>
						<div className="space-y-4">
							<p className="paragraph-medium">Key Fetures</p>
							<ol className="space-y-2">
								{project.keyFeatures.map((list, index) => (
									<li
										className="text-dark200_light800 ml-8 list-decimal text-sm xl:text-base"
										key={index}
									>
										{list}
									</li>
								))}
							</ol>
						</div>
						<div className="space-y-4">
							<p className="paragraph-medium">Expected Benefits</p>
							<ol className="space-y-2">
								{project.expectedBenefits.map((list, index) => (
									<li
										className="text-dark200_light800 ml-8 list-decimal text-sm xl:text-base"
										key={index}
									>
										{list}
									</li>
								))}
							</ol>
						</div>
					</div>
				</div>
				<div className="relative aspect-square w-full max-w-[500px]">
					<Image
						src={`/assets/images/backgrounds/project-backgrounds/data-analysis-bg.svg`}
						fill
						alt="Project Purpose image"
						className="object-fill"
						loading="lazy"
					/>
				</div>
			</div>

			<div className="flex-column w-full gap-4 xl:flex-row">
				<div className="relative aspect-square w-full max-w-[500px] max-xl:hidden">
					<Image
						src={`/assets/images/backgrounds/project-backgrounds/grid-bg.webp`}
						fill
						sizes="100%"
						alt="Project stack background"
						className="object-cover"
						loading="lazy"
					/>
				</div>
				<div className="flex-column flex-1 gap-8">
					<h2 className="h2-bold text-custom-pink dark:text-custom-pink">
						Web Stack Overview
					</h2>
					{project.webStackExplanation.map((paragraph, index) => (
						<p className="paragraph-regular" key={index}>
							{paragraph}
						</p>
					))}
				</div>
			</div>

			<div className="flex-column w-full gap-8">
				<h2 className="h2-bold text-custom-pink dark:text-custom-pink">
					Projects Screenshots
				</h2>
				<ScreenShotCarousel projectScreenshot={project.screenshots} />
			</div>

			<div className="flex-column w-full gap-4 xl:flex-row">
				<div className="flex-column w-full flex-1 gap-8">
					<h2 className="h2-bold text-custom-pink dark:text-custom-pink">
						Challenges and Problem Solving
					</h2>
					{project.challengesAndProblemSolving.map((problem, index) => (
						<div key={index}>
							<p className="text-dark200_light800 mb-2 text-xl font-bold xl:text-2xl">
								{problem.title}
							</p>
							<p className="text-dark200_light800 ">
								<span className="font-bold">Solved:</span> {problem.solving}
							</p>
						</div>
					))}
				</div>
				<div className="relative aspect-square w-full max-w-[500px]">
					<Image
						src={`/assets/images/backgrounds/project-backgrounds/problem-solving-bg.svg`}
						fill
						alt="Project Purpose image"
						className="object-fill"
						loading="lazy"
					/>
				</div>
			</div>

			<div className="flex w-full flex-col-reverse gap-4 xl:flex-row">
				<div className="relative aspect-square w-full max-w-[500px]">
					<Image
						src={`/assets/images/backgrounds/project-backgrounds/mind-map-bg.svg`}
						fill
						alt="Project Purpose image"
						className="object-fill"
						loading="lazy"
					/>
				</div>
				<div className="flex-column w-full flex-1 gap-8">
					<div className="flex flex-col gap-8">
						<h2 className="h2-bold text-custom-pink dark:text-custom-pink">
							Lessons Learned
						</h2>
						<div className="space-y-6">
							{project.lessonsLearned.lessons.map((lesson, index) => (
								<div key={index} className="space-y-2">
									<p className="text-dark200_light800 text-xl font-bold xl:text-2xl">
										{index + 1}. {lesson.title}
									</p>
									<ul className="space-y-4 pl-5">
										{lesson.points.map((point, pointIndex) => (
											<li
												key={pointIndex}
												className="text-dark200_light800 text-base  xl:text-xl"
											>
												- {point}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-8">
						<h2 className="h2-bold text-custom-pink dark:text-custom-pink">
							Future Developement Plans
						</h2>
						<div className="space-y-6">
							<div className="space-y-4">
								<ul className="space-y-4 pl-5">
									{project.futureDevelopmentPlan.map((plan, index) => (
										<li
											key={index}
											className="text-dark200_light800 text-base xl:text-xl"
										>
											- {plan}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="border-light800_dark200 flex w-full items-center justify-between border-b-2 ">
				<Link className="body-semibold" href="/">
					Back to main page
				</Link>
			</div>
		</div>
	);
};

export default ProjectDetail;
