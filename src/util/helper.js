const a=new Date()
console.log(a)



const b=new Date()
const month=b.getMonth()
console.log(month)


function getBatchinfo(batch,week,topic){
    console.log(`${batch},${week},${topic}`)
}
getBatchinfo("thorium",'W3D1','session of nodejs')


module.exports.k=a
module.exports.h=b
module.exports.priyanka=getBatchinfo