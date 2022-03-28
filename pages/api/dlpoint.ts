import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const dataURL = req.body['dataURL']
        res.send(`
            <h1>Downloaded!</h1>
            <h2>(Go back to LINE)</h2>
            <p>${dataURL}</p>
        `)
    } 
}