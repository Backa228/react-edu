// export function getBgColor ( variant) {
//     switch (variant) {
//       case "info":
//         return "blue";
//       case "success":
//         return "green";
//       case "error":
//         return "red";
//       case "warning":
//         return "orange";
//       default:
//         throw new Error(`Unsupported variant prop value - ${variant}`);
//     }
// };

// const alertStyles = {
//     margin: 8,
//     padding: "12px 16px",
//     borderRadius: 4,
//     backgroundColor: "gray",
//     colot: getBgColor(variant),
// }

import css from "./Alert.module.css";
import clsx from "clsx"
export default function Alert({ text, variant, outlined, elevated }) {
  //вбудовані стилі

  // return <p 
  // style={{}
  //     margin: 8,
  //     padding: "12px 16px", 
  //     borderRadius: 4, 
  //     backgroundColor: "gray",
  //     colot: getBgColor(variant),
  // > { text } <p/>
  
  //ванільний css
  // const classNames = ["alert", variant]; 

  // if (outlined) {
  //   classNames.push("isOutlined")
  // }

  // if (elevated) {
  //   classNames.push("isElevated")
  // }
  // return <p className={classNames.join(" ")}>{ text }</p>
  
  //підключення стилів з бібліотекою clsx
  return <p className={clsx(
    css["alert"],
    css[variant],
    outlined && css["isOutlined"],
    elevated && css["isElevated"]
  )}>{text}</p>
}