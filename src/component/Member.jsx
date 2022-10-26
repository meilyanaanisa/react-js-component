const Member = (props) => {
    //destructure props agar memudah memanggil props menjadi ({name, age})
    // untuk mengetahui isi props console.log(props) 
    return(
    <div className="container">
        {/* <div className='com-profile'>
        <h1>Profile</h1>
        <div className="picture-profile">
        <img src="https://ps.w.org/metronet-profile-picture/assets/icon-128x128.png?rev=2464419" alt="" className='profil-picture'/>
        <div className="ket-profile">
        <h3>{name}</h3>
        <p>{age}</p>
        <p>{info}</p>
        </div>
        </div>
        </div> */}

    <div className='com-profile'>
        <h1>Profile</h1>
            <div className="picture-profile">
                <img src="https://ps.w.org/metronet-profile-picture/assets/icon-128x128.png?rev=2464419" alt="" className='profil-picture'/>
            <div className="ket-profile">
                <h3>{props.name}</h3>
                 <p>{props.age}</p>
                <p>{props.info}</p>
            </div>
            </div>
        </div>
    </div>
    );
}

export default Member;