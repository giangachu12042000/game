import React from 'react';

import './style.scss';

const Item =({property,data,type,setType1,setType2,setType3,change})=>{
    console.log('==chagne',type)

    return(
        <>
                <div className="container">
                    <div  style={{backgroundColor: property.background}}>
                        <h2>head</h2>
                        {
                            change === 1 && 
                            <div className="bottom-change">
                                <p onClick={()=>setType1('1')}>24</p>
                                <p onClick={()=>setType1('2')}>7</p>
                                <p onClick={()=>setType1('3')}>1</p>
                            </div>
                        }
                        {
                            change === 2 && 
                            <div className="bottom-change">
                                <p onClick={()=>setType2('4')}>4</p>
                                <p onClick={()=>setType2('5')}>7</p>
                                <p onClick={()=>setType2('6')}>1</p>
                            </div>
                        }
                        {
                            change ===3 && 
                            <div className="bottom-change">
                                <p onClick={()=>setType3('7')}>4</p>
                                <p onClick={()=>setType3('8')}>7</p>
                                <p onClick={()=>setType3('9')}>1</p>
                            </div>
                        }
                    </div>
                    <main>
                        {
                            data.map((item,key)=> {
                                if(type === item.type){
                                   return item.data.map((el,key)=>{
                                        return(
                                            <div key={key}>
                                            <p>{el.id}</p>
                                            <p>{el.name}</p>
                                        </div>
                                        )
                                    })
                                }
                            })
                        }
                    </main>
                </div>
        </>
    )
}

export default Item