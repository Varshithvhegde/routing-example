export default function Name({ params }: { params: { name: string } }) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.heading}>Hello, {params.name}!</h1>
        </div>
      </div>
    );
  }
  
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh',
      backgroundColor: '#f0f0f5',  // light background color
    },
    card: {
      padding: '2rem 3rem',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // subtle shadow for depth
      textAlign: 'center',
    },
    heading: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#333',
      margin: 0,
    },
  };
  