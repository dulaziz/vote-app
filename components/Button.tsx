interface Props {
  text: string;
  type?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function Button(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className={`bg-black text-white px-3 py-2 border-2 border-black hover:bg-zinc-800 hover:border-zinc-800 transition
    ${
      props.type === "secondary" &&
      "bg-white text-black hover:bg-black hover:text-white"
    }
    ${props.className}
    `}
    >
      {props.text}
    </button>
  );
}
