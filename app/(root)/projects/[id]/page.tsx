import Theme from '@/components/Navbar/Theme';
import ScreenShotCarousel from '@/components/ScreenShotCarousel';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeProvider';
import { Project, projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import Loading from './loading';

async function getProjects(): Promise<Project[]> {
	const { projects } = await import('@/data/projects');
	return projects;
}

export async function generateStaticParams() {
	const projects = await getProjects();

	return projects.map((project) => ({
		id: project.id.toString(),
	}));
}

async function getProject(id: string): Promise<Project> {
	const projects = await getProjects();
	return projects.find((p) => p.id.toString() === id) || ({} as Project);
}

const ProjectDetail = async ({ params }: { params: { id: string } }) => {
	const project = await getProject(params.id);
	if (!project) return <div>Project not found</div>;

	return (
		<div className="flex-column section-container items-start justify-start gap-8 px-0 py-[22px] xl:size-full xl:gap-16 xl:p-16 ">
			<ScrollToTopButton />
			<div className="border-light800_dark200 flex w-full items-center justify-between border-b-2 ">
				<Link className="text-dark200_light800" href="/">
					Back to main page
				</Link>
				<Theme />
			</div>
			<div>
				<h1 className="h1-bold">{project.name}</h1>
				<p className="paragraph-regular">{project.description}</p>
			</div>
			<div className="flex-column gap-8">
				<div className="flex items-baseline gap-2">
					<p className="paragraph-medium">Created at:</p>
					<p className="paragraph-regular">{project.createdAt}</p>
				</div>
				<div className="flex items-start gap-2">
					<p className="paragraph-medium">Stack:</p>
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
					<p className="paragraph-medium">Live Demo:</p>
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
					className="object-cover"
				/>
			</div>

			<div className="flex-column w-full gap-4 xl:flex-row">
				<div className="flex-column flex-1 gap-8">
					<h2 className="h2-bold">Project Purpose</h2>
					<p className="paragraph-regular">{project.purpose}</p>
				</div>
				<div className="relative aspect-square w-full max-w-[500px]">
					<Image
						src={`/assets/images/backgrounds/project-backgrounds/data-analysis-bg.svg`}
						fill
						alt="Project Purpose image"
						className="object-cover"
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
					/>
				</div>
				<div className="flex-column flex-1 gap-8">
					<h2 className="h2-bold">Web Stack Overview</h2>
					<p className="paragraph-regular">{project.webStackExplanation}</p>
				</div>
			</div>

			<div className="flex-column w-full gap-8">
				<h2 className="h2-bold">Projects Screenshots</h2>
				<ScreenShotCarousel projectScreenshot={project.screenshots} />
			</div>

			<div className="flex-column w-full gap-4 xl:flex-row">
				<div className="flex-column w-full flex-1 gap-8">
					<h2 className="h2-bold">Problems and Thought Process</h2>
					<p className="paragraph-regular">{project.problems}</p>
				</div>
				<div className="relative aspect-square w-full max-w-[500px]">
					<Image
						src={`/assets/images/backgrounds/project-backgrounds/problem-solving-bg.svg`}
						fill
						alt="Project Purpose image"
						className="object-cover"
					/>
				</div>
			</div>

			<div className="flex w-full flex-col-reverse gap-4 xl:flex-row">
				<div className="relative aspect-square w-full max-w-[500px]">
					<Image
						src={`/assets/images/backgrounds/project-backgrounds/mind-map-bg.svg`}
						fill
						alt="Project Purpose image"
						className="object-cover"
					/>
				</div>
				<div className="flex-column w-full flex-1 gap-8">
					<h2 className="h2-bold">Lessons Learned</h2>
					<p className="paragraph-regular">{project.lessonsLearned}</p>
				</div>
			</div>
			<div className="border-light800_dark200 flex w-full items-center justify-between border-b-2 ">
				<Link className="text-dark200_light800" href="/">
					Back to main page
				</Link>
			</div>
		</div>
	);
};

export default ProjectDetail;
