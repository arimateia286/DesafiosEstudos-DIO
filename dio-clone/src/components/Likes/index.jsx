import { useState, useMemo } from "react";
import { PiThumbsUp, PiThumbsUpFill, PiThumbsDown, PiThumbsDownFill } from "react-icons/pi";
import { BiComment } from "react-icons/bi";
import { LikesContainer } from "./styles";

const Likes = () => {
    const initialValues = useMemo(() => ({
        likes: Math.floor(Math.random() * 500),
        dislikes: Math.floor(Math.random() * 10),
        comments: Math.floor(Math.random() * 100)
    }), []);

    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
        if (isDisliked) setIsDisliked(false);
    };

    const handleDislike = () => {
        setIsDisliked(!isDisliked);
        if (isLiked) setIsLiked(false);
    };

    return (
        <LikesContainer>
            <button onClick={handleLike}>
                {isLiked ? <PiThumbsUpFill /> : <PiThumbsUp />}
                {isLiked ? initialValues.likes + 1 : initialValues.likes}
            </button>

            <button onClick={handleDislike}>
                {isDisliked ? <PiThumbsDownFill /> : <PiThumbsDown />}
                {isDisliked ? initialValues.dislikes + 1 : initialValues.dislikes}
            </button>

            <button>
                <BiComment /> {initialValues.comments}
            </button>
        </LikesContainer>
    );
};

export { Likes };