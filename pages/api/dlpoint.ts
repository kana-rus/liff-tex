import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const dataURL = req.body['dataURL']
        res.send(`
            <h1>Downloaded!</h1>
            <h2>(Go back to LINE)</h2>
            <a download="KaTeX.png" href=${dataURL}></a>
            <script>
                window.onload = function() {
                    document.getElementsByTagName("a")[0].click()
                }
            </script>
        `)
    } 
}