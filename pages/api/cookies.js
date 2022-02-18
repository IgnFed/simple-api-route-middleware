// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import cookies from "../../libs/cookie"
import { NextApiRequest, NextApiResponse } from "next"

/**
 * 
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 
 */

function handler(req, res) {

  res.cookie('Next.js', 'api-middleware!')
  console.log(res.getHeaderNames())
  res.end(res.getHeader('Set-Cookie'))
}

export default cookies(handler)
