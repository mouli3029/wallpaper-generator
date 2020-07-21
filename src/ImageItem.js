import React,{useState} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./ImageItem.css"
import Dialog from "./Dialog"
function ImageItem({description,likes,image_src,link}) {
    const[isOpen,setIsOpen]=useState(false);
    const downloadImage = (e)=>{
        e.preventDefault();
        console.log(link)
        setIsOpen(true)      
    }
    return (
        <div className="imageitem">
            <Card className="card" variant="outlined">
                <CardContent>
                    <img
                     className="imageitem__image"
                     src={image_src}
                     alt="image"
                     onClick={downloadImage}        
                    />
                    <Typography className="imageitem__description" color="textPrimary" gutterBottom>
                        {description}🔥🔥🔥🔥
                    </Typography>
                    <Typography className="imageitem__likes" color="textSecondary">
                       Likes :{likes}👍🏻
                    </Typography>
                </CardContent>
            </Card>
            <Dialog isOpen={isOpen} link={link} onClose={(e)=>setIsOpen(false)}/>     
        </div>
    )
}
export default ImageItem
