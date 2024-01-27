import React, { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { AnimatePresence, motion } from 'framer-motion';

import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';

function SideBar() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <>
            <motion.div
              {...framerSidebarPanel}
              className="fixed bottom-0 left-0 w-full h-screen max-w-xs bg-gray"
              ref={ref}
              aria-label="Sidebar"
            >
              <div className="fixed items-center justify-between p-5">
                <button onClick={toggleSidebar} className="m-3" aria-label="toggle sidebar">
                  <IconContext.Provider value={{ color: 'white' }}>
                    <GiHamburgerMenu />
                  </IconContext.Provider>
                </button>
              </div>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              {...framerSidebarPanel}
              className="fixed bottom-0 left-0 w-full h-screen max-w-20 bg-gray"
              ref={ref}
              aria-label="Sidebar"
            >
              <div className="flex items-center justify-between p-5">
                <button onClick={toggleSidebar} className="m-3" aria-label="toggle sidebar">
                  <IconContext.Provider value={{ color: 'white' }}>
                    <GiHamburgerMenu />
                  </IconContext.Provider>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

const framerSidebarPanel = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
  transition: { duration: 0.3 }
};

export default SideBar;