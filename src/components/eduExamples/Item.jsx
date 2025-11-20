import css from "./Item.module.css"

export default function Item({ name, isPacked }) {
    return (
        <li className={css[ "text" ]} >
            {isPacked ? (
                <del>
                    {name + ' ✅'}
                </del>) 
            : (
                name
              )}
        </li>
    )
}