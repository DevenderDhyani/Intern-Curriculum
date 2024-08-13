// fetch is a modern JavaScript API used to make HTTP requests to servers. It is a more powerful and flexible replacement for the older XMLHttpRequest API and provides a more straightforward way to work with promises and handle responses.

// Basic Usage
// The fetch function is used to send HTTP requests and is based on Promises, making it easier to handle asynchronous operations.

const url = 'https://covid-19-statistics.p.rapidapi.com/regions';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3476b3e408mshb901083355c4e4bp1823bbjsn3528228bf7ff',
		'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
	}
};

async function getting(){
    try {
        //response will have the object which will be returned by the promise using fetch and resolved by await
        const response = await fetch(url, options);
        console.log(response)

        //first way to make data readable.
        const result = await response.text(); //return promise in form of string
        // console.log(JSON.parse(result))
        console.log(typeof response)//object
        console.log(typeof result)//string
        
            //second way to make data readable
            // const data = JSON.parse(response)

        //third way to make data readable.
        //const recieved = response.json()


        // const demo = document.getElementById("demo")
        // // demo.innerText = data.data[0].iso
        // const appending  = document.createElement("div")
        // result.data.forEach(element => {
        //     const p = document.createElement("p");
        //     p.innerText = "iso: "+element.iso+",         name: "+ element.name; 
        //     appending.appendChild(p);
        // });
        // demo.appendChild(appending)
        
        
    } catch (error) {
        console.error(error);
    }
}
getting()
