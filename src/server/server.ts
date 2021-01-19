import express = require('express');
import path = require('path');
import bodyParser = require('body-parser');
var morgan = require('morgan');
//import { Morgan } from 'morgan';

export default class Server {
  public app = express.application;
  public port: number;
  
  constructor(port: number){
    this.port = port;
    this.app = express();
    this.app.use(morgan('combined'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
  }

  static init(port: number){
    return new Server(port);
  }

  private publicFolder(){
    const publicPath = path.resolve(__dirname, '../public');
    this.app.use(express.static(publicPath));
  }

  start(callback: any){
    this.app.listen(this.port,callback);
    this.publicFolder();
  }

 }

