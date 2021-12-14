import * as React from "react";

exports.hendlers = async function hendlers() {
    return {
        statusCode: 200,
        body: { 
            mensage: "Hello word!" 
        }
        
    }
};