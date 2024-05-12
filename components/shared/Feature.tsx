import React from 'react'

const Feature = () => {
    return (

        <section className="py-16 md:py-24 overflow-x-clip bg-gradient-to-b from-zinc-50 to-white">
            <div className="max-w-screen-xl w-full mx-auto px-6 lg:px-16">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-x-16 mb-8 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">I am your <span className="relative whitespace-nowrap text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249 22" fill="currentColor" className="absolute inset-x-0 -bottom-0.5 fill-blue-400/75">
                        <path d="M247.564 18.5808C241.772 13.3568 232.473 12.7526 225.225 11.4427C217.124 9.97398 208.996 8.57034 200.846 7.46096C186.542 5.51305 172.169 4.08857 157.79 3.01565C126.033 0.645858 94.0929 0.0338786 62.3387 2.36982C42.1785 3.85419 22.008 5.90888 2.32917 10.8464C-0.0155171 11.4349 0.207047 14.6719 2.6889 14.7084C22.0261 14.9896 41.3866 12.6406 60.7109 11.8568C79.9471 11.0808 99.2274 10.6719 118.484 10.9558C142.604 11.3125 166.719 12.8334 190.722 15.5156C199.956 16.5469 209.195 17.6016 218.411 18.8255C227.864 20.0808 237.259 22 246.767 20.7422C247.709 20.6198 248.426 19.3568 247.564 18.5808Z"></path>
                    </svg><span className="z-10 relative">all-in-one</span></span> AI Image Editor solution</h2>
                    <p className="text-lg text-zinc-700 w-full md:w-5/6 leading-8">Unleash the Power of AI  with π AI Image Editor, the cutting-edge tool that empowers you to enhance, restore, and transform your images with just a few clicks.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-20">
                    <div className="flex items-start gap-3">
                        <div className="rounded-full bg-zinc-800 text-white p-2 w-12 h-12 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tabler-icon tabler-icon-brand-github-filled ">
                            <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"></path>
                        </svg></div>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-xl leading-none mb-2 font-bold text-zinc-800"> <a href="/transformations/add/restore" title="AI Image Restore Editor">Image Restoration</a></h2>
                            <p className="text-base text-zinc-500">Enhance faded colors and bring your memories back to life.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="rounded-full bg-zinc-800 text-white p-2 w-12 h-12 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-device-mobile ">
                            <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z"></path>
                            <path d="M11 4h2"></path>
                            <path d="M12 17v.01"></path>
                        </svg></div>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-xl leading-none mb-2 font-bold text-zinc-800"> <a href="/transformations/add/fill" title="AI Generative Fill Editor">Generative Fill</a></h2>
                            <p className="text-base text-zinc-500"> Create stunning compositions with ease.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="rounded-full bg-zinc-800 text-white p-2 w-12 h-12 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-growth ">
                            <path d="M16.5 15a4.5 4.5 0 0 0 -4.5 4.5m4.5 -8.5a4.5 4.5 0 0 0 -4.5 4.5m4.5 -8.5a4.5 4.5 0 0 0 -4.5 4.5m-4 3.5c2.21 0 4 2.015 4 4.5m-4 -8.5c2.21 0 4 2.015 4 4.5m-4 -8.5c2.21 0 4 2.015 4 4.5m0 -7.5v6"></path>
                        </svg></div>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-xl leading-none mb-2 font-bold text-zinc-800"><a href="/transformations/add/remove" title="Object Remove Editor">Object Removal</a></h2>
                            <p className="text-base text-zinc-500">Remove unwanted objects from images with precision.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="rounded-full bg-zinc-800 text-white p-2 w-12 h-12 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-tools ">
                            <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                            <path d="M14.5 5.5l4 4"></path>
                            <path d="M12 8l-5 -5l-4 4l5 5"></path>
                            <path d="M7 8l-1.5 1.5"></path>
                            <path d="M16 12l5 5l-4 4l-5 -5"></path>
                            <path d="M16 17l-1.5 1.5"></path>
                        </svg></div>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-xl leading-none mb-2 font-bold text-zinc-800"><a href="/transformations/add/recolor" title="Object Recolor Editor"> Object Recolor</a></h2>
                            <p className="text-base text-zinc-500">Change the color of objects in images effortlessly.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="rounded-full bg-zinc-800 text-white p-2 w-12 h-12 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-cloud-upload ">
                            <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path>
                            <path d="M9 15l3 -3l3 3"></path>
                            <path d="M12 12l0 9"></path>
                        </svg></div>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-xl leading-none mb-2 font-bold text-zinc-800"><a href="/transformations/add/removeBackground" title="Background Remove Editor">Background Removal</a></h2>
                            <p className="text-base text-zinc-500">Remove backgrounds from images automatically.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="rounded-full bg-zinc-800 text-white p-2 w-12 h-12 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-world ">
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                            <path d="M3.6 9h16.8"></path>
                            <path d="M3.6 15h16.8"></path>
                            <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                            <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                        </svg></div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-xl leading-none mb-2 font-bold text-zinc-800">Globalization Support</h3>
                            <p className="text-base text-zinc-500">Supports multiple languages, making your website attractive to a global audience.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-center text-lg text-zinc-500 mb-4">Works with your technologies</h3>
                    <div className="flex justify-center gap-6 md:gap-12 [&amp;>svg]:w-12 [&amp;>svg]:h-12 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7ed0ef" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brand-react ">
                        <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
                        <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
                        <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
                        <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
                        <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
                        <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
                        <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brand-nextjs ">
                            <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
                            <path d="M15 12v-3"></path>
                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#67bcf3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brand-tailwind ">
                            <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path>
                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e68b42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brand-cloudflare ">
                            <path d="M13.031 7.007c2.469 -.007 3.295 1.293 3.969 2.993c4 0 4.994 3.825 5 6h-20c-.001 -1.64 1.36 -2.954 3 -3c0 -1.5 1 -3 3 -3c.66 -1.942 2.562 -2.986 5.031 -2.993z"></path>
                            <path d="M12 13h6"></path>
                            <path d="M17 10l-2.5 6"></path>
                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brand-vercel ">
                            <path d="M3 19h18l-9 -15z"></path>
                        </svg></div>
                </div>
            </div>
        </section>

    )
}

export default Feature