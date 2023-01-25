import{ useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await res.json();
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate('/login');
    }
  };
  useEffect(() => {
    callAboutPage();
  },[]);
  return (
    <>
      <form method='GET'>
        <p>hlooo</p>
      </form>
    </>
  );
};

export default About;
