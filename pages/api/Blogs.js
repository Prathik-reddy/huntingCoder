// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogData");
  let myfile;
  let allBlogs=[]
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    myfile = await fs.promises.readFile(("blogData/" + item),"utf-8");
    console.log(myfile);
    allBlogs.push(JSON.parse(myfile))
  }
  res.status(200).json(allBlogs);
}
