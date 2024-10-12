"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NamePage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    router.push("/input/" + name);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Enter Your Name</h1>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Type your name"
        style={styles.input}
      />
      <button type="button" onClick={handleSubmit} style={styles.button}>
        Submit
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  heading: {
    marginBottom: "1rem",
    fontSize: "24px",
    color: "#333",
  },
  input: {
    padding: "0.5rem 1rem",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "200px",
    marginBottom: "1rem",
  },
  button: {
    padding: "0.5rem 1rem",
    fontSize: "16px",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default NamePage;
