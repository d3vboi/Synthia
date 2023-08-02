const Carter =(query)=>{
    const data = {
        text: 'Hi',
        key: '4ea0ed16-4e05-49f7-b9fb-b4b5dc3dd9b2',
        user_id: 'TesterID0',
        speak: false
    };
      
      fetch('https://api.carterlabs.ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Input:', data.input);
          console.log('Output Text:', data.output.text);
      
          data.forced_behaviours.forEach(fb => {
            console.log('Forced Behaviour:', fb.name);
          });
          console.log(data.output.text)
          return(data.output.text)
        })
        .catch(error => {
          console.error(error);
        });
      




      
    //const req = fetch('https://api.carterlabs.ai/chat', {
    //    method: 'POST',
    //    headers: {
    //      'Content-Type': 'application/json',
    //    },
    //    body: JSON.stringify(data),
    //})
    //    .then(response => response.json())
    //    .then(data => {
    //      console.log(data)
    //      console.log('Input:', data.input);
    //      console.log('Output Text:', data.output.text);
    //      outp = data.output.text;
    //  
    //      data.forced_behaviours.forEach(fb => {
    //        console.log('Forced Behaviour:', fb.name);
    //      });
    //    })
    //    .catch(error => {
    //      console.error(error);
    //    });
    //    let outp = req.outp
    //    console.log(outp)
    //    return(outp)
          
    //return (request(query))
}
export default Carter;