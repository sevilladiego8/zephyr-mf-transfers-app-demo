import "./Modal.scss";
type ModalProps = {
    id?: string;
    title?: string;
    show: boolean;
    onClose: () => void;
    children?: React.ReactNode;
};
declare const Modal: (props: ModalProps) => import("react/jsx-runtime").JSX.Element | null;
export default Modal;
