import supertest from 'supertest';
const request = supertest('https://gorest.co.in/public/v2/');

import { expect } from 'chai';
import { response } from 'express';

const TOKEN = 'd30371af088a600eaf1780412da55a9a3f96d5aa7d0e540371ddb0e76de1faea';


describe('Users', () => {
    it('GET/users', (done) => {
      request
           .get(`users?access-token=${TOKEN}`).end((err,res)=>{
            expect(res.body.data).to.not.be.null;
            done();
           });
    });

    it('GET/users start with', () => {
            request
                  .get(`users?access-token=${TOKEN}`).end((err,res)=>{
                  var data = res.body.filter(function(x) { return x !== null }); 
                  for (var i=0; i<11; i++)
                  {  
                    if (typeof data[i] !== 'undefined' && data[i] !== null) {
                        // access obj properties here
                      
                    { if (data[i].name.startsWith("C"))
                  console.log(data[i].name);
                }}
            }

        })
        
                
    })    
        

        it('GET/listofusers', () => {
            request
                 .get(`users?access-token=${TOKEN}`).end((err,res)=>{
                  console.log(err);
                  console.log(res.body)
                 });
          });

        

    })
