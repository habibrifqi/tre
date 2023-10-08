
function modal({ onClose }) {
  return (
    <div className="modal">
    <div className="modal-content">
      <span onClick={onClose} className="close-button">
        &times;
      </span>
      <p>Cuakkss</p>
    </div>
  </div>
  )
}

export default modal
