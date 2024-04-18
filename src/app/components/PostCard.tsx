import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const PostCard = (props: any) => {
  const { post,likeUnlikePost } = props;
  return (
    <Col className=" d-flex justify-content-center">
      {/* <img src={post.image} alt="" /> */}
      <div className="pd-2 w-100">

      <Card className="bg-grid-color">
        <Card.Img className="w-100" variant="top" src={post.image} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
           {post.description}
          </Card.Text>
          <Button onClick={()=>{likeUnlikePost(post)}} variant="primary">{`${post.like?'Un Like':'Like'}`}</Button>
        </Card.Body>
      </Card>
      </div>
    </Col>
  );
};

export default PostCard;
