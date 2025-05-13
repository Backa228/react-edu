export function getBgColor ( variant) {
    switch (variant) {
      case "info":
        return "blue";
      case "success":
        return "green";
      case "error":
        return "red";
      case "warning":
        return "orange";
      default:
        throw new Error(`Unsupported variant prop value - ${variant}`);
    }
};

const alertStyles = {
    margin: 8,
    padding: "12px 16px", 
    borderRadius: 4, 
    backgroundColor: "gray",
    colot: getBgColor(variant),
}

export default function Alert ({ text, variant }) { 
    return <p style={
        margin: 8,
        padding: "12px 16px", 
        borderRadius: 4, 
        backgroundColor: "gray",
        colot: getBgColor(variant),
    }>{text}</p>

}