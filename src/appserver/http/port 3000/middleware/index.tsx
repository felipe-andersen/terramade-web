import * as React from "react";
import Express, {Request} from "express";
import { PostProps } from "../../../../storagesInterfaces/posts";


export const app = Express()

export const ports = {
  default: '3003',
}

export const _dirname = "https://www.wemade.com";

export const paths = {
  default: 'www.wemade.com',
  pathRoot: `${_dirname}/`,
  home: `${_dirname}/feed`,
}


//-----------------------------------------------
app.listen(ports.default, () => {
  console.log(`App listening on port ${ports.default}`)
})

//-----------------------------------------------
export const myMiddleware: Express.ErrorRequestHandler = (err, req, res, next) => {
  //req.requestTime = Date.now();
  res.send('')
  next();
};

//-----------------------------------------------
app.use(myMiddleware)

//-----------------------------------------------
app.use(myMiddleware)
app.get(paths.pathRoot, 
  function (req, res, next){
    console.log('Request URL:', req.originalUrl);
    next()
  },  
  function (req, res, next) {
    console.log('Request Type:', req.method);
    next()
  }
);

app.get(paths.home, (req, res, next) => {});
app.post(paths.home, (req, res, next) => {});


app.get('/user/:id', function (req, res, next) {
  res.end(req.params.id);
});

app.get('/user/:id', function (req, res, next) {
  if (/*req.params.id == 0*/ 1 == 1) next('route');
  else next(); //
}, function (req, res, next) {
  res.render('regular');
});

app.get('/user/:id', function (req, res, next) {
  res.render('special');
});

let router = Express.Router();
 
  





