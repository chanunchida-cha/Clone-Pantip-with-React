import React, { useState } from "react";
import Header from "./component/Header";
import "./App.css";
import FormInput from "./component/FormInput";
import ShowPost from "./component/ShowPost";
import SinglePost from "./component/SinglePost";
import Comment from "./component/comment";
import { Route, Switch } from "react-router";
import ShowComment from "./component/ShowComment";
import { observer } from "mobx-react-lite";

const startNote = {
  auther: "yok",
  post: `Why Learn ReactJS? 
ReactJS offers graceful solutions to some of front-end programming’s
most persistent issues, allowing you to build dynamic and interactive
web apps with ease. It’s fast, scalable, flexible, powerful, and has a
robust developer community that’s rapidly growing. There’s never been a
better time to learn React.

Take-Away Skills:
You’ll develop a strong understanding of React’s most essential 
concepts: JSX, class and function components, props, state, lifecycle 
methods, and hooks. You’ll be able to combine these ideas in React’s
modular programming style.

Note on Prerequisites:
A strong foundation in JavaScript is a prerequisite for this course, 
as well as basic HTML`,
  topic: "react",
  id: 9999,
};

const App = observer(() => {
  const [items, setItems] = useState([startNote]);
  const [comment, setComment] = useState([]);
  console.log("items", items);

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      console.log("newItem", newItem);
      console.log("prevItem", prevItem);
      return [newItem, ...prevItem];
    });
  };

  const handleDelete = (id) => {
    const newBlogs = items.filter((item) => item.id !== id);
    setItems(newBlogs);
  };

  const commentDelete = (id) => {
    const newBlogs = comment.filter((comment) => comment.id !== id);
    setComment(newBlogs);
  };

  // const editPost = (obj, index) => {
  //   let tempPost = items;
  //   tempPost[index] = obj;
  //   setItems(tempPost);
  // };

  const onAddNewComment = (newComment) => {
    setComment((prevComment) => {
      console.log("newComment", newComment);
      console.log("prevComment", prevComment);
      return [newComment, ...prevComment];
    });
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/post" exact>
          <FormInput onAddItem={onAddNewItem} />
          <ShowPost
            items={items}
            handleDelete={handleDelete}
            // editPost={editPost}
          />
        </Route>
        <Route path="/" exact>
          <ShowPost
            items={items}
            handleDelete={handleDelete}
            // editPost={editPost}
          />
        </Route>
        <Route
          path="/post/:id"
          children={(props) => {
            const itemid = props.match.params.id;
            const post = items.find(
              (findingItem) => findingItem.id === Number(itemid)
            );

            console.log("post111", post);
            console.log("");
            if (!post) {
              return <div>404 Not Found</div>;
            }
            return (
              <div>
                <SinglePost post={post} />
                <Comment onAddNewComment={onAddNewComment} post={post} />

                <ShowComment
                  comment={comment.filter((comment) => {
                    return comment.postId === Number(itemid);
                  })}
                  commentDelete={commentDelete}
                />
              </div>
            );
          }}
        ></Route>
      </Switch>
    </div>
  );
});
export default App;
