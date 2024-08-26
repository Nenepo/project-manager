function FormInput({ htmlFor, label, type = "text", active, onFocus, ...props }) {
  const inputClassNames = `bg-gray-200 p-2 text-sm outline-none text-green-950 w-full border-b-2 ${
    active ? "border-gray-600" : "border-gray-300"
  }`;
  return (
    <div className="w-full">
      <label htmlFor={htmlFor } className="text-green-950 text-s font-bold uppercase">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className={inputClassNames}
          id={htmlFor }
          rows="auto"
          onFocus={onFocus}
          {...props}
        ></textarea>
      ) : (
        <input
          className={inputClassNames}
          id={htmlFor }
          type={type}
          onFocus={onFocus}
          {...props}
        />
      )}
    </div>
  );
}

export default FormInput;