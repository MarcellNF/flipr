import {useParams} from "react-router-dom";
import useFlipr from "../hooks/useFlipr";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import {Box} from "@mui/material";
import Card from "@mui/material/Card";
import PostComment from "./PostComment";
import FliprComments from "./FliprComments";

type FliprDetailsProps = {
    username: string,
}

export default function FliprDetails(props: FliprDetailsProps) {
    
    const params = useParams();
    const id: string | undefined = params.id;
    const {flipr, postComment} = useFlipr(props.username, id);

    const date: Date = new Date(flipr.dateTime);
    const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month: string = months[date.getMonth()];
    const day: number = date.getDate();
    const year: number = date.getFullYear();

    return (
        <Box>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor: red[500]}} aria-label="flipr">
                            A
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={flipr.author}
                    subheader={month + " " + day + ", " + year}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {flipr.content}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                    <IconButton aria-label={"comment"}>
                        <CommentIcon/>
                    </IconButton>
                    {
                        props.username && props.username !== "anonymousUser" ?
                            <PostComment postComment={postComment}/> :
                            ""
                    }
                </CardActions>
            </Card>
            <FliprComments comments={flipr.comments} />
        </Box>
    );
}