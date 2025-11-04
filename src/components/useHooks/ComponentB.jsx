import SideBar from './SideBar'
import { useToggle } from './useToggle'

const ComponentB = () => {
    const { isOpen, open, close } = useToggle()

  return (
    <>
        <button onClick={open}>Open sidebar</button>
        <SideBar isOpen={isOpen} onClose={close} />
    </>
  );
};

export default ComponentB