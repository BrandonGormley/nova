export default function BlogPost() {
    return (
        <div className='border border-slate-100 shadow-md rounded-md w-full md:max-w-[45%] lg:max-w-[25%] m-4'>
            <div className='p-6 flex flex-col'>
                <div className='flex justify-between text-slate-400 text-sm md:text-xs xl:text-sm'>
                    <p>Blog Post 1</p>
                    <p>December 28th, 2023</p>
                </div>
                <div className='py-4 text-slate-600'>
                    <p className='font-bold'>End of 2023</p>
                    <p className='text-sm text-slate-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sunt consectetur odit quibusdam incidunt eveniet
                        perferendis expedita pariatur vero numquam quam?
                    </p>
                </div>
            </div>
        </div>
    );
}
