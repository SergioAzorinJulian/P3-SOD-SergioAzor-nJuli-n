const {Aacquire,Apredict}=require("../services/orchestatorService")

function health(req,res){
    res.json({
    status: "ok",
    service: "orchestator"
  });
}


async function run(req,res){
    try{
        datos_acquire=await Aacquire();
        console.log("datos_acquire ",datos_acquire)
        datos_predict=await Apredict(datos_acquire.features,datos_acquire.dataId);
        console.log("datos_predict ",datos_predict)
        res.status(201).json({
            dataId:datos_acquire.dataId,
            predictionId:datos_predict.predictionId,
            prediction:datos_predict.prediction,
            timestamp:datos_predict.timestamp
        })
    }catch (err) {
    console.error("Error en /orchestator:", err);
    res.status(500).json({ error: "Internal error" });
    }
}

module.exports={
    health,
    run
}