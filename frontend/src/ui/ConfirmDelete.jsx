function ConfirmDelete({ resourceName, onClose, confirm, disabled }) {
  return (
    <div>
      <h2 className="mb-4 text-base">
        آیا از حدف {resourceName} اطمینان دارید؟
      </h2>
      <div className="flex gap-x-16">
        <button
          disabled={disabled}
          className="btn btn--primary flex-1"
          onClick={onClose}
        >
          لغو
        </button>
        <button
          disabled={disabled}
          className="btn btn--danger flex-1"
          onClick={confirm}
        >
          حذف
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
