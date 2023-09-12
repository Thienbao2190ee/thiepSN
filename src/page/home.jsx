import { useEffect, useState } from "react";
// import { useNavigate, useNavigation } from "react-router-dom";

function Home({nextPage}) {
    const [showTask ,setShowTask] = useState(false)
    const [name,setName] = useState('')
    // const navigates = useNavigate()

    useEffect(()=>{
        const currentURL = new URL(window.location.href);
    const nameFriend = currentURL.searchParams.get('p');
    setName(nameFriend);

    },[])
    return ( <>
    <div className="relative w-full h-screen overflow-hidden ">
        {showTask &&
            <div className="absolute w-full animate_tranlay">
                <div style={{
                    backgroundImage : "url(./nenthu.png)"
                }} className="card w-[90%] mx-auto shadow-xl bg-center bg-cover">
                    <div className="pl-3 p-3 mt-[150px] text-rose-900 font-bold">
                        <p>Cùng ăn bánh và thổi nến nhé !</p>
                    </div>
                    <div className="pl-3 w-[80%] h-20 bg-center bg-cover" style={{
                        backgroundImage :'url(./sinhnhat.png)'
                    }}>
                        {/* <img src="/thiepSN/sinhnhat.png" alt="" /> */}
                    </div>
                    
                    <div className="card-body text-center">
                        <h2 className="card-title text-black">Vào lúc 6h ⏰</h2>
                        <p className="font-bold text-black">Chủ nhật ngày 24 tháng 9 📌📌</p>
                        <p className="font-bold text-black">Địa chỉ tại Nhà me 🤧🤧</p>
                        <div className="card-actions flex justify-end">
                            <button 
                                className="buttonNext" 
                                // onClick={()=> navigates('/map')} 
                                onClick={()=> nextPage()}
                                style={{outline:'none'}}
                            >
                                Đường đi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        }
        <div className="absolute w-full top-[10%]">
            <div className="card w-[90%] mx-auto bg-white shadow-xl">
                <figure className="pt-5 bg-cover h-[37vh] bg-center" style={{
                    backgroundImage :'url(./thupng.png)'
                }}>
                    {/* <img src="/thiepSN/thupng.png"  alt="Shoes" className="rounded-xl w-[80%]" /> */}
                </figure>
                <div className="card-body items-center text-center" style={{paddingTop:0}}>
                    <h2 className="card-title text-black font-bold">Thiệp mời <br/>tiệc sinh nhật</h2>
                    <p>Mời <text className="text-rose-500">{name}</text>, đến tham dự cùng với Thiên Bảo</p>
                    <div className="card-actions">
                    {/* <button className="btn btn-primary " onClick={()=> setShowTask(true)}  style={{outline:'none'}}>Tham gia</button>
                     */}
                     <button onClick={()=> setShowTask(true)} className="buttonNext">
                        Tham gia
                    </button>   
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    </> );
}

export default Home;