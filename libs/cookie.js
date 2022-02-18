import { serialize } from "cookie";

function cookie(res, name, value, opts={}){
  const valueToString = typeof value === Object ? JSON.stringify(value) : String(value)
  if('maxAge' in opts){
    options.expires = new Date(Date.now() + options.maxAge)
    options.maxAge /=1000 
  }

  res.setHeader('Set-Cookie', serialize(name,String(valueToString), opts))
}

const cookies = (handler)=>(req,res)=>{
  res.cookie = (name,value,opts) => cookie(res,name,value,opts)
  return handler(req,res)
}
export default cookies