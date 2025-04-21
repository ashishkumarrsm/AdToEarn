import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { id } from 'ethers';

const AnimatedItem = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.5, triggerOnce: false });
    return (
        <motion.div
            ref={ref}
            data-index={index}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2, delay }}
            className="mb-4 cursor-pointer"
        >
            {children}
        </motion.div>
    );
};

const AnimatedList = ({
    items = [
        {
            id: '1',
            Heading: 'Item 1',
            SubHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/100'
        },
        {
            id: '2',
            Heading: 'Item 2',
            SubHeading: 'More details about item 2.',
            image: 'https://via.placeholder.com/100'
        },
        {
            id: '3',
            Heading: 'Item 3',
            SubHeading: 'Some quick example text.',
            image: 'https://via.placeholder.com/100'
        },
        // Add more items similarly
    ],

    onItemSelect,
    showGradients = true,
    enableArrowNavigation = true,
    className = '',
    itemClassName = '',
    displayScrollbar = true,
    initialSelectedIndex = -1,
}) => {
    const listRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
    const [keyboardNav, setKeyboardNav] = useState(false);
    const [topGradientOpacity, setTopGradientOpacity] = useState(0);
    const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        setTopGradientOpacity(Math.min(scrollTop / 50, 1));
        const bottomDistance = scrollHeight - (scrollTop + clientHeight);
        setBottomGradientOpacity(
            scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1)
        );
    };

    // Keyboard navigation: arrow keys, tab, and enter selection
    useEffect(() => {
        if (!enableArrowNavigation) return;
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
                e.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1));
            } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
                e.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex((prev) => Math.max(prev - 1, 0));
            } else if (e.key === 'Enter') {
                if (selectedIndex >= 0 && selectedIndex < items.length) {
                    e.preventDefault();
                    if (onItemSelect) {
                        onItemSelect(items[selectedIndex], selectedIndex);
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

    // Scroll the selected item into view if needed
    useEffect(() => {
        if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
        const container = listRef.current;
        const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`);
        if (selectedItem) {
            const extraMargin = 50;
            const containerScrollTop = container.scrollTop;
            const containerHeight = container.clientHeight;
            const itemTop = selectedItem.offsetTop;
            const itemBottom = itemTop + selectedItem.offsetHeight;
            if (itemTop < containerScrollTop + extraMargin) {
                container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
            } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
                container.scrollTo({
                    top: itemBottom - containerHeight + extraMargin,
                    behavior: 'smooth',
                });
            }
        }
        setKeyboardNav(false);
    }, [selectedIndex, keyboardNav]);

    return (
        <div className={`relative w-1/2 ${className}`}>
            <div
                ref={listRef}
                className={`max-h-[400px] overflow-y-auto p-4 ${displayScrollbar
                    ? "[&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-[#060606] [&::-webkit-scrollbar-thumb]:bg-[#222] [&::-webkit-scrollbar-thumb]:rounded-[4px]"
                    : "scrollbar-hide"
                    }`}
                onScroll={handleScroll}
                style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#222 #060606',
                }}
            >
              <div className='h-20'>
                <img src="https://img.freepik.com/free-vector/flat-design-go-further-illustration_23-2150077080.jpg?uid=R90634854&ga=GA1.1.1673403856.1719407260&semt=ais_hybrid&w=740" alt="" />
              {items.map((item, index) => (
                    <AnimatedItem
                        key={item.id}
                        delay={0.1}
                        index={index}
                        onMouseEnter={() => setSelectedIndex(index)}
                        onClick={() => {
                            setSelectedIndex(index);
                            if (onItemSelect) {
                                onItemSelect(item, index);
                            }
                        }}
                    >
                        <div
                            className={`transition-all duration-300 p-5 rounded-xl shadow-md cursor-pointer 
        ${selectedIndex === index ? 'bg-orange-500 text-white' : 'bg-white   '   } 
        hover:bg-orange-100 ${itemClassName}`}
                        >
                            <div className="flex  gap-5 ">
                                <img
                                    src={item.image}
                                    alt={item.Heading}
                                    className="w-16 h-16 object-cover rounded-full border border-gray-200"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold">{item.Heading}</h2>
                                    <p className="text-sm mt-1">{item.SubHeading}</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedItem>
                ))}
              </div>

            </div>
            {showGradients && (
                <>
                    {/* <div
                        className="absolute top-0 left-0 right-0 h-[50px] bg-gradient-to-b from-[#f97316] to-transparent pointer-events-none transition-opacity duration-300 ease"
                        style={{ opacity: topGradientOpacity }}
                    ></div>
                    <div
                        className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#f97316] to-transparent pointer-events-none transition-opacity duration-300 ease"
                        style={{ opacity: bottomGradientOpacity }}
                    ></div> */}
                </>
            )}
        </div>
    );
};

export default AnimatedList;
