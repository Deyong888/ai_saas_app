import { Collection } from "@/components/shared/Collection"
import FAQ from "@/components/shared/FAQ"
import Feature from "@/components/shared/Feature"
import Footer from "@/components/shared/Footer"
import Hero from "@/components/shared/Hero"
import { navLinks } from "@/constants"
import { getAllImages } from "@/lib/actions/image.actions"
import Image from "next/image"
import Link from "next/link"

const Home = async ({ searchParams }: SearchParamProps) => {
	const page = Number(searchParams?.page) || 1;
	const searchQuery = (searchParams?.query as string) || '';

	const images = await getAllImages({ page, searchQuery })

	return (
		<>


			<section className="home">
				<h1 className="home-heading">
				<a href="./"  title="AI Image Editor">AI Image Editor</a>
				</h1>
				<ul className="flex-center w-full gap-20">
					{navLinks.slice(0, 6).map((link) => (
						<Link
							key={link.route}
							href={link.route}
							className="flex-center flex-col gap-2"
						>

							<p className="p-14-medium text-center text-white">{link.label}</p>
						</Link>
					))}
				</ul>
			</section>

			<Hero />
			<Feature />

			<section className="sm:mt-12">
				<div className="root-container">
					<Collection
						hasSearch={true}
						images={images?.data}
						totalPages={images?.totalPage}
						page={page}
					/>
				</div>
			</section>

			<FAQ />
			
			<header>
				{/* Container */}
				<div className="px-5 py-16 md:px-10 md:py-24 lg:py-32">
					{/* Component */}
					<div className="mx-auto w-full max-w-7xl rounded-[48px] bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6391a6daa19785eb51dd3666_CTA%20(2).svg')] bg-cover bg-center bg-no-repeat py-20 text-white [box-shadow:rgb(106,_218,_255)_9px_9px]">
						<div className="mx-auto max-w-3xl text-center">
							{/* Heading Div */}
							<div className="mb-6 max-w-[720px] lg:mb-12">
								<h2 className="mb-4 text-3xl font-semibold md:text-5xl"><span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6391a5b04f2836ad87dcc3bc_Rectangle%20773.svg')] bg-cover bg-center px-4 text-white">Transform Your Images Today with</span>&nbsp; AI Image Editor</h2>
								<div className="mx-auto max-w-[630px]">
									<p className="text-[#e0e0e0]">Start your free trial now and experience the power of AI-powered image editing.</p>
								</div>
							</div>
							{/* CTA */}
							<a href="#" className="inline-block rounded-xl bg-black px-8 py-4 font-semibold text-white [box-shadow:rgb(255,_255,_255)_6px_6px]"> Start Editing Now</a>
						</div>
					</div>
				</div>
			</header>

			<Footer />

		</>
	)
}

export default Home