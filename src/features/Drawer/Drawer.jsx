function Drawer({ open, onClose, children }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`backdrop-blur-sm fixed inset-0 z-40 bg-secondary-800/30 ${
          open ? "block" : "pointer-events-none hidden"
        }`}
      ></div>
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className={`w-[250px] h-full overflow-y-auto fixed top-0 right-0 transition-transform transform z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="overflow-y-auto bg-secondary-0 max-h-full" onClick={onClose}>
          {children}
        </div>
      </div>
    </>
  );
}

export default Drawer;
