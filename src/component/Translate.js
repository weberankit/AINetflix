import { useEffect } from 'react';

const Translate = () => {
  async function api() {
    const url = 'https://rapid-translate-multi-traduction.p.rapidapi.com/t';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '9b670f90b8msh17cdfaa605e1b15p1e5aadjsn5f813caa0f26',
        'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com',
      },
      body: JSON.stringify({
        from: 'en',
        to: 'bho',
        q: 'On October 13, 1972, Uruguayan Air Force Flight 571, chartered to take a rugby team to Chile, crashes into a glacier in the heart of the Andes.',
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(JSON.parse(result), 'result');
    } catch (error) {
      console.error(error, 'error');
    }
  }

  useEffect(() => {
    api();
  }, []);

  console.log('hi I am translator');
};

export default Translate;
