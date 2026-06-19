function Modal(props) {
    if (!props.isOpen) return null;
    return(
        <div className="modal-overlay" onClick={props.onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Added to Cart</h2>
                <p>{props.productName} was added to your cart.</p>
                <button onClick={props.onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;