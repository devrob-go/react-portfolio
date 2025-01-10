import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiMoon, FiSun } from 'react-icons/fi';

const Switcher = () => {
    const [activeTheme, setTheme] = useThemeSwitcher();

    return (
        <>
            <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
                <input
                    type='checkbox'
                    checked={activeTheme === 'dark'}
                    onClick={() => setTheme(activeTheme)}
                    className='sr-only'
                />
                {activeTheme === 'dark' ? (
                    <>
                        {/* visible on white mode */}
                        <span className={`slider mx-4 flex h-6 w-[48px] items-center rounded-full pl-[2px] duration-200  bg-gray-700`}>
                            <span className={`dot h-5 w-5 rounded-full bg-white duration-200`}></span>
                            <FiMoon className="text-gray-400 ml-1 dark:text-transparent text-lg" />
                        </span>
                    </>
                ) : (
                    <>
                        {/* visible on dark mode */}
                        <span className={`slider mx-4 flex h-6 w-[48px] items-center rounded-full p-1 duration-200 bg-white`}>
                            <FiSun className="text-gray-400 text-lg" />
                            <span className={`dot h-5 w-5 rounded-full bg-gray-800 duration-200 translate-x-[4px]`}></span>
                        </span>
                    </>
                )}
            </label>
        </>
    )
}

export default Switcher
