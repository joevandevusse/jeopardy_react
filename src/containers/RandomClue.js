import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const NewPage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jservice.io/api/random');
        setData(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h4">This is a new page!</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <Typography variant="h5">Category: {data.category?.title}</Typography>
          <Typography variant="body1">Question: {data.question}</Typography>
          <Typography variant="body2">Answer: {data.answer}</Typography>
        </div>
      )}
    </div>
  );
};

export default NewPage;
