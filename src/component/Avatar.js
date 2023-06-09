import React, { useState } from "react";
import AvatarList from "./AvatarList";

const Avatar = () => {

    const [myName, setMyName] = useState("Welcome to Avatar World");

    const changeName =()=>{
        let val = myName;
        
        if(val==="Welcome to Avatar World"){
            setMyName("Subscribe to My Channel Thapa Technical")
        }else{
            setMyName("Welcome to Avatar World")
        }
    }

    const avatarListarray = [
        {
            id:1,
            image:'pankaj',
            name:'Pankaj',
            work:'Web Developer'
        },
        {   
            id:2,
            image:'Sandeep',
            name:'Sandeep',
            work:'BackEnd Developer'
        },
        {   
            id:3,
            image:'Jatin Rao',
            name:'Jatin Rao',
            work:'Digital Marketing'
        },
        {   
            id:4,
            image:'deepak',
            name:'Deepak',
            work:'Web designer'
        },
        {   
            id:5,
            image:'Pankaj Yadav',
            name:'Pankaj Yadav',
            work:'ForntEnd Developer'
        },
        {   
            id:6,
            image:'Ravi Rao',
            name:'Ravi Rao',
            work:'Full Stacker'
        },
        {   
            id:7,
            image:'Parveen',
            name:'Parveen',
            work:'Manager'
        },
        {   
            id:8,
            image:'Abhishek',
            name:'Abhishek',
            work:'Amazon Web Service'
        },
        {
            id:9,
            image:'Lavlit',
            name:'Lavlit',
            work:'Data base'
        },
        {   
            id:10,
            image:'Suresh',
            name:'Suresh',
            work:'Python'
        },
        {   
            id:11,
            image:'Ashish',
            name:'Ashish',
            work:'Java Developer'
        },
        {   
            id:12,
            image:'Pardeep',
            name:'Pardeep',
            work:'Word Press'
        },
        {   
            id:13,
            image:'Akshat',
            name:'Akshat',
            work:'Graphic Designer'
        },
        {   
            id:14,
            image:'Keshav',
            name:'Keshav',
            work:'React Developer'
        },
        {   
            id:15,
            image:'Ashutosh',
            name:'Ashutosh',
            work:'PHP'
        },
        {   
            id:16,
            image:'Vishal',
            name:'Vishal',
            work:'Angular'
        },
    ]

    const arrayAvatarCard = avatarListarray.map( (avatarWord, i) =>{
        return(
            <>
                <AvatarList key = {i} id={avatarListarray[i].id}
                                    image={avatarListarray[i].image} 
                                    name={avatarListarray[i].name} 
                                    work={avatarListarray[i].work}/>
            </>
        )
    } );

    return(
        <>
            <div id="avatar">
                <div className="mainpage" data-aos="fade-up">
                    <h1>{myName}</h1>
                    <div className="arrayAvatar">
                        {arrayAvatarCard}
                    </div>
                    <div data-aos="fade-down">
                        <button className="subscribe" onClick={changeName}>Subscribe</button>
                    </div>
                </div>                
            </div>                        
        </>
    )
}

export default Avatar;