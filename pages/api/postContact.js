import * as fs from 'fs';
export default async function handler(req, res) {
    if (req.method === 'POST') {
        let data = await fs.promises.readdir("contactDetails");
        console.log(data);
        fs.promises.writeFile(`contactDetails/${data.length+1}.json`, JSON.stringify(req.body));
        res.status(200).json(req);
    } else {
      // Handle any other HTTP method
      res.status(200).json(["allBlogs"]);
    }
  }