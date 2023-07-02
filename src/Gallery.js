import React,{useState} from 'react';
import './gallery.css';
import CloseIcon from '@material-ui/icons/Close';

const Gallery = () => {
    
    let data =[
        {
            id: 1,
            imgSrc: "https://images.unsplash.com/photo-1682687982049-b3d433368cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        },
        {
            id: 2,
            imgSrc: "https://images.unsplash.com/photo-1688149571284-ba299c1a247e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1334&q=80",
        },
        {
            id: 3,
            imgSrc: "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=442&q=80",
        },
        {
            id: 4,
            imgSrc: "https://images.unsplash.com/photo-1688152853061-06bd109e6c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        },
        {
            id: 5,
            imgSrc: "https://images.unsplash.com/photo-1688202408403-b0053d377d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        },
        {
            id: 6,
            imgSrc: "https://images.unsplash.com/photo-1688166815223-594655d6157b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        },
        {
            id: 7,
            imgSrc: "https://images.unsplash.com/photo-1688142202243-e218ad203952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        },
        {
            id: 8,
            imgSrc: "https://images.unsplash.com/photo-1682685796775-020fd5dcd7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        },
        {
            id: 9,
            imgSrc: "https://images.unsplash.com/photo-1687981576001-1417d139c229?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        },
        {
            id: 10,
            imgSrc: "https://images.unsplash.com/photo-1687579521416-bcbec263fb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        },
        {
            id: 11,
            imgSrc: "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        {
            id: 12,
            imgSrc: "https://images.unsplash.com/photo-1687875716205-074c2869ac89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        }
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return(
        <>
        <div className={model? "model open":"model"}>
            <img src={tempimgSrc} alt="Image"/>
            <CloseIcon onClick={() => setModel(false)} />
        </div>
        <h1 style={{textAlign: 'center'}}>Gallery</h1>
        <div className="gallery">
            {
                data.map((item, index)=>{
                    return(
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{width: '100%'}}/>
                        </div>
                    )
                })
            }
        </div>
        </>
    );
};

export default Gallery;