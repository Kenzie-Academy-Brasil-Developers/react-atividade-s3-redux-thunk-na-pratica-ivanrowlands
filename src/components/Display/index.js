import { useSelector } from "react-redux";

export default function Display() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <div style={{ color: "black" }}>{user.name}</div>
      {user.comments.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#6281B9",
            maxWidth: "534px",
            margin: "20px auto -15px auto",
            borderRadius: "8px",
          }}
        >
          {item}
        </div>
      ))}
    </>
  );
}
