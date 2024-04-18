"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Post from "../_api/_post/post";
import PostCard from "../components/PostCard";

const PostPage = () => {
  const { fetchPost }: any = Post();
  const [feedData, setFeedData]: any = useState();

  useEffect(() => {
    try {
      fetchPost().then((response: any) => {
        if (!response?.error) {
          console.log(JSON.stringify(response));
          for (const post of response) {
            post.like= false
          }
          setFeedData(response);
        }
      });
    } catch (e: any) {
      console.log(e, "catch error");
    }
  }, []);

  const likeUnlikePost = (post:any)=>{
    console.log(post)
     const updated =  feedData.map((feed:any)=>{
      if(feed.id == post.id){
        return {...feed,like:post.like?false:true}
      }else{
         return feed
      }
    })
    setFeedData(updated)
  }
  console.log(feedData)

  return (
    <Container fluid="md" className="pd-2">
      <Row>
        {feedData?.map((post:any) => {
          return (<PostCard likeUnlikePost={likeUnlikePost} post={post} key={post.id}></PostCard>)
        })}
      </Row>
    </Container>
  );
};

export default PostPage;
