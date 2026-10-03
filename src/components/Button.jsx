import "./Button.css";

export default function Button({ label, classValue }) {
  return (
    <button className={"btn-base " + classValue}>
      <p>{label}</p>
    </button>
  );
}
