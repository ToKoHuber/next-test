import React from "react";

const NarutoContent = {
  name: "Naruto",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, eveniet.",
  imgUrl: "https://cdn.staticneo.com/w/naruto/Nprofile2.jpg",
};

const SasukeContent = {
  name: "Sasuke",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, eveniet.",
  imgUrl:
    "https://image.tensorartassets.com/cdn-cgi/image/anim=false,plain=false,w=500,q=85/model_showcase/671003870501078399/1b5b8f17-ad27-4194-8cb6-cdb6910379e0.png",
};

export const NarutoCart = () => {
  return (
    <div>
      <h2>{NarutoContent.name}</h2>
      <p>{NarutoContent.description}</p>
      <img src={NarutoContent.imgUrl} alt="" />
    </div>
  );
};

export const SasukeCart = () => {
  return (
    <div>
      <h2>{SasukeContent.name}</h2>
      <p>{SasukeContent.description}</p>
      <img src={SasukeContent.imgUrl} alt="" />
    </div>
  );
};
