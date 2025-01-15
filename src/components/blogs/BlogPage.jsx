import { motion } from 'framer-motion';

const Blogs = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            className="flex flex-col md:flex-row w-full min-h-screen justify-center items-center -mt-32"
        >
            <div className='w-full mt-48 lg:mt-0 xl:w-8/12 flex flex-wrap lg:flex-row xl:flex-row items-center justify-center'>
                <div className="w-full lg:w-2/3 xl:w-2/3 pl-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.9,
                            delay: 0.1,
                        }}
                        className="font-thin text-shine tracking-widest text-3xl text-gray-700 dark:text-gray-400"
                    >
                        Coming soon..
                    </motion.h1>
                </div>
            </div>
        </motion.section>
    );
};

export default Blogs;
