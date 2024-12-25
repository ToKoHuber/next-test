import style from "./button.module.css";

export default function Button(props) {
  return (
    <div>
      <div className={style.button}>
        <p>{props.number}</p>
      </div>
    </div>
  );
}
