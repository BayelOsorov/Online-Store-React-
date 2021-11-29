import React, { useContext, useEffect, useState } from 'react';
import { likesContext } from '../../context/LikesContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useParams } from 'react-router';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
const MyLikes = () => {
    const { addLike, getLikes, likes, changeLike, getLikesByUser, userLikes } = useContext(likesContext)
    const [like, setLike] = useState(false)
    const params = useParams()
    let user = JSON.parse(localStorage.getItem('users'))
    useEffect(() => {
        getLikes(params.id)
        getLikesByUser(user.username, params.id)

    }, [])

    let likeCount = 0
    let isLiked
    if (likes) {
        likes.forEach((item) => {
            if (item.owner === user.username) {
                isLiked = item.likeCount
            }
        })
    }
    const handleLike = () => {
        if (likes) {
            setLike(!like)
            if (!like) {
                likeCount++
            }
            let tempId, tempObj = false
            likes.forEach((item) => {
                if (item.owner === user.username) {
                    tempObj = true
                    tempId = item.id
                }
            })
            if (!tempObj) {
                let newLike = {
                    productId: params.id,
                    owner: user.username,
                    likeCount: likeCount
                }
                addLike(newLike)
            } else {

                changeLike(params.id, user.username, likeCount, tempId)
            }
        }
    }
    return (
        <>
            {
                likes ? (

                    <Button onClick={handleLike} >
                        {/* <FavoriteBorderIcon /> */}
                        {
                            isLiked == 0 ? (
                                <FavoriteBorderIcon style={{ color: 'black' }} />

                            ) : (
                                <FavoriteIcon color='error' />
                            )
                        }
                    </Button >
                ) : (null)
            }
        </>
    );
};

export default MyLikes;