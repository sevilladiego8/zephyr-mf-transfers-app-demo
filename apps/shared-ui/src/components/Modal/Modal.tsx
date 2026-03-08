import "./Modal.css";

type ModalProps = {
  id?: string;
  title?: string;
  show: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const Modal = (props: ModalProps) => {
  const { id, title, show, onClose, children } = props;

  if (!show) return null;

  return (
    <>
      <div className="modal fade show d-block" id={id} tabIndex={-1} {...props}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>

              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">{children}</div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default Modal;