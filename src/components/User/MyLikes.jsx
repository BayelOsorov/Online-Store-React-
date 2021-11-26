import React, { useContext, useState } from 'react';
import { likesContext } from '../../context/LikesContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from '@mui/material';
import { useParams } from 'react-router';
const MyLikes = () => {
    const { addLike } = useContext(likesContext)
    const [like, setLike] = useState(false)
    const params = useParams()
    let user = JSON.parse(localStorage.getItem('users'))
    let likeCount = 0
    const handleLike = () => {
        setLike(!like)
        console.log(like);
        if (like) {
            likeCount++
        }
        console.log(likeCount);
        let newLike = {
            productId: params.id,
            owner: user.username,
            likeCount: likeCount
        }
        addLike(newLike)
    }
    return (
        <div>
            <Button onClick={handleLike}  >
                <FavoriteBorderIcon color={like ? '' : 'error'} />
            </Button>
        </div>
    );
};

export default MyLikes;