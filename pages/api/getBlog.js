import * as fs from 'fs';
//http://localhost:3000/api/getBlog?slug=howToLearnFlask
export default function handler(req, res) {
    console.log(req.query.slug);
    fs.readFile(`blogData/${req.query.slug}.json`,"utf-8",(err,data) => {
    if(err){
    res.status(500).json({err:"No Such Blog Found"});
    }
    console.log(req.query.slug);
    res.status(200).json(JSON.parse(data));
  })
}
