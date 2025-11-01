import { useEffect } from "react";

const Sidebar = ({ isOpen, onClose, children }) => {
  // Закриття по Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "stretch",
        zIndex: 1000,
      }}
      onClick={onClose} // клік по фону закриває сайдбар
    >
      <div
        style={{
          background: "#fff",
          width: "300px",
          padding: "20px",
          boxShadow: "2px 0 15px rgba(0,0,0,0.2)",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            border: "none",
            background: "transparent",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        {children || (
          <>
            <h2>Sidebar Menu</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="#">Home</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;