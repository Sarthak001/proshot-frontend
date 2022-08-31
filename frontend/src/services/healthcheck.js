

const HealthCheck = async ()=>{
    return {
        status:200,
        backend:"online",
        database:"online"
    }
}



export {HealthCheck};