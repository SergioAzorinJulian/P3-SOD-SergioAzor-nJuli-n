const Acquire_URL="http://localhost:3001/data"
const Predict_URL="http://localhost:3002/predict"
async function Aacquire(){
    const headers={"Content-Type": "application/json"};
    const body={}
    const response=await fetch(Acquire_URL,{
        method:"POST",
        headers:headers,
        body:JSON.stringify(body)
    });
    //if (!response.ok) {
        //throw new Error(`OrchestatorErrorA:${response.status}`);
    //}
    
    const json = await response.json();
   
    
    console.log("Adquirido de acquire: ",json);


    return json;
}



async function Apredict(features,dataId){
    const headers={"Content-Type":"application/json"};
    
    const body={
        features,
        meta:{
            featureCount:7,
            dataId,//
            source:"orchestator"
        }
    }

    const response=await fetch(Predict_URL,{
        method:"POST",
        headers:headers,
        body: JSON.stringify(body)
    })
    //if (!response.ok) {
        //throw new Error(`OrchestatorResponseErrorP:${response.status}`);
    //}

    const json = await response.json();
    


    console.log(json);
    return json; 
}



module.exports={Aacquire,Apredict}



