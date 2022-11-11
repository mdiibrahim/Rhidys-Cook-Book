import React from 'react';
import { useTitle } from '../TitleHooks/useTitle';

const Blogs = () => {
    //for title
    useTitle('Our-Blogs')
    return (
        <div className='mt-24'>
            <h1 className='text-center text-5xl mb-8'>Our Blogs: </h1>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Difference between SQL and NoSQL
                </div>
                <div className="collapse-content">
                    <p>SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database. <br /> <br />
                        Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases. <br /> <br />
                        SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br /> <br />
                        SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data. <br /> <br />
                        Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is JWT, and how does it work?

                </div>
                <div className="collapse-content">
                    <b>JWT:</b> <br />
                    <p>JSON Web Token is an open industry standard used to share information between two entities, usually a client (like your app's frontend) and a server (your app's backend).
                        They contain JSON objects which have the information that needs to be shared. Each JWT is also signed using cryptography (hashing) to ensure that the JSON contents (also known as JWT claims) cannot be altered by the client or a malicious party.</p> <br /> 
                    <b>It's working procedure:</b> <br />
                    <p>User sign-in using username and password or google/facebook or any others. <br />
                        Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. <br />
                        User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. <br />
                        Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is the difference between javascript and NodeJS?

                </div>
                <div className="collapse-content">
                    <b>JavaScript: </b> <br />
                    <p>Javascript is a programming language that is used for writing scripts on the website. Javascript can only be run in the browsers. Javascript is used in frontend development.  It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p> 
                    <br /><b>Node Js:</b> <br />
                    <p>NodeJS is a Javascript runtime environment. V8 is the Javascript engine inside of node.js that parses and runs Javascript.  Nodejs is used in server-side development. Nodejs comes with a lot of modules and mostly used in web development. </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  How does NodeJS handle multiple requests at the same time?
  </div>
  <div className="collapse-content"> 
    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
  </div>
</div>
        </div>
    );
};

export default Blogs;