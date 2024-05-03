import { Navbar } from "../../components/Navbar/Navbar";
import {Input} from "@nextui-org/input";
export default function Login(){
    return(
        <div>
       
        <div className="flex flex-row ">
            <div className="flex flex-col w-1/2 h-screen justify-center items-center border">
              
                    <h1 color="primary" className="font-bold ">Login</h1>
               
            </div>
            <div className="flex flex-col w-1/2 border border-primary h-screen justify-center items-center">
                <div className="flex flex-col w-1/3">
                    <Input type="email" label="Email" color="primary" />
                    <Input type="password" label="Password" color="primary" />
                </div>
                  
                
                
            </div>
        </div>
        </div>
    )
}