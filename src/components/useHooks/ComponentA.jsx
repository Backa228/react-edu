import Modal from './Modal'
import { useToggle } from './useToggle'

const ComponentA = () => {
    const { isOpen, open, close } = useToggle()

  return (
    <>
      <button onClick={open}>Open modal</button>
      <Modal isOpen={isOpen} onClose={close} />
    </>
  );
};

export default ComponentA