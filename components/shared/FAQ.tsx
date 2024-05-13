import React from 'react'

const FAQ = () => {
  return (
    		
		<section>
        {/* FAQ Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
            {/* FAQ Title */}
            <div className="mb-8 text-center md:mb-12 lg:mb-16">
                <h2 className="text-3xl font-bold md:text-5xl">Frequently Asked</h2>
                <p className="mx-auto mt-4 max-w-lg text-[#647084]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                    aliquam,purus sit amet luctus magna fringilla urna
                </p>
            </div>
            {/* FAQ Content */}
            <div className="mb-12 flex flex-wrap justify-center gap-4 lg:grid-cols-2">
                {/* FAQ Item */}
                <div
                 className="mb-6 border border-solid border-[#dfdfdf] p-8 lg:max-w-xl"
                >
                    <div className="flex cursor-pointer justify-between">
                        <p className="text-xl font-bold">
                            What is AI Image editor?
                        </p>
                        <div
                         className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center"
                        >
                            <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
                            <div className="h-0.5 w-5 bg-[#276ef1]"></div>
                        </div>
                    </div>
                    <p className="mb-4 mt-4">
                    AI Image Editor is a web-based application that empowers you to enhance, 
                        restore, and transform your images using the power of artificial intelligence.
                    </p>
                </div>
                {/* FAQ Item */}
                <div
                 className="mb-6 border border-solid border-[#dfdfdf] p-8 lg:max-w-xl"
                >
                    <div className="flex cursor-pointer justify-between">
                        <p className="text-xl font-bold">
                        Is AI Image Editor easy to use?
                        </p>
                        <div
                         className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center"
                        >
                            <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
                            <div className="h-0.5 w-5 bg-[#276ef1]"></div>
                        </div>
                    </div>
                    <p className="mb-4 mt-4">
                    Yes, AI Image Editor is designed to be user-friendly and accessible to everyone, regardless of their technical skills.
                    </p>
                </div>
                {/* FAQ Item */}
                <div
                 className="mb-6 border border-solid border-[#dfdfdf] p-8 lg:max-w-xl"
                >
                    <div className="flex cursor-pointer justify-between">
                        <p className="text-xl font-bold">
                            How to find an AI photo Editor online?
                        </p>
                        <div
                         className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center"
                        >
                            <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
                            <div className="h-0.5 w-5 bg-[#276ef1]"></div>
                        </div>
                    </div>
                    <p className="mb-4 mt-4">
                        If you are finding AI photo Editor online,there are a few key factors to consider
                        to ensure you choose the right one for your needs:Ease of Use,Advanced AI Features,
                        Performance,Pricing,Integration.Our AI Image Editor not only meets your immediate 
                        needs but also grows with you as your editing skills and requirements evolve.
                    </p>
                </div>
                {/* FAQ Item */}
                <div
                 className="mb-6 border border-solid border-[#dfdfdf] p-8 lg:max-w-xl"
                >
                    <div className="flex cursor-pointer justify-between">
                        <p className="text-xl font-bold">
                            How to use AI Image Editor to remove object or background from a photo? 
                        </p>
                        <div
                         className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center"
                        >
                            <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
                            <div className="h-0.5 w-5 bg-[#276ef1]"></div>
                        </div>
                    </div>
                    <p className="mb-4 mt-4">
                    The process typically involves the following steps:
                    1.Uploading the photo to the AI Image Editor.
                    2.Selecting the object or area to be removed, either by drawing a mask or using a selection tool.
                    3.Letting the AI algorithm process the image.
                    4.Reviewing the result and making any fine-tuning adjustments if necessary.
                    5.Saving the edited image.
                    </p>
                </div>
                {/* FAQ Item */}
                <div
                 className="mb-6 border border-solid border-[#dfdfdf] p-8 lg:max-w-xl"
                >
                    <div className="flex cursor-pointer justify-between">
                        <p className="text-xl font-bold">
                        What is the most powerful AI photo editor?
                        </p>
                        <div
                         className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center"
                        >
                            <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
                            <div className="h-0.5 w-5 bg-[#276ef1]"></div>
                        </div>
                    </div>
                    <p className="mb-4 mt-4">
                    The most powerful AI photo editor currently available is Pai AI Editor. 
                        It utilizes advanced artificial intelligence technology to provide 
                        users with a wide array of editing tools and features, enabling them 
                        to create stunning and professional-looking images with ease.
                    </p>
                </div>
                {/* FAQ Item */}
                <div
                 className="mb-6 border border-solid border-[#dfdfdf] p-8 lg:max-w-xl"
                >
                    <div className="flex cursor-pointer justify-between">
                        <p className="text-xl font-bold">
                            Is Pai AI Image Editor online free ?
                        </p>
                        <div
                         className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center"
                        >
                            <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
                            <div className="h-0.5 w-5 bg-[#276ef1]"></div>
                        </div>
                    </div>
                    <p className="mb-4 mt-4">
                    Our Image Editor allows you to edit 10 images completely free of charge.
                         Once you reach the  limit, we offer a variety of affordable 
                        subscription plans as well as one-time credit packages to increase your limit.
                    </p>
                </div>
            </div>
            {/* FAQ Text */}
            <p className="text-center">
                Can’t find the answer you’re looking for? Reach out to our
                <a href="#">customer support team</a>.
            </p>
        </div>
    </section>
  )
}

export default FAQ