import { useState, useEffect } from "react";

export default function GetMarkdown(fileName) {
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`../markdown/${fileName}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res));
      })
      .catch((err) => console.log(err));
  });

  return post;
}
