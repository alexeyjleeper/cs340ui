import { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [diagnosticData, setDiagnosticData] = useState([]);

  // Define a function to fetch diagnostic data from the API
  const fetchDiagnosticData = async () => {
    try {
      // Construct the URL for the API call
      const URL = import.meta.env.VITE_API_URL + 'diagnostic';
      // Use Axios to make the GET request
      const response = await axios.get(URL);
      // Update state with the response data
      setDiagnosticData(response.data);
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error('Error fetching diagnostic data:', error);
      alert('Error fetching diagnostic data from the server.');
    }
  };
  useEffect(() => {
    fetchDiagnosticData();
  }, []);
  let content;
  if (diagnosticData === null) {
    content = <p>Loading diagnostic data...</p>; // Show while data is null
  } else if (diagnosticData.length === 0) {
    content = <p>No diagnostic data found.</p>; // Show if data is an empty array
  } else {
    content = <pre>{JSON.stringify(diagnosticData, null, 2)}</pre>;
  }
  return (
    <>
      <h2>Diagnostic Data</h2>
      {content}
      <h2>Welcome to the home page</h2>
      <p>Use the links above to navigate the website
      </p>
    </>
  );
}

export default HomePage;