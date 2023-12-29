

export default function Features() {
    return (
        <div className="flex flex-col gap-5 mx-auto w-full min-h-96 px-60 py-20">
            <div className="grid grid-cols-3 gap-4 w-full h-96">
                <div className="col-span-2 bg-[url('https://flowbite.com/docs/images/carousel/carousel-1.svg')] object-contain rounded-lg">Box</div>
                <div className="bg-[url('https://flowbite.com/docs/images/carousel/carousel-1.svg')] rounded-lg items-center">Box</div>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full h-96">
                <div className="bg-[url('https://flowbite.com/docs/images/carousel/carousel-1.svg')] rounded-lg items-center">Box</div>
                <div className="col-span-2 bg-[url('https://flowbite.com/docs/images/carousel/carousel-1.svg')] rounded-lg items-center">Box</div>
            </div>
        </div>
    )
}